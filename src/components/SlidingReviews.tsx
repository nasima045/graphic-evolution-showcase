import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Star } from "lucide-react";

interface Review {
  name: string;
  role: string;
  rating: number;
  text: string;
}

interface SlidingReviewsProps {
  reviews: Review[];
}

const SlidingReviews = ({ reviews }: SlidingReviewsProps) => {
  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex gap-6"
        animate={{
          x: [0, -1200],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 25,
            ease: "linear",
          },
        }}
      >
        {duplicatedReviews.map((review, index) => (
          <Card key={index} className="p-6 min-w-[350px] flex-shrink-0 bg-card border-border">
            <div className="flex mb-4">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-foreground mb-4 italic">"{review.text}"</p>
            <div>
              <p className="font-semibold text-foreground">{review.name}</p>
              <p className="text-sm text-muted-foreground">{review.role}</p>
            </div>
          </Card>
        ))}
      </motion.div>
    </div>
  );
};

export default SlidingReviews;
