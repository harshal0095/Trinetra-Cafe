
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';

const MenuPage: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'coffee' | 'cold' | 'tea' | 'dessert' | 'snack'>('all');

  const categories = [
    { id: 'all', label: 'All Items' },
    { id: 'coffee', label: 'Coffee' },
    { id: 'cold', label: 'Cold Brews' },
    { id: 'tea', label: 'Tea' },
    { id: 'dessert', label: 'Desserts' },
    { id: 'snack', label: 'Snacks' },
  ];

  const filteredProducts = filter === 'all' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === filter);

  return (
    <div className="pt-24 pb-12 lg:pt-32 lg:pb-24 bg-[#FFFDF9]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#3E2723] mb-4 md:mb-6"
          >
            Our Menu
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto"
          >
            Discover our curated selection of premium beverages and gourmet snacks, 
            prepared with love by our master baristas and chefs.
          </motion.p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-16 relative">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id as any)}
              className={`relative px-4 py-2 md:px-8 md:py-3 rounded-full text-xs md:text-sm font-bold tracking-widest uppercase transition-colors duration-500 z-10 ${
                filter === cat.id ? 'text-white' : 'text-[#3E2723] hover:text-[#FF7043]'
              }`}
            >
              {cat.label}
              {filter === cat.id && (
                <motion.div
                  layoutId="activeFilter"
                  className="absolute inset-0 bg-[#FF7043] rounded-full -z-10 shadow-lg shadow-orange-200"
                  transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default MenuPage;
