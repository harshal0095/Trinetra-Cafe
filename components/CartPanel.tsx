
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface CartPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartPanel: React.FC<CartPanelProps> = ({ isOpen, onClose }) => {
  const { cart, updateQuantity, removeFromCart, totalPrice, clearCart } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      alert("Thank you for your order! This is a demo - no payment was processed.");
      setIsCheckingOut(false);
      clearCart();
      onClose();
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100]"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-white z-[101] shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b flex items-center justify-between">
              <h2 className="text-2xl font-serif font-bold text-[#3E2723]">Your Order</h2>
              <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <X size={24} />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center text-[#FF7043]">
                    <ShoppingBag size={40} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#3E2723]">Your cart is empty</h3>
                    <p className="text-gray-500">Add some delicious treats to get started!</p>
                  </div>
                  <button
                    onClick={onClose}
                    className="bg-[#3E2723] text-white px-8 py-3 rounded-full font-bold hover:bg-[#5D4037] transition-colors"
                  >
                    Browse Menu
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <motion.div
                    layout
                    key={item.id}
                    className="flex gap-4 group"
                  >
                    <div className="w-20 h-20 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h4 className="font-bold text-[#3E2723]">{item.name}</h4>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-gray-400 hover:text-red-500 transition-colors"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                      <p className="text-sm text-gray-500 mb-2">${item.price.toFixed(2)}</p>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center border rounded-full px-2 py-1">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="p-1 hover:text-[#FF7043]"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-8 text-center text-sm font-bold">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="p-1 hover:text-[#FF7043]"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <span className="ml-auto font-bold text-[#3E2723]">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="p-6 border-t bg-gray-50 space-y-4">
                <div className="flex justify-between items-center text-lg font-bold text-[#3E2723]">
                  <span>Total</span>
                  <motion.span
                    key={totalPrice}
                    initial={{ scale: 1.1, color: '#FF7043' }}
                    animate={{ scale: 1, color: '#3E2723' }}
                  >
                    ${totalPrice.toFixed(2)}
                  </motion.span>
                </div>
                <p className="text-xs text-gray-500 text-center">Taxes and shipping calculated at checkout</p>
                <button
                  disabled={isCheckingOut}
                  onClick={handleCheckout}
                  className={`w-full py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all ${isCheckingOut ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#FF7043] text-white hover:bg-[#F4511E] shadow-lg shadow-orange-200 hover:scale-[1.02]'}`}
                >
                  {isCheckingOut ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                      />
                      Processing...
                    </>
                  ) : (
                    'Complete Order'
                  )}
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartPanel;
