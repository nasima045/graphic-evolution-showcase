import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const FreeTrial = () => {
  return (
    <section id="free-trial" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-primary to-secondary rounded-3xl p-12 text-center glow-effect animate-slideUp">
          <h2 className="text-4xl font-bold text-white mb-4">
            Start Your Free Trial Today
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Get 10 images edited for free. No credit card required.
          </p>
          <Link to="/free-trial">
            <Button className="bg-white text-primary hover:bg-white/90 font-medium group text-lg px-8 py-6 h-auto">
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <p className="text-white/70 text-sm mt-6">
            Join 500+ satisfied customers who trust GraphicsPro
          </p>
        </div>
      </div>
    </section>
  );
};

export default FreeTrial;
