import { useState } from "react";

interface BeforeAfterProps {
  beforeImage: string;
  afterImage: string;
  alt: string;
  className?: string;
}

const BeforeAfter = ({ beforeImage, afterImage, alt, className = "" }: BeforeAfterProps) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  return (
    <div
      className={`relative overflow-hidden rounded-xl group cursor-ew-resize ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setSliderPosition(50);
      }}
    >
      {/* After Image (Background) */}
      <div className="w-full h-full">
        <img
          src={afterImage}
          alt={`${alt} - After`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Before Image (Overlay) */}
      <div
        className="absolute inset-0 overflow-hidden transition-all duration-100"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img
          src={beforeImage}
          alt={`${alt} - Before`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Slider Line */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg transition-opacity duration-200"
        style={{
          left: `${sliderPosition}%`,
          opacity: isHovering ? 1 : 0.5,
        }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
          <div className="flex space-x-1">
            <div className="w-0.5 h-4 bg-primary"></div>
            <div className="w-0.5 h-4 bg-primary"></div>
          </div>
        </div>
      </div>

      {/* Labels */}
      {isHovering && (
        <>
          <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-md text-sm font-medium">
            Before
          </div>
          <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-md text-sm font-medium">
            After
          </div>
        </>
      )}
    </div>
  );
};

export default BeforeAfter;
