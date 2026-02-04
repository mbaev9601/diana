import { useLanguage } from "./Navbar";
import { siteConfig } from "../config/siteConfig";
import { translations } from "../config/translations";
import { Button } from "./ui/button";
import { Phone, Star, Coffee, Utensils, ChevronRight, Navigation } from "lucide-react";

export const HeroSection = () => {
  const { t } = useLanguage();
  const coffeeLocation = siteConfig.locations[0];
  const burgerLocation = siteConfig.locations[1];
  
  return (
    <section id="home" className="relative min-h-screen pt-20" data-testid="hero-section">
      <div className="absolute inset-0 bg-latte-cream">
        <div className="absolute inset-0 hero-overlay" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-text-main mb-4 animate-fade-in-up">
            {t(translations.hero.headline)}
          </h1>
          <p className="text-lg md:text-xl text-text-muted font-body animate-fade-in-up animation-delay-100">
            {t(translations.hero.subheadline)}
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-10 animate-fade-in-up animation-delay-200">
          <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-card" data-testid="badge-coffee">
            <Star className="w-5 h-5 text-warm-gold fill-warm-gold" />
            <span className="font-semibold text-text-main">{coffeeLocation.rating}</span>
            <span className="text-text-muted text-sm">({coffeeLocation.reviewCount})</span>
            <span className="text-diana-purple font-medium">{t(translations.hero.coffeeShop)}</span>
          </div>
          <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-card" data-testid="badge-burger">
            <Star className="w-5 h-5 text-warm-gold fill-warm-gold" />
            <span className="font-semibold text-text-main">{burgerLocation.rating}</span>
            <span className="text-text-muted text-sm">({burgerLocation.reviewCount})</span>
            <span className="text-savory-orange font-medium">{t(translations.hero.restaurantBar)}</span>
          </div>
          <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-card" data-testid="badge-price">
            <span className="text-text-muted text-sm">{coffeeLocation.priceRange}</span>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          <div className="relative group overflow-hidden rounded-3xl shadow-card card-hover animate-fade-in-up animation-delay-300" data-testid="hero-card-coffee">
            <div className="aspect-[4/3] relative">
              <img 
                src={siteConfig.gallery.images[0].url}
                alt={t(siteConfig.gallery.images[0].alt)}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-diana-purple/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <Coffee className="w-6 h-6" />
                  <span className="text-sm font-medium opacity-90">{t(coffeeLocation.type)}</span>
                </div>
                <h3 className="text-2xl font-heading font-bold mb-2">{t(coffeeLocation.name)}</h3>
                <p className="text-sm opacity-90">{t(coffeeLocation.focus)}</p>
              </div>
            </div>
          </div>
          
          <div className="relative group overflow-hidden rounded-3xl shadow-card card-hover animate-fade-in-up animation-delay-400" data-testid="hero-card-burger">
            <div className="aspect-[4/3] relative">
              <img 
                src={siteConfig.gallery.images[1].url}
                alt={t(siteConfig.gallery.images[1].alt)}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-savory-orange/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <Utensils className="w-6 h-6" />
                  <span className="text-sm font-medium opacity-90">{t(burgerLocation.type)}</span>
                </div>
                <h3 className="text-2xl font-heading font-bold mb-2">{t(burgerLocation.name)}</h3>
                <p className="text-sm opacity-90">{t(burgerLocation.focus)}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up animation-delay-500">
          <Button
            size="lg"
            className="bg-diana-purple hover:bg-diana-purple-light text-white rounded-full px-8 py-6 text-base font-semibold shadow-lg"
            asChild
            data-testid="cta-call"
          >
            <a href={`tel:${siteConfig.contact.phone}`}>
              <Phone className="w-5 h-5 mr-2" />
              {t(translations.buttons.callNow)}
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-diana-purple text-diana-purple hover:bg-diana-purple hover:text-white rounded-full px-8 py-6 text-base font-semibold"
            asChild
            data-testid="cta-directions"
          >
            <a href={siteConfig.contact.googleMapsUrl} target="_blank" rel="noopener noreferrer">
              <Navigation className="w-5 h-5 mr-2" />
              {t(translations.buttons.getDirections)}
            </a>
          </Button>
          <Button
            size="lg"
            variant="ghost"
            className="text-diana-purple hover:bg-diana-purple/10 rounded-full px-8 py-6 text-base font-semibold"
            asChild
            data-testid="cta-menus"
          >
            <a href="#menu">
              {t(translations.buttons.seeMenus)}
              <ChevronRight className="w-5 h-5 ml-1" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
