import { useLanguage } from "./Navbar";
import { contact, tagline, social } from "../config/siteConfig";
import { translations } from "../config/translations";
import { Facebook, Instagram, Heart } from "lucide-react";

export const Footer = () => {
  const { t, lang } = useLanguage();
  
  return (
    <footer className="bg-diana-purple text-white py-12" data-testid="footer">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-heading font-bold mb-4">Diana Balchik</h3>
            <p className="text-white/80 text-sm">
              {t(tagline)}
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">{t(translations.contact.title)}</h4>
            <div className="space-y-2 text-sm text-white/80">
              <p>{lang === "bg" ? contact.addressBg : contact.address}</p>
              <a href={`tel:${contact.phone}`} className="hover:text-white transition-colors block">
                {contact.phone}
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Social</h4>
            <div className="flex gap-4">
              <a 
                href={social.facebook} 
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Facebook"
                data-testid="social-facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href={social.instagram}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
                data-testid="social-instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} Diana Balchik. {t(translations.footer.rights)}.
          </p>
          <p className="text-sm text-white/60 flex items-center gap-1">
            {t(translations.footer.madeWith)} <Heart className="w-4 h-4 text-savory-orange fill-savory-orange" /> {t(translations.footer.inBalchik)}
          </p>
        </div>
      </div>
    </footer>
  );
};
