import { useState, useEffect } from 'react';
import { BackButton } from '../components/BackButton';

import { API_BASE } from '../config';

const COOLDOWN_SECONDS = 60;

export function CallWaiter() {
  const [tableNumber, setTableNumber] = useState('');
  const [comment, setComment] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [cooldown, setCooldown] = useState(0);

  useEffect(() => {
    if (cooldown <= 0) return;
    const timer = setInterval(() => setCooldown((c) => c - 1), 1000);
    return () => clearInterval(timer);
  }, [cooldown]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!tableNumber.trim()) {
      setError('Укажите номер стола');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`${API_BASE}/api/waiter`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          table_number: tableNumber.trim(),
          comment: comment.trim() || 'без комментария',
          user_chat_id: (window as unknown as { maxChatId?: string }).maxChatId,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Ошибка при вызове официанта');
      }

      setSuccess(true);
      setCooldown(COOLDOWN_SECONDS);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Не удалось вызвать официанта. Проверьте подключение.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen bg-dark-bg flex flex-col items-center justify-center px-6">
        <div className="text-center">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center animate-pulse">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-green-500">
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">Официант уже идёт!</h1>
          <p className="text-gray-400 mb-6">Ожидайте, пожалуйста</p>
          {cooldown > 0 ? (
            <p className="text-gold text-sm mb-4">
              Повторный вызов через {cooldown} сек
            </p>
          ) : (
            <button
              type="button"
              onClick={() => setSuccess(false)}
              className="text-gold hover:text-gold-hover"
            >
              Вызвать снова
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-bg pb-8">
      <header className="sticky top-0 z-40 bg-dark-bg/95 backdrop-blur border-b border-dark-border px-4 py-4">
        <BackButton to="/" />
        <h1 className="text-xl font-bold text-white mt-2">Вызвать официанта</h1>
      </header>

      <form onSubmit={handleSubmit} className="px-4 py-6 space-y-6 max-w-md mx-auto">
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">Номер стола *</label>
          <input
            type="text"
            value={tableNumber}
            onChange={(e) => setTableNumber(e.target.value)}
            placeholder="Например: 7"
            className="w-full px-4 py-3 bg-dark-card border border-dark-border rounded-xl text-white placeholder-gray-500 focus:border-gold focus:outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">Комментарий</label>
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="счёт / воду / меню"
            className="w-full px-4 py-3 bg-dark-card border border-dark-border rounded-xl text-white placeholder-gray-500 focus:border-gold focus:outline-none"
          />
        </div>

        {error && <p className="text-red-400 text-sm">{error}</p>}

        <button
          type="submit"
          disabled={loading || cooldown > 0}
          className="w-full py-4 bg-gold text-dark-bg font-semibold rounded-xl hover:bg-gold-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Отправка...' : cooldown > 0 ? `Повторить через ${cooldown} сек` : 'Вызвать'}
        </button>
      </form>
    </div>
  );
}
