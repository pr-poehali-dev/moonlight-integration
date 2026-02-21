import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import Promo from "@/components/Promo";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main
      className="min-h-screen mx-auto relative"
      style={{ maxWidth: "480px", backgroundColor: "#f7f5f2", boxShadow: "0 0 60px rgba(0,0,0,0.08)" }}
    >
      <Header />
      <Hero />
      <Featured />
      <Promo />
      <Footer />
    </main>
  );
};

export default Index;