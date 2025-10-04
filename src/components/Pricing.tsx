import { Check } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$99",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "100 images per month",
        "Basic retouching",
        "24-hour turnaround",
        "Email support",
        "Cloud storage",
      ],
    },
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      description: "For growing businesses",
      features: [
        "500 images per month",
        "Advanced editing",
        "12-hour turnaround",
        "Priority support",
        "Unlimited revisions",
        "Dedicated manager",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large-scale projects",
      features: [
        "Unlimited images",
        "Custom workflow",
        "Instant turnaround",
        "24/7 phone support",
        "API access",
        "Custom integrations",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-slideUp">
          <h2 className="text-4xl font-bold mb-4">
            Simple, <span className="text-gradient">Transparent Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your needs. No hidden fees, cancel anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card
              key={plan.name}
              className={`p-8 border-border transition-all duration-300 bg-card hover:shadow-xl animate-fadeIn ${
                plan.popular
                  ? "border-primary glow-effect scale-105 md:scale-110"
                  : "hover:border-primary"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.popular && (
                <div className="bg-gradient-to-r from-primary to-secondary text-white text-sm font-medium px-3 py-1 rounded-full inline-block mb-4">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-muted-foreground mb-4">{plan.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gradient">{plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start space-x-2">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full ${
                  plan.popular
                    ? "bg-gradient-to-r from-primary to-secondary hover:opacity-90 glow-effect text-white"
                    : "bg-muted hover:bg-muted/80 text-foreground"
                }`}
              >
                Get Started
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
