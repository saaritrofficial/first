import React, { useState, useEffect } from 'react';
import { FaWhatsapp, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const ProductDetailModal = ({ 
  product, 
  priceTiers, 
  onClose,
  whatsAppNumber = "919625663589",
  accentColor = "#C6A27E",
  primaryBtnColor = "#1B3022",
  primaryBtnHoverColor = "#132218"
}) => {
  const [selectedSize, setSelectedSize] = useState("60ml");
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  useEffect(() => {
    setCurrentImageIndex(0);
    setQuantity(1);
  }, [product]);

  if (!product || !priceTiers) return null;

  const variants = product.premium === "yes" ? priceTiers.premium : priceTiers.standard;
  const currentVariant = variants[selectedSize];

  const productImages = product.detailedImages && product.detailedImages.length > 0 
    ? product.detailedImages 
    : [product.image];

  const parsePrice = (priceStr) => {
    if (!priceStr) return 0;
    return parseInt(priceStr.replace(/[^0-9]/g, ''), 10);
  };

  const unitPrice = parsePrice(currentVariant.launchPrice || currentVariant.price);
  const totalPrice = unitPrice * quantity;
  const formattedTotalPrice = `₹${totalPrice.toLocaleString('en-IN')}`;

  const whatsappMessage = encodeURIComponent(
    `Hi! I'm interested in buying ${product.name}.\n\nSize: ${selectedSize}\nQuantity: ${quantity}\nTotal Price: ${formattedTotalPrice}\n\nPlease share payment link.`
  );

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % productImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + productImages.length) % productImages.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/60 backdrop-blur-sm transition-opacity duration-300">
      <div className="absolute inset-0" onClick={onClose}></div>
      
      <div className="relative w-full max-w-3xl bg-white rounded-sm shadow-2xl overflow-hidden z-10 grid md:grid-cols-2 max-h-[92vh] transform transition-all duration-300 scale-100">
        
        <button 
          onClick={onClose} 
          className="absolute top-3 right-3 z-30 p-2 bg-white/90 backdrop-blur-md rounded-full border border-gray-200 text-gray-700 hover:bg-gray-100 transition-colors shadow-sm"
        >
          <IoClose className="text-lg md:text-xl" />
        </button>

        {/* Left Layout Pane: Image Gallery Slider */}
        <div className="relative bg-[#F9F8F6] h-[32vh] md:h-auto md:aspect-square flex flex-col justify-between group border-b border-gray-100 md:border-b-0">
          {product.premium === "yes" && (
            <div className="absolute top-0 left-0 z-20 w-24 h-24 md:w-32 md:h-32 overflow-hidden pointer-events-none">
              <div className="absolute top-[15px] md:top-[22px] left-[-28px] md:left-[-34px] w-[120px] md:w-[160px] rotate-[-45deg] bg-yellow-500 text-black text-[10px] md:text-xs font-black py-1 shadow-md text-center uppercase tracking-wider">
                Premium
              </div>
            </div>
          )}

          <div className="relative w-full flex-1 overflow-hidden flex items-center justify-center">
            <img 
              src={productImages[currentImageIndex]} 
              alt={`${product.name} visual preview`} 
              className="w-full h-full object-cover" 
            />

            {productImages.length > 1 && (
              <>
                <button 
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 md:p-2 bg-white/80 hover:bg-white text-gray-800 rounded-full shadow-md transition-all md:opacity-0 md:group-hover:opacity-100"
                >
                  <FaChevronLeft className="text-[10px] md:text-xs" />
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 md:p-2 bg-white/80 hover:bg-white text-gray-800 rounded-full shadow-md transition-all md:opacity-0 md:group-hover:opacity-100"
                >
                  <FaChevronRight className="text-[10px] md:text-xs" />
                </button>
              </>
            )}
          </div>

          {productImages.length > 1 && (
            <div className="flex gap-1.5 p-2 bg-white border-t border-gray-100 justify-center overflow-x-auto">
              {productImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`w-9 h-9 md:w-12 md:h-12 border rounded-sm overflow-hidden flex-shrink-0 transition-all ${
                    currentImageIndex === idx ? 'border-[#4B3A2F] ring-1 ring-[#4B3A2F]' : 'border-gray-200 opacity-60'
                  }`}
                >
                  <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Layout Pane: Info Content & Configuration Dropdowns */}
        <div className="p-5 md:p-8 flex flex-col justify-between bg-white overflow-y-auto max-h-[60vh] md:max-h-full">
          <div>
            <span 
              style={{ color: accentColor }} 
              className="text-[10px] md:text-xs uppercase tracking-widest font-bold block mb-0.5 md:mb-1"
            >
              {product.premium === "yes" ? "Premium Collection" : "Classic Collection"}
            </span>
            <h2 className="font-serif text-2xl md:text-3xl text-[#1A1A1A] mb-1 md:mb-2">{product.name}</h2>
            <p className="text-gray-600 text-xs md:text-sm mb-4 leading-relaxed">{product.description}</p>
            
            {/* Trapezoid Pyramid View: Text stays inside but narrows step-by-step */}
            {(product.topNode || product.middleNode || product.baseNode) && (
              <div className="border-t border-b border-[#BCA994]/20 py-4 mb-4 flex flex-col items-center">
                <h4 className="font-serif text-xs md:text-sm font-semibold text-[#4B3A2F] tracking-wide mb-3 self-start">
                  Olfactory Pyramid
                </h4>
                
                <div className="flex flex-col w-full max-w-[280px] gap-1 bg-transparent rounded relative overflow-hidden">
                  
                  {/* Level 1: Top Layer (Slightly narrower width, plenty of text space) */}
                  {product.topNode && (
                    <div className="w-[80%] mx-auto p-2 text-center flex flex-col items-center justify-center bg-gradient-to-b from-[#FFFDF9] to-[#FDF9F0] rounded-t-md border border-[#BCA994]/20 shadow-xs">
                      <span className="text-[8px] font-black text-amber-800 uppercase tracking-widest mb-0.5">
                        ▲ Top Note
                      </span>
                      <span className="text-xs text-gray-800 font-medium leading-tight px-1">
                        {product.topNode}
                      </span>
                    </div>
                  )}

                  {/* Level 2: Mid Layer (Medium width layout block) */}
                  {product.middleNode && (
                    <div className="w-[90%] mx-auto p-2 text-center flex flex-col items-center justify-center bg-gradient-to-b from-[#FDF9F0] to-[#F7F0E4] border-x border-b border-[#BCA994]/20 shadow-xs">
                      <span className="text-[8px] font-black text-rose-800 uppercase tracking-widest mb-0.5">
                        ■ Heart Note
                      </span>
                      <span className="text-xs text-gray-800 font-medium leading-tight px-1">
                        {product.middleNode}
                      </span>
                    </div>
                  )}

                  {/* Level 3: Base Layer (Full container width) */}
                  {product.baseNode && (
                    <div className="w-full p-2 text-center flex flex-col items-center justify-center bg-gradient-to-b from-[#F7F0E4] to-[#EFE6D8] rounded-b-md border border-[#BCA994]/20 shadow-xs">
                      <span className="text-[8px] font-black text-emerald-950 uppercase tracking-widest mb-0.5">
                        ▼ Base Note
                      </span>
                      <span className="text-xs text-gray-900 font-medium leading-tight px-1">
                        {product.baseNode}
                      </span>
                    </div>
                  )}

                </div>
              </div>
            )}
          </div>

          <div>
            {/* Input Selection Dropdown Module */}
            <div className="grid grid-cols-2 gap-3 mb-4 bg-[#F9F8F6] p-3 rounded-sm border border-gray-100">
              <div className="flex flex-col gap-1">
                <label className="text-[9px] md:text-[10px] font-bold text-gray-400 uppercase tracking-wider">Volume</label>
                <select 
                  value={selectedSize} 
                  onChange={(e) => setSelectedSize(e.target.value)}
                  className="bg-white border border-[#BCA994]/40 rounded px-2 py-1 md:py-1.5 text-xs outline-none focus:border-[#4B3A2F] cursor-pointer text-gray-800 font-medium w-full"
                >
                  {Object.keys(variants).map((size) => (
                    <option key={size} value={size}>{size}</option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[9px] md:text-[10px] font-bold text-gray-400 uppercase tracking-wider">Quantity</label>
                <select 
                  value={quantity} 
                  onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
                  className="bg-white border border-[#BCA994]/40 rounded px-2 py-1 md:py-1.5 text-xs outline-none focus:border-[#4B3A2F] cursor-pointer text-gray-800 font-medium w-full"
                >
                  {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Dynamic Price Calculations */}
            <div className="flex items-center justify-between border-t border-gray-100 pt-3 mb-4">
              <span className="text-xs md:text-sm font-serif text-[#4B3A2F]">Calculated Subtotal:</span>
              <div className="text-right">
                <div className="text-xl md:text-2xl font-bold text-[#1B3022]">
                  {formattedTotalPrice}
                </div>
                {currentVariant.launchPrice && (
                  <span className="text-[9px] md:text-[10px] text-emerald-700 font-medium bg-emerald-50 px-2 py-0.5 rounded-full block mt-0.5">
                    Launch discount active
                  </span>
                )}
              </div>
            </div>

            {/* Checkout Action Button */}
            <a 
              href={`https://wa.me/919625663589?text=${whatsappMessage}`}

              target="_blank" 
              rel="noopener noreferrer" 
              style={{ '--btn-bg': primaryBtnColor, '--btn-hover': primaryBtnHoverColor }}
              className="flex items-center justify-center gap-2 md:gap-3 w-full py-2.5 md:py-3 bg-[var(--btn-bg)] hover:bg-[var(--btn-hover)] text-white font-medium rounded shadow-sm transition-all duration-300"
            >
              <FaWhatsapp className="text-lg md:text-xl" />
              <span className="text-xs md:text-sm uppercase tracking-wider font-bold">
                Order via WhatsApp
              </span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetailModal;
