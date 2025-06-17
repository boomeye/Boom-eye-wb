import React from 'react';

export const AboutUsHeroSection = () => {
  return (
    <>
      {/* Desktop Version */}
      <div className="hidden lg:flex h-screen w-full">
        {/* Left side - Text content */}
        <div className="flex-1 bg-[#6B9BB5] flex items-center px-[100px]">
          <div>
            <h1 className="text-white text-6xl font-bold leading-tight mb-6">
              Your Vision, Our<br />
              Priority
            </h1>
            <p className="text-white text-xl leading-relaxed">
              We make it easy for you to schedule an eye care consultation at your<br />
              convenience.
            </p>
          </div>
        </div>

        {/* Right side - Image */}
        <div className="flex-1">
          <img
            src="/about-us-image.svg"
            alt="Medical team"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Mobile Version */}
      <div className="lg:hidden relative h-screen w-full bg-cover bg-center bg-no-repeat" 
           style={{ backgroundImage: "url('/about-us-image.svg')" }}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#0B354D] bg-opacity-60"></div>
        
        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full px-6">
          <div className="text-center">
            <h1 className="text-white text-5xl font-bold leading-tight mb-6">
              Your Vision, Our<br />
              Priority
            </h1>
            <p className="text-white text-xl leading-relaxed">
              We make it easy for you to schedule an eye care consultation at your
              convenience.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};