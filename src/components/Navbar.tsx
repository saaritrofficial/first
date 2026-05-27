import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Saar_Logo from "../assets/saar_logo_noBg.png";
import Saar_text from "../assets/saar_text_removebg.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Collections", href: "#collections" },
    { name: "Our Story", href: "#story" },
    { name: "Testimonials", href: "#testimonials" }, 
    { name: "FAQ", href: "#faq" }, 
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || isMobileMenuOpen
          ? "bg-white border-b border-border shadow-sm md:bg-background/95 md:backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo links */}
          <a href="#" className="flex items-center gap-2">
            <img 
              src={Saar_Logo} 
              alt="SAAR Logo" 
              className="h-10 w-auto md:h-12"
            />
            <img 
              src={Saar_text} 
              alt="SAAR Typography" 
              className="h-8 w-auto md:h-8"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm tracking-wider uppercase text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button Trigger */}
          <button
            className="md:hidden text-foreground p-1 rounded focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Flyout Menu - Enforced Solid Card Background */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4 bg-white animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm tracking-wider uppercase text-foreground/80 hover:text-primary transition-colors duration-300 pt-1"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button className="btn-outline-luxury px-6 py-2 text-sm tracking-wider uppercase mt-2 w-full text-center">
                Shop Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
