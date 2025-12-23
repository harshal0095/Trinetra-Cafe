
import React from 'react';
import { motion } from 'framer-motion';
// Added Coffee to the imports from lucide-react
import { ArrowRight, ChevronDown, Coffee } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden bg-[#FFF8E1] py-24 md:py-0">
      {/* Background Decorative Elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
        className="absolute -top-40 -right-40 w-[300px] h-[300px] md:w-[600px] md:h-[600px] border border-brown-100 rounded-full opacity-20 pointer-events-none"
      />
      <div className="absolute top-1/2 left-0 w-32 h-32 md:w-64 md:h-64 bg-[#FF7043] blur-[100px] md:blur-[150px] opacity-10" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="text-center md:text-left order-1 md:order-none">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#FF7043] font-bold tracking-[0.3em] text-xs md:text-sm uppercase mb-4 md:mb-6 block">
              Established 2019
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-serif font-black text-[#3E2723] leading-tight mb-6 md:mb-8">
              Freshly Brewed <br />
              <span className="text-[#FF7043] italic">Happiness.</span>
            </h1>
            <p className="text-base md:text-lg text-[#5D4037] mb-8 md:mb-10 max-w-lg mx-auto md:mx-0 leading-relaxed">
              Experience the ritual of exceptional coffee. Our artisan beans are roasted daily to deliver a moment of pure bliss in every cup.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 justify-center md:justify-start">
              <Link to="/menu" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto bg-[#3E2723] text-white px-8 py-4 md:px-10 md:py-5 rounded-full font-bold text-base md:text-lg flex items-center justify-center gap-3 shadow-2xl shadow-brown-900/20 hover:bg-[#5D4037] transition-all"
                >
                  Order Now <ArrowRight size={20} />
                </motion.button>
              </Link>
              <Link to="/about">
                <button className="text-[#3E2723] font-bold text-base md:text-lg hover:text-[#FF7043] transition-colors group mt-4 sm:mt-0">
                  Discover Our Story
                  <span className="block h-0.5 bg-current w-0 group-hover:w-full transition-all duration-300" />
                </button>
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="relative order-2 md:order-none mt-8 md:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            {/* Main Image Container */}
            <div className="relative w-full max-w-[280px] md:max-w-md mx-auto aspect-[4/5] rounded-[30px] md:rounded-[40px] overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1200"
                alt="Café Atmosphere"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3E2723]/60 to-transparent" />
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-6 -right-4 md:-top-10 md:-right-10 bg-white p-4 md:p-6 rounded-2xl md:rounded-3xl shadow-xl z-20"
            >
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-100 rounded-xl md:rounded-2xl flex items-center justify-center text-[#FF7043]">
                  <Coffee size={20} className="md:w-6 md:h-6" />
                </div>
                <div>
                  <div className="text-[10px] md:text-xs text-gray-500 font-bold uppercase">Today's Special</div>
                  <div className="text-sm md:text-base text-[#3E2723] font-bold">Hazelnut Latte</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-6 -left-4 md:-bottom-10 md:-left-10 bg-[#FF7043] p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-2xl z-20 text-white"
            >
              <div className="text-2xl md:text-4xl font-serif font-bold">4.9/5</div>
              <div className="text-[10px] md:text-xs font-bold uppercase tracking-widest opacity-80">Customer Rating</div>
            </motion.div>

            {/* Steam Animation */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 pointer-events-none opacity-40">
              <svg width="40" height="100" viewBox="0 0 40 100" className="steam">
                <path d="M10 90 Q 20 80 10 70 Q 0 60 10 50 Q 20 40 10 30 Q 0 20 10 10" stroke="white" strokeWidth="3" fill="none" className="steam-path" />
                <path d="M30 90 Q 20 80 30 70 Q 40 60 30 50 Q 20 40 30 30 Q 40 20 30 10" stroke="white" strokeWidth="3" fill="none" className="steam-path" style={{ animationDelay: '1s' }} />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#3E2723] opacity-40 hidden md:flex"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.4em]">Scroll</span>
        <ChevronDown size={20} />
      </motion.div>
    </section>
  );
};

export default Hero;
