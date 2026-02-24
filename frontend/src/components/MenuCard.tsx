import type { MenuItem } from '../types';

interface MenuCardProps {
  item: MenuItem;
  quantity: number;
  onAdd: () => void;
  onRemove: () => void;
  onDecrement: () => void;
}

export function MenuCard({ item, quantity, onAdd, onRemove, onDecrement }: MenuCardProps) {
  return (
    <div className="bg-dark-card rounded-xl overflow-hidden shadow-lg border border-dark-border transition-transform hover:scale-[1.02]">
      <div className="aspect-[4/3] overflow-hidden bg-dark-border">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg text-white mb-1">{item.name}</h3>
        {item.description && (
          <p className="text-gray-400 text-sm mb-2 line-clamp-2">{item.description}</p>
        )}
        <div className="flex items-center justify-between">
          <div className="text-gold font-medium">
            {item.weight && <span className="text-gray-500 text-sm mr-2">{item.weight}</span>}
            {item.price} ₽
          </div>
          {quantity === 0 ? (
            <button
              type="button"
              onClick={onAdd}
              className="w-10 h-10 rounded-full bg-gold hover:bg-gold-hover text-dark-bg flex items-center justify-center transition-colors webapp-button"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 5v14M5 12h14" />
              </svg>
            </button>
          ) : (
            <div className="flex items-center gap-2 bg-dark-border rounded-full px-2 py-1">
              <button
                type="button"
                onClick={quantity === 1 ? onRemove : onDecrement}
                className="w-8 h-8 rounded-full hover:bg-dark-card flex items-center justify-center text-gold transition-colors webapp-button"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14" />
                </svg>
              </button>
              <span className="w-6 text-center font-medium">{quantity}</span>
              <button
                type="button"
                onClick={onAdd}
                className="w-8 h-8 rounded-full hover:bg-dark-card flex items-center justify-center text-gold transition-colors webapp-button"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
