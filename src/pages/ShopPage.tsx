import { useState } from 'react';
import { Page, Product } from '../types';
import { products } from '../data/products';
import { PageHeader } from '../components/PageHeader';
import { ProductCard } from '../components/ProductCard';
import { ShoppingCartIcon } from '../components/icons/ShoppingCartIcon';
import { Badge } from '../components/ui/Badge';

interface ShopPageProps {
  onNavigate: (page: Page, data?: any) => void;
  cartCount: number;
}

export const ShopPage = ({ onNavigate, cartCount }: ShopPageProps) => {
  const [filterType, setFilterType] = useState<'all' | 'ceremonial' | 'latte' | 'culinary' | 'sets'>('all');

  const filteredProducts = filterType === 'all' 
    ? products 
    : filterType === 'sets'
    ? products.filter(p => p.name.includes('Набор'))
    : products.filter(p => p.type === filterType);

  return (
    <div className="fixed inset-0 flex flex-col bg-gradient-to-b from-matcha-light via-matcha-dark to-matcha-darker animate-slide-in">
      <PageHeader
        title="Магазин"
        onBack={() => onNavigate('matcha-choice')}
        rightContent={
          <button
            onClick={() => onNavigate('cart')}
            className="relative w-10 h-10 flex items-center justify-center bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors"
          >
            <div className="w-6 h-6">
              <ShoppingCartIcon />
            </div>
            {cartCount > 0 && (
              <div className="absolute -top-1 -right-1">
                <Badge>{cartCount}</Badge>
              </div>
            )}
          </button>
        }
      />

      {/* Filters */}
      <div className="flex-shrink-0 px-4 pb-4">
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {[
            { value: 'all', label: 'Все' },
            { value: 'ceremonial', label: 'Церемониальная' },
            { value: 'latte', label: 'Латте' },
            { value: 'culinary', label: 'Кулинарная' },
            { value: 'sets', label: 'Наборы' },
          ].map(filter => (
            <button
              key={filter.value}
              onClick={() => setFilterType(filter.value as any)}
              className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
                filterType === filter.value
                  ? 'bg-white text-matcha-dark shadow-matcha-soft'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="flex-1 overflow-y-auto px-4 pb-4">
        <div className="grid grid-cols-2 gap-4">
          {filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={() => onNavigate('product', { productId: product.id })}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
