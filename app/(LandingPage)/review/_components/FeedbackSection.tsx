"use client"

import React, { useState } from 'react';
import { Icon } from '@iconify/react';

const FeedbackSection = () => {
  const [rating, setRating] = useState(0);
  const [name, setName] = useState('');
  const [review, setReview] = useState('');
  const [consent, setConsent] = useState(false);
  
  // Validation states
  const [errors, setErrors] = useState<{
    rating?: string;
    name?: string;
    review?: string;
    consent?: string;
  }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [dialogMessage, setDialogMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = () => {
    const newErrors: typeof errors = {};

    if (rating === 0) {
      newErrors.rating = 'Please select a rating';
    }

    if (!name.trim()) {
      newErrors.name = 'Name is required';
    } else if (name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!review.trim()) {
      newErrors.review = 'Review is required';
    } else if (review.trim().length < 10) {
      newErrors.review = 'Review must be at least 10 characters';
    }

    if (!consent) {
      newErrors.consent = 'You must consent to publish your review';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log({ rating, name, review, consent });
      setDialogMessage('Feedback submitted successfully! Thank you for your review.');
      setIsSuccess(true);
      setShowDialog(true);
      
      // Reset form
      setRating(0);
      setName('');
      setReview('');
      setConsent(false);
      setErrors({});
    } catch (error) {
      setDialogMessage('Failed to submit feedback. Please try again.');
      setIsSuccess(false);
      setShowDialog(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const clearError = (field: keyof typeof errors) => {
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const closeDialog = () => {
    setShowDialog(false);
  };

  return (
    <div className="bg-[#F3FAFD] py-16 px-4 font-archivo relative">
      {/* Dialog Overlay */}
      {showDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 shadow-xl">
            <div className="flex items-center justify-center mb-4">
              {isSuccess ? (
                <div className="w-[84px] h-[84px] bg-green-100 rounded-full flex items-center justify-center">
                  <Icon icon="solar:check-circle-bold" className="w-[42px] h-[42px] text-green-600" />
                </div>
              ) : (
                <div className="w-[84px] h-[84px] bg-red-100 rounded-full flex items-center justify-center">
                  <Icon icon="solar:close-circle-bold" className="w-[42px] h-[42px] text-red-600" />
                </div>
              )}
            </div>
            
            <h3 className={`text-lg font-semibold text-center mb-2 font-archivo ${
              isSuccess ? 'text-green-800' : 'text-red-800'
            }`}>
              {isSuccess ? 'Success!' : 'Error'}
            </h3>
            
            <p className="text-gray-700 text-center mb-6 font-archivo">
              {dialogMessage}
            </p>
            
            <div className="flex justify-center">
              <button
                onClick={closeDialog}
                className={`px-6 py-2 rounded-lg font-medium transition-colors font-archivo ${
                  isSuccess 
                    ? 'bg-[#6092A7] text-white hover:bg-[#6092A7]/80' 
                    : 'bg-red-600 text-white hover:bg-red-700'
                }`}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto bg-white xl:py-20 relative">

        <div className='bg-[#F4931C] w-[180px] h-[100%] absolute right-0 top-0 hidden lg:block' />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Section - Feedback Form */}
          <div className="order-2 lg:order-1 p-6 md:p-12 xl:p-0 xl:pl-[53px]">
            <h2 className="text-[#0A0A23] text-3xl md:text-[32px] font-bold mb-8 font-archivo">
              We'd love to hear your feedback!
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <p className="text-gray-700 text-[16px] font-medium mb-2 font-archivo">Rate Our Services</p>
                <div className="flex space-x-1 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Icon
                      key={star}
                      icon="solar:star-line-duotone"
                      className={`w-8 h-8 cursor-pointer transition-colors ${
                        rating >= star ? 'text-yellow-400' : 'text-gray-300'
                      } ${errors.rating ? 'border-2 border-red-500 rounded' : ''}`}
                      onClick={() => {
                        setRating(star);
                        clearError('rating');
                      }}
                    />
                  ))}
                </div>
                {errors.rating && (
                  <p className="text-red-500 text-sm mt-1 font-archivo">{errors.rating}</p>
                )}
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    clearError('name');
                  }}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#6092A7] outline-none transition-all font-archivo ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1 font-archivo">{errors.name}</p>
                )}
              </div>

              <div>
                <textarea
                  placeholder="Leave us a review..."
                  value={review}
                  onChange={(e) => {
                    setReview(e.target.value);
                    clearError('review');
                  }}
                  rows={6}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#6092A7] outline-none transition-all resize-none font-archivo ${
                    errors.review ? 'border-red-500' : 'border-gray-300'
                  }`}
                ></textarea>
                {errors.review && (
                  <p className="text-red-500 text-sm mt-1 font-archivo">{errors.review}</p>
                )}
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="consent"
                  checked={consent}
                  onChange={(e) => {
                    setConsent(e.target.checked);
                    clearError('consent');
                  }}
                  className={`h-4 w-4 text-[#6092A7] border rounded focus:ring-[#6092A7] ${
                    errors.consent ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                <label htmlFor="consent" className="ml-2 text-[#8E8E9A] text-sm font-archivo">
                  I consent to my review being published on this website with my name or initials displayed
                </label>
              </div>
              {errors.consent && (
                <p className="text-red-500 text-sm mt-1 ml-6 font-archivo">{errors.consent}</p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#0A0A23] text-white py-4 px-6 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none font-archivo"
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </form>
          </div>
          <div className='bg-[#F4931C] w-[54px] h-[46px] absolute left-[766px] top-[75px] z-40 hidden xl:block' />

          {/* Right Section - Testimonial Info */}
          <div className="order-1 lg:order-2 relative p-6 md:p-8 text-white overflow-hidden lg:h-[500px] bg-[#6092A7] flex justify-center items-center text-center">
          

            <div className="relative z-10">
              <h3 className="text-[16px] font-bold mb-4 flex items-center justify-center font-archivo">
                Send Us Your Testimonial: <img src="/Backhand Index Pointing Down.png" alt="Backhand Index Pointing Down" className='ml-2 w-[24px] h-[24px]' />
              </h3>
              <p className="mb-4 text-[16px] text-white font-archivo">
                <a href="mailto:boomeyeclinic@outlook.com" className="underline hover:text-white/70 font-archivo">boomeyeclinic@outlook.com</a>
              </p>
              <p className="mb-8 text-[16px] text-white font-archivo">
                OR
              </p>
              <p className="mb-8 text-[16px] text-white font-archivo">
                <a href="mailto:info@boomeyeclinic.com" className="underline hover:text-white/70 font-archivo">info@boomeyeclinic.com</a>
              </p>
              
              <p className="mb-4 text-[16px] leading-relaxed text-white font-archivo">
                Your feedback helps us continue delivering top- <br />notch eye care to our community!
              </p>
              <p className="text-[14px] text-white font-archivo">
                Note: Your privacy is our priority. Reviews are moderated for authenticity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackSection;
