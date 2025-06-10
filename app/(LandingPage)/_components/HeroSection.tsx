"use client"

import React, { useState, useEffect } from 'react';
import { ArrowUpRight, } from 'lucide-react';
import Link from 'next/link';

const heroData = [
  {
    hero_image_url: "/hero-image-1.png",
    title: "#1 Eye Clinic in Abuja.",
    subtitle: "With Unparalleled Eye Care",
    content: "Experience world-class eye examinations, personalized care and advanced optical solutions for the your family.",
    learn_more_button_url: "/learn-more",
  },
  {
    hero_image_url: "/hero-image-2.png",
    title: "Contact Lenses That Fit Your Life.",
    subtitle: "Comfort Meets Clarity",
    content: "We custom-fit soft, rigid, and specialty lenses using the latest technology for optimal vision and long-term eye health.",
    learn_more_button_url: "/#",
  },
  {
    hero_image_url: "/hero-image-3.png",
    title: "Protect Your Eyes in the Digital World.",
    subtitle: "Blue Light Shield-Lenses",
    content: "Reduce eye strain, improve sleep quality, and work longer with our blue light-filtering lenses designed for prolong screen users.",
    learn_more_button_url: "/#",
  },
  {
    hero_image_url: "/hero-image-4.png",
    title: "Progressive Lenses Done Right.",
    subtitle: "Seamless Vision at Every Distance.",
    content: "Enjoy clear & comfortable vision at far, intermediate, and near with expertly dispensed lenses that support rapid adaption.",
    learn_more_button_url: "/#",
  }, 
  {
    hero_image_url: "/hero-image-5.png",
    title: "Empowering Young Vision.",
    subtitle: "Kid’s Eyecare & Vision Training.",
    content: "From school screening to functional vision therapy, we support children’s visual development and learning outcome every step of the way.",
    learn_more_button_url: "/#",
  },

  {
    hero_image_url: "/hero-image-6.png",
    title: "Stop the Progress!",
    subtitle: "Myopia Management That Works.",
    content: "We use evidence-based methods and myopia control lenses to slow your child’s worsening eyesight.",
    learn_more_button_url: "/#",
  },
];

const HeroSection = () => {
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const currentHero = heroData[currentHeroIndex];

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentHeroIndex((prevIndex) => (prevIndex + 1) % heroData.length);
    }, 4000); // 4000ms delay

    return () => clearTimeout(timer);
  }, [currentHeroIndex]);

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Main Hero Section */}
      <div 
        className="flex-1 relative bg-cover bg-center bg-no-repeat transition-opacity duration-200 ease-out"
        style={{
          backgroundImage: `url(${currentHero.hero_image_url})`
        }}
      >
        
        <div className="relative z-10 px-4 md:px-6 py-12 md:py-20 h-full flex items-start pt-18 md:pt-24 lg:pt-32 transition-opacity duration-200 ease-out">
          <div className="max-w-6xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              {currentHero.title}
              <br />
              <span className="font-normal">{currentHero.subtitle}</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-10 max-w-3xl leading-relaxed">
              {currentHero.content}
            </p>
            
            <Link href={currentHero.learn_more_button_url} className="inline-flex items-center bg-[#090920] hover:bg-slate-800 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-colors duration-300 shadow-lg">
              Learn More
              <ArrowUpRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Contact Information Footer */}
      <div className="bg-white text-white relative z-20 flex justify-center">
        <div className="bg-[#0B354D] rounded-[8px] mt-10 md:-mt-14 xl:-mt-16 mx-auto px-4 py-6 xl:px-6 xl:py-8 w-[95%] sm:w-[90%] xl:w-auto">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-y-6 xl:gap-y-0 gap-x-8 divide-y divide-white/20 xl:divide-y-0 xl:divide-x xl:divide-white">
            
            {/* Working Hours */}
            <div className="flex flex-col items-center text-center pt-6 xl:pt-0 pb-6 xl:pb-0 xl:pr-8">
              <h3 className="font-archivo font-bold text-[16px] xl:text-[18px] leading-[150%] text-center align-middle mb-2 xl:mb-4">Working Hours</h3>
              <div className="space-y-1 text-sm lg:text-base">
                <p className="block font-archivo font-normal text-[14px] xl:text-[16px] leading-[150%] tracking-[0%] text-center align-middle">Monday – Friday: <span className="font-bold text-white">8:00 am – 6:00 pm</span></p>
                <p className="block font-archivo font-normal text-[14px] xl:text-[16px] leading-[150%] tracking-[0%] text-center align-middle">Saturday & Public Holidays: <span className="font-bold text-white">10:00 am – 4:00 pm</span></p>
                <p className="block font-archivo font-normal text-[14px] xl:text-[16px] leading-[150%] tracking-[0%] text-center align-middle">Sundays: <span className="font-bold text-white">Closed</span></p>
              </div>
            </div>
            
            {/* Email Us */}
            <div className="flex flex-col items-center text-center pt-6 xl:pt-0 pb-6 xl:pb-0 xl:px-8">
              <h3 className="font-archivo font-bold text-[16px] xl:text-[18px] leading-[150%] text-center align-middle mb-2 xl:mb-4">Email Us</h3>
              <div className="space-y-1 text-sm lg:text-base">
                <a 
                  href="mailto:info@boomeyeclinic.com" 
                  className="block hover:text-blue-300 transition-colors duration-200 font-archivo font-normal text-[14px] xl:text-[16px] leading-[150%] tracking-[0%] text-center align-middle underline"
                >
                  info@boomeyeclinic.com
                </a>
                <a 
                  href="mailto:boomeyeclinic@outlook.com" 
                  className="block hover:text-blue-300 transition-colors duration-200 font-archivo font-normal text-[14px] xl:text-[16px] leading-[150%] tracking-[0%] text-center align-middle underline"
                >
                  boomeyeclinic@outlook.com
                </a>
              </div>
            </div>
            
            {/* Contact Us */}
            <div className="flex flex-col items-center text-center pt-6 xl:pt-0 xl:pl-8">
              <h3 className="font-archivo font-bold text-[16px] xl:text-[18px] leading-[150%] text-center align-middle mb-2 xl:mb-4">Contact Us</h3>
              <div className="space-y-1 text-sm lg:text-base">
                <a 
                  href="tel:+2348038945401" 
                  className="block hover:text-blue-300 transition-colors duration-200 font-archivo font-normal text-[14px] xl:text-[16px] leading-[150%] tracking-[0%] text-center align-middle"
                >
                  +234 803 894 5401
                </a>
                <a 
                  href="tel:+2347043798008" 
                  className="block hover:text-blue-300 transition-colors duration-200 font-archivo font-normal text-[14px] xl:text-[16px] leading-[150%] tracking-[0%] text-center align-middle"
                >
                  +234 704 379 8008
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;