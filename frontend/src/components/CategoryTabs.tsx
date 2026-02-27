interface CategoryTabsProps {
  categories: string[];
  active: string;
  onSelect: (category: string) => void;
}

export function CategoryTabs({ categories, active, onSelect }: CategoryTabsProps) {
  return (
    <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2 -mx-4 px-4">
      {categories.map((cat) => (
        <button
          key={cat}
          type="button"
          onClick={() => onSelect(cat)}
          className={`
            flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors webapp-button
            ${active === cat
              ? 'bg-gold text-white'
              : 'bg-dark-card text-gray-400 hover:text-white border border-dark-border'
            }
          `}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
