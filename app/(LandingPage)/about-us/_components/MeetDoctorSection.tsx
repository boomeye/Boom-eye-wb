import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export const MeetDoctorSection = () => {
  return (
    <div className="bg-gray-50 py-8 md:py-16 px-4 md:px-8">
      {/* Header */}
      <div className="text-center mb-8 md:mb-16">
        <p className="text-[#F4931C] font-nunito font-semibold text-base leading-[120%] tracking-[0.08em] text-center mb-4 md:mb-[16px]">
          MEET OUR DOCTOR
        </p>
        <h2 className="font-archivo font-bold text-2xl md:text-[32px] leading-[120%] tracking-[0%] text-center text-[#0A0A23]">
          The Ophthalmic Director
        </h2>
      </div>

      {/* Content Grid */}
      <div className="container mx-auto grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-12 items-start">
        {/* Left side - Doctor Image and Info */}
        <div className="flex flex-col items-center">
          <img
            src="/ophthalmic director-image.png"
            alt="Dr. Hardy Chukwudera Mbadugha"
            className="w-full max-w-[392px] h-full max-h-[441px] object-cover rounded-[20px] mb-[8px]"
          />
          <div className="text-center">
            <h3 className="font-archivo font-bold text-[18px] leading-[150%] tracking-[0%] text-[#0A0A23] mb-[4px]">
              Dr. Hardy Chukwudera Mbadugha
            </h3>
            <p className="text-[#F4931C] font-archivo font-normal text-[18px] leading-[150%] tracking-[0%] mb-[4px]">
              Ophthalmic Director
            </p>
            <Link href='/biography' className="text-[#69A6C9] font-archivo font-semibold text-base leading-[150%] tracking-[0%] align-middle cursor-pointer hover:underline">
              Biography <ArrowUpRight className="inline-flex"/>
            </Link>
          </div>
        </div>

        {/* Right side - Doctor Description */}
        <div className="space-y-6 md:space-y-[24px]">
          <p className="font-archivo font-normal text-base leading-[150%] tracking-[0%] text-[#454545]">
            Dr. Hardy is a highly skilled and passionate optometrist with 8 years of experience in clinical optometry, 
            vision care, and practice management. As the driving force behind Crisp-Vision Eye Clinic Ltd, Dr. Hardy 
            is committed to delivering world-class eye care, integrating advanced diagnostic technology with 
            patient-centered service.
          </p>

          <p className="font-archivo font-normal text-base leading-[150%] tracking-[0%] text-[#454545]">
            A recipient of several prestigious awards, including the Young Optometrist of the Year 2024 from the 
            Nigerian Optometric Association (NOA), the Presidential NYSC National Honours 2023 conferred by 
            President Muhammadu Buhari, and the National Daily Newspaper Award 2022 (Youth Category), Dr. Hardy 
            has made significant contributions to optometry in Nigeria and beyond. With expertise in ophthalmic 
            lens dispensing (trained at EssilorLuxottica), myopia management, Dr. Hardy leads a team of dedicated 
            professionals in ensuring the best possible vision care for all patients.
          </p>

          <p className="font-archivo font-normal text-base leading-[150%] tracking-[0%] text-[#454545]">
            Beyond clinical practice, Dr. Hardy is deeply involved in optometric education, mentorship, and 
            community outreach, working to raise the standard of eye care through innovation and leadership.
          </p>

          <Link
            href="https://care.ecmsapx.com/appointment/28X74K"
            className="inline-block bg-[#0A0A23] text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
          >
            Book An Appointment 
          </Link>
        </div>
      </div>
    </div>
  );
};
