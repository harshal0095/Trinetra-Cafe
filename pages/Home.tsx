
import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import { PRODUCTS, OFFERS, CAFE_STATS } from '../constants';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';
import { Coffee, MapPin, Clock, Phone, Instagram, Facebook, Twitter, ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="bg-[#FFFDF9]">
      <Hero />

      {/* Popular Menu Section */}
      <section className="py-12 px-4 md:py-24 md:px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 md:mb-16 gap-6">
          <div>
            <span className="text-[#FF7043] font-bold tracking-[0.2em] text-xs md:text-sm uppercase block mb-2 md:mb-4">Our Favorites</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#3E2723]">Most Loved Brews</h2>
          </div>
          <Link to="/menu">
            <motion.button
              whileHover={{ x: 10 }}
              className="flex items-center gap-2 text-[#3E2723] font-bold group text-sm md:text-base"
            >
              Explore Full Menu <ArrowRight size={20} className="text-[#FF7043]" />
            </motion.button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {PRODUCTS.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Special Offers Section */}
      <section className="bg-[#3E2723] py-12 px-4 md:py-24 md:px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF7043] opacity-10 blur-[120px] rounded-full" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-8 md:mb-16">
            <span className="text-[#FF7043] font-bold tracking-[0.2em] text-xs md:text-sm uppercase block mb-2 md:mb-4">Limited Time</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white">Today's Sweet Deals</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-12">
            {OFFERS.map((offer) => (
              <motion.div
                key={offer.id}
                initial={{ opacity: 0, x: offer.id === 'off1' ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-[30px] md:rounded-[40px] bg-white h-auto md:h-80 flex flex-col md:flex-row items-center p-6 md:p-8 transition-transform hover:scale-[1.02]"
              >
                <div className="flex-1 w-full md:w-auto md:pr-8 relative z-10 mb-6 md:mb-0">
                  <span className="inline-block bg-[#FF7043] text-white text-[10px] font-bold px-3 py-1 rounded-full mb-4">SPECIAL</span>
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#3E2723] mb-2 md:mb-4">{offer.title}</h3>
                  <p className="text-gray-600 mb-4 md:mb-6 text-sm leading-relaxed">{offer.description}</p>
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-bold text-gray-400 uppercase">Use Code:</span>
                    <span className="bg-[#FFF8E1] border-2 border-dashed border-[#FF7043] text-[#3E2723] font-mono font-bold px-4 py-1 rounded-lg text-sm md:text-base">
                      {offer.discountCode}
                    </span>
                  </div>
                </div>
                <div className="w-full md:w-1/3 h-48 md:h-full relative overflow-hidden rounded-2xl md:rounded-3xl">
                  <img src={offer.image} alt={offer.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section with Stats */}
      <section className="py-12 px-4 md:py-24 md:px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div className="relative z-10 grid grid-cols-2 gap-4 md:gap-6">
              <div className="space-y-4 md:space-y-6">
                <div className="rounded-[30px] md:rounded-[40px] overflow-hidden aspect-square">
                  <img src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800" alt="Interior" className="w-full h-full object-cover" />
                </div>
                <div className="bg-[#FF7043] rounded-[30px] md:rounded-[40px] aspect-square flex flex-col items-center justify-center text-white text-center p-4 md:p-8">
                  <Coffee size={32} className="mb-2 md:mb-4 md:w-12 md:h-12" />
                  <div className="text-base md:text-xl font-serif italic">"Best coffee I've had in years!"</div>
                  <div className="text-xs md:text-sm mt-2 md:mt-4 font-bold">- Sarah J.</div>
                </div>
              </div>
              <div className="space-y-4 md:space-y-6 pt-8 md:pt-12">
                <div className="bg-[#FFF8E1] rounded-[30px] md:rounded-[40px] aspect-square overflow-hidden">
                   <img src="https://images.unsplash.com/photo-1497933322477-911ef0562663?auto=format&fit=crop&q=80&w=800" alt="Beans" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-[30px] md:rounded-[40px] overflow-hidden aspect-square">
                  <img src="https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&q=80&w=800" alt="Barista" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -left-6 md:-top-10 md:-left-10 w-24 h-24 md:w-40 md:h-40 border-4 md:border-8 border-[#3E2723] rounded-full -z-10" />
          </div>

          <div>
            <span className="text-[#FF7043] font-bold tracking-[0.2em] text-xs md:text-sm uppercase block mb-2 md:mb-4">Our Heritage</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#3E2723] mb-4 md:mb-8 leading-tight">Crafting the Perfect <br />Coffee Experience</h2>
            <p className="text-gray-600 mb-8 md:mb-12 text-base md:text-lg leading-relaxed">
              For over 5 years, Trinetra Café has been a sanctuary for coffee enthusiasts. We source only the finest organic beans from sustainable farms, ensuring every sip contributes to a better world.
            </p>

            <div className="grid grid-cols-2 gap-x-4 md:gap-x-8 gap-y-8 md:gap-y-12">
              {CAFE_STATS.map((stat, idx) => (
                <div key={idx}>
                  <div className="text-2xl md:text-4xl font-serif font-bold text-[#3E2723] mb-1 md:mb-2 flex items-baseline">
                    <Counter end={stat.value} />
                    <span className="text-lg md:text-2xl text-[#FF7043] ml-1">{stat.suffix}</span>
                  </div>
                  <div className="text-[10px] md:text-sm text-gray-400 font-bold uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Preview Section */}
      <section className="bg-[#FFF8E1] py-12 px-4 md:py-24 md:px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#3E2723] mb-6 md:mb-8">Visit Trinetra</h2>
            <div className="space-y-6 md:space-y-8">
              <div className="flex items-start gap-4 md:gap-6">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-2xl flex items-center justify-center text-[#FF7043] shadow-sm flex-shrink-0">
                  <MapPin size={20} className="md:w-6 md:h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-[#3E2723] mb-1 text-sm md:text-base">Our Location</h4>
                  <p className="text-gray-600 text-sm md:text-base">123 Artisan Alley, Coffee District<br />Brooklyn, NY 11201</p>
                </div>
              </div>
              <div className="flex items-start gap-4 md:gap-6">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-2xl flex items-center justify-center text-[#FF7043] shadow-sm flex-shrink-0">
                  <Clock size={20} className="md:w-6 md:h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-[#3E2723] mb-1 text-sm md:text-base">Opening Hours</h4>
                  <p className="text-gray-600 text-sm md:text-base">Mon - Fri: 7:00 AM - 9:00 PM<br />Sat - Sun: 8:00 AM - 10:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-4 md:gap-6">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-2xl flex items-center justify-center text-[#FF7043] shadow-sm flex-shrink-0">
                  <Phone size={20} className="md:w-6 md:h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-[#3E2723] mb-1 text-sm md:text-base">Reservations</h4>
                  <p className="text-gray-600 text-sm md:text-base">+1 (555) ART-BREW</p>
                </div>
              </div>
            </div>

            <div className="mt-8 md:mt-12 flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, idx) => (
                <motion.a
                  key={idx}
                  whileHover={{ y: -5, backgroundColor: '#3E2723', color: '#FFF' }}
                  href="#"
                  className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center text-[#3E2723] shadow-sm transition-colors"
                >
                  <Icon size={18} className="md:w-5 md:h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="relative h-[300px] md:h-[500px] rounded-[30px] md:rounded-[40px] overflow-hidden shadow-2xl">
            {/* Mock Map with Image */}
            <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200" alt="Map View" className="w-full h-full object-cover grayscale opacity-50" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-[#FF7043] rounded-full animate-ping absolute opacity-20" />
              <div className="w-8 h-8 md:w-10 md:h-10 bg-[#FF7043] border-4 border-white rounded-full relative shadow-lg" />
            </div>
            <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 bg-white/90 backdrop-blur-md p-4 md:p-6 rounded-2xl md:rounded-3xl">
              <h4 className="font-bold text-[#3E2723] mb-1 md:mb-2 text-sm md:text-base">Artisan Coffee Hub</h4>
              <p className="text-[10px] md:text-xs text-gray-500 mb-3 md:mb-4">You are 2.5 miles away from freshly roasted bliss.</p>
              <button className="w-full bg-[#3E2723] text-white py-2 md:py-3 rounded-xl font-bold text-xs md:text-sm">Get Directions</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Helper component for animated counters
const Counter: React.FC<{ end: number }> = ({ end }) => {
  const [count, setCount] = React.useState(0);
  const nodeRef = React.useRef(null);

  React.useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end]);

  return <span>{count.toLocaleString()}</span>;
};

export default Home;
