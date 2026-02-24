import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BackButton } from '../components/BackButton';
import { CartItem } from '../components/CartItem';
import { useCart } from '../hooks/useCart';
import { API_BASE } from '../config';

export function Cart() {
  const navigate = useNavigate();
  const { items, updateQuantity, removeItem, clearCart, totalPrice } = useCart();
  const [tableNumber, setTableNumber] = useState('');
  const [comment, setComment] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [orderId, setOrderId] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!tableNumber.trim()) {
      setError('Укажите номер стола');
      return;
    }

    if (items.length === 0) {
      setError('Корзина пуста');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`${API_BASE}/api/orders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          table_number: tableNumber.trim(),
          comment: comment.trim(),
          items: items.map((i) => ({
            id: i.id,
            name: i.name,
            quantity: i.quantity,
            price: i.price,
          })),
          total: totalPrice,
          user_chat_id: (window as unknown as { maxChatId?: string }).maxChatId,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Ошибка при оформлении заказа');
      }

      clearCart();
      setOrderId(data.order_id);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Не удалось оформить заказ. Проверьте подключение к интернету.');
    } finally {
      setLoading(false);
    }
  };

  if (orderId !== null) {
    return (
      <div className="min-h-screen bg-dark-bg flex flex-col items-center justify-center px-6">
        <div className="text-center">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-green-500">
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">Заказ принят!</h1>
          <p className="text-gold text-xl mb-6">Номер заказа #{orderId}</p>
          <p className="text-gray-400 mb-8">Подтверждение отправлено в чат</p>
          <button
            type="button"
            onClick={() => navigate('/')}
            className="px-8 py-3 bg-gold text-dark-bg font-semibold rounded-xl hover:bg-gold-hover transition-colors"
          >
            На главную
          </button>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-dark-bg flex flex-col px-4">
        <header className="py-4">
          <BackButton to="/menu" />
        </header>
        <div className="flex-1 flex flex-col items-center justify-center text-center">
          <p className="text-gray-400 mb-6">Корзина пуста</p>
          <button
            type="button"
            onClick={() => navigate('/menu')}
            className="px-6 py-3 bg-gold text-dark-bg font-semibold rounded-xl"
          >
            Перейти в меню
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-bg pb-8">
      <header className="sticky top-0 z-40 bg-dark-bg/95 backdrop-blur border-b border-dark-border px-4 py-4">
        <BackButton to="/menu" />
        <h1 className="text-xl font-bold text-white mt-2">Корзина</h1>
      </header>

      <form onSubmit={handleSubmit} className="px-4 py-6 space-y-6">
        <div className="space-y-4">
          {items.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onIncrement={() => updateQuantity(item.id, 1)}
              onDecrement={() => updateQuantity(item.id, -1)}
              onRemove={() => removeItem(item.id)}
            />
          ))}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">Номер стола *</label>
          <input
            type="text"
            value={tableNumber}
            onChange={(e) => setTableNumber(e.target.value)}
            placeholder="Например: 5"
            className="w-full px-4 py-3 bg-dark-card border border-dark-border rounded-xl text-white placeholder-gray-500 focus:border-gold focus:outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">Комментарий к заказу</label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Пожелания, аллергии, особые указания..."
            rows={3}
            className="w-full px-4 py-3 bg-dark-card border border-dark-border rounded-xl text-white placeholder-gray-500 focus:border-gold focus:outline-none resize-none"
          />
        </div>

        {error && (
          <p className="text-red-400 text-sm">{error}</p>
        )}

        <div className="flex items-center justify-between pt-4 border-t border-dark-border">
          <span className="text-gray-400">Итого:</span>
          <span className="text-2xl font-bold text-gold">{totalPrice} ₽</span>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-4 bg-gold text-dark-bg font-semibold rounded-xl hover:bg-gold-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Оформление...' : 'Оформить заказ'}
        </button>
      </form>
    </div>
  );
}
