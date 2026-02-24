import { useNavigate } from 'react-router-dom';

interface FloatingCartProps {
  totalItems: number;
  totalPrice: number;
}

export function FloatingCart({ totalItems, totalPrice }: FloatingCartProps) {
  const navigate = useNavigate();

  if (totalItems === 0) return null;

  return (
    <button
      type="button"
      onClick={() => navigate('/cart')}
      className="fixed bottom-6 left-4 right-4 z-50 flex items-center justify-between px-6 py-4 bg-gold text-dark-bg rounded-2xl shadow-xl hover:bg-gold-hover transition-colors webapp-button"
    >
      <div className="flex items-center gap-3">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
          <path d="M3 6h18" />
          <path d="M16 10a4 4 0 01-8 0" />
        </svg>
        <span className="font-semibold">
          Корзина · {totalItems} {totalItems === 1 ? 'позиция' : totalItems < 5 ? 'позиции' : 'позиций'}
        </span>
      </div>
      <span className="font-bold">{totalPrice} ₽</span>
    </button>
  );
}
