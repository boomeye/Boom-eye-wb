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
    learn_more_button_url: "/about-us",
  },
  {
    hero_image_url: "/hero-image-2.png",
    title: "Contact Lenses That Fit Your Life.",
    subtitle: "Comfort Meets Clarity",
    content: "We custom-fit soft, rigid, and specialty lenses using the latest technology for optimal vision and long-term eye health.",
    learn_more_button_url: "/about-us",
  },
  {
    hero_image_url: "/hero-image-3.png",
    title: "Protect Your Eyes in the Digital World.",
    subtitle: "Blue Light Shield-Lenses",
    content: "Reduce eye strain, improve sleep quality, and work longer with our blue light-filtering lenses designed for prolong screen users.",
    learn_more_button_url: "/about-us",
  },
  {
    hero_image_url: "/hero-image-4.png",
    title: "Progressive Lenses Done Right.",
    subtitle: "Seamless Vision at Every Distance.",
    content: "Enjoy clear & comfortable vision at far, intermediate, and near with expertly dispensed lenses that support rapid adaption.",
    learn_more_button_url: "/about-us",
  },
  {
    hero_image_url: "/hero-image-5.png",
    title: "Empowering Young Vision.",
    subtitle: "Kid's Eyecare & Vision Training.",
    content: "From school screening to functional vision therapy, we support children's visual development and learning outcome every step of the way.",
    learn_more_button_url: "/about-us",
  },

  {
    hero_image_url: "/hero-image-6.png",
    title: "Stop the Progress!",
    subtitle: "Myopia Management That Works.",
    content: "We use evidence-based methods and myopia control lenses to slow your child's worsening eyesight.",
    learn_more_button_url: "/about-us",
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
    <div className='bg-[#F3FAFD]'>
      <div className="relative h-screen flex flex-col max-w-[120rem] mx-auto">
        {/* Main Hero Section */}
        <div
          className="flex-1 relative bg-cover bg-center bg-no-repeat transition-opacity duration-200 ease-out"
          style={{
            backgroundImage: `url(${currentHero.hero_image_url})`
          }}
        >
          {/* Desktop Hero Content */}
          <div className="hidden xl:flex relative z-10 px-4 md:px-6 py-12 md:py-20 h-full items-start pt-18 md:pt-24 lg:pt-32 transition-opacity duration-200 ease-out">
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
          {/* Mobile Hero Content with Gradient Overlay */}
          <div className="xl:hidden absolute inset-0 flex items-center justify-center z-10">
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0B354D]/90 via-[#0B354D]/60 to-transparent z-0" />
            <div className="relative w-full max-w-2xl mx-auto px-4 md:px-6 flex flex-col items-center justify-center text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight text-center">
                {currentHero.title}
              </h1>
              <h2 className="text-xl sm:text-2xl font-normal text-white/80 mb-2 text-center">
                {currentHero.subtitle}
              </h2>
              <p className="text-base sm:text-lg text-white/90 mb-6 max-w-xl mx-auto leading-relaxed text-center">
                {currentHero.content}
              </p>
              <div className="flex justify-center">
                <Link href={currentHero.learn_more_button_url} className="inline-flex items-center bg-[#090920] hover:bg-slate-800 text-white px-6 py-3 rounded-lg font-semibold text-base transition-colors duration-300 shadow-lg">
                  Learn More
                  <ArrowUpRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information Footer */}
        <div className="text-white relative z-20 flex justify-center px-4 md:px-0 max-h-[100px]">
          <div className="bg-[#0B354D] rounded-[8px] -mt-20 mx-auto px-4 py-4 xl:px-6 xl:py-6 xl:min-w-[1011px] w-full sm:w-[90%] xl:w-auto p-1">
            <div className="grid grid-cols-2 gap-y-6 xl:gap-y-0 gap-x-8 divide-y-0 divide-x divide-white">


              {/* Email Us */}
              <div className="flex flex-col items-center text-center pt-6 xl:pt-0 pb-6 xl:pb-0 xl:px-8">
                <h3 className="font-archivo font-bold text-[16px] xl:text-[18px] leading-[150%] text-center align-middle mb-2 xl:mb-4">Email Us</h3>
                <div className="space-y-1 text-sm lg:text-base">
                  <a
                    href="mailto:boomeyeclinic@outlook.com"
                    className="block hover:text-blue-300 transition-colors duration-200 font-archivo font-normal text-[12px] md:text-[14px] xl:text-[16px] leading-[150%] tracking-[0%] text-center align-middle underline"
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
                    href="tel:+2348122595294"
                    className="block hover:text-blue-300 transition-colors duration-200 font-archivo font-normal text-[12px] md:text-[14px] xl:text-[16px] leading-[150%] tracking-[0%] text-center align-middle"
                  >
                    +234 803 894 5401
                  </a>
                  <a
                    href="tel:+2347043798008"
                    className="block hover:text-blue-300 transition-colors duration-200 font-archivo font-normal text-[12px] md:text-[14px] xl:text-[16px] leading-[150%] tracking-[0%] text-center align-middle"
                  >
                    +234 704 379 8008
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;