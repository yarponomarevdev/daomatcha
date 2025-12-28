import { CartItem } from '../types';

interface CartItemProps {
  item: CartItem;
  onUpdateQuantity: (productId: number, quantity: number) => void;
  onRemove: (productId: number) => void;
}

export const CartItemComponent = ({ item, onUpdateQuantity, onRemove }: CartItemProps) => {
  const { product, quantity } = item;
  const subtotal = product.price * quantity;

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 flex gap-4">
      <div className="w-20 h-20 flex-shrink-0 bg-white/5 rounded-xl flex items-center justify-center text-white/40 text-xs">
        {product.name}
      </div>
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-white font-medium text-sm">{product.name}</h3>
          <p className="text-white/70 text-sm">{product.price.toLocaleString('ru-RU')} ₽</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={() => onUpdateQuantity(product.id, quantity - 1)}
              className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-lg text-white hover:bg-white/20 transition-colors"
            >
              −
            </button>
            <span className="text-white font-medium w-8 text-center">{quantity}</span>
            <button
              onClick={() => onUpdateQuantity(product.id, quantity + 1)}
              className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-lg text-white hover:bg-white/20 transition-colors"
            >
              +
            </button>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-white font-semibold">{subtotal.toLocaleString('ru-RU')} ₽</span>
            <button
              onClick={() => onRemove(product.id)}
              className="text-red-400 hover:text-red-300 transition-colors"
            >
              ×
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
