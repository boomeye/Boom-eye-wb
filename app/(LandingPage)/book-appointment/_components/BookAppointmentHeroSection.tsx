import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const heroData = {
  hero_image_url: "/patient-ophthalmologist-s-office (2).png",
  title: "Schedule Your Eye Care Appointment in Seconds",
  subtitle: "We make booking your eye consultation simple, fast, and convenient. Get the eye care you need, when you need it.",
};

export const BookAppointmentHeroSection = () => {
  return (
    <div className="w-full bg-[#F3FAFD] max-w-[120rem] mx-auto">
      {/* Mobile to LG Version only (up to <xl) */}
      <div className="block xl:hidden relative h-screen w-full bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: `url('${heroData.hero_image_url}')` }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B354D]/90 via-[#0B354D]/60 to-transparent z-0" />
        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full px-6">
          <div className="text-center w-full max-w-2xl mx-auto">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-2 leading-tight text-center">
              {heroData.title}
            </h1>
            <p className="text-white text-base sm:text-lg leading-relaxed mb-6 text-center">
              {heroData.subtitle}
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
              Schedule Your Eye <br /> Care Appointment <br /> in Seconds
            </h1>
            <p className="text-white text-xl leading-relaxed mb-8">
              We make booking your eye consultation simple, fast, and <br /> convenient. Get the eye care you need, when you need it.
            </p>
          </div>
        </div>
        {/* Right side - Image */}
        <div className="flex-1">
          <img
            src={heroData.hero_image_url}
            alt="Medical team"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Footer Card (overlapping, just like HeroSection) */}
      <div className="text-white relative z-20 flex justify-center px-4 md:px-0 max-h-[100px]">
        <div className="bg-white text-black rounded-[8px] -mt-20 mx-auto px-4 py-4 xl:px-6 xl:py-6 xl:min-w-[1011px] w-full sm:w-[90%] xl:w-auto p-1">
          <h2 className="font-archivo font-bold text-xl sm:text-3xl md:text-4xl leading-[120%] tracking-[0%] text-center text-[#F4931C] mb-[16px]">
            Your journey to better vision starts here
          </h2>
          <p className="font-archivo font-normal text-base leading-[150%] tracking-[0%] text-center align-middle">
            Whether you need a routine eye exam, specialized treatment, or a consultation with our experts, booking an appointment is quick and hassle-free.
          </p>
        </div>
      </div>
    </div>
  );
};
