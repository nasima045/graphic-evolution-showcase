import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import PricingSection from "@/components/Pricing";

const Pricing = () => {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main className="min-h-screen pt-20">
        <PricingSection />
      </main>
      <Footer />
    </>
  );
};

export default Pricing;
