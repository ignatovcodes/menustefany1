import { useState } from 'react';
import type { MenuItem } from '../types';

interface MenuCardProps {
  item: MenuItem;
  quantity: number;
  onAdd: () => void;
  onRemove: () => void;
  onDecrement: () => void;
}

const PLACEHOLDER = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300' fill='%23333'%3E%3Crect width='400' height='300' fill='%23252525'/%3E%3Cpath d='M200 120l-60 80h120z' fill='%23c4a265' opacity='0.5'/%3E%3C/svg%3E";

export function MenuCard({ item, quantity, onAdd, onRemove, onDecrement }: MenuCardProps) {
  const [imgError, setImgError] = useState(false);
  return (
    <div className="bg-dark-card rounded-xl overflow-hidden shadow-lg border border-dark-border">
      <div className="aspect-[4/3] overflow-hidden bg-dark-border relative">
        <img
          src={imgError ? PLACEHOLDER : item.image}
          alt={item.name}
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
          onError={() => setImgError(true)}
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
