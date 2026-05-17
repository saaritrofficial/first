import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Collections from "@/components/Collections";
import Story from "@/components/Story";
import Footer from "@/components/Footer";
import Combos from "@/components/Combo";
import HeroCarousel from "@/components/HeroCarousel";
import OfferMarquee from "@/components/OfferMarquee";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import FAQSection from "@/components/FAQSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="mt-[64px]"> {/* Adjust '64px' to match your navbar's height */}
         <OfferMarquee />
      </div>
      <HeroCarousel />
      {/* <Hero /> */}
      <Collections />
      <Combos/>
      <Story />
      <TestimonialsCarousel/>
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
