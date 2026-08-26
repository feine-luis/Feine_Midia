import { Differentials } from "@/components/landing/Differentials";
import { Faq } from "@/components/landing/Faq";
import { Footer } from "@/components/landing/Footer";
import { Hero } from "@/components/landing/Hero";
import { Investment } from "@/components/landing/Investment";
import { Method } from "@/components/landing/Method";
import { Navbar } from "@/components/landing/Navbar";
import { Problem } from "@/components/landing/Problem";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Method />
        <Differentials />
        <Investment />
        <Faq />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
