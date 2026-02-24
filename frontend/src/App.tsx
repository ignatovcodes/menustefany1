import { HashRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { Cart } from './pages/Cart';
import { Booking } from './pages/Booking';
import { CallWaiter } from './pages/CallWaiter';
import './styles/globals.css';

// HashRouter — совместим с webview MAX, не теряет state при навигации
export function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/waiter" element={<CallWaiter />} />
      </Routes>
    </HashRouter>
  );
}
