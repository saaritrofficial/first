import { FaWhatsapp } from "react-icons/fa";
import React, { useState, useRef  } from 'react';
import ProductDetailOfferModal from './ProductDetailOfferModal'; 
import { collectionsjson } from "../data/offerDetails";

const PRICE_TIERS = {
  premium: {
    "8ml (mono)": { price: "₹350", launchPrice: "₹249" },
    "8ml (box)": { price: "₹450", launchPrice: "₹329" },
    "30ml (mono)": { price: "₹799", launchPrice: "₹489" },
    "30ml (box)": { price: "₹899", launchPrice: "₹559" },
    "50ml": { price: "₹1,249", launchPrice: "₹799" },
    "60ml": { price: "₹1,549", launchPrice: "₹999" }
  },
  standard: {
    "8ml (mono)": { price: "₹299", launchPrice: "₹199" },
    "8ml (box)": { price: "₹399", launchPrice: "₹279" },
    "30ml (mono)": { price: "₹699", launchPrice: "₹389" },
    "30ml (box)": { price: "₹799", launchPrice: "₹459" },
    "50ml": { price: "₹1,149", launchPrice: "₹699" },
    "60ml": { price: "₹1,449", launchPrice: "₹899" }
  }
};

const ProductCard = ({ product, index, onCardClick }) => {
  const [selectedSize, setSelectedSize] = useState("60ml");
  const variants = product.premium === "yes" ? PRICE_TIERS.premium : PRICE_TIERS.standard;
  const currentVariant = variants[selectedSize];

  return (
    <div className="group relative animate-fade-up" style={{ animationDelay: `${index * 0.15}s` }}>
      <div className="relative overflow-hidden bg-white border border-[#BCA994]/10 rounded-sm shadow-sm hover:shadow-md transition-all duration-500 flex flex-col justify-between h-full hover:border-[#BCA994]/30">
        
        <div>
          {/* Clickable Image Visual */}
          <div className="cursor-pointer relative aspect-square overflow-hidden bg-[#F9F8F6]" onClick={() => onCardClick(product)}>
            {product.premium === "yes" && (
              <div className="absolute top-0 left-0 z-20 w-32 h-32 overflow-hidden pointer-events-none">
                <div className="absolute top-[22px] left-[-34px] w-[160px] rotate-[-45deg] bg-yellow-500 text-black text-xs font-black py-1.5 shadow-md text-center uppercase tracking-wider">
                  Premium
                </div>
              </div>
            )}
            <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          </div>

          {/* Copywriting Body Block */}
          <div className="p-5 pb-1 flex flex-col text-left">
            <div className="flex items-baseline justify-between gap-4 mb-1.5">
              <h3 className="font-serif text-2xl text-[#1A1A1A] transition-colors duration-300 group-hover:text-[#4B3A2F]">
                {product.name}
              </h3>
              
              <button 
                onClick={() => onCardClick(product)}
                className="text-[10px] font-bold uppercase tracking-widest text-[#C6A27E] hover:text-[#4B3A2F] transition-all duration-300 inline-flex items-center gap-0.5 group/more pb-0.5 border-b border-transparent hover:border-[#4B3A2F]/30 opacity-80 group-hover:opacity-100 flex-shrink-0"
              >
                More 
                <span className="inline-block transform transition-transform duration-300 group-hover/more:translate-x-0.5">→</span>
              </button>
            </div>

            <p className="text-gray-600 text-sm min-h-[40px] leading-relaxed transition-opacity duration-500 group-hover:opacity-90">
              {product.description}
            </p>
          </div>
        </div>

        {/* Quick Utilities Action Bar */}
        <div className="px-5 pb-5 pt-2 flex items-center justify-between gap-2 flex-wrap border-t border-gray-100 bg-[#FAF9F6]/50 transition-all duration-500 group-hover:bg-[#FAF9F6]/90">
          <select 
            value={selectedSize} 
            onChange={(e) => setSelectedSize(e.target.value)}
            className="bg-white border border-[#BCA994]/40 rounded px-2 py-1 text-xs outline-none focus:border-[#4B3A2F] cursor-pointer text-gray-800 font-medium transition-colors duration-300"
          >
            {Object.keys(variants).map((size) => (
              <option key={size} value={size}>{size}</option>
            ))}
          </select>

          <div className="flex items-baseline gap-1.5 text-base font-semibold">
            {currentVariant.launchPrice ? (
              <>
                <span className="line-through decoration-[#8D7B6D] text-[#8D7B6D] text-xs font-light">
                  {currentVariant.price}
                </span>
                <span className="text-[#1B3022] font-bold">
                  {currentVariant.launchPrice}
                </span>
              </>
            ) : (
              <span className="text-[#1A1A1A] font-bold">{currentVariant.price}</span>
            )}
          </div>

          {/* FIXED: Restored functional template tags inside valid URL anchors */}
          <a 
              href={`https://wa.me/919625663589?text=${encodeURIComponent(
                `Hi! I'm interested in ${product.name}.\n\nSize: ${selectedSize}\nPrice: ${currentVariant.launchPrice || currentVariant.price}\n\nPlease provide more information.`
              )}`}  
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-1.5 px-3 py-1.5 border border-[#BCA994]/40 rounded-full bg-white hover:bg-[#4B3A2F]/5 transition-all duration-300 group/wa shadow-xs"
          >
            <span className="text-[10px] uppercase tracking-wider text-[#4B3A2F] font-bold">Order</span>
            <FaWhatsapp className="text-[#C6A27E] text-base transition-transform duration-300 group-hover/wa:scale-110" />
          </a>
        </div>

      </div>
    </div>
  );
};

const CollectionsOffer = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const sectionRef = useRef(null);

  const INITIAL_VISIBLE_COUNT = 4;
  const visibleProducts = isExpanded ? collectionsjson : collectionsjson.slice(0, INITIAL_VISIBLE_COUNT);

  return (
    /* FIXED: Tightened layout grid parameters from py-20 to pt-8 pb-16 */
    <section ref={sectionRef} id="collectionsOffer" className="pt-8 pb-16 px-4 max-w-7xl mx-auto scroll-mt-24">
      
      {/* FIXED: Tightened lower header gap from mb-14 to mb-10 */}
      <div className="text-center mb-10 space-y-2">
        <span className="text-xs uppercase tracking-[0.25em] text-[#C6A27E] font-bold block animate-fade-down">
          Fragnance Collections Special
        </span>
        <h2 className="font-serif text-4xl md:text-5xl text-[#1A1A1A] tracking-wide relative inline-block pb-3 animate-fade-up">
          Father's Day Special
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-[1px] bg-[#BCA994]/40"></span>
        </h2>
      </div>

      {/* Cards Display Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {visibleProducts.map((product, index) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            index={index} 
            onCardClick={(prod) => setSelectedProduct(prod)} 
          />
        ))}
      </div>

      {collectionsjson.length > INITIAL_VISIBLE_COUNT && (
        <div className="text-center mt-12">
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="px-6 py-2.5 border border-[#4B3A2F] text-[#4B3A2F] hover:bg-[#4B3A2F] hover:text-white transition-all duration-300 uppercase tracking-widest text-xs font-bold shadow-xs"
          >
            {isExpanded ? "Show Less" : "View All Collections"}
          </button>
        </div>
      )}

      <ProductDetailOfferModal 
        product={selectedProduct} 
        priceTiers={PRICE_TIERS} 
        onClose={() => setSelectedProduct(null)} 
        accentColor="#C6A27E"
        primaryBtnColor="#1B3022" 
        primaryBtnHoverColor="#0d1811"
      />
    </section>
  );
};

export default CollectionsOffer;
