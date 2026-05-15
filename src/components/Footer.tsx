import { Instagram, Facebook, Mail, MapPin, Phone } from "lucide-react";
import { FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    // Changed to a sophisticated light brown / warm tan
    <footer id="contact" className="bg-[#DBCBB8] border-t border-[#BCA994]">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-6">
              <span className="font-serif text-3xl font-semibold tracking-wide text-[#4B3A2F]">
                SAAR
              </span>
              <span className="block text-xs tracking-[0.4em] text-[#5D4037] font-bold uppercase">
                itr
              </span>
            </div>
            <p className="text-[#5D4037] font-medium text-sm leading-relaxed">
              Crafting timeless fragrances that capture the essence of tradition
              and luxury.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#3E2723] font-bold tracking-wider uppercase text-sm mb-6">
              Explore
            </h4>
            <ul className="space-y-3">
              {["Home", "Collections", "Our Story", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[#5D4037] hover:text-[#8D6E63] transition-colors text-sm font-semibold"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-[#3E2723] font-bold tracking-wider uppercase text-sm mb-6">
              Support
            </h4>
            <ul className="space-y-3">
              {["Shipping", "Returns", "FAQ", "Privacy Policy"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-[#5D4037] hover:text-[#8D6E63] transition-colors text-sm font-semibold"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#3E2723] font-bold tracking-wider uppercase text-sm mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <a 
                  href="https://wa.me/919625663589?" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:opacity-80 transition-opacity"
                >
                  {/* WhatsApp in a darker brown-gold for better visibility on tan */}
                  <FaWhatsapp size={20} className="text-[#795548] mt-0.5" /> 
                  <span className="text-[#3E2723] font-bold text-sm">
                    Saar Itr
                  </span>
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[#795548]" />
                <a
                  href="tel:+919625663589"
                  className="text-[#3E2723] font-bold hover:text-[#8D6E63] transition-colors text-sm"
                >
                  +91 9625663589
                  <br />+91 9336248022
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[#795548]" />
                <a
                  href="mailto:info@saaritr.in"
                  className="text-[#3E2723] font-bold hover:text-[#8D6E63] transition-colors text-sm"
                >
                  info@saaritr.in
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Instagram size={18} className="text-[#795548]" />
                <a
                  href="https://www.instagram.com/saar_itr/"
                  className="text-[#3E2723] font-bold hover:text-[#8D6E63] transition-colors text-sm"
                >
                  Saar_Itr
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#BCA994] mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#5D4037] font-bold text-sm">
            © {currentYear} SAAR itr. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-[#BCA994] flex items-center justify-center text-[#3E2723] hover:bg-[#BCA994] transition-all"
            >
              <Instagram size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-[#BCA994] flex items-center justify-center text-[#3E2723] hover:bg-[#BCA994] transition-all"
            >
              <Facebook size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;