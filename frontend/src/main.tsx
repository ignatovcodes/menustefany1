import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';

// Получение chat_id из URL для WebApp в MAX (например ?chat_id=xxx)
const params = new URLSearchParams(window.location.search);
const chatId = params.get('chat_id');
if (chatId) {
  (window as unknown as { maxChatId?: string }).maxChatId = chatId;
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
