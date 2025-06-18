import React from 'react';
import { Icon } from '@iconify/react';

export const ContactUsHeroSection = () => {
  return (
    <div className="w-full bg-[#F3FAFD]">
      {/* Mobile to LG Version only (up to <xl) */}
      <div className="block xl:hidden relative h-screen md:h-[30rem] w-full bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: "url('/contact-us-image.png')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#0B354D] bg-opacity-60" />
        
        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full px-6">
          <div className="text-center">
            <h1 className="text-white text-4xl sm:text-5xl font-bold leading-tight mb-6">
              We're Always Here For You
            </h1>
            <p className="text-white text-lg sm:text-xl leading-relaxed">
              Our team is always ready to assist you with your eye care needs, appointments, 
              and inquiries anytime. Kindly drop a WhatsApp chat if contacting us outside 
              working hours.
            </p>
          </div>
        </div>
      </div>

      {/* XL and up (Desktop) */}
      <div className="hidden xl:flex min-h-screen">
        {/* Left side - Text content */}
        <div className="flex-1 bg-[#6B9BB5] flex items-center px-[100px] max-w-6xl mx-auto">
          <div className='ml-[80px]'>
            <h1 className="text-white text-6xl font-bold leading-tight mb-6">
              We're Always Here For You
            </h1>
            <p className="text-white text-xl leading-relaxed">
              Our team is always ready to assist you with your eye care needs, appointments, <br />
              and inquiries anytime. Kindly drop a WhatsApp chat if contacting us outside <br />
              working hours.
            </p>
          </div>
        </div>

        {/* Right side - Image */}
        <div className="flex-1">
          <img
            src="/contact-us-image.png"
            alt="Medical team"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Contact Information Footer (All screens) */}
      <div className="text-white static md:relative z-20 flex justify-center px-4 sm:px-6 lg:px-8">
        <div className="bg-white text-black rounded-[16px] mt-10 md:-mt-14 lg:-mt-8 xl:-mt-32 mx-auto px-4 py-6 sm:py-8 lg:py-10 w-full container shadow[0px 3px 15px 0px #0000001A]">
          <h2 className="font-archivo font-bold text-3xl md:text-4xl xl:text-5xl leading-[120%] tracking-[0%] text-center text-[#FF9E00] mb-[16px] mt-[16px]">
            Get In Touch With Us Through Any Of The Channels
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-8">
            {/* Contact Items */}
            {[
              {
                title: "Email Address",
                icon: "lucide:mail",
                content: [
                  { text: "info@boomeyeclinic.com", link: "mailto:info@boomeyeclinic.com" },
                  { text: "boomeyeclinic@outlook.com", link: "mailto:boomeyeclinic@outlook.com" },
                ],
              },
              {
                title: "Phone Number",
                icon: "lucide:phone",
                content: [
                  { text: "+234 803 894 5401", link: "tel:+2348038945401" },
                  { text: "+234 704 379 8008", link: "tel:+2347043798008" },
                ],
              },
              {
                title: "Location",
                icon: "lucide:map-pin",
                content: [
                  { text: "Plot 1607 Zone E, Apo Resettlement Off Murtala" },
                  { text: "Mohammed Express Road Gudu District, Apo, Abuja," },
                  { text: "F.C.T" },
                ],
              },
              {
                title: "Work Days",
                icon: "lucide:clock",
                content: [
                  { text: "Monday – Friday: ", bold: "8:00 am – 6:00 pm" },
                  { text: "Saturday & Public Holidays: ", bold: "10:00 am – 4:00 pm" },
                ],
              },
            ].map(({ title, icon, content }, i) => (
              <div key={i} className="flex flex-col items-center text-center py-6 px-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#6092A7] mb-4">
                  <Icon icon={icon} className="w-6 h-6 text-white" />
          </div>
                <h3 className="font-archivo font-bold text-[16px] leading-[150%] text-[#454545] mb-2 xl:mb-4">
                  {title}
              </h3>
              <div className="space-y-1">
                  {content.map((item, j) => {
                    if ('link' in item) {
                      return (
                        <a
                          key={j}
                          href={item.link}
                          className="block text-[14px] underline text-[#454545] font-archivo hover:text-blue-300"
                        >
                          {item.text}
                        </a>
                      );
                    } else if ('bold' in item) {
                      return (
                        <p
                          key={j}
                          className="block text-[13.5px] text-[#454545] font-archivo"
                        >
                          {item.text}
                          <span className="font-bold text-[#454545]"> {item.bold}</span>
                        </p>
                      );
                    } else {
                      return (
                        <p
                          key={j}
                          className="block text-[13.5px] text-[#454545] font-archivo"
                >
                          {item.text}
                        </p>
                      );
                    }
                  })}
            </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
