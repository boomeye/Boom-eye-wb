"use client"

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

const images = [
  '/topSection-image-1.png',
  '/topSection-image-1.png',
];

const TopSection = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    // Duplicate the images for seamless looping
    const totalWidth = slider.scrollWidth / 2;

    // GSAP infinite scroll
    const tween = gsap.to(slider, {
      x: -totalWidth,
      duration: 30,
      ease: 'linear',
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % -totalWidth),
      },
    });

    return () => {
      tween.kill();
    };
  }, []);

  return (
    <div className="w-full bg-[#F3FAFD] py-6">
      <h2 className="text-center font-archivo font-bold text-xl sm:text-2xl md:text-4xl lg:text-[40px] text-[#395763] mb-6">
        We Are Guided by an Award-Winning Expert in Ophthalmic Care
      </h2>
      <div className="overflow-hidden w-full">
        <div className="relative flex items-center w-full h-[180px] sm:h-[250px] md:h-[300px] lg:h-[400px]">
          <div
            ref={sliderRef}
            className="flex whitespace-nowrap"
            style={{ willChange: 'transform' }}
          >
            {images.concat(images).map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt="Award Ceremony"
                className="h-[180px] sm:h-[250px] md:h-[300px] lg:h-[400px] w-auto object-cover"
                draggable={false}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSection;
