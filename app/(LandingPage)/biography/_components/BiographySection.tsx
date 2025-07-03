import React from "react";

const BiographySection = () => {
  return (
    <div className="w-full bg-white py-12  lg:px-16 flex flex-col items-center">
      {/* Title and Subtitle */}
      <div className="container w-full text-center mb-12">
        <div className="text-[22px] font-archivo font-semibold text-[#FF9500] tracking-[0.1em] mb-2 uppercase">
          Biography
        </div>
        <h2 className="font-archivo font-bold text-2xl md:text-3xl lg:text-4xl text-[#0A0A23] mb-4 leading-tight">
          The vision behind our excellence, recognized and <br /> celebrated in
          the Nigerian eye care industry.
        </h2>
      </div>

      <div>
        {/* Main Content */}
        <div className="container flex flex-col xl:flex-row items-start justify-center gap-10 xl:space-x-[73px] w-full mx-auto mb-[70px]">
          {/* Image */}
          <div className="flex-shrink-0 w-full lg:max-w-[457px] mx-auto mb-8 lg:mb-0">
            <img
              src="/biography-section-iamge.png"
              alt="Dr. Hardy Chukwudera Mbadugha"
              className="lg:rounded-[24px] w-full h-auto lg:h-[610px] object-cover"
            />
          </div>
          {/* Text Content */}
          <div className="flex-1 w-full max-w-2xl px-4 md:px-1 lg:px-8">
            {/* Education */}
            <div className="mb-8">
              <h3 className="font-archivo font-bold text-[20px] md:text-xl text-[#4A7181] mb-2">
                Education
              </h3>
              <p className="font-archivo text-base text-[#000000] leading-relaxed">
                Dr. Hardy Chukwudera Mbadugha was born on June 3rd. He completed
                his Junior WAEC at Government College Umuahia and his Senior
                WAEC at Prizes Mates Model Academy Aba, where he graduated as
                the Best Mathematics and Physics student. He trained as an
                optometrist at Imo State University, graduating in 2015. During
                his time there, he was elected as the first Director of Health
                in the Students' Union Government in 2013 and later as the
                President of the Nigerian Optometric Students' Association in
                2014. As President, he rebranded the school's optometric clinic
                and refurbished its instruments for a better learning
                experience, also assisting his friend Dr. Christian Duru, the
                then National President of NOSA in founding the Optometric
                Students Academic Forum in Imo State University and across all
                other optometry schools in Nigeria.
              </p>
            </div>
            {/* Professional Training and Early Career */}
            <div className="mb-8">
              <h3 className="font-archivo font-bold text-[20px] md:text-xl text-[#4A7181] mb-2">
                Professional Training and Early Career
              </h3>
              <p className="font-archivo text-base text-[#000000] leading-relaxed">
                Dr. Mbadugha completed his 12-month internship program at the
                National Assembly Eye Clinic under Dr. Ken Giwa-Amu. He received
                further training under Dr. Felix Olafisoye with the Family of
                Optometric Mentors in the Federal Capital Territory, perfecting
                his clinical skills across major optometry modules.
              </p>
            </div>
            {/* Community Service */}
            <div>
              <h3 className="font-archivo font-bold text-[20px] md:text-xl text-[#4A7181] mb-2">
                Community Service
              </h3>
              <p className="font-archivo text-base text-[#000000] leading-relaxed">
                After his training, Dr. Mbadugha was posted to Isuikwuato in
                Abia State for his National Youth Service. He led outreach
                programs to underserved communities, donated food and toiletries
                to "The Wanted Children Foundation" motherless babies' home in
                Ovim, conducted health education initiatives, and spearheaded
                eye-care programs for the elderly, poor, and needy. He also
                collaborated on a project to construct a 2.5KM road for a
                community affected by erosion.
              </p>
            </div>
          </div>
        </div>

        {/* Recognitions Section */}
        <div className="container flex flex-col-reverse xl:flex-row items-start justify-center gap-10 xl:space-x-[73px] w-full mx-auto">
          {/* Left: Text */}
          <div className="flex-1 max-w-xl px-4 md:px-1 lg:px-8">
            <h3 className="font-archivo font-bold text-[20px] md:text-xl text-[#4A7181] mb-4">
              Recognitions
            </h3>
            <p className="font-archivo text-base text-[#000000] leading-relaxed mb-8">
              In recognition of his outstanding service, he was awarded the Best
              Corps Member in Abia State by Governor Okezie Victor Ikpeazu and
              was offered automatic state government employment, which he turned
              down to join the EssilorLuxottica group to further his exposure
              and training in the eyecare industry. Three years later, he was
              invited to Aso-Villa by President Muhammadu Buhari GCFR with 52
              other distinguished corps members out of 270,000 who served in
              2019 for distinguishing themselves in the four phases of the
              2019/20 National Youth Service Scheme. His efforts in conceiving,
              initiating, and successfully executing personal rural community
              projects that addressed the felt needs of his host community in
              Abia State were celebrated as a hallmark of excellence. Among the
              52, he was again honoured as one of the top 10 at the National
              Daily 2022 Award of Excellence in the presence of President
              Olusegun Obasanjo GCFR. He was awarded a federal scholarship up to
              the PhD level and granted automatic employment into the Federal
              Civil Service Commission by President Muhammadu Buhari. This
              recognition not only reflects his dedication and excellence in his
              academic and professional pursuits but also provides him with a
              platform to grow and make a significant impact on the world around
              him. At the age of 31, Dr. Hardy became the youngest optometrist
              to deliver a scientific session on Clinical Pearls in Ophthalmic
              Lens Dispensing at the 46th National Conference/AGM of the
              Nigerian Optometric Association in Asaba, Delta State. Currently,
              Dr. Hardy is serving in a 9-man committee on education with the
              Optometrist and Dispensing Opticians Registration Board of Nigeria
              (ODORBN) under the chairmanship of Prof. Mrs. Ikoro Nwakaego.
            </p>
            <p className="font-archivo text-base text-[#000000] leading-relaxed">
              Dr. Hardy Chukwudera Mbadugha is a distinguished and exemplary
              professional who has made remarkable contributions to the field of
              optometry. He has demonstrated outstanding clinical excellence,
              unwavering dedication to patient care, and a commitment to
              advancing the practice of optometry. His passion for imparting
              knowledge, skills, and morals to his peers and the younger
              generation is widely recognized. This citation celebrates his
              exceptional achievements, leadership, and profound impact on the
              optometric community and beyond.
            </p>
          </div>
          {/* Right: Images */}
          <div className="flex-1 flex flex-col lg:gap-6 max-w-xl w-full justify-center md:items-start items-center">
            {/* Top: Two images side by side */}
            <div className="flex flex-row w-[358px] lg:w-full">
              <img
                src="/recognition-1.png"
                alt="Recognition 1"
                className="rounded-tl-[20px] w-[179px]  lg:w-1/2 h-auto lg:h-[408px] object-cover"
              />
              <img
                src="/recognition-2.png"
                alt="Recognition 2"
                className="rounded-tr-[20px] w-[179px] lg:w-1/2 h-auto lg:h-[408px] object-cover"
              />
            </div>
            {/* Bottom: One wide image */}
            <img
              src="/recognition-3.png"
              alt="Recognition 3"
              className="rounded-b-[20px] w-[358px] h-auto lg:w-full lg:h-[303px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BiographySection;
