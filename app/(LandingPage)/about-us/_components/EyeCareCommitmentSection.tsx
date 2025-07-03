import React from 'react';

export const EyeCareCommitmentSection = () => {
  return (
    <div className="bg-[#F5F8FC] py-16 px-4">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="md:text-[40px] text-[30px] font-archivo font-bold leading-[120%] text-center align-middle text-[#F4931C] mb-[48px]">
          We Committed To Delivering The Utmost Eye Care
        </h2>
      </div>

      {/* Content Grid */}
      <div className="container min-h-[410px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* Left Blue Section */}
        <div className="bg-[#6092A7] p-4 lg:p-12 flex flex-col justify-center">
          <h3 className="text-white font-archivo font-bold text-[21px] leading-[150%] tracking-[-0.02em] text-center mb-[32px]">
            We don't just care for eyes, we care for YOU.
          </h3>
          <p className="text-white font-archivo font-normal text-base leading-[150%] tracking-[0%]">
            We are dedicated to delivering world-class eye care services that 
            prioritize excellence, innovation, and patient-centered care. With 
            a team of highly skilled optometrists and cutting-edge technology, 
            we provide comprehensive eye examinations, accurate diagnoses, and 
            advanced treatment solutions tailored to each patient's needs.
          </p>
        </div>

        {/* Right Side - Combined White and Dark Sections */}
        <div className="flex lg:flex-col">
          {/* Top White Section */}
          <div className="bg-white p-4 w-[195px] md:w-full h-full lg:p-12">
            <p className="font-archivo font-normal text-base leading-[150%] tracking-[0%] text-gray-800">
              Beyond clinical services, Boom Eye Clinic Ltd is passionate about 
              community impact. We actively engage in eye health education, 
              outreach programs, and mentorship initiatives aimed at fostering 
              the next generation of eye care professionals. Our goal is to make 
              high-quality vision care accessible and to set new standards in 
              optometry practice in Nigeria and beyond.
            </p>
          </div>

          {/* Bottom Dark Section */}
          <div className="bg-[#0A0A23] p-4 w-[195px] md:w-full h-full lg:p-12">
            <p className="text-white font-archivo font-normal text-base leading-[150%] tracking-[0%]">
              With a focus on continuous innovation and professional growth, 
              we strive to be a leader in the eye care industry, offering 
              specialized services such as paediatric optometry, myopia 
              management, dry eye therapy, and advanced vision correction 
              solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};