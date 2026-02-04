import { useState } from "react";
import { useLanguage } from "./Navbar";
import { tagline } from "../config/siteConfig";
import { translations } from "../config/translations";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Coffee, Utensils } from "lucide-react";

// Coffee menu items - flat structure
const espressoItems = [
  { nameEn: "Espresso", nameBg: "Еспресо", price: "3.50 лв.", descEn: "Rich and bold", descBg: "Наситено и ароматно" },
  { nameEn: "Cappuccino", nameBg: "Капучино", price: "5.00 лв.", descEn: "Creamy foam", descBg: "Кремообразна пяна" },
  { nameEn: "Latte", nameBg: "Лате", price: "5.50 лв.", descEn: "Smooth and milky", descBg: "Нежно и млечно" },
  { nameEn: "Americano", nameBg: "Американо", price: "4.00 лв.", descEn: "Classic black coffee", descBg: "Класическо черно кафе" }
];

const icedItems = [
  { nameEn: "Iced Latte", nameBg: "Ледено лате", price: "6.00 лв.", descEn: "Refreshing cold", descBg: "Освежаващо студено" },
  { nameEn: "Frappe", nameBg: "Фрапе", price: "5.50 лв.", descEn: "Blended iced coffee", descBg: "Разбито ледено кафе" },
  { nameEn: "Iced Mocha", nameBg: "Ледено мока", price: "6.50 лв.", descEn: "Chocolate & coffee", descBg: "Шоколад и кафе" }
];

const cakesItems = [
  { nameEn: "Cheesecake", nameBg: "Чийзкейк", price: "8.00 лв.", descEn: "Creamy classic", descBg: "Кремообразна класика" },
  { nameEn: "Tiramisu", nameBg: "Тирамису", price: "7.50 лв.", descEn: "Italian delight", descBg: "Италианска наслада" },
  { nameEn: "Chocolate Cake", nameBg: "Шоколадова торта", price: "7.00 лв.", descEn: "Rich and decadent", descBg: "Богат и изискан" }
];

const pastryItems = [
  { nameEn: "Croissant", nameBg: "Кроасан", price: "4.00 лв.", descEn: "Buttery layers", descBg: "Маслени пластове" },
  { nameEn: "Danish Pastry", nameBg: "Датска баничка", price: "4.50 лв.", descEn: "With fruit", descBg: "С плодове" },
  { nameEn: "Muffin", nameBg: "Мъфин", price: "3.50 лв.", descEn: "Various flavors", descBg: "Различни вкусове" }
];

// Burger menu items
const burgerItems = [
  { nameEn: "Classic Burger", nameBg: "Класически бургер", price: "12.00 лв.", descEn: "Beef, lettuce, tomato", descBg: "Телешко, маруля, домат" },
  { nameEn: "Cheese Burger", nameBg: "Чийзбургер", price: "14.00 лв.", descEn: "Double cheese", descBg: "Двойно сирене" },
  { nameEn: "BBQ Burger", nameBg: "BBQ Бургер", price: "15.00 лв.", descEn: "Smoky BBQ sauce", descBg: "Димен BBQ сос" },
  { nameEn: "Chicken Burger", nameBg: "Пилешки бургер", price: "13.00 лв.", descEn: "Crispy chicken", descBg: "Хрупкаво пиле" }
];

const bagelItems = [
  { nameEn: "Salmon Bagel", nameBg: "Бейгъл със сьомга", price: "11.00 лв.", descEn: "Cream cheese, capers", descBg: "Крема сирене, каперси" },
  { nameEn: "Avocado Bagel", nameBg: "Бейгъл с авокадо", price: "10.00 лв.", descEn: "Fresh avocado", descBg: "Пресно авокадо" },
  { nameEn: "Bacon & Egg Bagel", nameBg: "Бейгъл с бекон и яйце", price: "9.50 лв.", descEn: "Breakfast classic", descBg: "Класика за закуска" }
];

const sidesItems = [
  { nameEn: "Classic Fries", nameBg: "Класически картофки", price: "5.00 лв.", descEn: "Golden crispy", descBg: "Златисти и хрупкави" },
  { nameEn: "Sweet Potato Fries", nameBg: "Сладки картофки", price: "6.00 лв.", descEn: "Healthy option", descBg: "Здравословен избор" },
  { nameEn: "Onion Rings", nameBg: "Луков кръг", price: "5.50 лв.", descEn: "Crispy battered", descBg: "Хрупкава панировка" }
];

const drinkItems = [
  { nameEn: "Fresh Lemonade", nameBg: "Прясна лимонада", price: "4.50 лв.", descEn: "Homemade", descBg: "Домашна" },
  { nameEn: "Craft Beer", nameBg: "Крафт бира", price: "6.00 лв.", descEn: "Local selection", descBg: "Местна селекция" },
  { nameEn: "Cocktails", nameBg: "Коктейли", price: "8.00 лв.", descEn: "Ask bartender", descBg: "Питай бармана" }
];

const MenuItem = ({ item, color, getText }) => (
  <div className="flex justify-between items-start bg-white rounded-xl p-4 shadow-sm">
    <div>
      <h4 className="font-semibold text-text-main">{getText(item.nameEn, item.nameBg)}</h4>
      <p className="text-sm text-text-muted">{getText(item.descEn, item.descBg)}</p>
    </div>
    <span className={`font-semibold ${color} whitespace-nowrap ml-4`}>{item.price}</span>
  </div>
);

const MenuCategory = ({ title, items, color, getText }) => (
  <div className="bg-latte-cream rounded-2xl p-6">
    <h3 className={`text-xl font-heading font-semibold ${color} mb-4`}>{title}</h3>
    <div className="grid sm:grid-cols-2 gap-4">
      {items.map((item, idx) => (
        <MenuItem key={idx} item={item} color={color} getText={getText} />
      ))}
    </div>
  </div>
);

export const MenuSection = () => {
  const { t, getText } = useLanguage();
  const [activeTab, setActiveTab] = useState("coffee");
  
  return (
    <section id="menu" className="section-padding bg-white" data-testid="menu-section">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-text-main mb-4">
            {t(translations.menu.title)}
          </h2>
          <p className="text-text-muted font-body">{t(tagline)}</p>
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
              <MenuCategory title={getText("Espresso & Coffee", "Еспресо и кафе")} items={espressoItems} color="text-diana-purple" getText={getText} />
              <MenuCategory title={getText("Iced Drinks", "Ледени напитки")} items={icedItems} color="text-diana-purple" getText={getText} />
              <MenuCategory title={getText("Cakes & Desserts", "Торти и десерти")} items={cakesItems} color="text-diana-purple" getText={getText} />
              <MenuCategory title={getText("Pastries", "Сладкиши")} items={pastryItems} color="text-diana-purple" getText={getText} />
            </div>
          </TabsContent>
          
          <TabsContent value="burger" className="animate-fade-in-up" data-testid="menu-content-burger">
            <div className="space-y-8">
              <MenuCategory title={getText("Burgers", "Бургери")} items={burgerItems} color="text-savory-orange" getText={getText} />
              <MenuCategory title={getText("Bagels", "Бейгъли")} items={bagelItems} color="text-savory-orange" getText={getText} />
              <MenuCategory title={getText("Fries & Sides", "Картофки и гарнитури")} items={sidesItems} color="text-savory-orange" getText={getText} />
              <MenuCategory title={getText("Drinks / Bar", "Напитки / Бар")} items={drinkItems} color="text-savory-orange" getText={getText} />
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
