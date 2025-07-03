import React from 'react';
import { Icon } from '@iconify/react';

export const ServicesHeroSection = () => {
  return (
    <div className="w-full bg-[#F3FAFD] max-w-[120rem] mx-auto">
      {/* Mobile to LG Version only (up to <xl) */}
      <div className="block xl:hidden relative h-screen w-full bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: "url('/services-image.png')" }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B354D]/90 via-[#0B354D]/60 to-transparent z-0" />
        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full px-6">
          <div className="text-center w-full max-w-2xl mx-auto">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-2 leading-tight text-center">
              Comprehensive Eye Care You Can Trust.
            </h1>
            <p className="text-white text-base sm:text-lg leading-relaxed mb-6 text-center">
              Our experienced team is dedicated to protecting and enhancing your vision for life.
            </p>
          </div>
        </div>
      </div>

      {/* XL and up (Desktop) */}
      <div className="hidden xl:flex min-h-screen">
        {/* Left side - Text content */}
        <div className="flex-1 bg-[#6B9BB5] flex items-center px-[100px] max-w-4xl mx-auto">
          <div className='ml-[80px]'>
            <h1 className="text-white text-6xl font-bold leading-tight mb-6">
              Comprehensive Eye Care You Can Trust.
            </h1>
            <p className="text-white text-xl leading-relaxed">
              Our experienced team is dedicated to protecting and enhancing your <br /> vision for life.
            </p>
          </div>
        </div>
        {/* Right side - Image */}
        <div className="flex-1">
          <img
            src="/services-image.png"
            alt="Medical team"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Footer Card (overlapping, just like BookAppointmentHeroSection) */}
      <div className="text-white relative z-20 flex justify-center px-4 md:px-0 max-h-[100px]">
        <div className="bg-white text-black rounded-[8px] -mt-20 mx-auto px-4 py-4 xl:px-6 xl:py-6 xl:min-w-[1011px] w-full sm:w-[90%] xl:w-auto p-1">
          <h2 className="font-archivo font-bold text-xl sm:text-3xl md:text-4xl leading-[120%] tracking-[0%] text-center text-[#4A7181] mb-[16px]">
            Advanced eye care solutions tailored to your unique needs
          </h2>
          <p className="font-archivo font-normal text-base leading-[150%] tracking-[0%] text-center align-middle">
            Trusted eye care professionals providing comprehensive services for patients of all ages, from pediatric exams to specialized treatments.
          </p>
        </div>
      </div>
    </div>
  );
};
