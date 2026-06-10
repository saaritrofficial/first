import React from 'react';
import { FaWhatsapp } from "react-icons/fa";

const ComboCard = ({ product, index }) => {
  const variantKey = Object.keys(product.variants)[0];
  const variant = product.variants[variantKey];

  return (
    <div 
      className="group relative bg-white border border-[#BCA994]/20 rounded-sm overflow-hidden flex flex-col md:flex-row animate-fade-up shadow-sm hover:shadow-md transition-shadow duration-500"
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      {/* Image Section */}
      <div className="relative w-full md:w-[42%] aspect-square overflow-hidden bg-[#F9F8F6]">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
        />
        <div className="absolute top-4 left-4 bg-[#4B3A2F]/90 backdrop-blur-sm text-white text-[9px] px-3 py-1 uppercase tracking-[0.2em] font-medium shadow-sm">
          Limited Edition
        </div>
      </div>

      {/* Content Section */}
      <div className="p-8 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start mb-2">
             <h3 className="font-serif text-2xl text-[#1A1A1A] tracking-tight">{product.name}</h3>
             <span className="text-[10px] text-[#8D7B6D] font-bold uppercase tracking-[0.15em] border-b border-[#BCA994] pb-1">
               {variantKey}
             </span>
          </div>
          
          <p className="text-[#4A4A4A] text-sm mb-6 leading-relaxed font-light">
            {product.description}
          </p>
          
          <div className="bg-[#FDFCFB] border border-[#BCA994]/10 p-4 rounded-sm mb-4">
            <p className="text-[9px] uppercase tracking-[0.2em] text-[#8D7B6D] font-bold mb-2">Character Profile</p>
            <p className="text-xs text-[#1A1A1A] italic font-serif leading-relaxed">
               "{product.perfectFor}"
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between mt-6 pt-6 border-t border-[#BCA994]/20">
          <div className="flex flex-col">
            <div className="flex items-baseline gap-3">
              {/* Dark Forest Green for price */}
              <span className="text-2xl font-serif text-[#1B3022]">
                {variant.launchPrice}
              </span>
              {/* Muted Brown for strikethrough */}
              <span className="line-through decoration-[#8D7B6D]/50 text-[#8D7B6D] text-xs font-light">
                {variant.price}
              </span>
            </div>
          </div>

          {/* Sophisticated Gold Button instead of Green */}
          <a 
            href={`https://wa.me/919625663589?text=${encodeURIComponent(`Hi! I'm interested in the ${product.name} combo. Please share payment link?`)}`}
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-3 px-6 py-2.5 bg-[#4B3A2F] text-white rounded-full hover:bg-[#2C1E16] transition-all duration-300 shadow-sm group/wa"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Order</span>
            <FaWhatsapp size={16} className="text-[#C6A27E] group-hover:scale-110 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ComboCard;