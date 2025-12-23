
import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Star } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/product/${product.id}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      onClick={handleNavigate}
      className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {product.tag && (
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-[#FF7043] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
            {product.tag}
          </div>
        )}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md p-1.5 rounded-full shadow-sm text-yellow-500">
          <Star size={14} fill="currentColor" />
        </div>
      </div>

      <div className="p-4 md:p-6">
        <div className="mb-3 md:mb-4">
          <h3 className="text-lg md:text-xl font-bold text-[#3E2723] group-hover:text-[#FF7043] transition-colors line-clamp-1">
            {product.name}
          </h3>
          <p className="text-xs md:text-sm text-gray-500 line-clamp-2 mt-1">
            {product.description}
          </p>
        </div>

        <div className="flex items-center justify-between pt-2">
          <span className="text-xl md:text-2xl font-serif font-bold text-[#3E2723]">
            ${product.price.toFixed(2)}
          </span>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={(e) => {
              e.stopPropagation();
              addToCart(product);
            }}
            className="w-10 h-10 md:w-12 md:h-12 bg-[#3E2723] text-white rounded-xl md:rounded-2xl flex items-center justify-center hover:bg-[#FF7043] transition-all duration-300 shadow-lg shadow-brown-200"
          >
            <Plus size={20} className="md:w-6 md:h-6" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
