import { useEffect, useState, useRef } from "react";

import img1 from "@/assets/Main_Page/1_Tradition_1.png";
import img2 from "@/assets/Main_Page/2_Notes_1.png";
import img3 from "@/assets/Main_Page/3_Discovery_2.png";

const originalImages = [img1, img2, img3];
const images = [originalImages[originalImages.length - 1], ...originalImages, originalImages];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(true);
  
  const timeoutRef = useRef(null);
  // Mutable ref always holds the freshest current state without re-triggering effects
  const currentRef = useRef(current);

  // Synchronize the ref whenever the current index updates
  useEffect(() => {
    currentRef.current = current;
  }, [current]);

  // Autoplay Effect: Runs only when pause state changes
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      // Safely access current value from ref inside the interval timeline
      setCurrent(currentRef.current + 1);
      setIsTransitioning(true);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  // Seamless Loop Reset Mechanism
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
    if (!isTransitioning) return;
    setIsTransitioning(true);
    setCurrent((prev) => prev - 1);
  };

  const handleNext = () => {
    if (!isTransitioning) return;
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
            transform: window.innerWidth >= 768 
              ? `translateX(calc(-${current * 50}% + 25%))` 
              : `translateX(-${current * 100}%)` 
          }}
          onTransitionEnd={() => setIsTransitioning(true)}
        >
          {images.map((image, index) => (
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
                <div 
                  className={`absolute inset-0 bg-black transition-opacity duration-700 pointer-events-none z-10 ${
                    index === current ? "opacity-25" : "opacity-50"
                  }`} 
                />
              </div>
            </div>
          ))}
        </div>

        {/* Left Caret Button */}
        <button
          onClick={handlePrev}
          className="absolute left-4 md:left-[26%] top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-sm transition-all active:scale-95"
          aria-label="Previous slide"
        >
          <svg
            xmlns="http://w3.org"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-5 h-5 md:w-6 md:h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        {/* Right Caret Button */}
        <button
          onClick={handleNext}
          className="absolute right-4 md:right-[26%] top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-sm transition-all active:scale-95"
          aria-label="Next slide"
        >
          <svg
            xmlns="http://w3.org"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-5 h-5 md:w-6 md:h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>

        {/* Navigation Dots */}
        <div className="absolute bottom-4 md:bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-3">
          {originalImages.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`rounded-full transition-all duration-300 ${
                getActiveDotIndex() === index
                  ? "w-8 h-2.5 md:h-3 bg-white"
                  : "w-2.5 h-2.5 md:w-3 md:h-3 bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;
