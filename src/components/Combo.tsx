import React from 'react';
import { comboCollections } from '../data/comboDetails';
import ComboCard from './ComboCard'; // Import the new card

const Combos = () => {
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
          {/* ... */}
        </div>

        {/* Change grid to 2 columns even on smaller desktops because horizontal cards take more space */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {comboCollections.map((product, index) => (
            <ComboCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Combos;