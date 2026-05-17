import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonialsData = [
  { "testimonial": "Very Gud Fragrance.Itr smells so strong. Still both my wrists are smelling. Honestly gud efforts", "buyer": "Anita Lalchandani", "order": 1 },
  { "testimonial": "Just wanted to inform you that I am in love with your perfumes", "buyer": "Debashree Bannerjee", "order": 2 },
  { "testimonial": "Thank you so much. The perfumes I ordered from you as a Mother's Day Gift were really loved by Aunty. Unhone specially bola ki all the fragrances are very beautiful, classy and soothing. She was genuinely very happy and said ki 'Fragrance bahut acchi Hai. Aise hi quality maintain kariyega.' Your perfumes really made the gift feel extra special and memorable for her. Once again, Thanks you so much for such lovely fragrances and beautiful service", "buyer": "Meetu Baweja", "order": 3 },
  { "testimonial": "Hello I really liked the fragrances specially Rose oud sandal rose. It was long lasting. Even the Aqua Aura is fabulous", "buyer": "Aparna Gupta", "order": 4 },
  { "testimonial": "This perfume has an elegant and long-lasting fragrance that feels both fresh and luxurious. The scent is perfectly balanced - not too strong, yet noticeable enough to leave a lasting impression. It starts with a refreshing top note and slowly settles into a warm, soothing aroma that stays for hours", "buyer": "Kirti Lata Awasthi", "order": 5 },
];

const TestimonialsCarousel = () => {
  const sortedTestimonials = [...testimonialsData].sort((a, b) => a.order - b.order);
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? sortedTestimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % sortedTestimonials.length);
  };

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, [isPaused, sortedTestimonials.length]);

  return (
    <section 
      id="testimonials" 
      className="flex flex-col items-center py-12 bg-background w-full scroll-mt-24"
    >
      <h2 className="text-2xl md:text-4xl font-semibold tracking-wide text-foreground uppercase mb-8">
        Customer Testimonials
      </h2>

      {/* 
        Height Adjusted:
        Increased mobile minimum height from 420px to 460px.
        Increased desktop minimum height from 320px to 360px.
      */}
      <div
        className="relative w-full min-h-[460px] md:min-h-[360px] overflow-hidden bg-[#f5efe6] flex items-center justify-center px-4 md:px-12"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {sortedTestimonials.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 flex flex-col items-center justify-center text-center px-4 py-16 md:py-8 transition-all duration-1000 transform ${
              index === current 
                ? "opacity-100 scale-100 pointer-events-auto" 
                : "opacity-0 scale-95 pointer-events-none"
            }`}
          >
            <div className="relative w-full max-w-xs sm:max-w-xl md:max-w-5xl lg:max-w-6xl px-10 md:px-16 flex flex-col items-center">
              
              {/* Left Caret Button */}
              <button
                onClick={handlePrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-1 md:p-2 rounded-full hover:bg-black/5 text-gray-800 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
              </button>

              <p className="text-base sm:text-lg md:text-2xl italic text-gray-800 font-medium w-full mb-4 leading-relaxed">
                "{item.testimonial}"
              </p>

              {/* Right Caret Button */}
              <button
                onClick={handleNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-1 md:p-2 rounded-full hover:bg-black/5 text-gray-800 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
              </button>
            </div>

            <h4 className="text-xs md:text-base font-bold text-gray-600 tracking-wide uppercase mt-2">
              — {item.buyer}
            </h4>
          </div>
        ))}

        {/* Navigation Dots */}
        <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-3">
          {sortedTestimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`rounded-full transition-all duration-300 ${
                current === index ? "w-8 h-2.5 md:h-3 bg-gray-800" : "w-2.5 h-2.5 md:w-3 md:h-3 bg-gray-400/50 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
