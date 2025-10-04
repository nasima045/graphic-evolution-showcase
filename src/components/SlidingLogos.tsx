import { motion } from "framer-motion";
import { ShoppingBag, Store, Package, ShoppingCart, TrendingUp } from "lucide-react";

const SlidingLogos = () => {
  const baseBrands = [
    { Icon: ShoppingBag, name: "Amazon" },
    { Icon: Store, name: "Shopify" },
    { Icon: Package, name: "Etsy" },
    { Icon: ShoppingCart, name: "eBay" },
    { Icon: TrendingUp, name: "Walmart" },
  ];
  const brands = [...baseBrands, ...baseBrands];

  const itemWidth = 150 + 48;
  const totalWidth = brands.length * itemWidth;
  
  return (
    <div className="overflow-hidden w-full">
      <motion.div
        className="flex gap-12"
        animate={{
          x: [0, -totalWidth / 2],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
      >
        {brands.map((brand, index) => (
          <div key={index} className="flex items-center gap-3 min-w-[150px]">
            <brand.Icon className="w-8 h-8 text-muted-foreground" />
            <span className="text-xl font-bold text-muted-foreground whitespace-nowrap">
              {brand.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default SlidingLogos;
