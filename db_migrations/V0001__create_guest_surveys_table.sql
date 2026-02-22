CREATE TABLE guest_surveys (
    id SERIAL PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    will_attend BOOLEAN NOT NULL,
    food_preference VARCHAR(50),
    drinks TEXT[],
    allergies TEXT,
    created_at TIMESTAMP DEFAULT NOW()
);