import { useState } from 'react';
import { BackButton } from '../components/BackButton';
import { MenuCard } from '../components/MenuCard';
import { CategoryTabs } from '../components/CategoryTabs';
import { FloatingCart } from '../components/FloatingCart';
import { useCart } from '../hooks/useCart';
import { menuData, categories } from '../data/menu';

export function Menu() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const { items, addItem, removeItem, updateQuantity, totalItems, totalPrice } = useCart();

  const filteredItems = menuData.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-dark-bg pb-32">
      <header className="sticky top-0 z-40 bg-dark-bg/95 backdrop-blur border-b border-dark-border px-4 py-4">
        <BackButton to="/" />
        <h1 className="font-display text-2xl font-semibold text-gold mt-2">Меню и заказ</h1>
      </header>

      <div className="px-4 pt-4">
        <CategoryTabs
          categories={categories}
          active={activeCategory}
          onSelect={setActiveCategory}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 menu-grid">
          {filteredItems.map((item) => {
            const cartItem = items.find((i) => i.id === item.id);
            const quantity = cartItem?.quantity ?? 0;

            return (
              <MenuCard
                key={item.id}
                item={item}
                quantity={quantity}
                onAdd={() => addItem(item)}
                onRemove={() => removeItem(item.id)}
                onDecrement={() => updateQuantity(item.id, -1)}
              />
            );
          })}
        </div>
      </div>

      <FloatingCart totalItems={totalItems} totalPrice={totalPrice} />
    </div>
  );
}
