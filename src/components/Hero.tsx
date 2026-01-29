import heroImage from "@/assets/hero-perfume.jpg";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury perfume bottles"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-4 mb-8 animate-fade-in">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-primary" />
            <span className="text-xs tracking-[0.5em] text-primary uppercase">
              Luxury Fragrances
            </span>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-primary" />
          </div>

          {/* Main Title */}
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light mb-6 animate-fade-up">
            <span className="block text-gold-gradient">SAAR</span>
            <span className="block text-2xl md:text-3xl lg:text-4xl text-foreground/90 tracking-[0.3em] mt-2">
              itr
            </span>
          </h1>

          {/* Tagline */}
          <p
            className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto mb-12 font-light tracking-wide animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Where ancient traditions meet modern artistry. Each fragrance is a
            journey through time, crafted with the finest natural essences.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <button className="btn-luxury px-10 py-4 text-sm tracking-widest uppercase font-medium relative z-10">
              <span className="relative z-10">Discover Collection</span>
            </button>
            <button className="btn-outline-luxury px-10 py-4 text-sm tracking-widest uppercase font-medium">
              Our Story
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <a
          href="#collections"
          className="flex flex-col items-center gap-2 text-foreground/50 hover:text-primary transition-colors"
        >
          <span className="text-xs tracking-widest uppercase">Explore</span>
          <ChevronDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
