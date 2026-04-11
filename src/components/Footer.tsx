import { Instagram, Facebook, Mail,MapPin , Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-charcoal border-t border-border">
      {/* Newsletter Section */}
      <div className="border-b border-border">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="font-serif text-3xl text-foreground mb-4">
              Join Our World
            </h3>
            <p className="text-muted-foreground mb-8">
              Subscribe for exclusive access to new collections, artisan stories,
              and special offers.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-background border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
              <button
                type="submit"
                className="btn-luxury px-8 py-4 text-sm tracking-widest uppercase font-medium"
              >
                <span className="relative z-10">Subscribe</span>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-6">
              <span className="font-serif text-3xl font-semibold tracking-wide text-gold-gradient">
                SAAR
              </span>
              <span className="block text-xs tracking-[0.4em] text-muted-foreground uppercase">
                itr
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Crafting timeless fragrances that capture the essence of tradition
              and luxury.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-medium tracking-wider uppercase text-sm mb-6">
              Explore
            </h4>
            <ul className="space-y-3">
              {["Home", "Collections", "Our Story", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
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
            <h4 className="text-foreground font-medium tracking-wider uppercase text-sm mb-6">
              Support
            </h4>
            <ul className="space-y-3">
              {["Shipping", "Returns", "FAQ", "Privacy Policy"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-foreground font-medium tracking-wider uppercase text-sm mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary mt-0.5" />
                <span className="text-muted-foreground text-sm">
                  mumbai
                  <br />
                  India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary" />
                <a
                  href="tel:+919625663589"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  +91 9625663589
                  <br></br>+91 9336248022
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary" />
                <a
                  href="mailto:info@saaritr.in"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  info@saaritr.in
                </a>
              </li>
              {/* <li className="flex items-center gap-3">
                <Instagram size={18} className="text-primary" />
                <a
                  href="Saar_Itr"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Saar_Itr
                </a>
              </li> */}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} SAAR itr. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all"
            >
              <Instagram size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all"
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
