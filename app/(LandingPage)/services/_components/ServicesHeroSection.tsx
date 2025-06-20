import React from 'react';
import { Icon } from '@iconify/react';

export const ServicesHeroSection = () => {
  return (
    <div className="w-full bg-[#F3FAFD]">
      {/* Mobile to LG Version only (up to <xl) */}
      <div className="block xl:hidden relative h-screen md:h-[30rem] w-full bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: "url('/services-image.png')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#0B354D] bg-opacity-60" />
        
        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full px-6">
          <div className="text-center">
            <h1 className="text-white text-4xl sm:text-5xl font-bold leading-tight mb-6">
            Comprehensive Eye Care You Can Trust.
            </h1>
            <p className="text-white text-lg sm:text-xl leading-relaxed">
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

      {/* Contact Information Footer (All screens) */}
      <div className="text-white static md:relative z-20 flex justify-center px-4 sm:px-6 lg:px-8">
        <div className="bg-white text-black rounded-[16px] mt-10 md:-mt-14 lg:-mt-8 xl:-mt-24 mx-auto px-4 py-6 sm:py-8 lg:py-10 w-full max-w-[1240px] shadow[0px 3px 15px 0px #0000001A]">
          <h2 className="font-archivo font-bold text-3xl md:text-4xl leading-[120%] tracking-[0%] text-center text-[#F4931C] mb-[16px]">
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
