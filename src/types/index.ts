export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  type: 'ceremonial' | 'latte' | 'culinary';
  description: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Recipe {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  ingredients: string[];
  instructions: string[];
  tips?: string[];
}

export interface Location {
  id: string;
  name: string;
  address: string;
  distance: string;
  type: 'automat' | 'coffee' | 'shop';
}

export interface PartnershipForm {
  fullName: string;
  partnerType: string;
  phone: string;
  email: string;
  companyName?: string;
}

export interface ReviewForm {
  name: string;
  drinkType?: string;
  locationType?: string;
  location?: string;
  rating: number;
  review: string;
  contact?: string;
}

export interface ProblemForm {
  name: string;
  problemType: string;
  location: string;
  datetime?: string;
  description: string;
  contact: string;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  name: string;
  phone: string;
  email?: string;
  city: string;
  deliveryType: 'courier' | 'pvz' | 'pickup';
  deliveryCost: number;
  address?: string;
  comment?: string;
  createdAt: Date;
}

export type Page = 
  | 'main-menu'
  | 'partnership'
  | 'support'
  | 'faq'
  | 'recipes'
  | 'recipe-detail'
  | 'matcha-choice'
  | 'nearby'
  | 'find-matcha'
  | 'shop'
  | 'product'
  | 'cart'
  | 'checkout'
  | 'payment'
  | 'payment-success'
  | 'payment-error';
