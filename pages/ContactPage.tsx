
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formState, setFormState] = React.useState('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('sending');
    setTimeout(() => {
      setFormState('sent');
      setTimeout(() => setFormState('idle'), 3000);
    }, 1500);
  };

  return (
    <div className="pt-24 pb-12 lg:pt-32 lg:pb-24 bg-[#FFFDF9]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className="text-[#FF7043] font-bold tracking-[0.2em] text-xs md:text-sm uppercase block mb-4">Get in Touch</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#3E2723] mb-6 md:mb-8 leading-tight">We'd Love to <br />Hear From You</h1>
            <p className="text-gray-500 text-base md:text-lg mb-8 md:mb-12 leading-relaxed">
              Have a question about our beans, need to book a private event, or just want to say hi? 
              Our team is always here to chat.
            </p>

            <div className="space-y-6 md:space-y-8">
              {[
                { icon: Mail, label: 'Email', value: 'hello@trinetracafe.com' },
                { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567' },
                { icon: MapPin, label: 'Location', value: '123 Artisan Alley, Brooklyn, NY' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 md:gap-6 group">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-2xl flex items-center justify-center text-[#FF7043] shadow-sm transition-all group-hover:scale-110 group-hover:bg-[#FF7043] group-hover:text-white shrink-0">
                    <item.icon size={20} className="md:w-6 md:h-6" />
                  </div>
                  <div>
                    <h4 className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest">{item.label}</h4>
                    <p className="text-[#3E2723] font-bold text-base md:text-lg break-words">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-6 md:p-8 lg:p-10 rounded-[30px] md:rounded-[40px] shadow-xl shadow-gray-100 border border-gray-50"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#3E2723] uppercase tracking-wider ml-2">Name</label>
                  <input
                    required
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-[#FFFDF9] border border-gray-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#FF7043] transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#3E2723] uppercase tracking-wider ml-2">Email</label>
                  <input
                    required
                    type="email"
                    placeholder="Your Email"
                    className="w-full bg-[#FFFDF9] border border-gray-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#FF7043] transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-[#3E2723] uppercase tracking-wider ml-2">Subject</label>
                <input
                  required
                  type="text"
                  placeholder="What's this about?"
                  className="w-full bg-[#FFFDF9] border border-gray-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#FF7043] transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-[#3E2723] uppercase tracking-wider ml-2">Message</label>
                <textarea
                  required
                  rows={4}
                  placeholder="How can we help?"
                  className="w-full bg-[#FFFDF9] border border-gray-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#FF7043] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={formState !== 'idle'}
                className={`w-full py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all ${
                  formState === 'sent' 
                  ? 'bg-green-500 text-white' 
                  : 'bg-[#3E2723] text-white hover:bg-[#FF7043] shadow-lg shadow-brown-200'
                }`}
              >
                {formState === 'idle' && (
                  <>Send Message <Send size={20} /></>
                )}
                {formState === 'sending' && (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                    className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full"
                  />
                )}
                {formState === 'sent' && (
                  'Message Sent!'
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
