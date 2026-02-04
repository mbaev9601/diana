import { useEffect } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { seoTitle, coffeeLocation, burgerLocation, galleryImages, seoDescEn } from "./config/siteConfig";
import { LanguageProvider, Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { MenuSection } from "./components/MenuSection";
import { LocationsSection } from "./components/LocationsSection";
import { ReviewsSection } from "./components/ReviewsSection";
import { GallerySection } from "./components/GallerySection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

const JsonLd = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "Diana Balchik",
        "url": typeof window !== 'undefined' ? window.location.origin : '',
        "logo": galleryImages[0].url,
        "description": seoDescEn
      },
      {
        "@type": "CoffeeShop",
        "name": coffeeLocation.nameEn,
        "alternateName": coffeeLocation.nameBg,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "ul. Cherno More 1",
          "addressLocality": "Balchik",
          "postalCode": "9600",
          "addressCountry": "BG"
        },
        "telephone": "+359895265217",
        "priceRange": coffeeLocation.priceRange,
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": String(coffeeLocation.rating),
          "reviewCount": String(coffeeLocation.reviewCount)
        }
      },
      {
        "@type": "Restaurant",
        "name": burgerLocation.nameEn,
        "alternateName": burgerLocation.nameBg,
        "servesCuisine": ["American", "Bagels", "Burgers"],
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "ul. Cherno More 1",
          "addressLocality": "Balchik",
          "postalCode": "9600",
          "addressCountry": "BG"
        },
        "telephone": "+359895265217",
        "priceRange": burgerLocation.priceRange,
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": String(burgerLocation.rating),
          "reviewCount": String(burgerLocation.reviewCount)
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
    document.title = seoTitle;
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
