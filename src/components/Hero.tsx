import heroImage from "@/assets/saar_main.jpeg";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Background Image Container */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury perfume bottles"
          className="w-full h-full object-cover opacity-40" // Lowered opacity to make it lighter
        />
        {/* Lighter Overlays to ensure legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/40 to-white/20" />
        <div className="absolute inset-0 bg-white/10" /> 
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Decorative Line - Darkened to Primary color */}
          <div className="flex items-center justify-center gap-4 mb-8 animate-fade-in">
            <div className="w-16 h-px bg-primary" />
            <span className="text-xs tracking-[0.5em] text-primary font-bold uppercase">
              Luxury Fragrances
            </span>
            <div className="w-16 h-px bg-primary" />
          </div>

          {/* Main Title */}
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light mb-6 animate-fade-up">
            {/* Darker gold/bronze for better visibility */}
            <span className="block text-[#5C4033] font-semibold">SAAR</span>
            <span className="block text-2xl md:text-3xl lg:text-4xl text-[#2C1E16] tracking-[0.3em] mt-2 font-medium">
              itr
            </span>
          </h1>

          {/* Tagline - Changed to a deep dark gray/brown */}
          <p
            className="text-lg md:text-xl text-[#1A1A1A] max-w-2xl mx-auto mb-12 font-medium tracking-wide animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            SAAR is a contemporary fragrance brand inspired by the depth and richness of Indian perfumery traditions.
          </p>
        </div>
      </div>

      {/* Scroll Indicator - Darkened for visibility */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <a
          href="#collections"
          className="flex flex-col items-center gap-2 text-[#2C1E16] hover:text-primary transition-colors"
        >
          <span className="text-xs tracking-widest uppercase font-bold">Explore</span>
          <ChevronDown size={24} strokeWidth={3} />
        </a>
      </div>
    </section>
  );
};

export default Hero;