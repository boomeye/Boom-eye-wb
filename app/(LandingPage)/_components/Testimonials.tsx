import React from 'react'
import { Icon } from '@iconify/react'
import Link from 'next/link';

const Testimonials = () => {
  const testimonialsData = [
    {
      quote: "Exceptional Service!",
      reviewMessage: "From booking my appointment to receiving my glasses, the process was smooth and professional. The team at Crisp-Vision truly cares about their patients!",
      name: "Mr. Isah Sulaiman",
      image: "/Mr. Isah Sulaiman Nakandi.png", 
      rating: 4,
    },
    {
      quote: "Best I have seen so far!",
      reviewMessage: "I was struggling with digital eye strain, and they recommended blue-light protection lenses. My headaches are gone! Highly recommended.",
      name: "Chizoba Ohams",
      image: "/Chizoba Ohams.png", 
      rating: 5,
    },
    {
      quote: "Exact care I got in the UK",
      reviewMessage: "I was impressed by the advanced diagnostic tools used during my checkup. It made me feel confident about my eye health.",
      name: "Wisdom Chima",
      image: "/Wisdom Chima.png",
      rating: 4,
    },
    {
      quote: "Just when I needed it!",
      reviewMessage: "I had a sudden eye infection, and their emergency service was a lifesaver. I received prompt treatment and care.",
      name: "Bar. Clare Ibeh",
      image: "/Barr. Clare Nma Ibeh.png", 
      rating: 5,
    },
  ];

  return (
    <>
      <section className="py-[67px] bg-white overflow-hidden">
        <div className="max-w-[100rem] mx-auto px-4">
          <div className="text-center mb-[51px]">
            <p className="text-[#F4931C] font-nunito font-semibold text-base leading-[120%] tracking-[0.08em] text-center mb-2">TESTIMONIALS</p>
            <h2 className="text-[36px] font-archivo font-bold leading-[120%] text-center text-[#0A0A23]">What Our Clients Say</h2>
            <p className="font-archivo font-medium text-base leading-[150%] text-center text-[#262626] mt-4 max-w-2xl mx-auto">We take pride in providing exceptional eye care. But don't just take our word for it, please hear from our satisfied  clients!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-[67px]">
            {testimonialsData.map((testimonial, index) => (
              <div key={index} className="bg-[#AFDEF2] rounded-[20px] p-6 flex flex-col items-start min-h-[350px] h-[333px] top-[247px] left-[100px] gap-[10px]">
               <h3 className="font-archivo font-bold text-2xl leading-[120%] text-[#0A0A23] mb-4">
  "{testimonial.quote.split('.')[0]}!"
</h3>
<p className="font-archivo font-normal text-base leading-[150%] text-[#262626] mb-4 flex-grow">
  {testimonial.reviewMessage}
</p>
                <div className="flex items-center mt-auto">
                  <img src={testimonial.image} alt={testimonial.name} className="w-[50px] h-[50px] rounded-full mr-3 border-2 border-[#0A0A23]" />
                  <div>
                  <p className="font-archivo font-bold text-base leading-[150%] text-[#262626]">
  {testimonial.name}
</p>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Icon
                        key={i}
                        icon="solar:star-line-duotone"
                        style={{ width: '18.336px', height: '17.5px' }}
                        className="text-[#0A0A23]"
                      />
                      
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-right">
            <Link href="/review" className="bg-[#0A0A23] text-white font-archivo font-bold text-base leading-[120%] px-8 py-4 rounded-[8px] hover:bg-gray-800 transition-colors duration-300">
              Leave A Review
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Testimonials
