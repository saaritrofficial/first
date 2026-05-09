
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


const collections = [
  {
    id: 1,
    name: "Blue Edge",
    description: "Fresh, Wram and Woody",
    topNode: "Citrus ",
    middleNode: "Rose, Jasmine",
    baseNode: "Sandalwood",
    image: saarBlueedge,
    price: "₹4,200",
    launchPrice: "₹3,200",
    premium: "yes"
  },
  {
    id: 6,
    name: "Aqua Aura",
    description: "Fresh, Floral and  Musky",
    image: saarAquaImage,
    price: "₹5,200",
  },
  {
    id: 2,
    name: "Golden Aura",
    description: "Fruity, Spicy and Woody",
    image: saarGoldenaura,
    price: "₹4,200",
  },
  {
    id: 3,
    name: "Oud Eternal",
    description: "Fruity, Floral and Musky",
    image: saarOudeternal,
    price: "₹5,200",
  }, 
  {
    id: 7,
    name: "Cold Rush",
    description: "Citrus, Spicy and Woody",
    image: saarColdRush,
    price: "₹4,200",
  },
  {
    id: 4,
    name: "Pulse-X",
    description: "Green, Floral and Musky",
    image: saarPulse,
    price: "₹5,200",
  },
  {
    id: 5,
    name: "Amber Drift",
    description: "Warm, Goumand and Amberwood",
    image: saarAmberDrift,
    price: "₹4,800",
  },

  {
    id: 8,
    name: "Stone Edge",
    description: "Aquatic, Aromatic and Amber",
    image: saarStoneedge,
    price: "₹4,200",
  },
  {
    id: 9,
    name: "King Mystique",
    description: "Green, Floral and Earthy",
    image: saarKingmyst,
    price: "₹4,800",
  },
  {
    id: 10,
    name: "Florė Essence",
    description: "Citrus, Floral and Woody",
    image: saarFlore,
    price: "₹5,200",
  },
];

const Collections = () => {
  return (
    <section id="collections" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-primary" />
            <span className="text-xs tracking-[0.4em] text-primary uppercase">
              Signature Scents
            </span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-primary" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            Our Collections
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
          One collection. Infinite expressions.
          Crafted for every mood, every moment 
          <br></br>Saar defines your presence with every scent.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((product, index) => (
            <div
              key={product.id}
              // className="group relative animate-fade-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative overflow-hidden bg-card rounded-sm">

                {/* Image Container */}
                <div className="group relative aspect-square overflow-hidden">
                {product.premium && (
                  <div className="absolute top-0 left-0 z-20 w-32 h-32 overflow-hidden pointer-events-none">
                    <div className="absolute top-[22px] left-[-34px] w-[160px] rotate-[-45deg] bg-yellow-500 text-black text-sm font-black py-1.5 shadow-md text-center uppercase tracking-wider">
                      Premium
                    </div>
                  </div>
                )}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-serif text-2xl text-foreground mb-2">
                    {product.name} 
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {product.description}
                  </p>
                  <p className="text-base font-medium mb-4">
                    <li> Top Node: {product.topNode} </li>
                    <li> Middle Node: {product.middleNode} </li>
                    <li> Base Node: {product.baseNode} </li>
                  </p>

                  <p className="text-xl font-medium mb-4 flex items-center gap-2">
                  <span className="text-base font-normal">Price for 60ml:</span>

                    {/* Original Price */}
                    {product.launchPrice ? (
    <>
                      {/* Show both if launchPrice exists */}
                      <span className="line-through decoration-red-500 text-red-500">
                        {product.price}
                      </span>
                      <span className="text-green-500 inline-flex items-center gap-1">
                        {product.launchPrice}
                      </span>
                    </>
                  ) : (
                    /* Show only regular price if launchPrice doesn't exist */
                    <span>{product.price}</span>
                  )}
                      <span className="text-green-500 inline-flex items-center gap-1">

                      <a
                        // href={`https://wa.me/919422554485?text="Hi"`}

                       href={`https://wa.me/919625663589?text=${encodeURIComponent(`Hi! I'm interested in ${product.name}. What quantity can I opt for ?`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center hover:scale-110 transition-transform cursor-pointer"
                        >
                        <FaWhatsapp className="text-[#25D366] text-2xl" /> 

                        </a>
                    </span>
                  </p>
                  {/* <p className="text-xl font-medium mb-4">
                    <span className="line-through decoration-red-500 text-red-500">{product.price}</span>
                    <span> </span>
                    <span className ="text-green-500">{product.launchPrice}</span>
                  </p> */}
                  <div className="flex items-center justify-between">
                    {/* <span className="text-primary font-medium">
                      {product.price}
                    </span> */}
                    {/* <button className="btn-outline-luxury px-4 py-2 text-xs tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      View Details
                    </button> */}
                  </div>
                </div>

                {/* Decorative Border on Hover */}
                <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/30 transition-all duration-500 pointer-events-none" />
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          {/* <button className="btn-luxury px-12 py-4 text-sm tracking-widest uppercase font-medium relative z-10">
            <span className="relative z-10">View All Collections</span>
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default Collections;
