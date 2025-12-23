
import { Product, SpecialOffer } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'c1',
    name: 'Artisan Cappuccino',
    price: 4.5,
    category: 'coffee',
    description: 'Rich espresso topped with a smooth layer of velvety milk foam.',
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&q=80&w=800',
    tag: 'Best Seller'
  },
  {
    id: 'c2',
    name: 'Lavender Latte',
    price: 5.2,
    category: 'coffee',
    description: 'Floral lavender notes balanced with premium espresso and steamed milk.',
    image: 'https://images.unsplash.com/photo-1572286258217-40142c1c6a70?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'cc1',
    name: 'Iced Caramel Cloud',
    price: 5.8,
    category: 'cold',
    description: 'Cold brew topped with whipped caramel foam and drizzle.',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&q=80&w=800',
    tag: 'Refreshing'
  },
  {
    id: 't1',
    name: 'Emerald Matcha',
    price: 5.5,
    category: 'tea',
    description: 'Ceremonial grade matcha whisked to perfection with creamy milk.',
    image: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'd1',
    name: 'Velvet Tiramisu',
    price: 7.0,
    category: 'dessert',
    description: 'Classic Italian delight with espresso-soaked ladyfingers and mascarpone.',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&q=80&w=800',
    tag: 'Chef Choice'
  },
  {
    id: 's1',
    name: 'Avocado Toast',
    price: 9.5,
    category: 'snack',
    description: 'Sourdough topped with smashed avocado, radish, and chili flakes.',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'c3',
    name: 'Pour Over V60',
    price: 6.0,
    category: 'coffee',
    description: 'Single-origin beans brewed to highlight subtle flavor profiles.',
    image: 'https://images.unsplash.com/photo-1544787210-2213d84ad96b?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'cc2',
    name: 'Hazelnut Cold Brew',
    price: 5.0,
    category: 'cold',
    description: '12-hour steeped cold brew with a hint of toasted hazelnut.',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'c4',
    name: 'Cortado Classic',
    price: 4.2,
    category: 'coffee',
    description: 'Equal parts espresso and warm milk for a balanced, intense coffee hit.',
    image: 'https://images.unsplash.com/photo-1534040385115-33dcb3acba5b?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 't2',
    name: 'Hibiscus Iced Tea',
    price: 4.8,
    category: 'tea',
    description: 'Vibrant and tart hibiscus flowers steeped with honey and mint.',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'd2',
    name: 'Pistachio Tart',
    price: 6.5,
    category: 'dessert',
    description: 'Buttery shortcrust filled with pistachio cream and topped with crushed nuts.',
    image: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 's2',
    name: 'Smoked Salmon Bagel',
    price: 11.0,
    category: 'snack',
    description: 'Toasted bagel with cream cheese, capers, onion, and premium salmon.',
    image: 'https://images.unsplash.com/photo-1510255955325-131728271037?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'c5',
    name: 'Flat White',
    price: 4.6,
    category: 'coffee',
    description: 'Silky microfoam poured over a double shot of our house espresso.',
    image: 'https://images.unsplash.com/photo-1551030173-1d2056c44ef9?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'cc3',
    name: 'Espresso Tonic',
    price: 6.2,
    category: 'cold',
    description: 'Double espresso over premium tonic water with a slice of orange.',
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 't3',
    name: 'Earl Grey Reserve',
    price: 4.5,
    category: 'tea',
    description: 'Black tea infused with pure bergamot oil for a classic aromatic cup.',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'd3',
    name: 'Almond Croissant',
    price: 4.8,
    category: 'dessert',
    description: 'Flaky layers filled with rich frangipane and topped with toasted almonds.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800',
  }
];

export const OFFERS: SpecialOffer[] = [
  {
    id: 'off1',
    title: 'Morning Bloom',
    description: 'Get 20% off all pastries before 10 AM every weekday.',
    discountCode: 'BLOOM20',
    image: 'https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?auto=format&fit=crop&q=80&w=800',
    color: 'bg-orange-50'
  },
  {
    id: 'off2',
    title: 'Double Trouble',
    description: 'Buy one get one free on all Iced Lattes every Friday.',
    discountCode: 'BOGOFRIDAY',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80&w=800',
    color: 'bg-green-50'
  }
];

export const CAFE_STATS = [
  { label: 'Cups Served', value: 12500, suffix: '+' },
  { label: 'Happy Customers', value: 8400, suffix: '+' },
  { label: 'Coffee Blends', value: 12, suffix: '' },
  { label: 'Years Experience', value: 5, suffix: '+' }
];
