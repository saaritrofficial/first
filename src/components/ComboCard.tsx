import React from 'react';
import { FaWhatsapp } from "react-icons/fa";

const ComboCard = ({ product, index }) => {
  // Since individual combo products don't have multiple sizes, 
  // we just grab the first (and only) variant.
  const variantKey = Object.keys(product.variants)[0];
  const variant = product.variants[variantKey];

  return (
    <div 
      className="group relative bg-card border border-primary/10 rounded-sm overflow-hidden flex flex-col md:flex-row animate-fade-up"
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      {/* Image Section - Takes 40% width on desktop */}
      <div className="relative w-full md:w-[40%] aspect-square overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        <div className="absolute top-4 left-4 bg-primary text-primary-foreground text-[10px] px-2 py-1 rounded-full uppercase tracking-widest font-bold shadow-lg">
          Best Value
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-serif text-2xl text-foreground mb-2">{product.name}</h3>
          <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
            {product.description}
          </p>
          
          <div className="bg-primary/5 p-3 rounded-sm mb-4">
         <p className="text-[10px] uppercase tracking-widest text-primary font-bold mb-1"></p>

            <p className="text-[10px] uppercase tracking-widest text-primary font-bold mb-1">Perfect For:</p>
            <p className="text-xs text-foreground/80 italic"> {product.perfectFor}</p>
          </div>
        </div>

        <div className="flex items-center justify-between mt-4 pt-4 border-t border-primary/5">
          <div className="flex flex-col">
            <span className="text-[10px] text-muted-foreground uppercase tracking-wider">{variantKey}</span>
            <div className="flex items-center gap-2">
              <span className="line-through text-red-500 text-sm">{variant.price}</span>
              <span className="text-2xl font-serif text-green-600">{variant.launchPrice}</span>
            </div>
          </div>

          <a 
          
          href={`https://wa.me/919625663589?text=${encodeURIComponent(`Hi! I'm interested in ${product.name}. How to order ?`)}`}

            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 px-4 py-2 bg-[#25D366] text-white rounded-full hover:bg-[#128C7E] transition-colors shadow-md group/wa"
          >
            <span className="text-xs font-bold uppercase tracking-tight">Order</span>
            <FaWhatsapp className="text-lg" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ComboCard;