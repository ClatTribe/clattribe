"use client";
import React, { useState, useEffect } from 'react';
import { UserPreferences } from './types';
import { CATEGORIES, SPECIALIZATIONS, LOCATIONS } from './constants';
import { ChevronRight } from 'lucide-react';

interface PredictorFormProps {
  onPredict: (prefs: UserPreferences) => void;
  isLoading: boolean;
}

interface FormErrors {
  fullName?: string;
  phoneNumber?: string;
  category?: string;
  rank?: string;
}

const PredictorForm: React.FC<PredictorFormProps> = ({ onPredict, isLoading }) => {
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [formData, setFormData] = useState<UserPreferences>({
    fullName: '',
    phoneNumber: '',
    category: 'General',
    rank: 0,
    locationPref: 'Any',
    specializationPref: 'Any'
  });
  const [errors, setErrors] = useState<FormErrors>({});

  // Load previous data from localStorage on mount
  useEffect(() => {
    const submitted = localStorage.getItem('nlu_preference_submitted');
    const name = localStorage.getItem('nlu_preference_name');
    const phone = localStorage.getItem('nlu_preference_phone');
    const category = localStorage.getItem('nlu_preference_category');
    const rank = localStorage.getItem('nlu_preference_rank');
    const locationPref = localStorage.getItem('nlu_preference_location');
    const specializationPref = localStorage.getItem('nlu_preference_specialization');
    
    if (submitted === 'true' && name && phone && category && rank) {
      setIsFormSubmitted(true);
      setFormData({
        fullName: name,
        phoneNumber: phone,
        category: category,
        rank: parseInt(rank),
        locationPref: locationPref || 'Any',
        specializationPref: specializationPref || 'Any'
      });
    }
  }, []);

  const validateForm = (data: UserPreferences): boolean => {
    const newErrors: FormErrors = {};

    if (!data.fullName.trim()) {
      newErrors.fullName = 'Name is required';
    } else if (data.fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters';
    }

    if (!data.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    } else if (!/^[6-9]\d{9}$/.test(data.phoneNumber.trim())) {
      newErrors.phoneNumber = 'Enter a valid 10-digit Indian mobile number';
    }

    if (!data.category) {
      newErrors.category = 'Please select your category';
    }

    if (!data.rank || data.rank < 1) {
      newErrors.rank = 'Please enter a valid rank (minimum 1)';
    } else if (data.rank > 1000000) {
      newErrors.rank = 'Rank seems unusually high. Please verify.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    if (!validateForm(formData)) return;
    
    setIsSubmitting(true);

    try {
      // Check if user has already submitted
      if (isFormSubmitted) {
        // Data already saved, just trigger prediction
        console.log("User already submitted. Skipping Supabase save.");
        onPredict(formData);
        setIsSubmitting(false);
        return;
      }

      // FIRST TIME SUBMISSION: Save data to Supabase
      const SUPABASE_URL = 'https://fjswchcothephgtzqbgq.supabase.co';
      const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZqc3djaGNvdGhlcGhndHpxYmdxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU3NTk2ODQsImV4cCI6MjA3MTMzNTY4NH0.AqKfl8rwkH4_Y0sVdcQLWu6HF1nrxhro-jMyEdUggV4';

      const response = await fetch(`${SUPABASE_URL}/rest/v1/nlu_preference_enquiry`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
          'Prefer': 'return=minimal'
        },
        body: JSON.stringify({
          name: formData.fullName.trim(),
          phone: formData.phoneNumber.trim(),
          category: formData.category,
          rank: formData.rank,
          location_pref: formData.locationPref,
          specialization_pref: formData.specializationPref,
          submitted_at: new Date().toISOString()
        })
      });

      if (response.ok) {
        // Successfully saved for the first time
        localStorage.setItem('nlu_preference_submitted', 'true');
        localStorage.setItem('nlu_preference_name', formData.fullName.trim());
        localStorage.setItem('nlu_preference_phone', formData.phoneNumber.trim());
        localStorage.setItem('nlu_preference_category', formData.category);
        localStorage.setItem('nlu_preference_rank', formData.rank.toString());
        localStorage.setItem('nlu_preference_location', formData.locationPref || 'Any');
        localStorage.setItem('nlu_preference_specialization', formData.specializationPref || 'Any');
        
        setIsFormSubmitted(true);
        onPredict(formData);
      } else {
        const errorData = await response.json();
        alert(`Submission failed: ${errorData.message || 'Please try again'}`);
      }
    } catch (error) {
      console.error('Error processing form:', error);
      alert('An unexpected error occurred. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    const updatedData = {
      ...formData,
      [name]: name === 'rank' ? parseInt(value) || 0 : value
    };
    
    setFormData(updatedData);

    // If already submitted, trigger instant prediction for category, rank, location, specialization
    if (isFormSubmitted && (name === 'category' || name === 'rank' || name === 'locationPref' || name === 'specializationPref')) {
      onPredict(updatedData);
    }
    
    // Clear errors as user types
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-[#0f172a] border border-gray-800 rounded-2xl p-8 shadow-2xl">
      <div className="flex items-center space-x-2 mb-6">
        <div className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse"></div>
        <h3 className="text-lg font-semibold text-white">Enter Your Details and Criteria :</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* Name - Disabled after first submission */}
        <div>
          <label className="block text-xs font-medium text-gray-400 mb-2">Full Name *</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your name"
            disabled={isSubmitting || isFormSubmitted}
            className={`w-full bg-[#1e293b] border ${
              errors.fullName ? 'border-red-500/50 bg-red-500/10' : 'border-gray-700'
            } rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#F59E0B] transition-all disabled:opacity-60 disabled:cursor-not-allowed`}
          />
          {errors.fullName && (
            <p className="mt-1 text-xs text-red-400">{errors.fullName}</p>
          )}
        </div>
        
        {/* Phone - Disabled after first submission */}
        <div>
          <label className="block text-xs font-medium text-gray-400 mb-2">Phone Number *</label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="10-digit number"
            maxLength={10}
            disabled={isSubmitting || isFormSubmitted}
            className={`w-full bg-[#1e293b] border ${
              errors.phoneNumber ? 'border-red-500/50 bg-red-500/10' : 'border-gray-700'
            } rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#F59E0B] transition-all disabled:opacity-60 disabled:cursor-not-allowed`}
          />
          {errors.phoneNumber && (
            <p className="mt-1 text-xs text-red-400">{errors.phoneNumber}</p>
          )}
        </div>
        
        {/* Category - Always editable */}
        <div>
          <label className="block text-xs font-medium text-gray-400 mb-2">Category *</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            disabled={isSubmitting}
            className={`w-full bg-[#1e293b] border ${
              errors.category ? 'border-red-500/50 bg-red-500/10' : 'border-gray-700'
            } rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#F59E0B] transition-all appearance-none disabled:opacity-60`}
          >
            {CATEGORIES.map(cat => <option key={cat} value={cat}>{cat}</option>)}
          </select>
          {errors.category && (
            <p className="mt-1 text-xs text-red-400">{errors.category}</p>
          )}
        </div>

        {/* Rank - Always editable */}
        <div>
          <label className="block text-xs font-medium text-gray-400 mb-2">Rank *</label>
          <input
            type="number"
            name="rank"
            value={formData.rank || ''}
            onChange={handleChange}
            placeholder="Enter your rank"
            min="1"
            disabled={isSubmitting}
            className={`w-full bg-[#1e293b] border ${
              errors.rank ? 'border-red-500/50 bg-red-500/10' : 'border-gray-700'
            } rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#F59E0B] transition-all disabled:opacity-60`}
          />
          {errors.rank && (
            <p className="mt-1 text-xs text-red-400">{errors.rank}</p>
          )}
        </div>

        {/* Location - Always editable */}
        <div>
          <label className="block text-xs font-medium text-gray-400 mb-2">Location Preference</label>
          <select
            name="locationPref"
            value={formData.locationPref}
            onChange={handleChange}
            disabled={isSubmitting}
            className="w-full bg-[#1e293b] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#F59E0B] transition-all appearance-none disabled:opacity-60"
          >
            {LOCATIONS.map(loc => <option key={loc} value={loc}>{loc}</option>)}
          </select>
        </div>

        {/* Specialization - Always editable */}
        <div>
          <label className="block text-xs font-medium text-gray-400 mb-2">Specialization</label>
          <select
            name="specializationPref"
            value={formData.specializationPref}
            onChange={handleChange}
            disabled={isSubmitting}
            className="w-full bg-[#1e293b] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#F59E0B] transition-all appearance-none disabled:opacity-60"
          >
            {SPECIALIZATIONS.map(spec => <option key={spec} value={spec}>{spec}</option>)}
          </select>
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-[#f59e0b] to-[#F59E0B] text-white font-bold py-4 rounded-xl flex items-center justify-center space-x-2 hover:opacity-90 transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <span>
          {isSubmitting ? 'Submitting Data...' : (isFormSubmitted ? 'Get Prediction' : 'Access Predictor')}
        </span>
        {!isSubmitting && <ChevronRight size={20} />}
      </button>

      {isFormSubmitted && (
        <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700 mt-4">
          <p className="text-sm text-gray-300 mb-1">
            <span className="font-semibold text-white">Current Prediction Criteria:</span> 
            Category <span className="text-[#F59E0B] font-bold">{formData.category}</span>, 
            Rank <span className="text-[#F59E0B] font-bold">{formData.rank}</span>
          </p>
          <p className="text-xs text-gray-400">
            Your data has been saved. The predictions update instantly as you change rank, category, location, or specialization.
          </p>
        </div>
      )}
    </form>
  );
};

export default PredictorForm;