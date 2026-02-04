import { useLanguage } from "./Navbar";
import { siteConfig } from "../config/siteConfig";
import { translations } from "../config/translations";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Phone, MapPin, Star, Coffee, Utensils, Navigation } from "lucide-react";

export const LocationsSection = () => {
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
