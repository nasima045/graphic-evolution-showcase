import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import WhyUs from "@/components/WhyUs";
import FreeTrial from "@/components/FreeTrial";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import SlidingLogos from "@/components/SlidingLogos";
import SlidingReviews from "@/components/SlidingReviews";

const Index = () => {
  const reviews = [
    {
      name: "Sarah Johnson",
      role: "E-commerce Owner",
      rating: 5,
      text: "GraphicsPro transformed our product images! Sales increased by 40% after using their services.",
    },
    {
      name: "Michael Chen",
      role: "Fashion Photographer",
      rating: 5,
      text: "The attention to detail is incredible. They consistently deliver professional results on time.",
    },
    {
      name: "Emma Davis",
      role: "Marketing Director",
      rating: 5,
      text: "Best image editing service I've used. Fast turnaround and excellent quality every time.",
    },
    {
      name: "James Wilson",
      role: "Product Manager",
      rating: 5,
      text: "Professional service with great communication. They understand exactly what we need.",
    },
    {
      name: "Lisa Anderson",
      role: "Brand Designer",
      rating: 5,
      text: "GraphicsPro is our go-to for all image editing needs. Highly recommend their services!",
    },
  ];

  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        
        {/* Company Logos */}
        <section className="py-16 bg-background">
          <div className="flex container mx-auto px-4 lg:px-8">
            <h3 className="text-2xl italic font-bold text-center mb-0 text-muted-foreground pr-8 whitespace-nowrap">
              Trusted by
            </h3>
            <SlidingLogos />
          </div>
        </section>

        <ServicesSection />
        <WhyUs />
        
        {/* Customer Reviews */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
              Customer <span className="text-gradient">Feedback</span>
            </h2>
            <SlidingReviews reviews={reviews} />
          </div>
        </section>

        <FreeTrial />
      </main>
      <Footer />
    </>
  );
};

export default Index;
