import { Product } from '../types';

export const products: Product[] = [
  // Церемониальная
  {
    id: 1,
    name: 'Церемониальная 50г',
    price: 1490,
    image: '/assets/ceramic.jfif',
    type: 'ceremonial',
    description: 'Премиальная матча церемониального сорта для традиционного чаепития. Яркий зелёный цвет, нежный вкус и максимум пользы.',
  },
  {
    id: 2,
    name: 'Церемониальная 100г',
    price: 2790,
    image: '/assets/canister.jfif',
    type: 'ceremonial',
    description: 'Церемониальная матча в удобной банке. Идеально для ежедневного использования.',
  },
  {
    id: 13,
    name: 'Церемониальная 1кг',
    price: 22990,
    image: '/assets/doipack.jfif',
    type: 'ceremonial',
    description: 'Оптовая упаковка церемониальной матча для кофеен и истинных ценителей.',
  },
  {
    id: 16,
    name: 'Церемониальная 5кг',
    price: 99990,
    image: '/assets/prompack.jfif',
    type: 'ceremonial',
    description: 'Промышленная упаковка для бизнеса. Максимальная выгода.',
  },
  
  // Латте
  {
    id: 3,
    name: 'Латте 50г',
    price: 1090,
    image: '/assets/ceramic 2.jfif',
    type: 'latte',
    description: 'Матча для латте - идеально сочетается с молоком. Мягкий сливочный вкус.',
  },
  {
    id: 4,
    name: 'Латте 100г',
    price: 1990,
    image: '/assets/canister 2.jfif',
    type: 'latte',
    description: 'Латте-сорт матча в банке. Для приготовления вкуснейших матча-латте дома.',
  },
  {
    id: 14,
    name: 'Латте 1кг',
    price: 16990,
    image: '/assets/doipack 2.jfif',
    type: 'latte',
    description: 'Оптовая упаковка латте-сорта для кофеен.',
  },
  {
    id: 17,
    name: 'Латте 5кг',
    price: 74990,
    image: '/assets/prompack2.jfif',
    type: 'latte',
    description: 'Промышленная упаковка латте-сорта для бизнеса.',
  },
  
  // Кулинарная
  {
    id: 5,
    name: 'Кулинарная 50г',
    price: 890,
    image: '/assets/ceramic 3.jfif',
    type: 'culinary',
    description: 'Кулинарная матча для смузи, выпечки и кулинарных экспериментов.',
  },
  {
    id: 6,
    name: 'Кулинарная 100г',
    price: 1590,
    image: '/assets/canister 3.jfif',
    type: 'culinary',
    description: 'Кулинарный сорт в банке. Универсальная матча для готовки.',
  },
  {
    id: 15,
    name: 'Кулинарная 1кг',
    price: 19990,
    image: '/assets/doipack 3.jfif',
    type: 'culinary',
    description: 'Оптовая упаковка кулинарной матча.',
  },
  {
    id: 18,
    name: 'Кулинарная 5кг',
    price: 89990,
    image: '/assets/prompack3.jfif',
    type: 'culinary',
    description: 'Промышленная упаковка кулинарной матча.',
  },
  
  // Наборы
  {
    id: 7,
    name: 'Набор Starter 50г',
    price: 1990,
    image: '/assets/big box.jfif',
    type: 'ceremonial',
    description: 'Стартовый набор: матча 50г + венчик + мерная ложка. Всё для первого знакомства с матча.',
  },
  {
    id: 8,
    name: 'Набор Premium 50г',
    price: 3490,
    image: '/assets/big box 2.jfif',
    type: 'ceremonial',
    description: 'Премиум-набор с церемониальной матча в подарочной упаковке.',
  },
  {
    id: 9,
    name: 'Набор Starter 100г',
    price: 3490,
    image: '/assets/big box 3.jfif',
    type: 'ceremonial',
    description: 'Расширенный стартовый набор с матча 100г и аксессуарами.',
  },
  {
    id: 10,
    name: 'Набор Premium 100г',
    price: 5990,
    image: '/assets/presentbox.jfif',
    type: 'ceremonial',
    description: 'Премиальный подарочный набор с матча 100г и керамической посудой.',
  },
  {
    id: 11,
    name: 'Набор Mini для пробы',
    price: 590,
    image: '/assets/little box.jfif',
    type: 'ceremonial',
    description: 'Мини-набор для первого знакомства. Идеально чтобы попробовать.',
  },
  {
    id: 12,
    name: 'Набор подарочный люкс',
    price: 7990,
    image: '/assets/presentbox 2.jfif',
    type: 'ceremonial',
    description: 'Роскошный подарочный набор в премиальной упаковке с полным комплектом посуды.',
  },
];

export const getProductById = (id: number): Product | undefined => {
  return products.find(p => p.id === id);
};

export const getProductsByType = (type: 'ceremonial' | 'latte' | 'culinary'): Product[] => {
  return products.filter(p => p.type === type);
};
