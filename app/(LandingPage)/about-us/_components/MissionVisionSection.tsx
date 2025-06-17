import Image from 'next/image';
import React from 'react';

export const MissionVisionSection = () => {
  return (
    <div className="bg-gray-50 py-8 md:py-16 px-4 md:px-8">
      {/* Header */}
      <div className="text-center mb-8 md:mb-[71px]">
        <p className="text-[#F4931C] font-nunito font-semibold text-lg md:text-[25px] leading-[120%] tracking-[0.08em] text-center mb-4 md:mb-[16px]">
          OUR MISSION & VISION
        </p>
        <h2 className="font-archivo font-bold text-2xl md:text-[32px] leading-[120%] tracking-[0%] text-center text-[#0A0A23]">
          The Core Principles That Guide Us
        </h2>
      </div>

      {/* Content Grid */}
      <div className="container mx-auto grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-12 xl:space-x-[67px] items-center">
        {/* Left side - Images */}
        <div className="relative order-2 xl:order-1">
          {/* Main image */}
          <div className="rounded-lg overflow-hidden">
            <Image 
              src="/mission-image.png" 
              alt="Eye examination in progress"
              width={497.7509765625} 
              height={470} 
              layout="responsive"
              className="rounded-xl"
            />
          </div>
        </div>

        {/* Right side - Mission and Vision cards */}
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-[32px] items-center order-1 xl:order-2">
          {/* Our Mission */}
          <div className="group bg-white hover:bg-[#0A0A23] rounded-[20px] px-6 md:px-[60px] py-8 md:py-[41px] shadow-[0px_4px_32px_0px_#00000029] w-full md:min-h-[340px] transition-colors duration-300">
            <h3 className="font-archivo font-bold text-lg md:text-[20px] leading-[150%] tracking-[-0.02em] text-[#0A0A23] group-hover:text-white mb-4 md:mb-[12px] transition-colors duration-300">
              Our Mission
            </h3>
            <p className="font-archivo font-normal text-sm md:text-base leading-[150%] tracking-[0%] text-[#454545] group-hover:text-white transition-colors duration-300">
              To provide exceptional, patient-focused eye care services using advanced 
              clinical expertise, cutting-edge technology, and a commitment to excellence, 
              ensuring optimal vision and overall eye health for all.
            </p>
          </div>

          {/* Our Vision */}
          <div className="group bg-white hover:bg-[#0A0A23] rounded-[20px] px-6 md:px-[60px] py-8 md:py-[41px] shadow-[0px_4px_32px_0px_#00000029] w-full md:min-h-[340px] transition-colors duration-300">
            <h3 className="font-archivo font-bold text-lg md:text-[20px] leading-[150%] tracking-[-0.02em] text-[#0A0A23] group-hover:text-white mb-4 md:mb-[12px] transition-colors duration-300">
              Our Vision
            </h3>
            <p className="font-archivo font-normal text-sm md:text-base leading-[150%] tracking-[0%] text-[#454545] group-hover:text-white transition-colors duration-300">
              To be a leading eye care provider recognized for innovative solutions, 
              high-quality services, and impactful contributions to the advancement 
              of optometry in the Nigerian eyecare industry and beyond.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};