import { useLanguage } from "./Navbar";
import { siteConfig } from "../config/siteConfig";
import { translations } from "../config/translations";
import { Card, CardContent } from "./ui/card";
import { Star } from "lucide-react";

export const ReviewsSection = () => {
  const { t } = useLanguage();
  const coffeeLocation = siteConfig.locations[0];
  const burgerLocation = siteConfig.locations[1];
  const coffeeReviews = siteConfig.reviews.filter(r => r.locationId === "coffee");
  const burgerReviews = siteConfig.reviews.filter(r => r.locationId === "burger");
  
  const RatingBlock = ({ location, color }) => (
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
          <div data-testid="reviews-coffee">
            <RatingBlock location={coffeeLocation} color="text-diana-purple" />
            <div className="grid gap-4">
              {coffeeReviews.map(review => (
                <ReviewCard key={review.id} review={review} color="text-diana-purple" />
              ))}
            </div>
          </div>
          
          <div data-testid="reviews-burger">
            <RatingBlock location={burgerLocation} color="text-savory-orange" />
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
