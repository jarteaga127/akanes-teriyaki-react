import { useState } from "react";
import { menuData } from "../data/MenuData";
import OrderCard from "../components/OrderCard";

type Category = 'all' | 'bowls' | 'plates' | 'sides' | 'desserts' | 'drinks';

const CATEGORIES: {key: Category; label: string}[] = [
    { key: 'all', label: 'All Items' },
    { key: 'bowls', label: 'bowls' },
    { key: 'plates', label: 'plates' },
    { key: 'sides', label: 'sides' },
    { key: 'desserts', label: 'desserts' },
    { key: 'drinks', label: 'drinks' },
]

const OnlineMenu: React.FC = () => {

    const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = menuData.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
    return ( 
        <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-white tracking-tight">
           What are you craving now?
          </h1>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400 text-base sm:text-lg">Check out our menu.</p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
<div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-4 py-2 text-sm font-semibold rounded-full whitespace-nowrap transition-colors ${
                  activeCategory === cat.key
                    ? 'bg-red-800 text-white shadow-sm'
                    : 'bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="w-full md:w-64">
            <input
              type="text"
              placeholder="Search dishes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-red-800"
            />
          </div>
        </div>

        {/* Dish Cards Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
             <OrderCard key={item.id} item={item}/> 
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800">
            <p className="text-zinc-500 dark:text-zinc-400 text-lg">No dishes found matching your criteria.</p>
          </div>
        )}

      </div>
    </div>
  );
};
          
 
export default OnlineMenu;