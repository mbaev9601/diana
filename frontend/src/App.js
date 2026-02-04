import { useEffect } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { siteConfig } from "./config/siteConfig";
import { LanguageProvider, Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { MenuSection } from "./components/MenuSection";
import { LocationsSection } from "./components/LocationsSection";
import { ReviewsSection } from "./components/ReviewsSection";
import { GallerySection } from "./components/GallerySection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

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
