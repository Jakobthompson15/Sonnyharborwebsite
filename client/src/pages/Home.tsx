import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Mission from "@/components/sections/Mission";
import Services from "@/components/sections/Services";
import Founders from "@/components/sections/Founders";
import LeadForm from "@/components/sections/LeadForm";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Mission />
        <Services />
        <Founders />
        <LeadForm />
      </main>
      <Footer />
    </div>
  );
}
