import type { CartItem as CartItemType } from '../types';

interface CartItemProps {
  item: CartItemType;
  onIncrement: () => void;
  onDecrement: () => void;
  onRemove: () => void;
}

export function CartItem({ item, onIncrement, onDecrement, onRemove }: CartItemProps) {
  const total = item.price * item.quantity;

  return (
    <div className="flex gap-4 p-4 bg-dark-card rounded-xl border border-dark-border">
      <img
        src={item.image}
        alt={item.name}
        className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
      />
      <div className="flex-1 min-w-0">
        <h3 className="font-medium text-white truncate">{item.name}</h3>
        <p className="text-gold text-sm">{item.price} ₽ × {item.quantity} = {total} ₽</p>
        <div className="flex items-center gap-2 mt-2">
          <div className="flex items-center rounded-full bg-dark-bg border border-dark-border">
            <button
              type="button"
              onClick={onDecrement}
              className="w-8 h-8 flex items-center justify-center text-gold hover:bg-dark-border rounded-l-full transition-colors webapp-button"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14" />
              </svg>
            </button>
            <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
            <button
              type="button"
              onClick={onIncrement}
              className="w-8 h-8 flex items-center justify-center text-gold hover:bg-dark-border rounded-r-full transition-colors webapp-button"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 5v14M5 12h14" />
              </svg>
            </button>
          </div>
          <button
            type="button"
            onClick={onRemove}
            className="text-red-400 hover:text-red-300 text-sm transition-colors"
          >
            Удалить
          </button>
        </div>
      </div>
    </div>
  );
}
