import React from 'react';

export const ReviewHeroSection = () => {
  return (
    <div className="min-h-screen w-full bg-[#F3FAFD]">
      {/* Desktop Version */}
      <div className="hidden xl:flex">
        {/* Left side - Text content */}
        <div className="flex-1 bg-[#6B9BB5] flex items-center px-[100px] mx-auto">
          <div className='ml-[80px] '>
            <h1 className="text-white text-6xl font-bold leading-tight mb-6">
             Your Feedback Matters Us
            </h1>
            <p className="text-white text-xl leading-relaxed">
            Share your thoughts on the care you received and help others make informed decisions <br /> when booking their appointments. Your review can guide others to better care.
            </p>
          </div>
        </div>

        {/* Right side - Image */}
        <div className="flex-1">
          <img
            src="/feedback-image.svg"
            alt="Medical team"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Mobile Version */}
      <div 
        className="xl:hidden relative min-h-screen w-full bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: "url('/feedback-image.svg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#0B354D] bg-opacity-60" />
        
        {/* Content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 py-8">
          <div className="text-center max-w-md sm:max-w-lg md:max-w-xl">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4 sm:mb-6">
              Your Feedback Matters Us
            </h1>
            <p className="text-white text-base sm:text-lg md:text-xl leading-relaxed">
              Share your thoughts on the care you received and help others make informed decisions when booking their appointments. Your review can guide others to better care.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};