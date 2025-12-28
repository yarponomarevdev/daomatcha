import { Page, Product } from '../types';
import { products } from '../data/products';
import { PageHeader } from '../components/PageHeader';
import { Button } from '../components/ui/Button';
import { ShoppingCartIcon } from '../components/icons/ShoppingCartIcon';
import { Badge } from '../components/ui/Badge';

interface ProductPageProps {
  productId: number;
  onNavigate: (page: Page) => void;
  onAddToCart: (product: Product) => void;
  cartCount: number;
}

export const ProductPage = ({ productId, onNavigate, onAddToCart, cartCount }: ProductPageProps) => {
  const product = products.find(p => p.id === productId);

  if (!product) {
    return (
      <div className="fixed inset-0 flex flex-col bg-gradient-to-b from-matcha-light via-matcha-dark to-matcha-darker">
        <PageHeader
          title="Товар не найден"
          onBack={() => onNavigate('shop')}
        />
        <div className="flex-1 flex items-center justify-center">
          <p className="text-white">Товар не найден</p>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    onAddToCart(product);
  };

  return (
    <div className="fixed inset-0 flex flex-col bg-gradient-to-b from-matcha-light via-matcha-dark to-matcha-darker animate-slide-in">
      <PageHeader
        title={product.name}
        onBack={() => onNavigate('shop')}
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

      <div className="flex-1 overflow-y-auto px-4 pb-4">
        {/* Product Image */}
        <div className="w-full aspect-square bg-white/5 rounded-2xl mb-6 flex items-center justify-center">
          <div className="w-full h-full bg-gradient-to-br from-matcha-light/20 to-matcha-dark/20 rounded-2xl flex items-center justify-center text-white/40 p-8 text-center">
            {product.name}
          </div>
        </div>

        {/* Product Info */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 space-y-4">
          <h2 className="text-2xl font-bold text-white">{product.name}</h2>
          <div className="h-px bg-white/20" />
          <p className="text-white/80 text-sm leading-relaxed">{product.description}</p>
          <p className="text-3xl font-bold text-white">{product.price.toLocaleString('ru-RU')} ₽</p>
        </div>
      </div>

      {/* Add to Cart Button */}
      <div className="flex-shrink-0 p-4 pb-[calc(env(safe-area-inset-bottom)+1rem)]">
        <Button onClick={handleAddToCart} variant="primary" className="w-full">
          Добавить в корзину
        </Button>
      </div>
    </div>
  );
};
