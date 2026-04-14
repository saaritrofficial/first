import { Sparkles, Leaf, Heart } from "lucide-react";

 const features = [
//    {
//    icon: Sparkles,
//     title: "Ancient Artistry",
//     description:
//      "Our perfumers carry forward centuries-old traditions, using time-honored distillation methods to capture the purest essence of each ingredient.",
//  },
//  {
//    icon: Leaf,
//    title: "Natural Ingredients",
//    description:
//     "We source only the finest natural materials from trusted suppliers around the world, ensuring authenticity and sustainability in every bottle.",
//  },
//    {
//      icon: Heart,
//      title: "Handcrafted with Love",
//      description:
//             "Each fragrance is meticulously blended by hand, allowing our master perfumers to create compositions that resonate with the soul.",
//    },
 ];
 import ourstory from "@/assets/ourstory3.avif";
const Story = () => {
  return (

    <section id="story" className="py-24 bg-card relative overflow-hidden">
       {/* Background Image */}
       <div className="absolute inset-0">
        <img
          src={ourstory}
         // alt="Luxury perfume bottles"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
      </div>
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-primary" />
            <span className="text-xs tracking-[0.4em] text-primary uppercase">
              The Art of Fragrance
            </span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-primary" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Our Story
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
          SAAR was created with a simple belief — fragrance should feel personal, powerful, and rooted in identity.

<br></br>Inspired by India's rich perfumery heritage, especially the timeless traditions of Kannauj, SAAR blends cultural depth with modern refinement.
Our fragrances are thoughtfully curated to suit Indian preferences, climate, and lifestyle — offering long-lasting performance with a premium feel.

<br></br>We don't just create perfumes. We create presence.

<br></br>In a world of fast trends and fleeting impressions, SAAR was born to bring back depth and meaning to fragrance.

India has a long-standing legacy of perfumery, where scent has always been more than just a luxury — it has been a part of culture, rituals, and identity.

<br></br>In the historic city of Kannauj, this craft has been refined over generations, preserving the art of creating fragrances that linger not just on the skin, but in memory.

<br></br>SAAR draws inspiration from this heritage and reimagines it for today — creating fragrances that are modern in expression, yet rooted in tradition.


          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="text-center p-8 bg-background/50 rounded-sm border border-border hover:border-primary/30 transition-all duration-500 group animate-fade-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6 group-hover:scale-110 transition-transform duration-500">
                <feature.icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-2xl text-foreground mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="mt-20 text-center">
          <blockquote className="font-serif text-2xl md:text-3xl text-foreground/80 italic max-w-4xl mx-auto">
            "A fragrance is more than a scent—it is a memory, an emotion, a
            journey that lingers long after the moment has passed."
          </blockquote>
          <cite className="block mt-6 text-primary tracking-widest text-sm uppercase not-italic">
            — SAAR : House of Fragrance
          </cite>
        </div>
      </div>
    </section>
  );
};

export default Story;
