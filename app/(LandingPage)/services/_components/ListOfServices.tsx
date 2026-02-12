"use client"

import Link from 'next/link';
import React, { useRef } from 'react';

// Array of services with image, title, and description
const services = [
  {
    title: 'General Eyecare & Test',
    description: 'Comprehensive eye exams for all ages and needs.',
    image: '/services/A 1.png',
  },
  {
    title: 'Vision Correction',
    description: `Experiencing blurry vision, double vision, or headaches? Let's find the cause and the cure.`,
    image: '/services/2. Vision Correction.png',
  },
  {
    title: 'Kids Eyecare & Vision Training',
    description: 'Poor school performance? A comprehensive eye exam might reveal the missing link.',
    image: '/services/School pupil.png',
  },
  {
    title: 'Glaucoma & Macular Screening/monitoring',
    description: 'Glaucoma is the silent thief of sight. An early detection is your best decision.',
    image: '/services/Name_  Angela Chappel.png',
  },
  {
    title: 'Dry Eye Management',
    description: 'Say goodbye to redness, irritation and watery eyes with personalized dry eye solutions.',
    image: '/services/Eyedrop 3.png',
  },
  {
    title: 'Elderly Support & Low Vision Care',
    description: 'We empower senior adults to maintain independence and quality of life.',
    image: '/services/Elderly Patient at Eye Examination _ Premium AI-generated image.png',
  },
  {
    title: 'Office, Occupational & Safety Glasses',
    description: 'Combat screen fatigue, block blue light, and protect your eyes in the workplace - all in one pair.',
    image: '/services/Headaches in the office_ the main causes, and how to deal with it (1).png',
  },
  {
    title: 'Myopia Control Lenses',
    description: `Slow your child's short-sightedness and reduce long-term risks.`,
    image: '/services/8. Myopia Control Lenses.png',
  },
  {
    title: 'New Pair of Glasses',
    description: 'Update your SV, bifocals, and progressive lenses with stylish frames in clear and comfortable vision.',
    image: '/services/3. New Pair of Glasses.png',
  },
  {
    title: 'Diabetic & Hypertensive Eye Screening',
    description: 'Detect eye complications early and protect your sight with targeted health screenings.',
    image: '/services/5. Diabetic & Hypertensive Eye Screening.png',
  },
  {
    title: 'Corrective & Fashion Contact Lenses',
    description: 'Worried about wearing spectacles? Book a contact lens work-up for a confident and a perfectly fitted lenses.',
    image: '/services/4. Corrective & Fashion Contact Lenses.png',
  },
  {
    title: 'Have Your Prescription in a Sunglass',
    description: 'You probably didn\'t know, your prescription can live in stylish, UV-protective sunglasses!',
    image: '/services/12. Sunglasses with Prescription.png',
  },
];

const ListOfServices = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (dir: 'left' | 'right') => {
    const container = scrollRef.current;
    if (!container) return;
    const card = container.querySelector('.service-card');
    if (!card) return;
    const cardWidth = (card as HTMLElement).offsetWidth + 16; // 16px gap
    container.scrollBy({ left: dir === 'left' ? -cardWidth : cardWidth, behavior: 'smooth' });
  };

  return (
    <div className="w-full bg-[#F3FAFD] py-[89px] px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1240px] mx-auto">
        {/* Header Section */}
        <div className="text-center mb-[48px]">
          <h2 className="font-archivo font-bold text-3xl md:text-4xl lg:text-5xl xl:text-[58px] leading-[120%] tracking-[0%] text-[#FF9500] mb-6">
            Our Ophthalmic Services
          </h2>
        </div>

        {/* Mobile: horizontal scrollable services with chevrons */}
        <div className="relative block md:hidden mb-8">
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-br from-white to-[#C8E8F6] p-2 border rounded-full flex items-center justify-center"
            style={{ display: 'block' }}
            onClick={() => scrollByCard('left')}
            aria-label="Scroll left"
          >
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" stroke="#0A0A23" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-br from-white to-[#C8E8F6] p-2 border rounded-full flex items-center justify-center"
            style={{ display: 'block' }}
            onClick={() => scrollByCard('right')}
            aria-label="Scroll right"
          >
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" stroke="#0A0A23" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
          <div
            ref={scrollRef}
            className="flex flex-row gap-4 overflow-x-auto scrollbar-hide px-8"
            style={{ scrollBehavior: 'smooth' }}
          >
            {services.map((service, idx) => (
              <div
                key={service.title}
                className="group service-card bg-white rounded-[10px] border border-gray-100 p-5 flex flex-col h-full min-w-[260px] max-w-[286px] min-h-[400px] max-h-[500px] relative shadow-[0px_4px_2px_0px_#00000014] transition-colors duration-300 group-hover:bg-[#090920] hover:bg-[#090920] mr-4"
              >
                {/* Image */}
                <div className="w-full min-h-[169px] max-h-[169px] rounded-t-xl overflow-hidden flex items-center justify-center group bg-white transition-colors duration-300 group-hover:bg-[#090920] hover:bg-[#090920] mb-[20px]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full"
                    loading="lazy"
                  />
                </div>
                {/* Content */}
                <div className="p-4 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-[#0B354D] mb-2 font-archivo">{service.title}</h3>
                    <p className="font-archivo font-normal text-[14px] leading-[150%] tracking-[0%] align-middle text-[#454545] mb-[10px] flex-1 transition-colors duration-300 group-hover:text-white">
                      {service.description}
                    </p>
                  </div>
                  <div className="mt-4">
                    <Link href="https://care.ecmsapx.com/appointment/28X74K" className="w-full bg-[#090920] hover:bg-[#1a2538] text-white font-inter font-semibold text-[14px] leading-[145%] tracking-[0%] text-center align-middle rounded-lg py-2.5 px-4 mt-auto transition-colors duration-200 group-hover:bg-white group-hover:text-[#090920]">
                      Book An Appointment
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: grid layout */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 justify-items-center">
          {services.map((service, idx) => (
            <div
              key={service.title}
              className="group bg-white rounded-[10px] border border-gray-100 p-5 flex flex-col h-full max-w-[286px] min-h-[400px] max-h-[500px] relative shadow-[0px_4px_2px_0px_#00000014] transition-colors duration-300 group-hover:bg-[#090920] hover:bg-[#090920]"
            >
              {/* Image */}
              <div className="w-full min-h-[169px] max-h-[169px] rounded-t-xl overflow-hidden flex items-center justify-center group bg-white transition-colors duration-300 group-hover:bg-[#090920] hover:bg-[#090920] mb-[20px]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full"
                  loading="lazy"
                />
              </div>
              {/* Content */}
              <div className="flex flex-col flex-1">
                <h3 className="font-archivo font-bold text-[20px] leading-[150%] tracking-[-0.02em] align-middle text-[#0A0A23] mb-2 transition-colors duration-300 group-hover:text-white">
                  {service.title}
                </h3>
                <p className="font-archivo font-normal text-[14px] leading-[150%] tracking-[0%] align-middle text-[#454545] mb-[10px] flex-1 transition-colors duration-300 group-hover:text-white">
                  {service.description}
                </p>
                <Link href="https://care.ecmsapx.com/appointment/28X74K" className="w-full bg-[#090920] hover:bg-[#1a2538] text-white font-inter font-semibold text-[14px] leading-[145%] tracking-[0%] text-center align-middle rounded-lg py-2.5 px-4 mt-auto transition-colors duration-200 group-hover:bg-white group-hover:text-[#090920]">
                  Book An Appointment
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListOfServices;
