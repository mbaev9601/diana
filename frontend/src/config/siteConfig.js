// Diana Balchik - Editable Site Configuration

export const brandName = "Diana Balchik";

export const tagline = {
  en: "Coffee & Sweets • Burgers & Bagels",
  bg: "Кафе и сладки • Бургери и бейгъли"
};

export const contact = {
  address: "Tsentar, ul. \"Cherno More\" 1, 9600 Balchik",
  addressBg: "Център, ул. \"Черно море\" 1, 9600 Балчик",
  phone: "0895265217",
  plusCode: "C548+6X Balchik",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Tsentar,+ul.+Cherno+More+1,+9600+Balchik"
};

export const coffeeLocation = {
  id: "coffee",
  nameEn: "Diana Coffee Shop",
  nameBg: "Кафе Сладкарница \"Диана\"",
  typeEn: "Coffee Shop",
  typeBg: "Кафе сладкарница",
  rating: 4.9,
  reviewCount: 82,
  priceRange: "BGN 10-20",
  servicesEn: ["Dine-in", "Takeaway"],
  servicesBg: ["На място", "За вкъщи"],
  focusEn: "Coffee, desserts, pastries, cakes",
  focusBg: "Кафе, десерти, сладкиши, торти"
};

export const burgerLocation = {
  id: "burger",
  nameEn: "Burger Bar & Bagel Diana",
  nameBg: "Бургер Бар и Бейгъл Диана",
  typeEn: "Restaurant & Bar",
  typeBg: "Ресторант и бар",
  rating: 5.0,
  reviewCount: 84,
  priceRange: "BGN 10-20",
  servicesEn: ["Dine-in", "Kerbside pickup"],
  servicesBg: ["На място", "Вземане от място"],
  focusEn: "Burgers, bagels, fries, drinks",
  focusBg: "Бургери, бейгъли, пържени картофки, напитки"
};

export const coffeeMenuSections = [
  {
    nameEn: "Espresso & Coffee",
    nameBg: "Еспресо и кафе",
    items: [
      { nameEn: "Espresso", nameBg: "Еспресо", price: "3.50 лв.", descEn: "Rich and bold", descBg: "Наситено и ароматно" },
      { nameEn: "Cappuccino", nameBg: "Капучино", price: "5.00 лв.", descEn: "Creamy foam", descBg: "Кремообразна пяна" },
      { nameEn: "Latte", nameBg: "Лате", price: "5.50 лв.", descEn: "Smooth and milky", descBg: "Нежно и млечно" },
      { nameEn: "Americano", nameBg: "Американо", price: "4.00 лв.", descEn: "Classic black coffee", descBg: "Класическо черно кафе" }
    ]
  },
  {
    nameEn: "Iced Drinks",
    nameBg: "Ледени напитки",
    items: [
      { nameEn: "Iced Latte", nameBg: "Ледено лате", price: "6.00 лв.", descEn: "Refreshing cold", descBg: "Освежаващо студено" },
      { nameEn: "Frappe", nameBg: "Фрапе", price: "5.50 лв.", descEn: "Blended iced coffee", descBg: "Разбито ледено кафе" },
      { nameEn: "Iced Mocha", nameBg: "Ледено мока", price: "6.50 лв.", descEn: "Chocolate & coffee", descBg: "Шоколад и кафе" }
    ]
  },
  {
    nameEn: "Cakes & Desserts",
    nameBg: "Торти и десерти",
    items: [
      { nameEn: "Cheesecake", nameBg: "Чийзкейк", price: "8.00 лв.", descEn: "Creamy classic", descBg: "Кремообразна класика" },
      { nameEn: "Tiramisu", nameBg: "Тирамису", price: "7.50 лв.", descEn: "Italian delight", descBg: "Италианска наслада" },
      { nameEn: "Chocolate Cake", nameBg: "Шоколадова торта", price: "7.00 лв.", descEn: "Rich and decadent", descBg: "Богат и изискан" }
    ]
  },
  {
    nameEn: "Pastries",
    nameBg: "Сладкиши",
    items: [
      { nameEn: "Croissant", nameBg: "Кроасан", price: "4.00 лв.", descEn: "Buttery layers", descBg: "Маслени пластове" },
      { nameEn: "Danish Pastry", nameBg: "Датска баничка", price: "4.50 лв.", descEn: "With fruit", descBg: "С плодове" },
      { nameEn: "Muffin", nameBg: "Мъфин", price: "3.50 лв.", descEn: "Various flavors", descBg: "Различни вкусове" }
    ]
  }
];

