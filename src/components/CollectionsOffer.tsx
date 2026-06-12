import { FaWhatsapp } from "react-icons/fa";
import React, { useState, useRef } from 'react';
import ProductDetailOfferModal from './ProductDetailOfferModal'; 
import { collectionsjson } from "../data/offerDetails";

const ProductCard = ({ product, index, onCardClick }) => {
  const [quantity, setQuantity] = useState(1);

  const isPremium = product.tier ? product.tier === "premium" : (product.id === 1 || product.id === 2);

  const cleanNumber = (priceStr) => {
    if (!priceStr) return 0;
    return parseInt(priceStr.replace(/[^0-9]/g, ''), 10);
  };

  const handleQtyChange = (amount) => {
    setQuantity((prev) => Math.max(1, prev + amount));
  };

  const unitOldPrice = cleanNumber(product.oldPrice);
  const unitNewPrice = cleanNumber(product.newPrice);
  
  const totalOldPrice = unitOldPrice * quantity;
  const totalNewPrice = unitNewPrice * quantity;
  const totalSavings = totalOldPrice - totalNewPrice;

  return (
    <div className="group relative animate-fade-up" style={{ animationDelay: `${index * 0.15}s` }}>
      <div className="relative overflow-hidden bg-white border border-[#BCA994]/10 rounded-sm shadow-sm hover:shadow-md transition-all duration-500 flex flex-col justify-between h-full hover:border-[#BCA994]/30">
        
        <div>
          {/* Compressed Clickable Image Visual */}
          <div className="cursor-pointer relative aspect-[4/3] overflow-hidden bg-[#F9F8F6]" onClick={() => onCardClick(product)}>
            {isPremium && (
              <div className="absolute top-0 left-0 z-20 w-24 h-24 overflow-hidden pointer-events-none">
                <div className="absolute top-[16px] left-[-40px] w-[140px] rotate-[-45deg] bg-yellow-500 text-black text-[10px] font-black py-1 shadow-md text-center uppercase tracking-wider">
                  Premium
                </div>
              </div>
            )}
            <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>

          {/* Tightened Text Content Area */}
          <div className="pt-3 px-4 pb-1 flex flex-col text-left">
            <h3 className="font-serif text-xl font-medium text-[#1A1A1A] transition-colors duration-300 group-hover:text-[#4B3A2F] truncate">
              {product.name}
            </h3>
            <p className="text-gray-600 text-xs leading-relaxed transition-opacity duration-500 group-hover:opacity-90 line-clamp-2">
              {product.description}
            </p>
          </div>
        </div>

        {/* Price & Quantity Selector - Directly underneath description */}
        <div className="mt-2 px-4 py-2 flex items-center justify-between gap-2 border-t border-gray-100 bg-[#FAF9F6]/50">
          <div className="flex items-baseline gap-1">
            <span className="line-through decoration-[#8D7B6D] text-[#8D7B6D] text-[11px] font-light">
              {product.oldPrice}
            </span>
            <span className="text-[#1B3022] font-bold text-sm">
              {product.newPrice}
            </span>
          </div>

          {/* Compact Quantity Controller */}
          <div className="flex items-center border border-gray-300 rounded bg-white overflow-hidden scale-90 origin-right">
            <button 
              onClick={() => handleQtyChange(-1)}
              className="px-2 py-0.5 text-xs font-bold bg-gray-50 hover:bg-gray-100 text-gray-600 transition-colors"
            >
              -
            </button>
            <span className="px-2 text-xs font-semibold text-gray-800 min-w-[20px] text-center">
              {quantity}
            </span>
            <button 
              onClick={() => handleQtyChange(1)}
              className="px-2 py-0.5 text-xs font-bold bg-gray-50 hover:bg-gray-100 text-gray-600 transition-colors"
            >
              +
            </button>
          </div>
        </div>

        {/* Calculation Summary Footer */}
        <div className="px-4 pb-4 pt-2 border-t border-gray-100 bg-gray-50/50 flex flex-col gap-2">
          <div className="text-[11px] flex flex-col gap-0.5 text-gray-500">
            <div className="flex justify-between">
              <span>Total MRP ({quantity} Qty):</span>
              <span className="line-through">₹{totalOldPrice.toLocaleString('en-IN')}</span>
            </div>
            <div className="flex justify-between font-semibold text-[#1B3022]">
              <span>Final Total:</span>
              {totalSavings > 0 && (
                  <span className="text-emerald-700 text-[10px] font-bold normal-case">
                    (Saved ₹{totalSavings.toLocaleString('en-IN')})
                  </span>
                )}
              <span>₹{totalNewPrice.toLocaleString('en-IN')}</span>
            </div>
          </div>
             <a 
                          href={`https://wa.me/919625663589?text=${encodeURIComponent(
                            `Hi! I'm interested in buying ${product.name}.\n\nQuantity: ${quantity}\nTotal Price: ₹${totalNewPrice.toLocaleString('en-IN')}\n\nPlease process my order.`
                          )}`}  
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="w-full mt-1 flex items-center justify-center gap-1.5 px-3 py-2 border border-transparent rounded bg-[#BCA994] hover:bg-[#A8937D] text-white transition-all duration-300 text-[10px] font-black uppercase tracking-widest shadow-sm"
                        >
            <span>Order via WhatsApp</span>
            <FaWhatsapp className="text-sm" />
                      </a>
          {/* <a 
            href={`https://wa.me{encodeURIComponent(
              `Hi! I'm interested in buying ${product.name}.\n\nQuantity: ${quantity}\nTotal Price: ₹${totalNewPrice.toLocaleString('en-IN')}\n\nPlease process my order.`
            )}`}  
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-full mt-1 flex items-center justify-center gap-1.5 px-3 py-1.5 border border-transparent rounded bg-[#1B3022] hover:bg-[#0d1811] text-white transition-all duration-300 text-[10px] font-bold uppercase tracking-wider shadow-sm"
          >
            <span>Order via WhatsApp</span>
            <FaWhatsapp className="text-sm" />
          </a> */}
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
    <section ref={sectionRef} id="collectionsOffer" className="pt-6 pb-12 px-4 max-w-7xl mx-auto scroll-mt-24">
      
      <div className="text-center mb-8 space-y-1">
        <span className="text-[10px] uppercase tracking-[0.25em] text-[#C6A27E] font-bold block animate-fade-down">
          Fragrance Collections Special
        </span>
        <h2 className="font-serif text-3xl md:text-4xl text-[#1A1A1A] tracking-wide relative inline-block pb-2 animate-fade-up">
          Father's Day Special
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-[1px] bg-[#BCA994]/40"></span>
        </h2>
      </div>

      {/* Cards Display Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
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
        <div className="text-center mt-8">
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="px-5 py-2 border border-[#4B3A2F] text-[#4B3A2F] hover:bg-[#4B3A2F] hover:text-white transition-all duration-300 uppercase tracking-widest text-[10px] font-bold shadow-xs"
          >
            {isExpanded ? "Show Less" : "View All Collections"}
          </button>
        </div>
      )}

      <ProductDetailOfferModal 
        product={selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
        accentColor="#C6A27E"
        primaryBtnColor="#1B3022" 
        primaryBtnHoverColor="#0d1811"
      />
    </section>
  );
};

export default CollectionsOffer;
