import { useState } from "react";
import { useLanguage } from "./Navbar";
import { siteConfig } from "../config/siteConfig";
import { translations } from "../config/translations";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Coffee, Utensils } from "lucide-react";

export const MenuSection = () => {
  const { t } = useLanguage();
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
              className="rounded-full py-3 px-4 font-semibold transition-all data-[state=active]:bg-diana-purple data-[state=active]:text-white data-[state=inactive]:text-text-muted"
              data-testid="menu-tab-coffee"
            >
              <Coffee className="w-4 h-4 mr-2" />
              {t(translations.menu.coffeeSweets)}
            </TabsTrigger>
            <TabsTrigger 
              value="burger"
              className="rounded-full py-3 px-4 font-semibold transition-all data-[state=active]:bg-savory-orange data-[state=active]:text-white data-[state=inactive]:text-text-muted"
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
        
        <p className="text-center text-sm text-text-muted mt-8 italic" data-testid="menu-note">
          {t(translations.menu.menuNote)}
        </p>
      </div>
    </section>
  );
};
