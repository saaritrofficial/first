import React, { useState } from 'react';
import { comboCollections } from '../data/comboDetails';
import ComboCard from './ComboCard'; 

const Combos = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Preview limit configuration
  const INITIAL_VISIBLE_COUNT = 2;

  // Slice array data if not expanded
  const visibleCombos = isExpanded 
    ? comboCollections 
    : comboCollections.slice(0, INITIAL_VISIBLE_COUNT);

  return (
    <section id="combos" className="py-16 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-xs tracking-[0.4em] text-primary uppercase block mb-3">
            Exclusive Deals
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            Curated Combos
          </h2>
        </div>

        {/* Product Collection Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {visibleCombos.map((product, index) => (
            <ComboCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* ALWAYS VISIBLE BUTTON FOR TESTING */}
        {comboCollections.length > INITIAL_VISIBLE_COUNT && (
          <div className="text-center mt-12">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="px-8 py-3 border border-[#4B3A2F] text-[#4B3A2F] rounded-full hover:bg-[#4B3A2F] hover:text-white transition-all duration-300 text-[11px] font-bold uppercase tracking-[0.2em] shadow-sm relative z-10 cursor-pointer"
            >
              {isExpanded ? "Show Less" : "View All Combos"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Combos;
