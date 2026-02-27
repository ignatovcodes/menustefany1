import { useNavigate } from 'react-router-dom';

export function Home() {
  const navigate = useNavigate();

  const cards = [
    {
      title: 'Меню и заказ',
      description: 'Просмотр меню и оформление заказа',
      path: '/menu',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M18 8h1a4 4 0 010 8h-1" />
          <path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" />
        </svg>
      ),
    },
    {
      title: 'Забронировать стол',
      description: 'Резервация столика на удобное время',
      path: '/booking',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <path d="M16 2v4M8 2v4M3 10h18" />
        </svg>
      ),
    },
    {
      title: 'Вызвать официанта',
      description: 'Попросить помощь официанта',
      path: '/waiter',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="7" r="3" />
          <path d="M6 20c0-3.5 2.5-6 6-6s6 2.5 6 6" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-dark-bg flex flex-col items-center justify-center px-6 pb-24">
      <div className="text-center mb-12">
        <img src="/logo.svg" alt="СТЕФАНИЯ" className="h-20 w-auto mx-auto mb-8" />
        <p className="text-white text-sm tracking-wide mb-1">г. Краснодар, Кубанская наб., 186/1</p>
        <a href="tel:+79883535735" className="text-white text-base font-medium webapp-button">+7 (988) 353-57-35</a>
      </div>

      <div className="w-full max-w-md space-y-4">
        {cards.map((card) => (
          <button
            key={card.path}
            type="button"
            onClick={() => navigate(card.path)}
            className="w-full flex items-center gap-4 p-5 bg-dark-card rounded-2xl border border-dark-border hover:border-gold/50 transition-colors text-left webapp-button group"
          >
            <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center text-white group-hover:bg-gold/20 transition-colors">
              {card.icon}
            </div>
            <div className="flex-1">
              <h2 className="font-semibold text-lg text-white">{card.title}</h2>
              <p className="text-sm text-gray-400">{card.description}</p>
            </div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        ))}
      </div>
    </div>
  );
}
