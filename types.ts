
export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'coffee' | 'cold' | 'tea' | 'dessert' | 'snack';
  description: string;
  image: string;
  tag?: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface SpecialOffer {
  id: string;
  title: string;
  description: string;
  discountCode: string;
  image: string;
  color: string;
}
