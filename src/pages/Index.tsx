import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Collections from "@/components/Collections";
import Story from "@/components/Story";
import Footer from "@/components/Footer";
import OfferMarquee from "@/components/OfferMarquee";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="mt-[64px]"> {/* Adjust '64px' to match your navbar's height */}
         <OfferMarquee />
      </div>
      <Hero />
      <Collections />
      <Story />
      <Footer />
    </div>
  );
};

export default Index;
