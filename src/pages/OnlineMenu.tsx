import { useState } from "react";
import { type MenuItem, menuData } from "../data/MenuData";

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

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
    return ( 
        <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-white tracking-tight">
            Our Menu
          </h1>
          </div>
          </div>
          </div>
     );
}
 
export default OnlineMenu;