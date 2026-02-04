import { useState, useEffect, createContext, useContext } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { siteConfig } from "./config/siteConfig";
import { translations } from "./config/translations";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { Dialog, DialogContent, DialogClose } from "./components/ui/dialog";
import { 
  Phone, 
  MapPin, 
  Star, 
  Menu as MenuIcon, 
  X, 
  Coffee, 
  Utensils, 
  ChevronRight,
  Heart,
  Facebook,
  Instagram,
  Globe,
  Clock,
  Navigation
} from "lucide-react";

// Language Context
const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("bg");
  
  const t = (obj) => {
    if (!obj) return "";
    return obj[lang] || obj.en || "";
  };
  
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Navigation Component
const Navbar = () => {
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
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2" data-testid="logo">
            <span className="text-xl md:text-2xl font-heading font-bold text-diana-purple">
              Diana
            </span>
            <span className="hidden sm:inline text-sm text-text-muted font-body">
              Balchik
            </span>
          </a>
          
          {/* Desktop Navigation */}
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
          
          {/* Language Toggle + Mobile Menu */}
          <div className="flex items-center gap-3">
            {/* Language Toggle */}
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
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-diana-purple"
              data-testid="mobile-menu-toggle"
            >
              {isOpen ? <X size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
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

// Hero Section
const HeroSection = () => {
  const { t } = useLanguage();
  const coffeeLocation = siteConfig.locations[0];
  const burgerLocation = siteConfig.locations[1];
  
  return (
    <section id="home" className="relative min-h-screen pt-20" data-testid="hero-section">
      {/* Background */}
      <div className="absolute inset-0 bg-latte-cream">
        <div className="absolute inset-0 hero-overlay" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Hero Content */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-text-main mb-4 animate-fade-in-up">
            {t(translations.hero.headline)}
          </h1>
          <p className="text-lg md:text-xl text-text-muted font-body animate-fade-in-up animation-delay-100">
            {t(translations.hero.subheadline)}
          </p>
        </div>
        
        {/* Rating Badges */}
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
        
        {/* Dual Concept Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {/* Coffee Card */}
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
          
          {/* Burger Card */}
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
        
        {/* CTA Buttons */}
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

// Menu Section
const MenuSection = () => {
  const { t, lang } = useLanguage();
  const [activeTab, setActiveTab] = useState("coffee");
  
  const coffeeMenu = siteConfig.menus.coffee;
  const burgerMenu = siteConfig.menus.burger;
  
  return (
    <section id="menu" className="section-padding bg-white" data-testid="menu-section">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-text-main mb-4">
            {t(translations.menu.title)}
          </h2>
          <p className="text-text-muted font-body">
            {t(siteConfig.brand.tagline)}
          </p>
        </div>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-2 gap-2 w-full max-w-md mx-auto mb-8 bg-latte-cream p-1 rounded-full" data-testid="menu-tabs">
            <TabsTrigger 
              value="coffee"
              className={`rounded-full py-3 px-4 font-semibold transition-all data-[state=active]:bg-diana-purple data-[state=active]:text-white data-[state=inactive]:text-text-muted`}
              data-testid="menu-tab-coffee"
            >
              <Coffee className="w-4 h-4 mr-2" />
              {t(translations.menu.coffeeSweets)}
            </TabsTrigger>
            <TabsTrigger 
              value="burger"
              className={`rounded-full py-3 px-4 font-semibold transition-all data-[state=active]:bg-savory-orange data-[state=active]:text-white data-[state=inactive]:text-text-muted`}
              data-testid="menu-tab-burger"
            >
              <Utensils className="w-4 h-4 mr-2" />
              {t(translations.menu.burgersBagels)}
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="coffee" className="animate-fade-in-up" data-testid="menu-content-coffee">
            <div className="space-y-8">
              {coffeeMenu.sections.map((section, idx) => (
                <div key={idx} className="bg-latte-cream rounded-2xl p-6">
                  <h3 className="text-xl font-heading font-semibold text-diana-purple mb-4">
                    {t(section.name)}
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {section.items.map((item, itemIdx) => (
                      <div 
                        key={itemIdx}
                        className="flex justify-between items-start bg-white rounded-xl p-4 shadow-sm"
                        data-testid={`menu-item-coffee-${idx}-${itemIdx}`}
                      >
                        <div>
                          <h4 className="font-semibold text-text-main">{t(item.name)}</h4>
                          <p className="text-sm text-text-muted">{t(item.description)}</p>
                        </div>
                        <span className="font-semibold text-diana-purple whitespace-nowrap ml-4">
                          {item.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="burger" className="animate-fade-in-up" data-testid="menu-content-burger">
            <div className="space-y-8">
              {burgerMenu.sections.map((section, idx) => (
                <div key={idx} className="bg-latte-cream rounded-2xl p-6">
                  <h3 className="text-xl font-heading font-semibold text-savory-orange mb-4">
                    {t(section.name)}
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {section.items.map((item, itemIdx) => (
                      <div 
                        key={itemIdx}
                        className="flex justify-between items-start bg-white rounded-xl p-4 shadow-sm"
                        data-testid={`menu-item-burger-${idx}-${itemIdx}`}
                      >
                        <div>
                          <h4 className="font-semibold text-text-main">{t(item.name)}</h4>
                          <p className="text-sm text-text-muted">{t(item.description)}</p>
                        </div>
                        <span className="font-semibold text-savory-orange whitespace-nowrap ml-4">
                          {item.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        {/* Menu Note */}
        <p className="text-center text-sm text-text-muted mt-8 italic" data-testid="menu-note">
          {t(translations.menu.menuNote)}
        </p>
      </div>
    </section>
  );
};

// Locations Section
const LocationsSection = () => {
  const { t, lang } = useLanguage();
  
  return (
    <section id="locations" className="section-padding bg-latte-cream" data-testid="locations-section">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-text-main mb-4">
            {t(translations.locations.title)}
          </h2>
          <p className="text-text-muted font-body max-w-2xl mx-auto">
            {t(translations.locations.note)}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {siteConfig.locations.map((location, idx) => (
            <Card 
              key={location.id}
              className={`overflow-hidden shadow-card card-hover border-0 rounded-2xl ${
                idx === 0 ? "ring-2 ring-diana-purple/20" : "ring-2 ring-savory-orange/20"
              }`}
              data-testid={`location-card-${location.id}`}
            >
              <CardHeader className={`pb-4 ${idx === 0 ? "bg-diana-purple/5" : "bg-savory-orange/5"}`}>
                <div className="flex items-center gap-3 mb-2">
                  {idx === 0 ? (
                    <Coffee className="w-6 h-6 text-diana-purple" />
                  ) : (
                    <Utensils className="w-6 h-6 text-savory-orange" />
                  )}
                  <span className={`text-sm font-medium ${idx === 0 ? "text-diana-purple" : "text-savory-orange"}`}>
                    {t(location.type)}
                  </span>
                </div>
                <CardTitle className="text-xl font-heading">{t(location.name)}</CardTitle>
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-warm-gold fill-warm-gold" />
                    <span className="font-semibold">{location.rating}</span>
                    <span className="text-text-muted text-sm">({location.reviewCount})</span>
                  </div>
                  <span className="text-text-muted">•</span>
                  <span className="text-sm text-text-muted">{location.priceRange}</span>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-text-muted flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-text-main">
                      {lang === "bg" ? siteConfig.contact.addressBg : siteConfig.contact.address}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-text-muted" />
                    <a href={`tel:${siteConfig.contact.phone}`} className="text-sm text-text-main hover:text-diana-purple transition-colors">
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {t(location.services).map((service, sIdx) => (
                      <span 
                        key={sIdx}
                        className={`text-xs px-3 py-1 rounded-full ${
                          idx === 0 ? "bg-diana-purple/10 text-diana-purple" : "bg-savory-orange/10 text-savory-orange"
                        }`}
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-3 mt-6">
                  <Button
                    size="sm"
                    className={`flex-1 rounded-full ${
                      idx === 0 
                        ? "bg-diana-purple hover:bg-diana-purple-light" 
                        : "bg-savory-orange hover:bg-savory-orange/90"
                    } text-white`}
                    asChild
                    data-testid={`location-call-${location.id}`}
                  >
                    <a href={`tel:${siteConfig.contact.phone}`}>
                      <Phone className="w-4 h-4 mr-2" />
                      {t(translations.buttons.callNow)}
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className={`flex-1 rounded-full ${
                      idx === 0 
                        ? "border-diana-purple text-diana-purple hover:bg-diana-purple hover:text-white" 
                        : "border-savory-orange text-savory-orange hover:bg-savory-orange hover:text-white"
                    }`}
                    asChild
                    data-testid={`location-directions-${location.id}`}
                  >
                    <a href={siteConfig.contact.googleMapsUrl} target="_blank" rel="noopener noreferrer">
                      <Navigation className="w-4 h-4 mr-2" />
                      {t(translations.buttons.getDirections)}
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

// Reviews Section
const ReviewsSection = () => {
  const { t } = useLanguage();
  const coffeeLocation = siteConfig.locations[0];
  const burgerLocation = siteConfig.locations[1];
  const coffeeReviews = siteConfig.reviews.filter(r => r.locationId === "coffee");
  const burgerReviews = siteConfig.reviews.filter(r => r.locationId === "burger");
  
  const RatingBlock = ({ location, color, reviews }) => (
    <div className="text-center mb-8">
      <div className="flex items-center justify-center gap-2 mb-2">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-6 h-6 text-warm-gold fill-warm-gold" />
        ))}
      </div>
      <div className={`text-4xl font-heading font-bold ${color}`}>
        {location.rating}
      </div>
      <p className="text-text-muted text-sm mt-1">
        {t(translations.reviews.basedOn)} {location.reviewCount} {t(translations.reviews.reviewsText)}
      </p>
      <p className={`font-semibold mt-2 ${color}`}>{t(location.name)}</p>
    </div>
  );
  
  const ReviewCard = ({ review, color }) => (
    <Card className="border-0 shadow-card rounded-2xl h-full" data-testid={`review-${review.id}`}>
      <CardContent className="p-6">
        <div className="flex items-center gap-1 mb-3">
          {[...Array(review.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 text-warm-gold fill-warm-gold" />
          ))}
        </div>
        <p className="text-text-main mb-4 italic">"{t(review.text)}"</p>
        <div className="flex items-center justify-between">
          <span className="font-semibold text-text-main">{t(review.name)}</span>
          <span className={`text-xs ${color}`}>{t(translations.reviews.customerFeedback)}</span>
        </div>
      </CardContent>
    </Card>
  );
  
  return (
    <section id="reviews" className="section-padding bg-white" data-testid="reviews-section">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-text-main text-center mb-12">
          {t(translations.reviews.title)}
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Coffee Shop Reviews */}
          <div data-testid="reviews-coffee">
            <RatingBlock location={coffeeLocation} color="text-diana-purple" reviews={coffeeReviews} />
            <div className="grid gap-4">
              {coffeeReviews.map(review => (
                <ReviewCard key={review.id} review={review} color="text-diana-purple" />
              ))}
            </div>
          </div>
          
          {/* Burger Bar Reviews */}
          <div data-testid="reviews-burger">
            <RatingBlock location={burgerLocation} color="text-savory-orange" reviews={burgerReviews} />
            <div className="grid gap-4">
              {burgerReviews.map(review => (
                <ReviewCard key={review.id} review={review} color="text-savory-orange" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Gallery Section
const GallerySection = () => {
  const { t } = useLanguage();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  
  const openLightbox = (image) => {
    setSelectedImage(image);
    setLightboxOpen(true);
  };
  
  return (
    <section id="gallery" className="section-padding bg-latte-cream" data-testid="gallery-section">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-text-main text-center mb-12">
          {t(translations.gallery.title)}
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {siteConfig.gallery.images.map((image, idx) => (
            <div 
              key={idx}
              className="relative aspect-square overflow-hidden rounded-2xl cursor-pointer group"
              onClick={() => openLightbox(image)}
              data-testid={`gallery-image-${idx}`}
            >
              <img 
                src={image.url}
                alt={t(image.alt)}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-diana-purple/0 group-hover:bg-diana-purple/30 transition-all duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity font-semibold">
                  {t(translations.buttons.viewMore)}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Lightbox */}
        <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
          <DialogContent className="max-w-4xl bg-transparent border-0 shadow-none p-0" data-testid="lightbox">
            <div className="relative">
              {selectedImage && (
                <img 
                  src={selectedImage.url}
                  alt={t(selectedImage.alt)}
                  className="w-full h-auto rounded-2xl"
                />
              )}
              <DialogClose className="absolute top-4 right-4 bg-white/90 rounded-full p-2 hover:bg-white transition-colors" data-testid="lightbox-close">
                <X className="w-6 h-6 text-text-main" />
              </DialogClose>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

// Contact Section
const ContactSection = () => {
  const { t, lang } = useLanguage();
  
  return (
    <section id="contact" className="section-padding bg-white" data-testid="contact-section">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-text-main text-center mb-12">
          {t(translations.contact.title)}
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="border-0 shadow-card rounded-2xl overflow-hidden" data-testid="contact-card">
              <CardContent className="p-8">
                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-diana-purple/10 flex items-center justify-center">
                      <Phone className="w-6 h-6 text-diana-purple" />
                    </div>
                    <div>
                      <p className="text-sm text-text-muted">{t(translations.contact.phone)}</p>
                      <a 
                        href={`tel:${siteConfig.contact.phone}`}
                        className="text-xl font-semibold text-text-main hover:text-diana-purple transition-colors"
                        data-testid="contact-phone"
                      >
                        {siteConfig.contact.phone}
                      </a>
                    </div>
                  </div>
                  
                  {/* Address */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-diana-purple/10 flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-diana-purple" />
                    </div>
                    <div>
                      <p className="text-sm text-text-muted">{t(translations.contact.address)}</p>
                      <p className="text-lg font-semibold text-text-main" data-testid="contact-address">
                        {lang === "bg" ? siteConfig.contact.addressBg : siteConfig.contact.address}
                      </p>
                    </div>
                  </div>
                  
                  {/* Plus Code */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-diana-purple/10 flex items-center justify-center">
                      <Globe className="w-6 h-6 text-diana-purple" />
                    </div>
                    <div>
                      <p className="text-sm text-text-muted">{t(translations.contact.plusCode)}</p>
                      <p className="text-lg font-semibold text-text-main" data-testid="contact-pluscode">
                        {siteConfig.contact.plusCode}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4 mt-8">
                  <Button
                    className="bg-diana-purple hover:bg-diana-purple-light text-white rounded-full px-6"
                    asChild
                    data-testid="contact-cta-call"
                  >
                    <a href={`tel:${siteConfig.contact.phone}`}>
                      <Phone className="w-4 h-4 mr-2" />
                      {t(translations.buttons.callNow)}
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="border-diana-purple text-diana-purple hover:bg-diana-purple hover:text-white rounded-full px-6"
                    asChild
                    data-testid="contact-cta-directions"
                  >
                    <a href={siteConfig.contact.googleMapsUrl} target="_blank" rel="noopener noreferrer">
                      <Navigation className="w-4 h-4 mr-2" />
                      {t(translations.buttons.getDirections)}
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-card h-[400px]" data-testid="contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2897.7089833645!2d28.1602!3d43.4102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a9228d1c66f4d9%3A0x3d1c5f14c6c0f0!2sul.%20%22Cherno%20More%22%201%2C%209600%20Balchik!5e0!3m2!1sen!2sbg!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Diana Balchik Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  const { t, lang } = useLanguage();
  
  return (
    <footer className="bg-diana-purple text-white py-12" data-testid="footer">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-heading font-bold mb-4">Diana Balchik</h3>
            <p className="text-white/80 text-sm">
              {t(siteConfig.brand.tagline)}
            </p>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">{t(translations.contact.title)}</h4>
            <div className="space-y-2 text-sm text-white/80">
              <p>{lang === "bg" ? siteConfig.contact.addressBg : siteConfig.contact.address}</p>
              <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-white transition-colors">
                {siteConfig.contact.phone}
              </a>
            </div>
          </div>
          
          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Social</h4>
            <div className="flex gap-4">
              <a 
                href={siteConfig.social.facebook} 
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Facebook"
                data-testid="social-facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href={siteConfig.social.instagram}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
                data-testid="social-instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom */}
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

// JSON-LD Structured Data Component
const JsonLd = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "Diana Balchik",
        "url": typeof window !== 'undefined' ? window.location.origin : '',
        "logo": siteConfig.gallery.images[0].url,
        "description": siteConfig.seo.description.en
      },
      {
        "@type": "CoffeeShop",
        "name": "Diana Coffee Shop",
        "alternateName": "Кафе Сладкарница Диана",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "ul. Cherno More 1",
          "addressLocality": "Balchik",
          "postalCode": "9600",
          "addressCountry": "BG"
        },
        "telephone": "+359895265217",
        "priceRange": "BGN 10-20",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "82"
        }
      },
      {
        "@type": "Restaurant",
        "name": "Burger Bar & Bagel Diana",
        "alternateName": "Бургер Бар и Бейгъл Диана",
        "servesCuisine": ["American", "Bagels", "Burgers"],
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "ul. Cherno More 1",
          "addressLocality": "Balchik",
          "postalCode": "9600",
          "addressCountry": "BG"
        },
        "telephone": "+359895265217",
        "priceRange": "BGN 10-20",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5.0",
          "reviewCount": "84"
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

// Main Page Component
const DianaWebsite = () => {
  return (
    <div className="min-h-screen">
      <JsonLd />
      <Navbar />
      <main>
        <HeroSection />
        <MenuSection />
        <LocationsSection />
        <ReviewsSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

function App() {
  // Update document title
  useEffect(() => {
    document.title = siteConfig.seo.title;
  }, []);

  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DianaWebsite />} />
          <Route path="*" element={<DianaWebsite />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
