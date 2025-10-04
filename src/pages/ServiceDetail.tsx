import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Check } from "lucide-react";
import BeforeAfter from "@/components/BeforeAfter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

const ServiceDetail = () => {
  const { slug } = useParams();

  const serviceData: Record<string, any> = {
    "ai-service": {
      title: "AI-Powered Image Enhancement",
      description: "Leverage cutting-edge artificial intelligence to automatically enhance your images with precision and speed.",
      features: [
        "Automatic background removal",
        "Smart object detection",
        "One-click enhancement",
        "Batch processing",
        "AI-powered color grading",
      ],
      examples: [
        {
          before: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800",
          after: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800",
        },
        {
          before: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800",
          after: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
        },
      ],
    },
    masking: {
      title: "Professional Image Masking",
      description: "Precise masking techniques for complex subjects like hair, fur, and transparent objects.",
      features: [
        "Hair masking",
        "Layer masking",
        "Alpha channel masking",
        "Complex object isolation",
        "Transparent object handling",
      ],
      examples: [
        {
          before: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800",
          after: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800",
        },
        {
          before: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800",
          after: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=800",
        },
      ],
    },
    retouching: {
      title: "Expert Photo Retouching",
      description: "Professional retouching services to enhance and perfect your images.",
      features: [
        "Skin retouching",
        "Blemish removal",
        "Wrinkle reduction",
        "Color enhancement",
        "Detail refinement",
      ],
      examples: [
        {
          before: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800",
          after: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800",
        },
        {
          before: "https://images.unsplash.com/photo-1509319117491-00bb4f3c02ee?w=800",
          after: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800",
        },
      ],
    },
    "clipping-path": {
      title: "Precision Clipping Path",
      description: "Clean and accurate clipping paths for perfect product photography.",
      features: [
        "Multi-path clipping",
        "Complex path creation",
        "Vector path output",
        "Perfect edges",
        "Quick turnaround",
      ],
      examples: [
        {
          before: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800",
          after: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800",
        },
        {
          before: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800",
          after: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=800",
        },
      ],
    },
    "color-correction": {
      title: "Professional Color Correction",
      description: "Perfect color balance and tonal adjustments for consistent, vibrant images.",
      features: [
        "White balance correction",
        "Color matching",
        "Exposure adjustment",
        "Tone mapping",
        "Color grading",
      ],
      examples: [
        {
          before: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800",
          after: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800",
        },
        {
          before: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800",
          after: "https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=800",
        },
      ],
    },
    "invisible-mannequin": {
      title: "Invisible Mannequin Effect",
      description: "Create the ghost mannequin effect for professional e-commerce product photography.",
      features: [
        "3D hollow effect",
        "Natural draping",
        "Multiple angle support",
        "Seamless blending",
        "Professional finish",
      ],
      examples: [
        {
          before: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800",
          after: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800",
        },
        {
          before: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800",
          after: "https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?w=800",
        },
      ],
    },
    "flat-lay": {
      title: "Flat Lay Photography Editing",
      description: "Perfect flat lay editing for fashion and lifestyle product photography.",
      features: [
        "Shadow enhancement",
        "Perspective correction",
        "Background cleanup",
        "Color consistency",
        "Detail enhancement",
      ],
      examples: [
        {
          before: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800",
          after: "https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?w=800",
        },
        {
          before: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800",
          after: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=800",
        },
      ],
    },
    "model-photo-edit": {
      title: "Model Photo Editing",
      description: "Professional model photo editing for fashion and beauty photography.",
      features: [
        "Skin retouching",
        "Body shaping",
        "Background enhancement",
        "Color grading",
        "Hair refinement",
      ],
      examples: [
        {
          before: "https://images.unsplash.com/photo-1509319117491-00bb4f3c02ee?w=800",
          after: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800",
        },
        {
          before: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800",
          after: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800",
        },
      ],
    },
    "shadow-creation": {
      title: "Natural Shadow Creation",
      description: "Add realistic shadows to give your products depth and dimension.",
      features: [
        "Natural shadow",
        "Drop shadow",
        "Reflection shadow",
        "Multiple light sources",
        "Custom shadow angles",
      ],
      examples: [
        {
          before: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800",
          after: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=800",
        },
        {
          before: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800",
          after: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800",
        },
      ],
    },
    "color-match": {
      title: "Color Matching Service",
      description: "Ensure perfect color consistency across all your product images.",
      features: [
        "Pantone matching",
        "Cross-batch consistency",
        "Brand color matching",
        "Multi-image sync",
        "Custom color profiles",
      ],
      examples: [
        {
          before: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800",
          after: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=800",
        },
        {
          before: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800",
          after: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800",
        },
      ],
    },
    adjustment: {
      title: "Image Adjustment Services",
      description: "Fine-tune every aspect of your images for perfect results.",
      features: [
        "Brightness/Contrast",
        "Levels adjustment",
        "Curve editing",
        "Saturation control",
        "Sharpening",
      ],
      examples: [
        {
          before: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800",
          after: "https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=800",
        },
        {
          before: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800",
          after: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800",
        },
      ],
    },
    manipulation: {
      title: "Creative Image Manipulation",
      description: "Transform your images with artistic manipulation and compositing.",
      features: [
        "Photo compositing",
        "Object removal/addition",
        "Background replacement",
        "Creative effects",
        "Scene creation",
      ],
      examples: [
        {
          before: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800",
          after: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
        },
        {
          before: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800",
          after: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800",
        },
      ],
    },
    restoration: {
      title: "Photo Restoration Services",
      description: "Restore old and damaged photos to their original glory.",
      features: [
        "Damage repair",
        "Color restoration",
        "Scratch removal",
        "Fading correction",
        "Missing part reconstruction",
      ],
      examples: [
        {
          before: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800",
          after: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800",
        },
        {
          before: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800",
          after: "https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=800",
        },
      ],
    },
  };

  const service = slug ? serviceData[slug] : null;

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <Link to="/">
            <Button>Go Back Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <CustomCursor />
      <Navbar />
      <div className="min-h-screen pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Back Button */}
          <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Link>

          {/* Header */}
          <div className="mb-12 animate-slideUp">
            <h1 className="text-5xl font-bold mb-4">
              <span className="text-gradient">{service.title}</span>
            </h1>
            <p className="text-xl text-muted-foreground">{service.description}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
            {/* Features */}
            <div className="lg:col-span-1">
              <Card className="p-6 border-border bg-card sticky top-24">
                <h2 className="text-2xl font-bold mb-4">Features</h2>
                <ul className="space-y-3">
                  {service.features.map((feature: string) => (
                    <li key={feature} className="flex items-start space-x-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-6 bg-gradient-to-r from-primary to-secondary hover:opacity-90 glow-effect text-white">
                  Get Started
                </Button>
              </Card>
            </div>

            {/* Examples */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6">Before & After Examples</h2>
              <div className="space-y-8">
                {service.examples.map((example: any, index: number) => (
                  <Card
                    key={index}
                    className="overflow-hidden border-border bg-card animate-fadeIn"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <BeforeAfter
                      beforeImage={example.before}
                      afterImage={example.after}
                      alt={`${service.title} example ${index + 1}`}
                      className="h-96"
                    />
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-primary to-secondary rounded-3xl p-12 text-center glow-effect">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Upload your images and see the difference our experts can make
            </p>
            <Button className="bg-white text-primary hover:bg-white/90 font-medium">
              Start Your Free Trial
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ServiceDetail;
