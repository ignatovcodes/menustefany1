import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BackButton } from '../components/BackButton';

import { API_BASE } from '../config';

const formatPhone = (value: string) => {
  const digits = value.replace(/\D/g, '').slice(0, 11);
  if (digits.length === 0) return '';
  if (digits[0] === '8' || digits[0] === '7') {
    const rest = digits.slice(1);
    return `+7 ${rest.slice(0, 3)} ${rest.slice(3, 6)} ${rest.slice(6, 8)} ${rest.slice(8, 10)}`;
  }
  return `+7 ${digits.slice(0, 3)} ${digits.slice(3, 6)} ${digits.slice(6, 8)} ${digits.slice(8, 10)}`;
};

const timeOptions: string[] = [];
for (let h = 12; h <= 23; h++) {
  for (let m = 0; m < 60; m += 30) {
    timeOptions.push(`${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`);
  }
}

export function Booking() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('12:00');
  const [guests, setGuests] = useState(2);
  const [notes, setNotes] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(formatPhone(e.target.value));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!name.trim()) {
      setError('Введите имя');
      return;
    }

    const phoneDigits = phone.replace(/\D/g, '');
    if (phoneDigits.length < 11) {
      setError('Введите корректный номер телефона');
      return;
    }

    if (!date) {
      setError('Выберите дату');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`${API_BASE}/api/bookings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.replace(/\s/g, ''),
          date,
          time,
          guests,
          notes: notes.trim(),
          user_chat_id: (window as unknown as { maxChatId?: string }).maxChatId,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Ошибка при бронировании');
      }

      setSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Не удалось забронировать стол. Проверьте подключение.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen bg-dark-bg flex flex-col items-center justify-center px-6">
        <div className="text-center">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-green-500">
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">Бронь принята!</h1>
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

  return (
    <div className="min-h-screen bg-dark-bg pb-8">
      <header className="sticky top-0 z-40 bg-dark-bg/95 backdrop-blur border-b border-dark-border px-4 py-4">
        <BackButton to="/" />
        <h1 className="text-xl font-bold text-white mt-2">Забронировать стол</h1>
      </header>

      <form onSubmit={handleSubmit} className="px-4 py-6 space-y-6 max-w-md mx-auto">
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">Имя *</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ваше имя"
            className="w-full px-4 py-3 bg-dark-card border border-dark-border rounded-xl text-white placeholder-gray-500 focus:border-gold focus:outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">Телефон *</label>
          <input
            type="tel"
            value={phone}
            onChange={handlePhoneChange}
            placeholder="+7 999 123 45 67"
            className="w-full px-4 py-3 bg-dark-card border border-dark-border rounded-xl text-white placeholder-gray-500 focus:border-gold focus:outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">Дата *</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            min={new Date().toISOString().split('T')[0]}
            className="w-full px-4 py-3 bg-dark-card border border-dark-border rounded-xl text-white focus:border-gold focus:outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">Время *</label>
          <select
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full px-4 py-3 bg-dark-card border border-dark-border rounded-xl text-white focus:border-gold focus:outline-none"
          >
            {timeOptions.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">Количество гостей</label>
          <select
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
            className="w-full px-4 py-3 bg-dark-card border border-dark-border rounded-xl text-white focus:border-gold focus:outline-none"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
              <option key={n} value={n}>
                {n} {n === 1 ? 'гость' : n < 5 ? 'гостя' : 'гостей'}
              </option>
            ))}
            <option value={99}>10+ гостей</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">Пожелания</label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Столик у окна, детское кресло..."
            rows={3}
            className="w-full px-4 py-3 bg-dark-card border border-dark-border rounded-xl text-white placeholder-gray-500 focus:border-gold focus:outline-none resize-none"
          />
        </div>

        {error && <p className="text-red-400 text-sm">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full py-4 bg-gold text-dark-bg font-semibold rounded-xl hover:bg-gold-hover transition-colors disabled:opacity-50"
        >
          {loading ? 'Отправка...' : 'Забронировать'}
        </button>
      </form>
    </div>
  );
}
