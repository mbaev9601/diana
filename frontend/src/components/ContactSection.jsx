import { useLanguage } from "./Navbar";
import { contact } from "../config/siteConfig";
import { translations } from "../config/translations";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Phone, MapPin, Globe, Navigation } from "lucide-react";

export const ContactSection = () => {
  const { t, lang } = useLanguage();
  
  return (
    <section id="contact" className="section-padding bg-white" data-testid="contact-section">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-text-main text-center mb-12">
          {t(translations.contact.title)}
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <Card className="border-0 shadow-card rounded-2xl overflow-hidden" data-testid="contact-card">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-diana-purple/10 flex items-center justify-center">
                      <Phone className="w-6 h-6 text-diana-purple" />
                    </div>
                    <div>
                      <p className="text-sm text-text-muted">{t(translations.contact.phone)}</p>
                      <a 
                        href={`tel:${contact.phone}`}
                        className="text-xl font-semibold text-text-main hover:text-diana-purple transition-colors"
                        data-testid="contact-phone"
                      >
                        {contact.phone}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-diana-purple/10 flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-diana-purple" />
                    </div>
                    <div>
                      <p className="text-sm text-text-muted">{t(translations.contact.address)}</p>
                      <p className="text-lg font-semibold text-text-main" data-testid="contact-address">
                        {lang === "bg" ? contact.addressBg : contact.address}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-diana-purple/10 flex items-center justify-center">
                      <Globe className="w-6 h-6 text-diana-purple" />
                    </div>
                    <div>
                      <p className="text-sm text-text-muted">{t(translations.contact.plusCode)}</p>
                      <p className="text-lg font-semibold text-text-main" data-testid="contact-pluscode">
                        {contact.plusCode}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4 mt-8">
                  <Button
                    className="bg-diana-purple hover:bg-diana-purple-light text-white rounded-full px-6"
                    asChild
                    data-testid="contact-cta-call"
                  >
                    <a href={`tel:${contact.phone}`}>
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
                    <a href={contact.googleMapsUrl} target="_blank" rel="noopener noreferrer">
                      <Navigation className="w-4 h-4 mr-2" />
                      {t(translations.buttons.getDirections)}
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
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
