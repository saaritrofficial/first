import { useState, useRef } from "react";
import { ChevronDown, ChevronUp, ChevronLeft, ChevronRight } from "lucide-react";

// Your structured JSON
const faqData = [
  { "section": "shipping", "questionNum": "1", "question": "What would be the timeline for shipping?", "answer": "Delivery times vary by location. Orders are typically delivered within 5 to 7 business days after processing. You’ll receive the delivery details in your confirmation message" },
  { "section": "shipping", "questionNum": "2", "question": "Do you offer free shipping?", "answer": "Yes, we offer free domestic shipping on orders above ₹999." },
  { "section": "orders", "questionNum": "2", "question": "Is gift wrapping available for my order?", "answer": "Yes, your order can be gift wrapped. Simply mention your request while placing the order. We can also include a personalized handwritten note on your behalf." },
  { "section": "orders", "questionNum": "3", "question": "Can I modify my order after placing it?", "answer": "Orders can be modified within 1 hour of placement by messaging." },
  { "section": "orders", "questionNum": "3", "question": "Can I customize my combo pack?", "answer": "Yes, you can customize your combo set, including Gift Sets, Discovery Sets, and Special Occasion Combos, by leaving a note or sending us a message while placing your order. Please note that the inclusion of our premium fragrances (Oud Eternal, King Mystique, and Blue Edge) is available at an additional cost." },
  { "section": "payments", "questionNum": "4", "question": "What payment methods do you accept?", "answer": "We accept UPI based payment for online order." },
  { "section": "fragrance", "questionNum": "4", "question": "Are your fragrances unisex?", "answer": "Yes, our fragrances are thoughtfully crafted to be enjoyed by everyone, regardless of gender." },
  { "section": "fragrance", "questionNum": "4", "question": "Which fragrance is best for daily / office wear?", "answer": "Aqua Aura, Cool Rush, Stone Edge, and Blue Edge are perfect choices for daily use and office wear, offering fresh and versatile fragrances, although it may vary depending on personal preference." },
  { "section": "fragrance", "questionNum": "4", "question": "Which fragrance is best for special occasions?", "answer": "Oud Eternal, Amber Drift, and Golden Aura are ideal for special occasions, offering rich, elegant, and long-lasting fragrances, though the perfect choice also depends on personal preference." },
  { "section": "fragrance", "questionNum": "4", "question": "Can I customize my discovery set?", "answer": "Yes, you can choose any 5 fragrances from the 10 fragrance profiles available on our website." },
];

const FAQSection = () => {
  const sortedFaqs = [...faqData].sort((a, b) => Number(a.questionNum) - Number(b.questionNum));

  const [openIndex, setOpenIndex] = useState<number | null>(0); 
  const [currentCard, setCurrentCard] = useState(0); 
  
  const touchStart = useRef<number | null>(null);
  const touchEnd = useRef<number | null>(null);

  // Accordion click handlers (Desktop)
  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Card slide controls (Mobile buttons & gestures)
  const handlePrevCard = () => {
    setCurrentCard((prev) => Math.max(prev - 1, 0));
  };

  const handleNextCard = () => {
    setCurrentCard((prev) => Math.min(prev + 1, sortedFaqs.length - 1));
  };

  // Swipe gesture tracking (Mobile)
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEnd.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStart.current || !touchEnd.current) return;
    const swipeDistance = touchStart.current - touchEnd.current;
    const minSwipeDistance = 50;

    if (swipeDistance > minSwipeDistance) handleNextCard();
    if (swipeDistance < -minSwipeDistance) handlePrevCard();

    touchStart.current = null;
    touchEnd.current = null;
  };

  return (
    <section 
      id="faq" 
      className="w-full py-16 bg-background scroll-mt-24 flex flex-col items-center"
    >
      <h2 className="text-2xl md:text-4xl font-semibold tracking-wide text-foreground uppercase mb-10">
        Frequently Asked Questions
      </h2>

      <div className="w-[90%] max-w-4xl">
        
        {/* ==========================================
            DESKTOP LAYOUT: EXPANDABLE ACCORDION (hidden on mobile)
           ========================================== */}
        <div className="hidden md:flex flex-col gap-4">
          {sortedFaqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className="border border-border/60 rounded-2xl bg-[#f5efe6]/40 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-6 text-left transition-colors hover:bg-[#f5efe6]"
                >
                  <div className="flex flex-col gap-1">
                    <span className="text-xs uppercase tracking-widest text-gray-400 font-semibold">
                      {item.section}
                    </span>
                    <span className="text-lg font-medium text-foreground">
                      {item.question}
                    </span>
                  </div>
                  {isOpen ? <ChevronUp className="text-gray-500" /> : <ChevronDown className="text-gray-500" />}
                </button>

                <div 
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-border/20">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ==========================================
            MOBILE LAYOUT: SWIPEABLE CARDS WITH BUTTONS (hidden on desktop)
           ========================================== */}
        <div className="md:hidden w-full flex flex-col items-center">
          <div className="w-full flex items-center gap-3">
            
            {/* Left Navigation Arrow */}
            <button
              onClick={handlePrevCard}
              disabled={currentCard === 0}
              className={`p-2 rounded-full border transition-all ${
                currentCard === 0 
                  ? "opacity-30 border-gray-300 text-gray-300 pointer-events-none" 
                  : "border-gray-400 text-foreground bg-white active:bg-gray-100"
              }`}
              aria-label="Previous question"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Central Swipeable Card Container */}
            <div 
              className="flex-1 min-h-[250px] bg-[#f5efe6] rounded-[24px] p-6 shadow-sm border border-border/20 flex flex-col justify-between"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs uppercase tracking-widest bg-white/60 px-3 py-1 rounded-full text-gray-500 font-bold">
                    {sortedFaqs[currentCard].section}
                  </span>
                  <span className="text-xs text-gray-400 font-medium">
                    {currentCard + 1} / {sortedFaqs.length}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {sortedFaqs[currentCard].question}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {sortedFaqs[currentCard].answer}
                </p>
              </div>

              <div className="text-center text-[10px] text-gray-400 uppercase tracking-wider mt-4">
                ← Swipe or use arrows →
              </div>
            </div>

            {/* Right Navigation Arrow */}
            <button
              onClick={handleNextCard}
              disabled={currentCard === sortedFaqs.length - 1}
              className={`p-2 rounded-full border transition-all ${
                currentCard === sortedFaqs.length - 1 
                  ? "opacity-30 border-gray-300 text-gray-300 pointer-events-none" 
                  : "border-gray-400 text-foreground bg-white active:bg-gray-100"
              }`}
              aria-label="Next question"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Bottom Dot Indicators */}
          <div className="flex gap-2 mt-5">
            {sortedFaqs.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentCard(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentCard === index ? "w-6 bg-gray-800" : "w-2 bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default FAQSection;
