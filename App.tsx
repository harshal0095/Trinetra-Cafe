
import React, { useState, Suspense } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import CartPanel from './components/CartPanel';
import Home from './pages/Home';
import MenuPage from './pages/MenuPage';
import ContactPage from './pages/ContactPage';
import ProductDetails from './pages/ProductDetails';
import { motion, AnimatePresence } from 'framer-motion';

// Mock simple components for unfinished pages
const OffersPage = () => (
  <div className="pt-40 pb-20 text-center bg-[#FFFDF9] min-h-screen">
    <h1 className="text-5xl font-serif font-bold mb-4">Special Offers</h1>
    <p className="text-gray-500">Check back later for more amazing deals!</p>
  </div>
);

const AboutPage = () => (
  <div className="pt-40 pb-20 max-w-4xl mx-auto px-6 bg-[#FFFDF9] min-h-screen">
    <h1 className="text-5xl font-serif font-bold mb-8">About Trinetra Café</h1>
    <div className="prose prose-lg text-gray-600">
      <p className="mb-6">Founded in 2025, Trinetra Café began with a simple mission: to bring the finest artisan coffee to our neighborhood. We believe that coffee is more than just a morning routine; it's a ritual that connects people.</p>
      <img src="https://images.unsplash.com/photo-1559496417-e7f25cb247f3?auto=format&fit=crop&q=80&w=1200" className="rounded-3xl mb-8" alt="Coffee" />
      <p>Every bean we source is ethically grown and roasted to perfection in our on-site micro-roastery. Join us for a cup and experience the magic of fresh brew.</p>
    </div>
  </div>
);

const Footer = () => (
  <footer className="bg-[#3E2723] text-white py-20 px-6">
    <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
      <div className="col-span-2">
        <h3 className="text-3xl font-serif font-bold mb-6 italic">Trinetra CAFÉ</h3>
        <p className="text-white/60 max-w-sm mb-8">
          Crafting exceptional coffee moments since 2019. Join us in our journey to discover the world's finest beans.
        </p>
        <div className="text-xs font-bold uppercase tracking-[0.3em] opacity-40">© 2024 Trinetra Café Branding. All Rights Reserved.</div>
      </div>
      <div>
        <h4 className="font-bold mb-6 text-[#FF7043] uppercase tracking-widest text-sm">Quick Links</h4>
        <ul className="space-y-4 text-white/80">
          <li><a href="#/menu" className="hover:text-white transition-colors">Our Menu</a></li>
          <li><a href="#/about" className="hover:text-white transition-colors">Our Story</a></li>
          <li><a href="#/offers" className="hover:text-white transition-colors">Offers</a></li>
          <li><a href="#/contact" className="hover:text-white transition-colors">Locations</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold mb-6 text-[#FF7043] uppercase tracking-widest text-sm">Follow Us</h4>
        <ul className="space-y-4 text-white/80">
          <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Pinterest</a></li>
        </ul>
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  React.useEffect(() => {
    // Simulate initial load reveal
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  return (
    <CartProvider>
      <Router>
        <AnimatePresence>
          {isLoading ? (
            <motion.div
              key="loader"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="fixed inset-0 z-[1000] bg-[#3E2723] flex flex-col items-center justify-center overflow-hidden"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="relative"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                  className="w-32 h-32 border-4 border-white/10 border-t-[#FF7043] rounded-full"
                />
                <div className="absolute inset-0 flex items-center justify-center text-white text-3xl font-serif italic">T</div>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8 text-white/50 text-xs font-bold uppercase tracking-[0.5em]"
              >
                Trinetra Artisan Café
              </motion.h2>
            </motion.div>
          ) : (
            <div className="flex flex-col min-h-screen">
              <Navbar onOpenCart={() => setIsCartOpen(true)} />
              <CartPanel isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
              
              <main className="flex-grow">
                <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading...</div>}>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/menu" element={<MenuPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/offers" element={<OffersPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/product/:id" element={<ProductDetails />} />
                  </Routes>
                </Suspense>
              </main>

              <Footer />
            </div>
          )}
        </AnimatePresence>
      </Router>
    </CartProvider>
  );
};

export default App;
