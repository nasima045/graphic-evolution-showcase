import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHeroSection, setIsHeroSection] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Check if cursor is in hero section
      const heroElement = document.querySelector('#hero');
      if (heroElement) {
        const rect = heroElement.getBoundingClientRect();
        const inHero = e.clientY >= rect.top && e.clientY <= rect.bottom;
        setIsHeroSection(inHero);
      }
    };

    window.addEventListener("mousemove", updatePosition);
    return () => window.removeEventListener("mousemove", updatePosition);
  }, []);

  return (
    <>
      {/* Main cursor */}
      <div
        className="fixed pointer-events-none z-50 mix-blend-difference"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div
          className={`rounded-full bg-white transition-all duration-300 ${
            isHeroSection ? "w-32 h-32 opacity-20" : "w-6 h-6 opacity-100"
          }`}
        />
      </div>

      {/* Cursor trail */}
      <div
        className="fixed pointer-events-none z-40 mix-blend-difference transition-all duration-150"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div className="w-2 h-2 rounded-full bg-primary" />
      </div>
    </>
  );
};

export default CustomCursor;
