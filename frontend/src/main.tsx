import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { ErrorBoundary } from './components/ErrorBoundary';

// Получение chat_id из URL для WebApp в MAX (например ?chat_id=xxx)
const params = new URLSearchParams(window.location.search);
const chatId = params.get('chat_id');
if (chatId) {
  (window as unknown as { maxChatId?: string }).maxChatId = chatId;
}

const rootEl = document.getElementById('root');
const loader = document.getElementById('load');

if (!rootEl) {
  document.body.innerHTML = '<div style="padding:2rem;text-align:center;color:#c4a265">Ошибка: элемент root не найден</div>';
} else {
  ReactDOM.createRoot(rootEl).render(
    <React.StrictMode>
      <ErrorBoundary>
        <App onReady={() => {
          loader?.remove();
          try {
            (window as unknown as { WebApp?: { ready: () => void } }).WebApp?.ready();
          } catch {
            // WebApp не доступен вне MAX
          }
        }}/>
      </ErrorBoundary>
    </React.StrictMode>
  );
}
