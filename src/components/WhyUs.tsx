import { Clock, Shield, Zap, Award } from "lucide-react";
import { Card } from "./ui/card";

const WhyUs = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Get your edited images back within 24 hours with our express service",
    },
    {
      icon: Award,
      title: "Expert Quality",
      description: "Professional designers with 10+ years of experience in photo editing",
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Your images are protected with enterprise-grade security and NDA",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock customer support to assist you anytime, anywhere",
    },
  ];

  return (
    <section id="why-us" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-slideUp">
          <h2 className="text-4xl font-bold mb-4">
            Why Choose <span className="text-gradient">GraphicsPro</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We deliver exceptional results that help your business stand out
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className="p-6 border-border hover:border-primary transition-all duration-300 bg-card hover:shadow-xl hover:glow-effect animate-fadeIn"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 glow-effect">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
