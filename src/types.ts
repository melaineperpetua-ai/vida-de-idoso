export type TabType = 'home' | 'casa-segura' | 'alimentacao' | 'exercicios' | 'familia';

export interface ProductItem {
  id: string;
  name: string;
  badge: string;
  rating: number;
  reviewsCount: number;
  weightCapacity: string;
  material: string;
  idealFor: string;
  description: string;
  pros: string[];
  ctaText: string;
  amazonPriceSimulated: string;
}

export interface NewsletterFormData {
  name: string;
  email: string;
  interest: string;
}
