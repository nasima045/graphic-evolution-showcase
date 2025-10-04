import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import WhyUs from "@/components/WhyUs";
import Pricing from "@/components/Pricing";
import FreeTrial from "@/components/FreeTrial";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

const Index = () => {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <ServicesSection />
        <WhyUs />
        <Pricing />
        <FreeTrial />
      </main>
      <Footer />
    </>
  );
};

export default Index;
