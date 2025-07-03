"use client"

import React, { useRef } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";

const Testimonials = () => {
  const testimonialsData = [
    {
      quote: "Exceptional Service!",
      reviewMessage:
        "From booking my appointment to receiving my glasses, the process was smooth and professional. The team at Crisp-Vision truly cares about their patients!",
      name: "Mr. Isah Sulaiman",
      image: "/Mr. Isah Sulaiman Nakandi.png",
      rating: 4,
    },
    {
      quote: "Best I have seen so far!",
      reviewMessage:
        "I was struggling with digital eye strain, and they recommended blue-light protection lenses. My headaches are gone! Highly recommended.",
      name: "Chizoba Ohams",
      image: "/Chizoba Ohams.png",
      rating: 5,
    },
    {
      quote: "Exact care I got in the UK",
      reviewMessage:
        "I was impressed by the advanced diagnostic tools used during my checkup. It made me feel confident about my eye health.",
      name: "Wisdom Chima",
      image: "/Wisdom Chima.png",
      rating: 4,
    },
    {
      quote: "Just when I needed it!",
      reviewMessage:
        "I had a sudden eye infection, and their emergency service was a lifesaver. I received prompt treatment and care.",
      name: "Bar. Clare Ibeh",
      image: "/Barr. Clare Nma Ibeh.png",
      rating: 5,
    },
  ];

  // Ref for mobile scroll container
  const scrollRef = useRef<HTMLDivElement>(null);

  // Scroll function for mobile
  const scrollByCard = (dir: 'left' | 'right') => {
    const container = scrollRef.current;
    if (!container) return;
    const card = container.querySelector('.testimonial-card');
    if (!card) return;
    const cardWidth = (card as HTMLElement).offsetWidth + 16; // 16px gap
    container.scrollBy({ left: dir === 'left' ? -cardWidth : cardWidth, behavior: 'smooth' });
  };

  return (
    <>
      <section className="py-[67px] bg-white overflow-hidden">
        <div className="max-w-[100rem] mx-auto px-4">
          <div className="text-center mb-[51px]">
            <p className="text-[#F4931C] font-nunito font-semibold text-base leading-[120%] tracking-[0.08em] text-center mb-2">
              TESTIMONIALS
            </p>
            <h2 className="text-[36px] font-archivo font-bold leading-[120%] text-center text-[#0A0A23]">
              What Our Clients Say
            </h2>
            <p className="font-archivo font-medium text-base leading-[150%] text-center text-[#262626] mt-4 max-w-2xl mx-auto">
              We take pride in providing exceptional eye care. But don't just
              take our word for it, please hear from our satisfied clients!
            </p>
          </div>

          {/* Desktop Reviews card */}
          <div className="md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-[67px] hidden">
            {testimonialsData.map((testimonial, index) => (
              <div
                key={index}
                className="bg-[#AFDEF2] rounded-[20px] p-6 flex flex-col items-start min-h-[350px] h-[333px] top-[247px] left-[100px] gap-[10px]"
              >
                <h3 className="font-archivo font-bold text-2xl leading-[120%] text-[#0A0A23] mb-4">
                  "{testimonial.quote.split(".")[0]}!"
                </h3>
                <p className="font-archivo font-normal text-base leading-[150%] text-[#262626] mb-4 flex-grow">
                  {testimonial.reviewMessage}
                </p>
                <div className="flex items-center mt-auto">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-[50px] h-[50px] rounded-full mr-3 border-2 border-[#0A0A23]"
                  />
                  <div>
                    <p className="font-archivo font-bold text-base leading-[150%] text-[#262626]">
                      {testimonial.name}
                    </p>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Icon
                          key={i}
                          icon="solar:star-line-duotone"
                          style={{ width: "18.336px", height: "17.5px" }}
                          className="text-[#0A0A23]"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Reviews card with horizontal scroll and chevrons */}
          <div className="relative block md:hidden mb-6">
            {/* Chevrons */}
            <button
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-br from-white to-[#C8E8F6] p-2 border rounded-full flex items-center justify-center"
              style={{ display: 'block' }}
              onClick={() => scrollByCard('left')}
              aria-label="Scroll left"
            >
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" stroke="#0A0A23" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-br from-white to-[#C8E8F6] p-2 border rounded-full flex items-center justify-center"
              style={{ display: 'block' }}
              onClick={() => scrollByCard('right')}
              aria-label="Scroll right"
            >
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" stroke="#0A0A23" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <div
              ref={scrollRef}
              className="flex flex-row gap-4 overflow-x-auto scrollbar-hide px-8"
              style={{ scrollBehavior: 'smooth' }}
            >
              {testimonialsData.map((testimonial, index) => (
                <div
                  key={index}
                  className="testimonial-card bg-[#AFDEF2] rounded-2xl p-4 mb-6 shadow flex flex-col max-h-[234px] min-w-[320px] max-w-[340px]"
                >
                  <h3 className="font-archivo font-bold text-lg leading-tight text-[#0A0A23] mb-2">
                    "{testimonial.quote.split(".")[0]}!"
                  </h3>
                  <p className="font-archivo text-sm text-[#262626] mb-4">
                    {testimonial.reviewMessage}
                  </p>
                  <div className="flex items-center mb-2">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full mr-3 border-2 border-[#0A0A23]"
                    />
                    <div>
                      <p className="font-archivo font-bold text-sm text-[#262626]">
                        {testimonial.name}
                      </p>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Icon
                            key={i}
                            icon="solar:star-line-duotone"
                            style={{ width: "16px", height: "15px" }}
                            className="text-[#0A0A23]"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Button for both desktop and mobile, but styled for mobile at the bottom */}
          <div className="text-right md:text-right block">
            <Link
              href="/review"
              className="block w-full md:w-[229px] md:inline-block bg-[#0A0A23] text-white font-archivo font-bold text-base leading-[120%] px-8 py-4 rounded-[8px] hover:bg-gray-800 transition-colors duration-300 text-center"
            >
              Leave A Review
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
