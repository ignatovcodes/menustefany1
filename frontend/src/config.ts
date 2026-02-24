// API URL: задайте VITE_API_URL при деплое на Vercel (URL бекенда на Render)
export const API_BASE =
  import.meta.env.VITE_API_URL ||
  (import.meta.env.PROD ? 'https://stephania-max-bot.onrender.com' : 'http://localhost:3001');
