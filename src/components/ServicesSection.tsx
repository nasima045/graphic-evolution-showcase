import { Link } from "react-router-dom";
import BeforeAfter from "./BeforeAfter";
import { Card } from "./ui/card";

const ServicesSection = () => {
  const serviceCategories = [
    {
      id: "ai-service",
      title: "AI-Powered Services",
      description: "Cutting-edge AI technology for instant image enhancement",
      services: [
        {
          name: "AI Service",
          slug: "ai-service",
          beforeImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800",
          afterImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800",
        },
      ],
    },
    {
      id: "services",
      title: "Core Services",
      description: "Essential photo editing services for all your needs",
      services: [
        {
          name: "Masking",
          slug: "masking",
          beforeImage: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800",
          afterImage: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800",
        },
        {
          name: "Retouching",
          slug: "retouching",
          beforeImage: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800",
          afterImage: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800",
        },
        {
          name: "Clipping Path",
          slug: "clipping-path",
          beforeImage: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800",
          afterImage: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800",
        },
        {
          name: "Color Correction",
          slug: "color-correction",
          beforeImage: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800",
          afterImage: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800",
        },
        {
          name: "Model Photo Edit",
          slug: "model-photo-edit",
          beforeImage: "https://images.unsplash.com/photo-1509319117491-00bb4f3c02ee?w=800",
          afterImage: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800",
        },
      ],
    },
    {
      id: "garment-services",
      title: "Garment Services",
      description: "Specialized editing for fashion and e-commerce",
      services: [
        {
          name: "Invisible Mannequin",
          slug: "invisible-mannequin",
          beforeImage: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800",
          afterImage: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800",
        },
        {
          name: "Flat Lay",
          slug: "flat-lay",
          beforeImage: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800",
          afterImage: "https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?w=800",
        },
        {
          name: "Shadow Creation",
          slug: "shadow-creation",
          beforeImage: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800",
          afterImage: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=800",
        },
        {
          name: "Color Match",
          slug: "color-match",
          beforeImage: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800",
          afterImage: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=800",
        },
      ],
    },
    {
      id: "other-services",
      title: "Advanced Services",
      description: "Creative manipulation and restoration services",
      services: [
        {
          name: "Adjustment",
          slug: "adjustment",
          beforeImage: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800",
          afterImage: "https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=800",
        },
        {
          name: "Manipulation",
          slug: "manipulation",
          beforeImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800",
          afterImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
        },
        {
          name: "Restoration",
          slug: "restoration",
          beforeImage: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800",
          afterImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800",
        },
      ],
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {serviceCategories.map((category) => (
          <div key={category.id} id={category.id} className="mb-20">
            <div className="text-center mb-12 animate-slideUp">
              <h2 className="text-4xl font-bold mb-4">
                <span className="text-gradient">{category.title}</span>
              </h2>
              <p className="text-xl text-muted-foreground">{category.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.services.map((service, index) => (
                <Link
                  key={service.slug}
                  to={`/service/${service.slug}`}
                  className="group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Card className="overflow-hidden border-border hover:border-primary transition-all duration-300 bg-card hover:shadow-xl hover:glow-effect animate-fadeIn">
                    <BeforeAfter
                      beforeImage={service.beforeImage}
                      afterImage={service.afterImage}
                      alt={service.name}
                      className="h-64"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-muted-foreground mt-2">
                        Professional {service.name.toLowerCase()} services for stunning results
                      </p>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
