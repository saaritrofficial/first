import { useEffect, useState, useRef } from "react";

import img4 from "@/assets/FDAY/Hamper.png";
import img5 from "@/assets/FDAY/H1_C.png";
import img6 from "@/assets/FDAY/H2_C.png";
import img7 from "@/assets/FDAY/H3_C.png";
import img8 from "@/assets/FDAY/H4_C.png";

const originalImages = [img4, img5, img6, img7, img8];
const images = [originalImages[originalImages.length - 1], ...originalImages, originalImages[0]];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(true);
  
  const timeoutRef = useRef(null);
  const currentRef = useRef(current);

  useEffect(() => {
    currentRef.current = current;
  }, [current]);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrent(currentRef.current + 1);
      setIsTransitioning(true);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  useEffect(() => {
    if (current === 0) {
      timeoutRef.current = setTimeout(() => {
        setIsTransitioning(false); 
        setCurrent(images.length - 2); 
      }, 700); 
    } else if (current === images.length - 1) {
      timeoutRef.current = setTimeout(() => {
        setIsTransitioning(false); 
        setCurrent(1); 
      }, 700);
    }

    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  const handlePrev = () => {
    setIsTransitioning(true);
    setCurrent((prev) => prev - 1);
  };

  const handleNext = () => {
    setIsTransitioning(true);
    setCurrent((prev) => prev + 1);
  };

  const handleDotClick = (index) => {
    setIsTransitioning(true);
    setCurrent(index + 1); 
  };

  const getActiveDotIndex = () => {
    if (current === 0) return originalImages.length - 1;
    if (current === images.length - 1) return 0;
    return current - 1;
  };

  const normalizedImages = Array.isArray(images) ? images : [images];

  return (
    <div className="relative w-full overflow-hidden py-4 md:py-6 bg-background">
      <div
        className="relative w-full h-[40vh] sm:h-[50vh] md:h-[80vh]"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Sliding Track Wrapper */}
        <div 
          className={`flex h-full w-full ${isTransitioning ? "transition-transform duration-700 ease-out" : ""}`}
          style={{ 
            transform: typeof window !== "undefined" && window.innerWidth >= 768 
              ? `translateX(calc(-${current * 50}% + 25%))` 
              : `translateX(-${current * 100}%)` 
          }}
          onTransitionEnd={() => setIsTransitioning(true)}
        >
          {normalizedImages.map((image, index) => (
            <div
              key={index}
              className="h-full w-full md:w-[50%] shrink-0 px-2"
            >
              <div className="relative w-full h-full overflow-hidden md:rounded-[32px] bg-[#f5efe6]">
                <img
                  src={image}
                  alt={`slide-${index}`}
                  className="w-full h-full object-cover"
                />
                
                {/* FIXED: Removed the black overlay completely for the active image */}
                {/* Non-active side items receive a subtle blur & dim overlay for depth */}
                {index !== current && (
                  <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px] transition-all duration-700 pointer-events-none z-10" />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Left Caret Button - Enhanced Contrast styling */}
        <button
          onClick={handlePrev}
          className="absolute left-4 md:left-[26%] top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-white/80 hover:bg-white text-gray-800 shadow-lg transition-all active:scale-95 flex items-center justify-center"
          aria-label="Previous slide"
        >
          <svg
            xmlns="http://w3.org"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        {/* Right Caret Button - Enhanced Contrast styling */}
        <button
          onClick={handleNext}
          className="absolute right-4 md:right-[26%] top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-white/80 hover:bg-white text-gray-800 shadow-lg transition-all active:scale-95 flex items-center justify-center"
          aria-label="Next slide"
        >
          <svg
            xmlns="http://w3.org"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>

        {/* Navigation Dots - Enhanced Contrast indicators */}
        <div className="absolute bottom-4 md:bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-3 bg-black/20 backdrop-blur-md px-4 py-2 rounded-full">
          {originalImages.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`rounded-full transition-all duration-300 ${
                getActiveDotIndex() === index
                  ? "w-8 h-2 bg-white shadow-sm"
                  : "w-2 h-2 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;
