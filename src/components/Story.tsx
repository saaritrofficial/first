import { Sparkles, Leaf, Heart } from "lucide-react";
import ourstory from "@/assets/ourstory3.avif";

const features = [
  {
    icon: Sparkles,
    title: "Ancient Artistry",
    description:
      "Our perfumers carry forward centuries-old traditions, using time-honored distillation methods to capture the purest essence of each ingredient.",
  },
  {
    icon: Leaf,
    title: "Natural Ingredients",
    description:
      "We source only the finest natural materials from trusted suppliers around the world, ensuring authenticity and sustainability in every bottle.",
  },
  {
    icon: Heart,
    title: "Handcrafted with Love",
    description:
      "Each fragrance is meticulously blended by hand, allowing our master perfumers to create compositions that resonate with the soul.",
  },
];

const Story = () => {
  return (
    <section id="story" className="py-24 relative overflow-hidden bg-[#FDFCFB]">
      {/* Background Image - Balanced at 50% opacity */}
      <div className="absolute inset-0">
        <img
          src={ourstory}
          alt="Story background"
          className="w-full h-full object-cover opacity-50" 
        />
        {/* Subtle warm overlay to keep text popping without losing image detail */}
        <div className="absolute inset-0 bg-white/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FDFCFB]/80 via-transparent to-[#FDFCFB]/80" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-primary" />
            <span className="text-xs tracking-[0.4em] text-primary font-bold uppercase">
              The Art of Fragrance
            </span>
            <div className="w-12 h-px bg-primary" />
          </div>
          
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#1A1A1A] mb-8">
            Our Story
          </h2>
          
          {/* Condensed text blocks for better flow */}
          <div className="text-[#2D2D2D] max-w-3xl mx-auto text-lg leading-relaxed font-medium space-y-5">
            <p>
              SAAR was created with a simple belief — fragrance should feel personal, powerful, and rooted in identity. Inspired by India's rich perfumery heritage, especially the timeless traditions of Kannauj, SAAR blends cultural depth with modern refinement.
            </p>
            <p>
              Our fragrances are thoughtfully curated to suit Indian preferences, climate, and lifestyle — offering long-lasting performance with a premium feel. We don't just create perfumes. We create presence.
            </p>
            <p>
              In a world of fast trends and fleeting impressions, SAAR was born to bring back depth and meaning to fragrance. India has a long-standing legacy of perfumery, where scent has always been more than just a luxury — it has been a part of culture, rituals, and identity.
            </p>
            <p>
              In the historic city of Kannauj, this craft has been refined over generations. SAAR draws inspiration from this heritage and reimagines it for today — creating fragrances that are modern in expression, yet rooted in tradition.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="text-center p-8 bg-white/60 backdrop-blur-md rounded-sm border border-black/5 hover:border-primary transition-all duration-500 group animate-fade-up shadow-sm"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                <feature.icon size={28} strokeWidth={2} />
              </div>
              <h3 className="font-serif text-2xl text-[#1A1A1A] mb-4 font-semibold">
                {feature.title}
              </h3>
              <p className="text-[#333333] leading-relaxed font-medium">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="mt-20 text-center">
          <blockquote className="font-serif text-2xl md:text-3xl text-[#1A1A1A] italic max-w-4xl mx-auto">
            "A fragrance is more than a scent—it is a memory, an emotion, a
            journey that lingers long after the moment has passed."
          </blockquote>
          <cite className="block mt-6 text-primary font-bold tracking-widest text-sm uppercase not-italic">
            — SAAR : House of Fragrance
          </cite>
        </div>
      </div>
    </section>
  );
};

export default Story;