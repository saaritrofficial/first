import saarBlueedge from "@/assets/Blue_Edge_image.jpg";
import saarAmberDrift from "@/assets/Amber_Drift_image.jpg";
import saarAquaImage from "@/assets/Aqua_Aura_image.jpg";
import saarColdRush from "@/assets/Cold_Rush_image.jpg";
import saarStoneedge from "@/assets/Stone_edge_image.jpg";
import saarFlore from "@/assets/Flore_Essence_image.jpg";
import saarGoldenaura from "@/assets/Golden_Aura_image.jpg";
import saarKingmyst from "@/assets/King_Mystique_image.jpg";
import saarOudeternal from "@/assets/Oud_Eternal_image.jpg";
import saarPulse from "@/assets/Pluse-X_image.jpg";
import { FaWhatsapp } from "react-icons/fa";
import React, { useState, useRef  } from 'react';

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

const collections = [
  {
    id: 1,
    name: "Blue Edge",
    description: "Fresh, Warm and Woody",
    topNode: "Lemon, Mint, Grapefruit ",
    middleNode: "Ginger, Jasmine",
    baseNode: "Woody, Sandalwood, Amber",
    image: saarBlueedge,
    premium: "yes",
  },
  {
    id: 6,
    name: "Aqua Aura",
    description: "Fresh, Floral and Musky",
    topNode: "Lemon, Bergamot, Fresh Notes ",
    middleNode: "Jasmine, Rosemary",
    baseNode: "Musky, Cedar",
    image: saarAquaImage
  },
  {
    id: 2,
    name: "Golden Aura",
    description: "Fruity, Spicy and Woody",
    topNode: "Orange, Grapefruit, Mint",
    middleNode: "Cinnamon, Spicy, Rose",
    baseNode: "Woody, Amber, Leathery",
    image: saarGoldenaura
  },
  {
    id: 3,
    name: "Oud Eternal",
    description: "Floral, Earthy and Musky",
    topNode: "Rose, Saffron",
    middleNode: "Patchouli, Sweet Caramel",
    baseNode: "Oud, Musky, Ambery",
    image: saarOudeternal,
    premium: "yes"
  },
  {
    id: 7,
    name: "Cool Rush",
    description: "Citrus, Spicy and Woody",
    topNode: "Fresh Citrus, Green Notes",
    middleNode: "Spicy, Aromatic",
    baseNode: "Woody, Musky",
    image: saarColdRush
  },
  {
    id: 4,
    name: "Pulse-X",
    description: "Green, Floral and Musky",
    topNode: "Citrus, Green",
    middleNode: "Spicy, Floral",
    baseNode: "Woody, Musky",
    image: saarPulse
  },
  {
    id: 5,
    name: "Amber Drift",
    description: "Warm, Goumand and Amber",
    topNode: "Spicy, Cardamon",
    middleNode: "Sweet, Creamy, Caramel Accord",
    baseNode: "Amber, Woody, Vanilla",
    image: saarAmberDrift
  },
  {
    id: 8,
    name: "Stone Edge",
    description: "Aquatic, Aromatic and Amber",
    topNode: "Citrus, Fresh Notes ",
    middleNode: "Creamy, Sweet",
    baseNode: "Musky, Ambery",
    image: saarStoneedge
  },
  {
    id: 9,
    name: "King Mystique",
    description: "Green, Floral and Earthy",
    topNode: "Bergamot, Sandalwood",
    middleNode: "Lavender, Cardamom, Cypress",
    baseNode: "Oud, Leathery, Musky",
    image: saarKingmyst,
    premium: "yes"
  },
  {
    id: 10,
    name: "Florė Essence",
    description: "Citrus, Floral and Woody",
    topNode: "Peony, Citrus, Orange",
    middleNode: "Fruity, Floral, Rose",
    baseNode: "Woody, Sandalwood, Pink Pepper",
    image: saarFlore
  }
];

