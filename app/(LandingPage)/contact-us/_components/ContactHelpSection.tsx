"use client";

import Link from "next/link";
import { useState } from "react";

export default function ContactHelpSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [validationErrors, setValidationErrors] = useState<{ [key: string]: string }>({});

  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setValidationErrors(prev => ({
      ...prev,
      [name]: undefined
    }));
  };

  const handleSubmit = () => {
    const errors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      errors.name = "Name is required.";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required.";
    } else if (!/^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$/.test(formData.email)) {
      errors.email = "Invalid email format.";
    }

    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required.";
    } else if (!/^\+?\d{10,15}$/.test(formData.phone)) {
      errors.phone = "Invalid phone number format. (e.g., +2348012345678 or 08012345678)";
    }

    setValidationErrors(errors);

    if (Object.keys(errors).length > 0) {
      return;
    }

    console.log("Form submitted:", formData);
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <>
      <div className="bg-white lg:bg-[#F3FAFD] py-16 px-4 mt-10">
        <div className="container mx-auto bg-white p-0 md:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form Section */}
            <div className="bg-white rounded-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Need Any Help?
              </h2>

              <div className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name*"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border ${validationErrors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 outline-none transition-all`}
                    onFocus={(e) => (e.target.style.borderColor = "#6092A7")}
                    onBlur={(e) => (e.target.style.borderColor = validationErrors.name ? '#ef4444' : '#d1d5db')}
                  />
                  {validationErrors.name && (
                    <p className="text-red-500 text-sm mt-1">{validationErrors.name}</p>
                  )}
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email*"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border ${validationErrors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 outline-none transition-all`}
                    onFocus={(e) => (e.target.style.borderColor = "#6092A7")}
                    onBlur={(e) => (e.target.style.borderColor = validationErrors.email ? '#ef4444' : '#d1d5db')}
                  />
                  {validationErrors.email && (
                    <p className="text-red-500 text-sm mt-1">{validationErrors.email}</p>
                  )}
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone number*"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border ${validationErrors.phone ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 outline-none transition-all`}
                    onFocus={(e) => (e.target.style.borderColor = "#6092A7")}
                    onBlur={(e) => (e.target.style.borderColor = validationErrors.phone ? '#ef4444' : '#d1d5db')}
                  />
                  {validationErrors.phone && (
                    <p className="text-red-500 text-sm mt-1">{validationErrors.phone}</p>
                  )}
                </div>

                <div>
                  <textarea
                    name="message"
                    placeholder="Message..."
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 outline-none transition-all resize-none"
                    onFocus={(e) => (e.target.style.borderColor = "#6092A7")}
                    onBlur={(e) => (e.target.style.borderColor = "#d1d5db")}
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-gray-900 text-white py-4 px-6 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200 transform hover:scale-[1.02]"
                >
                  Send Message
                </button>
              </div>
            </div>

            {/* Social Media Section */}
            <div className="relative w-full bg-[#6092A7] mx-auto overflow-visible flex flex-col lg:max-w-[604px]">
              <div className="flex flex-col md:flex-row items-center justify-between">
                {/* Text Content */}
                <div className="relative z-10 p-6 md:p-8 text-white w-full md:w-1/2">
                  <div className="font-nunito font-semibold text-base leading-[120%] tracking-[8%] ml-2 md:ml-4 mb-4 opacity-90">
                    CONNECT WITH US
                  </div>
                  <h3 className="font-archivo font-bold text-[28px] md:text-[32px] leading-[120%] tracking-[0%] mb-4">
                    Follow Us on
                    <br />
                    Social Media
                  </h3>
                  <p
                    className="mb-8 font-archivo font-normal text-base leading-[150%] tracking-[0%] max-w-sm"
                    style={{ color: "#E8F3F7" }}
                  >
                    Follow us for health tips, <br /> clinic updates, and wellness <br /> advice
                    from our expert team.
                  </p>
                </div>

                {/* Doctor Image */}
                <div className="w-full md:w-1/2 px-6 md:px-0 xl:absolute xl:top-14 xl:-right-16 max-w-[388px] h-auto">
                  <img
                    src="need-help-image.png"
                    alt="Healthcare professional with stethoscope"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>

              {/* Social Media Icons */}
              <div className="relative z-10 px-4 sm:px-8 pb-8 pt-6 sm:pt-[39px]">
                <div className="flex flex-wrap justify-between  gap-y-4">
                  <Link href="https://wa.me/message/W2GXITSGNCBJM1" target="_blank" rel="noopener noreferrer">
                    <img src="/icons/whatapp.png" alt="threads icons" className="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px]" />
                  </Link>
                  <Link href="https://www.facebook.com/profile.php?id=61573478302168&mibextid=wwXIfr&mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
                    <img src="/icons/facebook.png" alt="facebook icons" className="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px]" />
                  </Link>
                  <Link href="https://www.instagram.com/boomeyeclinic/" target="_blank" rel="noopener noreferrer">
                    <img src="/icons/ig.png" alt="instagram icons" className="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px]" />
                  </Link>
                  <Link href="https://www.linkedin.com/in/boom-eye-clinic-ltd-87ba44369" target="_blank" rel="noopener noreferrer">
                    <img src="/icons/linkedln.png" alt="linkedin icons" className="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px]" />
                  </Link>
                  <Link href="http://tiktok.com/@boomeyeclinic" target="_blank" rel="noopener noreferrer">
                    <img src="/icons/tiktok.png" alt="tiktok icons" className="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px]" />
                  </Link>
                  {/* <Link href="#" target="_blank" rel="noopener noreferrer">
                    <img src="/icons/x.png" alt="twitter icons" className="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px]" />
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full flex justify-center mt-12">
        <div className="bg-white max-w-[12orem] mx-auto w-full overflow-hidden">
          {/* Mobile to md: show map_mobile.svg, lg+: show map.svg */}
          <img
            src="/map_mobile.svg"
            alt="map"
            className="w-full h-auto object-cover block lg:hidden"
          />
          <img
            src="/map.svg"
            alt="map"
            className="w-full h-auto object-cover hidden lg:block"
          />
        </div>
      </div>
    </>
  );
}
