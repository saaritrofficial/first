
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
import React, { useState } from 'react';
// import { collections, PRICE_TIERS } from '../data/ProductDetails'; 

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
    "8ml (mono)": { price: "₹299", launchPrice: "₹200" },
    "8ml (box)": { price: "₹399", launchPrice: "₹280" },
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


// 1. Create a sub-component for the individual Product Card
const ProductCard = ({ product, index }) => {
  // Local state for each card's selected size
  const [selectedSize, setSelectedSize] = React.useState("60ml");
  
  
  const variants = product.premium === "yes" ? PRICE_TIERS.premium : PRICE_TIERS.standard;


    // Get current price based on selected size from the chosen tier
    const currentVariant = variants[selectedSize];

 

  return (
    <div className="group relative animate-fade-up" style={{ animationDelay: `${index * 0.15}s` }}>
      <div className="relative overflow-hidden bg-card rounded-sm">
        {/* Image Container Code remains the same... */}
        <div className="group relative aspect-square overflow-hidden">
             {product.premium && (
                <div className="absolute top-0 left-0 z-20 w-32 h-32 overflow-hidden pointer-events-none">
                    <div className="absolute top-[22px] left-[-34px] w-[160px] rotate-[-45deg] bg-yellow-500 text-black text-sm font-black py-1.5 shadow-md text-center uppercase tracking-wider"> Premium </div>
                </div>
             )}
            <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        <div className="p-6">
          <h3 className="font-serif text-2xl text-foreground mb-2">{product.name}</h3>
          <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
          
          <ul className="text-sm font-medium mb-4 space-y-1">
            <li>Top Note: {product.topNode}</li>
            <li>Heart Note: {product.middleNode}</li>
            <li>Base Note: {product.baseNode}</li>
          </ul>

         {/* Size and Price on the same line */}
<div className="flex flex-wrap items-center gap-4 mb-4">
  {/* Size Selection */}
  <div className="flex items-center gap-2">
    {/* <span className="text-sm font-normal text-muted-foreground whitespace-nowrap">Size:</span> */}
    <select 
      value={selectedSize} 
      onChange={(e) => setSelectedSize(e.target.value)}
      className="bg-background border border-primary/20 rounded px-2 py-1 text-sm outline-none focus:border-primary cursor-pointer"
    >
     {Object.keys(variants).map((size) => (
            <option key={size} value={size}>{size}</option>
          ))}
    </select>
  </div>

  {/* Dynamic Price */}
  <div className="flex items-center gap-2 text-lg font-medium">
    {currentVariant.launchPrice ? (
      <>
        <span className="line-through decoration-red-500 text-red-500 text-sm">
          {currentVariant.price}
        </span>
        <span className="text-green-500">
          {currentVariant.launchPrice}
        </span>
      </>
    ) : (
      <span>{currentVariant.price}</span>
    )}
  </div>

        <a 
        href={`https://wa.me/919625663589?text=${encodeURIComponent(`Hi! I'm interested in ${product.name}. What quantity can I opt for ?`)}`}
            target="_blank" 
          rel="noopener noreferrer" 
          className="ml-auto flex items-center gap-2 px-3 py-1.5 border border-[#25D366]/30 rounded-full hover:bg-[#25D366]/10 transition-all duration-300 group/wa"
        >
          <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold group-hover/wa:text-[#25D366]">
            Order on
          </span>
          <FaWhatsapp className="text-[#25D366] text-xl" />
        </a>
      </div>
        </div>
        <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/30 transition-all duration-500 pointer-events-none" />
      </div>
    </div>
  );
};

// 2. Main Collections Component
const Collections = () => {
  return (
    <section id="collections" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
            {/* Header code remains the same... */}
            <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-12 h-px bg-gradient-to-r from-transparent to-primary" />
                <span className="text-xs tracking-[0.4em] text-primary uppercase"> Signature Scents </span>
                <div className="w-12 h-px bg-gradient-to-l from-transparent to-primary" />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-4"> Our Collections </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
