```jsx
import React from "react";

const About = () => {
  return (
    <div className="bg-white w-[1440px] min-h-[1788px] relative font-['Inter'] overflow-hidden">
      {/* Navigation */}
      <nav className="w-[1440px] h-[164px] bg-white flex items-center justify-between px-[80px]">
        <span className="text-[20px] font-medium text-black">Site name</span>
        <div className="flex items-center gap-[48px]">
          <span className="text-[20px] font-medium text-black">Page</span>
          <span className="text-[20px] font-medium text-black">Page</span>
          <span className="text-[20px] font-medium text-black">Page</span>
          <button className="bg-black text-white text-[16px] font-medium px-[24px] py-[14px] rounded-[8px]">
            Button
          </button>
        </div>
      </nav>

      {/* Main Content: Image + Copy */}
      <div className="flex flex-row items-start justify-center gap-[80px] px-[80px] mt-[40px]">
        {/* Image */}
        <div
          className="w-[508px] h-[657px] rounded-[8px] bg-[#f7f7f7] flex-shrink-0"
        />

        {/* Copy */}
        <div className="flex flex-col gap-[24px] w-[624px]">
          <h1 className="text-[64px] font-bold text-black leading-tight">
            About
          </h1>
          <p className="text-[24px] font-normal text-[#828282]">
            Subheading for description or instructions
          </p>
          <p className="text-[20px] font-medium text-black leading-relaxed">
            Body text for your whole article or post. We'll put in some lorem
            ipsum to show how a filled-out page might look:
            <br />
            <br />
            Excepteur efficient emerging, minim veniam anim aute carefully
            curated Ginza conversation exquisite perfect nostrud nisi intricate
            Content. Qui international first-class nulla ut. Punctual
            adipisicing, essential lovely queen tempor eiusmod irure. Exclusive
            izakaya charming Scandinavian impeccable aute quality of life soft
            power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip,
            et Porter destination Toto remarkable officia Helsinki excepteur
            Basset hound. Zürich sleepy perfect consectetur.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="flex flex-col items-start px-[80px] mt-[80px] gap-[24px]">
        {/* Heading */}
        <div className="w-[624px]">
          <h2 className="text-[32px] font-semibold text-black">Contact me</h2>
        </div>

        {/* Form */}
        <div className="w-[626px] flex flex-col gap-[32px]">
          {/* First + Last Name Row */}
          <div className="flex flex-row gap-[32px]">
            {/* First Name */}
            <div className="flex flex-col gap-[8px] w-[295px]">
              <label className="text-[16px] font-medium text-black">
                First name
              </label>
              <div className="w-[295px] h-[48px] bg-white border border-gray-200 rounded-[8px] px-[16px] py-[12px] flex items-center">
                <span className="text-[16px] font-medium text-[#828282]">
                  Jane
                </span>
              </div>
            </div>

            {/* Last Name */}
            <div className="flex flex-col gap-[8px] w-[297px]">
              <label className="text-[16px] font-medium text-black">
                Last name
              </label>
              <div className="w-[297px] h-[48px] bg-white border border-gray-200 rounded-[8px] px-[16px] py-[12px] flex items-center">
                <span className="text-[16px] font-medium text-[#828282]">
                  Smitherton
                </span>
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col gap-[8px] w-[626px]">
            <label className="text-[16px] font-medium text-black">
              Email address
            </label>
            <div className="w-[626px] h-[48px] bg-white border border-gray-200 rounded-[8px] px-[16px] py-[12px] flex items-center">
              <span className="text-[16px] font-medium text-[#828282]">
                email@janesfakedomain.net
              </span>
            </div>
          </div>

          {/* Message */}
          <div className="flex flex-col gap-[8px] w-[626px]">
            <label className="text-[16px] font-medium text-black">
              Your message
            </label>
            <div className="w-[626px] h-[162px] bg-white border border-gray-200 rounded-[8px] px-[16px] py-[12px] flex items-start">
              <span className="text-[16px] font-medium text-[#828282]">
                Enter your question or message
              </span>
            </div>
          </div>

          {/* Submit Button */}
          <button className="w-[626px] h-[62px] bg-black text-white text-[20px] font-medium rounded-[8px] px-[32px] py-[16px] flex items-center justify-center">
            Submit
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-[1440px] h-[264px] bg-white mt-[80px] px-[80px] flex flex-col justify-center">
        <div className="w-[1280px] flex flex-row justify-between items-start">
          {/* Site name + social */}
          <div className="flex flex-col gap-[24px]">
            <span className="text-[24px] font-normal text-black">
              Site name
            </span>
            {/* Social Icons */}
            <div className="flex flex-row gap-[8px]">
              {/* Facebook */}
              <div className="w-[40px] h-[40px] rounded-[4px] flex items-center justify-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="#828282"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </div>
              {/* LinkedIn */}
              <div className="w-[40px] h-[40px] rounded-[4px] flex items-center justify-center">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="#828282"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M