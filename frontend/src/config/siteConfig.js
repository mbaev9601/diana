// Diana Balchik - Editable Site Configuration
// All business info, menu items, and content can be edited here

export const siteConfig = {
  brand: {
    name: "Diana Balchik",
    tagline: {
      en: "Coffee & Sweets • Burgers & Bagels",
      bg: "Кафе и сладки • Бургери и бейгъли"
    }
  },
  
  contact: {
    address: "Tsentar, ul. \"Cherno More\" 1, 9600 Balchik",
    addressBg: "Център, ул. \"Черно море\" 1, 9600 Балчик",
    phone: "0895265217",
    plusCode: "C548+6X Balchik",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Tsentar,+ul.+Cherno+More+1,+9600+Balchik"
  },
  
  locations: [
    {
      id: "coffee",
      name: {
        en: "Diana Coffee Shop",
        bg: "Кафе Сладкарница \"Диана\""
      },
      type: {
        en: "Coffee Shop",
        bg: "Кафе сладкарница"
      },
      rating: 4.9,
      reviewCount: 82,
      priceRange: "BGN 10-20",
      services: {
        en: ["Dine-in", "Takeaway"],
        bg: ["На място", "За вкъщи"]
      },
      focus: {
        en: "Coffee, desserts, pastries, cakes",
        bg: "Кафе, десерти, сладкиши, торти"
      }
    },
    {
      id: "burger",
      name: {
        en: "Burger Bar & Bagel Diana",
        bg: "Бургер Бар и Бейгъл Диана"
      },
      type: {
        en: "Restaurant & Bar",
        bg: "Ресторант и бар"
      },
      rating: 5.0,
      reviewCount: 84,
      priceRange: "BGN 10-20",
      services: {
        en: ["Dine-in", "Kerbside pickup"],
        bg: ["На място", "Вземане от място"]
      },
      focus: {
        en: "Burgers, bagels, fries, drinks",
        bg: "Бургери, бейгъли, пържени картофки, напитки"
      }
    }
  ],
  
  menus: {
    coffee: {
      title: {
        en: "Coffee & Sweets",
        bg: "Кафе и сладки"
      },
      sections: [
        {
          name: { en: "Espresso & Coffee", bg: "Еспресо и кафе" },
          items: [
            { name: { en: "Espresso", bg: "Еспресо" }, price: "3.50 лв.", description: { en: "Rich and bold", bg: "Наситено и ароматно" } },
            { name: { en: "Cappuccino", bg: "Капучино" }, price: "5.00 лв.", description: { en: "Creamy foam", bg: "Кремообразна пяна" } },
            { name: { en: "Latte", bg: "Лате" }, price: "5.50 лв.", description: { en: "Smooth and milky", bg: "Нежно и млечно" } },
            { name: { en: "Americano", bg: "Американо" }, price: "4.00 лв.", description: { en: "Classic black coffee", bg: "Класическо черно кафе" } }
          ]
        },
        {
          name: { en: "Iced Drinks", bg: "Ледени напитки" },
          items: [
            { name: { en: "Iced Latte", bg: "Ледено лате" }, price: "6.00 лв.", description: { en: "Refreshing cold", bg: "Освежаващо студено" } },
            { name: { en: "Frappe", bg: "Фрапе" }, price: "5.50 лв.", description: { en: "Blended iced coffee", bg: "Разбито ледено кафе" } },
            { name: { en: "Iced Mocha", bg: "Ледено мока" }, price: "6.50 лв.", description: { en: "Chocolate & coffee", bg: "Шоколад и кафе" } }
          ]
        },
        {
          name: { en: "Cakes & Desserts", bg: "Торти и десерти" },
          items: [
            { name: { en: "Cheesecake", bg: "Чийзкейк" }, price: "8.00 лв.", description: { en: "Creamy classic", bg: "Кремообразна класика" } },
            { name: { en: "Tiramisu", bg: "Тирамису" }, price: "7.50 лв.", description: { en: "Italian delight", bg: "Италианска наслада" } },
            { name: { en: "Chocolate Cake", bg: "Шоколадова торта" }, price: "7.00 лв.", description: { en: "Rich and decadent", bg: "Богат и изискан" } }
          ]
        },
        {
          name: { en: "Pastries", bg: "Сладкиши" },
          items: [
            { name: { en: "Croissant", bg: "Кроасан" }, price: "4.00 лв.", description: { en: "Buttery layers", bg: "Маслени пластове" } },
            { name: { en: "Danish Pastry", bg: "Датска баничка" }, price: "4.50 лв.", description: { en: "With fruit", bg: "С плодове" } },
            { name: { en: "Muffin", bg: "Мъфин" }, price: "3.50 лв.", description: { en: "Various flavors", bg: "Различни вкусове" } }
          ]
        },
        {
          name: { en: "Seasonal Specials", bg: "Сезонни специалитети" },
          items: [
            { name: { en: "Pumpkin Spice Latte", bg: "Тиквено латe" }, price: "6.50 лв.", description: { en: "Autumn favorite", bg: "Есенен любимец" } },
            { name: { en: "Holiday Cake", bg: "Празнична торта" }, price: "9.00 лв.", description: { en: "Ask for today's special", bg: "Питайте за днешния специалитет" } }
          ]
        }
      ]
    },
    burger: {
      title: {
        en: "Burgers & Bagels",
        bg: "Бургери и бейгъли"
      },
      sections: [
        {
          name: { en: "Burgers", bg: "Бургери" },
          items: [
            { name: { en: "Classic Burger", bg: "Класически бургер" }, price: "12.00 лв.", description: { en: "Beef, lettuce, tomato", bg: "Телешко, маруля, домат" } },
            { name: { en: "Cheese Burger", bg: "Чийзбургер" }, price: "14.00 лв.", description: { en: "Double cheese", bg: "Двойно сирене" } },
            { name: { en: "BBQ Burger", bg: "BBQ Бургер" }, price: "15.00 лв.", description: { en: "Smoky BBQ sauce", bg: "Димен BBQ сос" } },
            { name: { en: "Chicken Burger", bg: "Пилешки бургер" }, price: "13.00 лв.", description: { en: "Crispy chicken", bg: "Хрупкаво пиле" } }
          ]
        },
        {
          name: { en: "Bagels", bg: "Бейгъли" },
          items: [
            { name: { en: "Salmon Bagel", bg: "Бейгъл със сьомга" }, price: "11.00 лв.", description: { en: "Cream cheese, capers", bg: "Крема сирене, каперси" } },
            { name: { en: "Avocado Bagel", bg: "Бейгъл с авокадо" }, price: "10.00 лв.", description: { en: "Fresh avocado", bg: "Пресно авокадо" } },
            { name: { en: "Bacon & Egg Bagel", bg: "Бейгъл с бекон и яйце" }, price: "9.50 лв.", description: { en: "Breakfast classic", bg: "Класика за закуска" } }
          ]
        },
        {
          name: { en: "Fries & Sides", bg: "Картофки и гарнитури" },
          items: [
            { name: { en: "Classic Fries", bg: "Класически картофки" }, price: "5.00 лв.", description: { en: "Golden crispy", bg: "Златисти и хрупкави" } },
            { name: { en: "Sweet Potato Fries", bg: "Сладки картофки" }, price: "6.00 лв.", description: { en: "Healthy option", bg: "Здравословен избор" } },
            { name: { en: "Onion Rings", bg: "Луков кръг" }, price: "5.50 лв.", description: { en: "Crispy battered", bg: "Хрупкава панировка" } }
          ]
        },
        {
          name: { en: "Sauces", bg: "Сосове" },
          items: [
            { name: { en: "BBQ Sauce", bg: "BBQ сос" }, price: "1.50 лв.", description: { en: "Smoky sweet", bg: "Димен и сладък" } },
            { name: { en: "Garlic Mayo", bg: "Чеснов майонез" }, price: "1.50 лв.", description: { en: "Creamy garlic", bg: "Кремообразен чесън" } },
            { name: { en: "Hot Sauce", bg: "Лют сос" }, price: "1.50 лв.", description: { en: "Spicy kick", bg: "Пикантен удар" } }
          ]
        },
        {
          name: { en: "Drinks / Bar", bg: "Напитки / Бар" },
          items: [
            { name: { en: "Fresh Lemonade", bg: "Прясна лимонада" }, price: "4.50 лв.", description: { en: "Homemade", bg: "Домашна" } },
            { name: { en: "Craft Beer", bg: "Крафт бира" }, price: "6.00 лв.", description: { en: "Local selection", bg: "Местна селекция" } },
            { name: { en: "Cocktails", bg: "Коктейли" }, price: "8.00 лв.", description: { en: "Ask bartender", bg: "Питай бармана" } }
          ]
        }
      ]
    }
  },
  
  reviews: [
    {
      id: 1,
      locationId: "coffee",
      name: { en: "Maria P.", bg: "Мария П." },
      text: {
        en: "Amazing coffee and the cakes are absolutely divine! The atmosphere is so cozy.",
        bg: "Страхотно кафе и тортите са просто божествени! Атмосферата е толкова уютна."
      },
      rating: 5
    },
    {
      id: 2,
      locationId: "coffee",
      name: { en: "Stefan K.", bg: "Стефан К." },
      text: {
        en: "Best cappuccino in Balchik. The staff is very friendly and professional.",
        bg: "Най-доброто капучино в Балчик. Персоналът е много приятелски настроен и професионален."
      },
      rating: 5
    },
    {
      id: 3,
      locationId: "coffee",
      name: { en: "Elena D.", bg: "Елена Д." },
      text: {
        en: "Love the seasonal specials. Always something new to try!",
        bg: "Обичам сезонните специалитети. Винаги има нещо ново за опитване!"
      },
      rating: 5
    },
    {
      id: 4,
      locationId: "burger",
      name: { en: "Nikolay V.", bg: "Николай В." },
      text: {
        en: "The burgers here are incredible! Juicy, flavorful, and perfectly cooked.",
        bg: "Бургерите тук са невероятни! Сочни, вкусни и перфектно приготвени."
      },
      rating: 5
    },
    {
      id: 5,
      locationId: "burger",
      name: { en: "Anna M.", bg: "Анна М." },
      text: {
        en: "Best bagels outside of New York! The salmon bagel is my favorite.",
        bg: "Най-добрите бейгъли извън Ню Йорк! Бейгълът със сьомга е моят любим."
      },
      rating: 5
    },
    {
      id: 6,
      locationId: "burger",
      name: { en: "Georgi T.", bg: "Георги Т." },
      text: {
        en: "Great food, great service, great atmosphere. What more could you want?",
        bg: "Страхотна храна, страхотно обслужване, страхотна атмосфера. Какво повече да искаш?"
      },
      rating: 5
    }
  ],
  
  gallery: {
    images: [
      {
        url: "https://images.unsplash.com/photo-1764277639919-1f77aaee0ab5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTJ8MHwxfHNlYXJjaHwxfHxsYXR0ZSUyMGFydCUyMGNvZmZlZSUyMGN1cCUyMGNvenl8ZW58MHx8fHwxNzcwMjM0OTI3fDA&ixlib=rb-4.1.0&q=85",
        alt: { en: "Latte art coffee", bg: "Кафе лате арт" }
      },
      {
        url: "https://images.unsplash.com/photo-1632898657999-ae6920976661?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzOTB8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwYnVyZ2VyJTIwd29vZGVuJTIwdGFibGV8ZW58MHx8fHwxNzcwMjM0OTI1fDA&ixlib=rb-4.1.0&q=85",
        alt: { en: "Gourmet burger", bg: "Гурме бургер" }
      },
      {
        url: "https://images.unsplash.com/photo-1632898658030-ead731d252d4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzOTB8MHwxfHNlYXJjaHwyfHxnb3VybWV0JTIwYnVyZ2VyJTIwd29vZGVuJTIwdGFibGV8ZW58MHx8fHwxNzcwMjM0OTI1fDA&ixlib=rb-4.1.0&q=85",
        alt: { en: "Delicious burger", bg: "Вкусен бургер" }
      },
      {
        url: "https://images.unsplash.com/photo-1695824431539-873b615cf220?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTJ8MHwxfHNlYXJjaHwyfHxsYXR0ZSUyMGFydCUyMGNvZmZlZSUyMGN1cCUyMGNvenl8ZW58MHx8fHwxNzcwMjM0OTI3fDA&ixlib=rb-4.1.0&q=85",
        alt: { en: "Cozy coffee cup", bg: "Уютна чаша кафе" }
      },
      {
        url: "https://images.unsplash.com/photo-1559766569-b8a373a2dcb3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwyfHxiYWxjaGlrJTIwYnVsZ2FyaWElMjBzZWElMjB2aWV3fGVufDB8fHx8MTc3MDIzNDkzMXww&ixlib=rb-4.1.0&q=85",
        alt: { en: "Balchik sea view", bg: "Изглед към морето в Балчик" }
      },
      {
        url: "https://images.unsplash.com/photo-1760687510983-68b5e2525bd4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTJ8MHwxfHNlYXJjaHw0fHxsYXR0ZSUyMGFydCUyMGNvZmZlZSUyMGN1cCUyMGNvenl8ZW58MHx8fHwxNzcwMjM0OTI3fDA&ixlib=rb-4.1.0&q=85",
        alt: { en: "Coffee art", bg: "Кафе изкуство" }
      }
    ]
  },
  
  social: {
    facebook: "#",
    instagram: "#",
    tripadvisor: "#"
  },
  
  seo: {
    title: "Diana Balchik | Coffee & Sweets + Burgers & Bagels",
    description: {
      en: "Diana Balchik - Two concepts under one brand. Coffee Shop for your sweet cravings and Burger Bar for savory delights. Visit us in Balchik!",
      bg: "Диана Балчик - Две концепции под една марка. Кафе сладкарница за сладки изкушения и Бургер бар за солени наслади. Посетете ни в Балчик!"
    }
  }
};

export default siteConfig;