export const burgerMenuSections = [
  {
    nameEn: "Burgers",
    nameBg: "Бургери",
    items: [
      { nameEn: "Classic Burger", nameBg: "Класически бургер", price: "12.00 лв.", descEn: "Beef, lettuce, tomato", descBg: "Телешко, маруля, домат" },
      { nameEn: "Cheese Burger", nameBg: "Чийзбургер", price: "14.00 лв.", descEn: "Double cheese", descBg: "Двойно сирене" },
      { nameEn: "BBQ Burger", nameBg: "BBQ Бургер", price: "15.00 лв.", descEn: "Smoky BBQ sauce", descBg: "Димен BBQ сос" },
      { nameEn: "Chicken Burger", nameBg: "Пилешки бургер", price: "13.00 лв.", descEn: "Crispy chicken", descBg: "Хрупкаво пиле" }
    ]
  },
  {
    nameEn: "Bagels",
    nameBg: "Бейгъли",
    items: [
      { nameEn: "Salmon Bagel", nameBg: "Бейгъл със сьомга", price: "11.00 лв.", descEn: "Cream cheese, capers", descBg: "Крема сирене, каперси" },
      { nameEn: "Avocado Bagel", nameBg: "Бейгъл с авокадо", price: "10.00 лв.", descEn: "Fresh avocado", descBg: "Пресно авокадо" },
      { nameEn: "Bacon & Egg Bagel", nameBg: "Бейгъл с бекон и яйце", price: "9.50 лв.", descEn: "Breakfast classic", descBg: "Класика за закуска" }
    ]
  },
  {
    nameEn: "Fries & Sides",
    nameBg: "Картофки и гарнитури",
    items: [
      { nameEn: "Classic Fries", nameBg: "Класически картофки", price: "5.00 лв.", descEn: "Golden crispy", descBg: "Златисти и хрупкави" },
      { nameEn: "Sweet Potato Fries", nameBg: "Сладки картофки", price: "6.00 лв.", descEn: "Healthy option", descBg: "Здравословен избор" },
      { nameEn: "Onion Rings", nameBg: "Луков кръг", price: "5.50 лв.", descEn: "Crispy battered", descBg: "Хрупкава панировка" }
    ]
  },
  {
    nameEn: "Drinks / Bar",
    nameBg: "Напитки / Бар",
    items: [
      { nameEn: "Fresh Lemonade", nameBg: "Прясна лимонада", price: "4.50 лв.", descEn: "Homemade", descBg: "Домашна" },
      { nameEn: "Craft Beer", nameBg: "Крафт бира", price: "6.00 лв.", descEn: "Local selection", descBg: "Местна селекция" },
      { nameEn: "Cocktails", nameBg: "Коктейли", price: "8.00 лв.", descEn: "Ask bartender", descBg: "Питай бармана" }
    ]
  }
];

export const coffeeReviews = [
  { id: 1, nameEn: "Maria P.", nameBg: "Мария П.", textEn: "Amazing coffee and the cakes are absolutely divine! The atmosphere is so cozy.", textBg: "Страхотно кафе и тортите са просто божествени! Атмосферата е толкова уютна.", rating: 5 },
  { id: 2, nameEn: "Stefan K.", nameBg: "Стефан К.", textEn: "Best cappuccino in Balchik. The staff is very friendly and professional.", textBg: "Най-доброто капучино в Балчик. Персоналът е много приятелски настроен и професионален.", rating: 5 },
  { id: 3, nameEn: "Elena D.", nameBg: "Елена Д.", textEn: "Love the seasonal specials. Always something new to try!", textBg: "Обичам сезонните специалитети. Винаги има нещо ново за опитване!", rating: 5 }
];

export const burgerReviews = [
  { id: 4, nameEn: "Nikolay V.", nameBg: "Николай В.", textEn: "The burgers here are incredible! Juicy, flavorful, and perfectly cooked.", textBg: "Бургерите тук са невероятни! Сочни, вкусни и перфектно приготвени.", rating: 5 },
  { id: 5, nameEn: "Anna M.", nameBg: "Анна М.", textEn: "Best bagels outside of New York! The salmon bagel is my favorite.", textBg: "Най-добрите бейгъли извън Ню Йорк! Бейгълът със сьомга е моят любим.", rating: 5 },
  { id: 6, nameEn: "Georgi T.", nameBg: "Георги Т.", textEn: "Great food, great service, great atmosphere. What more could you want?", textBg: "Страхотна храна, страхотно обслужване, страхотна атмосфера. Какво повече да искаш?", rating: 5 }
];

export const galleryImages = [
  { url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800", altEn: "Latte art coffee", altBg: "Кафе лате арт" },
  { url: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800", altEn: "Gourmet burger", altBg: "Гурме бургер" },
  { url: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800", altEn: "Coffee and pastry", altBg: "Кафе и сладкиши" },
  { url: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800", altEn: "Delicious burger", altBg: "Вкусен бургер" },
  { url: "https://images.unsplash.com/photo-1559496417-e7f25cb247f3?w=800", altEn: "Fresh bagel", altBg: "Пресен бейгъл" },
  { url: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800", altEn: "Coffee art", altBg: "Кафе изкуство" }
];

export const social = {
  facebook: "#",
  instagram: "#"
};

export const seoTitle = "Diana Balchik | Coffee & Sweets + Burgers & Bagels";
export const seoDescEn = "Diana Balchik - Two concepts under one brand. Coffee Shop for your sweet cravings and Burger Bar for savory delights. Visit us in Balchik!";