// Product Card Sub-component
const ProductCard = ({ product, index }) => {
  const [selectedSize, setSelectedSize] = useState("60ml");
  const variants = product.premium === "yes" ? PRICE_TIERS.premium : PRICE_TIERS.standard;
  const currentVariant = variants[selectedSize];

  return (
    <div className="group relative animate-fade-up" style={{ animationDelay: `${index * 0.15}s` }}>
      <div className="relative overflow-hidden bg-white border border-[#BCA994]/10 rounded-sm shadow-sm hover:shadow-md transition-shadow duration-500">
        <div className="group relative aspect-square overflow-hidden bg-[#F9F8F6]">
          {product.premium === "yes" && (
            <div className="absolute top-0 left-0 z-20 w-32 h-32 overflow-hidden pointer-events-none">
              <div className="absolute top-[22px] left-[-34px] w-[160px] rotate-[-45deg] bg-yellow-500 text-black text-xs font-black py-1.5 shadow-md text-center uppercase tracking-wider">
                Premium
              </div>
            </div>
          )}
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
          />
        </div>

        <div className="p-6">
          <h3 className="font-serif text-2xl text-[#1A1A1A] mb-2">{product.name}</h3>
          <p className="text-gray-600 text-sm mb-4 min-h-[40px]">{product.description}</p>
          
          <ul className="text-sm font-medium mb-6 space-y-1.5 text-gray-700 border-t border-b border-[#BCA994]/10 py-3">
            <li><span className="font-bold text-gray-500 text-xs uppercase tracking-wider">Top:</span> {product.topNode}</li>
            <li><span className="font-bold text-gray-500 text-xs uppercase tracking-wider">Heart:</span> {product.middleNode}</li>
            <li><span className="font-bold text-gray-500 text-xs uppercase tracking-wider">Base:</span> {product.baseNode}</li>
          </ul>

          <div className="flex items-center justify-between gap-2 flex-wrap mt-4">
            <select 
              value={selectedSize} 
              onChange={(e) => setSelectedSize(e.target.value)}
              className="bg-white border border-[#BCA994]/40 rounded px-2.5 py-1 text-sm outline-none focus:border-[#4B3A2F] cursor-pointer text-gray-800"
            >
              {Object.keys(variants).map((size) => (
                <option key={size} value={size}>{size}</option>
              ))}
            </select>

            <div className="flex items-baseline gap-2 text-lg font-medium">
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

            <a 
              href={`https://wa.me/919625663589?text=${encodeURIComponent(
                `Hi! I'm interested in ${product.name}.\n\nSize: ${selectedSize}\nPrice: ${currentVariant.launchPrice || currentVariant.price}\n\nPlease provide more information.`
              )}`}    
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 px-3 py-1.5 border border-[#BCA994]/40 rounded-full hover:bg-[#4B3A2F]/5 transition-all duration-300 group/wa shadow-sm"
            >
              <span className="text-[10px] uppercase tracking-wider text-[#4B3A2F] font-bold">
                Order
              </span>
              <FaWhatsapp className="text-[#C6A27E] text-lg transition-transform group-hover/wa:scale-110" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Collections Component
const Collections = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const sectionRef = useRef(null);


  // Configure number of initial grid cards to preview
  const INITIAL_VISIBLE_COUNT = 4;

  const visibleProducts = isExpanded 
    ? collections 
    : collections.slice(0, INITIAL_VISIBLE_COUNT);

      // Toggle button actions
  const handleToggle = () => {
    if (isExpanded) {
      // If closing, toggle the state first, then smoothly snap layout viewpoint up
      setIsExpanded(false);
      sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      setIsExpanded(true);
    }
  };


  return (
    <section 
      ref={sectionRef} // Attached reference pointer here
      id="collections" 
      className="py-16 bg-[#FDFCFB] scroll-mt-20" // scroll-mt accounts for sticky headers if any
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-xs tracking-[0.4em] text-[#8D7B6D] uppercase block mb-3 font-bold">
            Our Masterpieces
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-[#1A1A1A] mb-4">
            The Fragrance Lounge
          </h2>
        </div>

        {/* Responsive Layout Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {visibleProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* View All Button Trigger Control */}
        {collections.length > INITIAL_VISIBLE_COUNT && (
          <div className="text-center mt-12 relative z-10">
            <button
              onClick={handleToggle}
              className="px-8 py-3 border border-[#4B3A2F] text-[#4B3A2F] rounded-full hover:bg-[#4B3A2F] hover:text-white transition-all duration-300 text-[11px] font-bold uppercase tracking-[0.2em] shadow-sm cursor-pointer"
            >
              {isExpanded ? "Show Less" : "View All Collections"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Collections;
