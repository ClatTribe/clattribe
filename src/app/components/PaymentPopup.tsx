import React, { useState } from 'react';
import { X, Lock, Mail, CreditCard, Sparkles, ArrowRight } from 'lucide-react';

type PaymentPopupProps = {
  isOpen: boolean;
  onClose: () => void;
};

const PaymentPopup: React.FC<PaymentPopupProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');

  if (!isOpen) return null;

  const handlePayNow = () => {
  if (!email || !email.includes('@')) {
    alert('Please enter a valid email address');
    return;
  }

  // Save email to localStorage before redirecting
  localStorage.setItem('gkVaultUserEmail', email);
  
  // Redirect to Razorpay payment page
  window.location.href = 'https://pages.razorpay.com/clattribemarathon';
};

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Popup */}
      <div className="relative bg-gradient-to-b from-slate-800 to-slate-900 rounded-3xl p-8 max-w-md w-full border border-slate-700 shadow-2xl animate-in zoom-in duration-300">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-800/50 hover:bg-slate-800 text-slate-400 hover:text-white transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-full bg-[#F59E0B]/10 border border-[#F59E0B]/30 flex items-center justify-center">
            <Lock className="w-8 h-8 text-[#F59E0B]" />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-white text-center mb-2">
          Unlock Full Archive
        </h2>
        <p className="text-slate-400 text-center text-sm mb-6">
          Access all past editions and never miss a day
        </p>

        {/* Features */}
        <div className="bg-slate-950/50 rounded-2xl p-4 mb-6 space-y-3">
          <div className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-[#F59E0B]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Sparkles className="w-3 h-3 text-[#F59E0B]" />
            </div>
            <div>
              <p className="text-white text-sm font-semibold">Unlimited Access</p>
              <p className="text-slate-500 text-xs">Read & listen to all past editions</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-[#F59E0B]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Sparkles className="w-3 h-3 text-[#F59E0B]" />
            </div>
            <div>
              <p className="text-white text-sm font-semibold">Both Newspapers</p>
              <p className="text-slate-500 text-xs">The Hindu & Times of India archives</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-[#F59E0B]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Sparkles className="w-3 h-3 text-[#F59E0B]" />
            </div>
            <div>
              <p className="text-white text-sm font-semibold">One-Time Payment</p>
              <p className="text-slate-500 text-xs">Pay once, access forever</p>
            </div>
          </div>
        </div>

        {/* Email Input */}
        <div className="space-y-4">
          <div>
            <label className="block text-slate-300 text-sm font-semibold mb-2">
              Your Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="student@example.com"
                className="w-full pl-12 pr-4 py-3 bg-slate-950/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-[#F59E0B] transition-colors"
              />
            </div>
            <p className="text-slate-500 text-xs mt-2">
              We'll use this to verify your access after payment
            </p>
          </div>

          {/* Price Display */}
          <div className="bg-gradient-to-r from-[#F59E0B]/10 to-amber-600/10 border border-[#F59E0B]/30 rounded-xl p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-xs uppercase font-bold tracking-wider">One-Time Payment</p>
                <p className="text-white text-3xl font-bold mt-1">₹99</p>
              </div>
              <CreditCard className="w-10 h-10 text-[#F59E0B]/50" />
            </div>
          </div>

          {/* Pay Now Button */}
          <button
            onClick={handlePayNow}
            disabled={!email}
            className="w-full bg-[#F59E0B] hover:bg-[#D97706] text-slate-950 font-bold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl hover:scale-[1.02]"
          >
            Pay Now ₹99
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Note */}
        <p className="text-center text-slate-500 text-xs mt-4">
          After payment, return here and enter the same email to access all content
        </p>
      </div>
    </div>
  );
};

export default PaymentPopup;