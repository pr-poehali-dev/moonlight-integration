import json
import os
import psycopg2

CORS_HEADERS = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Authorization',
    'Access-Control-Max-Age': '86400',
}

def get_connection():
    return psycopg2.connect(os.environ['DATABASE_URL'])

def handler(event, context):
    """Анкета гостя — сохранение и получение ответов, авторизация админа"""
    if event.get('httpMethod') == 'OPTIONS':
        return {'statusCode': 200, 'headers': CORS_HEADERS, 'body': ''}

    method = event.get('httpMethod', 'GET')
    params = event.get('queryStringParameters') or {}
    action = params.get('action', '')
    schema = os.environ.get('MAIN_DB_SCHEMA', 'public')

    if method == 'POST' and action == 'submit':
        return handle_submit(event, schema)
    elif method == 'POST' and action == 'login':
        return handle_admin_login(event)
    elif method == 'GET' and action == 'surveys':
        return handle_admin_surveys(event, schema)
    else:
        return response(200, {'status': 'ok'})

def handle_submit(event, schema):
    body = json.loads(event.get('body', '{}'))
    full_name = body.get('full_name', '').strip()
    will_attend = body.get('will_attend')
    food_preference = body.get('food_preference', '')
    drinks = body.get('drinks', [])
    allergies = body.get('allergies', '').strip()

    if not full_name or will_attend is None:
        return response(400, {'error': 'Имя и статус присутствия обязательны'})

    conn = get_connection()
    cur = conn.cursor()
    cur.execute(
        "INSERT INTO {}.guest_surveys (full_name, will_attend, food_preference, drinks, allergies) "
        "VALUES ('{}', {}, '{}', ARRAY[{}]::text[], '{}')".format(
            schema,
            full_name.replace("'", "''"),
            'true' if will_attend else 'false',
            food_preference.replace("'", "''") if food_preference else '',
            ','.join("'{}'".format(d.replace("'", "''")) for d in drinks) if drinks else '',
            allergies.replace("'", "''") if allergies else '',
        )
    )
    conn.commit()
    cur.close()
    conn.close()

    return response(200, {'success': True, 'message': 'Анкета сохранена'})

def handle_admin_login(event):
    body = json.loads(event.get('body', '{}'))
    username = body.get('username', '')
    password = body.get('password', '')

    admin_user = os.environ.get('ADMIN_USERNAME', '')
    admin_pass = os.environ.get('ADMIN_PASSWORD', '')

    if username == admin_user and password == admin_pass:
        import hashlib
        import time
        token = hashlib.sha256(f"{admin_user}{admin_pass}{time.time()}".encode()).hexdigest()
        return response(200, {'success': True, 'token': token})
    else:
        return response(401, {'error': 'Неверный логин или пароль'})

def handle_admin_surveys(event, schema):
    auth = event.get('headers', {}).get('X-Authorization', '') or event.get('headers', {}).get('x-authorization', '')
    if not auth:
        return response(401, {'error': 'Требуется авторизация'})

    conn = get_connection()
    cur = conn.cursor()
    cur.execute("SELECT id, full_name, will_attend, food_preference, drinks, allergies, created_at FROM {}.guest_surveys ORDER BY created_at DESC".format(schema))
    rows = cur.fetchall()
    cur.close()
    conn.close()

    surveys = []
    for row in rows:
        surveys.append({
            'id': row[0],
            'full_name': row[1],
            'will_attend': row[2],
            'food_preference': row[3],
            'drinks': row[4] if row[4] else [],
            'allergies': row[5],
            'created_at': row[6].isoformat() if row[6] else None,
        })

    total = len(surveys)
    attending = sum(1 for s in surveys if s['will_attend'])
    not_attending = total - attending

    food_stats = {}
    drink_stats = {}
    for s in surveys:
        if s['will_attend']:
            fp = s['food_preference'] or 'Не указано'
            food_stats[fp] = food_stats.get(fp, 0) + 1
            for d in s['drinks']:
                drink_stats[d] = drink_stats.get(d, 0) + 1

    return response(200, {
        'surveys': surveys,
        'stats': {
            'total': total,
            'attending': attending,
            'not_attending': not_attending,
            'food': food_stats,
            'drinks': drink_stats,
        }
    })

def response(status, body):
    return {
        'statusCode': status,
        'headers': {**CORS_HEADERS, 'Content-Type': 'application/json'},
        'body': json.dumps(body, ensure_ascii=False, default=str),
    }