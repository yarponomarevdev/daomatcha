import { Page, CartItem } from '../types';
import { PageHeader } from '../components/PageHeader';
import { Button } from '../components/ui/Button';
import { CartItemComponent } from '../components/CartItemComponent';

interface CartPageProps {
  cart: CartItem[];
  onNavigate: (page: Page) => void;
  onUpdateQuantity: (productId: number, quantity: number) => void;
  onRemove: (productId: number) => void;
  getCartTotal: () => number;
}

export const CartPage = ({ cart, onNavigate, onUpdateQuantity, onRemove, getCartTotal }: CartPageProps) => {
  const total = getCartTotal();

  return (
    <div className="fixed inset-0 flex flex-col bg-gradient-to-b from-matcha-light via-matcha-dark to-matcha-darker animate-slide-in">
      <PageHeader
        title="Корзина"
        onBack={() => onNavigate('shop')}
      />

      <div className="flex-1 overflow-y-auto px-4 pb-4">
        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <div className="text-6xl mb-4">🛒</div>
            <p className="text-white text-lg font-medium mb-2">Корзина пуста</p>
            <p className="text-white/60 text-sm mb-6">Добавьте товары из магазина</p>
            <Button onClick={() => onNavigate('shop')} variant="primary">
              Перейти в магазин
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            {cart.map(item => (
              <CartItemComponent
                key={item.product.id}
                item={item}
                onUpdateQuantity={onUpdateQuantity}
                onRemove={onRemove}
              />
            ))}
          </div>
        )}
      </div>

      {cart.length > 0 && (
        <div className="flex-shrink-0 bg-white/10 backdrop-blur-sm p-4 pb-[calc(env(safe-area-inset-bottom)+1rem)]">
          <div className="flex items-center justify-between mb-4">
            <span className="text-white text-lg font-medium">Итого:</span>
            <span className="text-white text-2xl font-bold">{total.toLocaleString('ru-RU')} ₽</span>
          </div>
          <Button onClick={() => onNavigate('checkout')} variant="primary" className="w-full">
            Оформить заказ
          </Button>
        </div>
      )}
    </div>
  );
};
