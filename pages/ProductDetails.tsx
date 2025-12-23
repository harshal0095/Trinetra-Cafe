
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PRODUCTS } from '../constants';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';
import { ArrowLeft, ShoppingBag, Star, ShieldCheck, Truck } from 'lucide-react';

const ProductDetails: React.FC = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  
  const product = PRODUCTS.find(p => p.id === id);
  
  if (!product) {
    return (
      <div className="h-screen flex flex-col items-center justify-center text-[#3E2723]">
        <h2 className="text-3xl font-serif font-bold mb-4">Product Not Found</h2>
        <Link to="/menu" className="text-[#FF7043] font-bold">Back to Menu</Link>
      </div>
    );
  }

  const relatedProducts = PRODUCTS.filter(
    p => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  return (
    <div className="pt-32 pb-24 bg-[#FFFDF9]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Breadcrumb */}
        <Link to="/menu" className="inline-flex items-center gap-2 text-[#3E2723] hover:text-[#FF7043] transition-colors mb-12 font-bold group">
          <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" />
          Back to Menu
        </Link>

        {/* Main Product Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-32">
          {/* Image Gallery */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="rounded-[40px] overflow-hidden shadow-2xl relative aspect-square lg:sticky lg:top-32"
          >
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            {product.tag && (
              <div className="absolute top-8 left-8 bg-[#FF7043] text-white text-xs font-bold px-4 py-2 rounded-full">
                {product.tag}
              </div>
            )}
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div>
              <div className="flex items-center gap-2 text-yellow-500 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                <span className="text-gray-400 text-sm ml-2 font-medium">(124 Customer Reviews)</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-[#3E2723] mb-4">{product.name}</h1>
              <p className="text-3xl font-serif font-bold text-[#FF7043]">${product.price.toFixed(2)}</p>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed border-t border-b border-gray-100 py-8">
              {product.description} Crafted with precision and passion, this {product.category} offering represents our commitment to quality. We source our ingredients ethically and prepare every order fresh to ensure you experience the full aromatic profile and flavor depth intended by our master artisans.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => addToCart(product)}
                className="flex-1 bg-[#3E2723] text-white py-5 rounded-3xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-[#5D4037] shadow-xl shadow-brown-200 transition-all"
              >
                <ShoppingBag size={22} />
                Add to Cart
              </button>
              <button className="flex-1 border-2 border-[#3E2723] text-[#3E2723] py-5 rounded-3xl font-bold text-lg hover:bg-[#3E2723] hover:text-white transition-all">
                Quick Buy
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center text-green-600">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#3E2723]">Quality Guaranteed</h4>
                  <p className="text-xs text-gray-500">100% Organic & Fresh</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-[#FF7043]">
                  <Truck size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#3E2723]">Local Delivery</h4>
                  <p className="text-xs text-gray-500">Within 30-45 minutes</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section>
            <div className="flex justify-between items-end mb-12">
              <div>
                <span className="text-[#FF7043] font-bold tracking-[0.2em] text-sm uppercase block mb-4">Recommendations</span>
                <h2 className="text-4xl font-serif font-bold text-[#3E2723]">You Might Also Like</h2>
              </div>
              <Link to="/menu" className="text-gray-400 hover:text-[#3E2723] font-bold underline underline-offset-8 transition-colors">
                View All
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
