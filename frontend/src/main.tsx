import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';

// Получение chat_id из URL для WebApp в MAX (например ?chat_id=xxx)
const params = new URLSearchParams(window.location.search);
const chatId = params.get('chat_id');
if (chatId) {
  (window as unknown as { maxChatId?: string }).maxChatId = chatId;
}

const root = document.getElementById('root')!;
const loader = document.getElementById('load');
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App onReady={() => { loader?.remove(); }}/>
  </React.StrictMode>
);
