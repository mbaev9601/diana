import { useState } from "react";
import { useLanguage } from "./Navbar";
import { siteConfig } from "../config/siteConfig";
import { translations } from "../config/translations";
import { Dialog, DialogContent, DialogClose } from "./ui/dialog";
import { X } from "lucide-react";

export const GallerySection = () => {
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
