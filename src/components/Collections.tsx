import perfumeOud from "@/assets/perfume-oud.jpg";
import perfumeFloral from "@/assets/perfume-floral.jpg";
import perfumeWoody from "@/assets/perfume-woody.jpg";
import saarColdRush from "@/assets/Cold_Rush_image.jpg";
import saarAmberDrift from "@/assets/Amber_Drift_image.jpg";
import saarAquaImage from "@/assets/Aqua_Aura_image.jpg";

const collections = [
  {
    id: 1,
    name: "Cold Rush",
    description: "Cold and Rush",
    image: saarColdRush,
    price: "₹4,200",
  },
  {
    id: 2,
    name: "Amber Drift",
    description: "Amber Drift",
    image: saarAmberDrift,
    price: "₹4,800",
  },
  {
    id: 3,
    name: "Aqua",
    description: "Aqua",
    image: saarAquaImage,
    price: "₹5,200",
  },
  {
    id: 4,
    name: "Royal Oud",
    description: "Rich, smoky, and deeply sensual",
    image: perfumeOud,
    price: "₹4,500",
  },
  {
    id: 5,
    name: "Rose & Jasmine",
    description: "Delicate florals with warm undertones",
    image: perfumeFloral,
    price: "₹3,800",
  },
  {
    id: 6,
    name: "Sandalwood Cedar",
    description: "Earthy, grounding, and timeless",
    image: perfumeWoody,
    price: "₹4,200",
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
            Each fragrance tells a story, handcrafted using traditional methods
            passed down through generations.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((product, index) => (
            <div
              key={product.id}
              className="group relative animate-fade-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative overflow-hidden bg-card rounded-sm">
                {/* Image Container */}
                <div className="aspect-square overflow-hidden">
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
                  <div className="flex items-center justify-between">
                    <span className="text-primary font-medium">
                      {product.price}
                    </span>
                    <button className="btn-outline-luxury px-4 py-2 text-xs tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      View Details
                    </button>
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
          <button className="btn-luxury px-12 py-4 text-sm tracking-widest uppercase font-medium relative z-10">
            <span className="relative z-10">View All Collections</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Collections;
