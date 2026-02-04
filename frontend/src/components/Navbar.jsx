import { useState, useEffect, createContext, useContext } from "react";
import { translations } from "../config/translations";
import { Menu as MenuIcon, X } from "lucide-react";

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("bg");
  
  const t = (key) => {
    if (!key) return "";
    if (typeof key === "object" && key[lang]) return key[lang];
    if (typeof key === "object" && key.en) return key.en;
    return key;
  };
  
  const getText = (enText, bgText) => lang === "bg" ? bgText : enText;
  
  return (
    <LanguageContext.Provider value={{ lang, setLang, t, getText }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const Navbar = () => {
  const { lang, setLang, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const navItems = [
    { href: "#home", label: translations.nav.home },
    { href: "#menu", label: translations.nav.menu },
    { href: "#locations", label: translations.nav.locations },
    { href: "#reviews", label: translations.nav.reviews },
    { href: "#gallery", label: translations.nav.gallery },
    { href: "#contact", label: translations.nav.contact },
  ];
  
  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-md py-2" : "bg-transparent py-4"
      }`}
      data-testid="navbar"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2" data-testid="logo">
            <span className="text-xl md:text-2xl font-heading font-bold text-diana-purple">
              Diana
            </span>
            <span className="hidden sm:inline text-sm text-text-muted font-body">
              Balchik
            </span>
          </a>
          
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-text-main hover:text-diana-purple transition-colors"
                data-testid={`nav-${item.href.replace('#', '')}`}
              >
                {t(item.label)}
              </a>
            ))}
          </div>
          
          <div className="flex items-center gap-3">
            <div className="flex items-center bg-white/80 rounded-full p-1 shadow-sm" data-testid="language-toggle">
              <button
                onClick={() => setLang("bg")}
                className={`px-3 py-1 text-sm font-medium rounded-full transition-all ${
                  lang === "bg" 
                    ? "bg-diana-purple text-white" 
                    : "text-text-muted hover:text-diana-purple"
                }`}
                data-testid="lang-bg"
              >
                BG
              </button>
              <button
                onClick={() => setLang("en")}
                className={`px-3 py-1 text-sm font-medium rounded-full transition-all ${
                  lang === "en" 
                    ? "bg-diana-purple text-white" 
                    : "text-text-muted hover:text-diana-purple"
                }`}
                data-testid="lang-en"
              >
                EN
              </button>
            </div>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-diana-purple"
              data-testid="mobile-menu-toggle"
            >
              {isOpen ? <X size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
        
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in-up" data-testid="mobile-nav">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 text-base font-medium text-text-main hover:bg-diana-purple/10 rounded-xl transition-colors"
                  data-testid={`mobile-nav-${item.href.replace('#', '')}`}
                >
                  {t(item.label)}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
