```jsx
import React from "react";

const About = () => {
  return (
    <div className="w-[1440px] min-h-[1788px] bg-white relative font-['Inter'] overflow-hidden">
      {/* Navigation */}
      <div className="w-full h-[164px] bg-white flex items-center justify-between px-[80px]">
        <span className="text-[20px] font-medium text-black">Site name</span>
        <div className="flex items-center gap-[48px]">
          <span className="text-[20px] font-medium text-black">Page</span>
          <span className="text-[20px] font-medium text-black">Page</span>
          <span className="text-[20px] font-medium text-black">Page</span>
          <button className="bg-black text-white text-[16px] font-medium px-[24px] py-[14px] rounded-[8px]">
            Button
          </button>
        </div>
      </div>

      {/* Main Content: Image + Copy */}
      <div className="flex flex-row items-center justify-center gap-[80px] px-[80px] py-[60px]">
        {/* Image Placeholder */}
        <div
          className="w-[508px] h-[657px] rounded-[8px] bg-[#f7f7f7] flex-shrink-0"
        />

        {/* Copy */}
        <div className="w-[624px] flex flex-col gap-[24px]">
          <h1
            className="text-[64px] font-bold text-black leading-tight"
            style={{ width: "624px", height: "77px" }}
          >
            About
          </h1>
          <p
            className="text-[24px] font-normal text-[#828282]"
            style={{ width: "624px", height: "36px" }}
          >
            Subheading for description or instructions
          </p>
          <p
            className="text-[20px] font-medium text-black"
            style={{ width: "624px", height: "360px" }}
          >
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
      <div className="flex flex-col items-center px-[80px] py-[60px] gap-[24px]">
        {/* Heading */}
        <div className="w-[624px] flex flex-col gap-[24px]">
          <h2 className="text-[32px] font-semibold text-black w-[624px] h-[48px]">
            Contact me
          </h2>
        </div>

        {/* Form */}
        <div className="w-[626px] flex flex-col gap-[32px]">
          {/* First Name + Last Name Row */}
          <div className="flex flex-row gap-[32px]">
            {/* First Name */}
            <div className="w-[295px] flex flex-col gap-[8px]">
              <label className="text-[16px] font-medium text-black w-[295px] h-[24px]">
                First name
              </label>
              <div
                className="w-[295px] h-[48px] bg-white rounded-[8px] border border-[#e0e0e0] flex items-center px-[16px] py-[12px]"
              >
                <span className="text-[16px] font-medium text-[#828282]">
                  Jane
                </span>
              </div>
            </div>

            {/* Last Name */}
            <div className="w-[297px] flex flex-col gap-[8px]">
              <label className="text-[16px] font-medium text-black w-[297px] h-[24px]">
                Last name
              </label>
              <div
                className="w-[297px] h-[48px] bg-white rounded-[8px] border border-[#e0e0e0] flex items-center px-[16px] py-[12px]"
              >
                <span className="text-[16px] font-medium text-[#828282]">
                  Smitherton
                </span>
              </div>
            </div>
          </div>

          {/* Email Address */}
          <div className="w-[626px] flex flex-col gap-[8px]">
            <label className="text-[16px] font-medium text-black w-[626px] h-[24px]">
              Email address
            </label>
            <div
              className="w-[626px] h-[48px] bg-white rounded-[8px] border border-[#e0e0e0] flex items-center px-[16px] py-[12px]"
            >
              <span className="text-[16px] font-medium text-[#828282]">
                email@janesfakedomain.net
              </span>
            </div>
          </div>

          {/* Your Message */}
          <div className="w-[626px] flex flex-col gap-[8px]">
            <label className="text-[16px] font-medium text-black w-[626px] h-[24px]">
              Your message
            </label>
            <div
              className="w-[626px] h-[162px] bg-white rounded-[8px] border border-[#e0e0e0] flex items-start px-[16px] py-[12px]"
            >
              <span className="text-[16px] font-medium text-[#828282]">
                Enter your question or message
              </span>
            </div>
          </div>

          {/* Submit Button */}
          <button
            className="w-[626px] h-[62px] bg-black text-white text-[20px] font-medium rounded-[8px] flex items-center justify-center px-[32px] py-[16px]"
          >
            Submit
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full h-[264px] bg-white flex flex-col justify-center px-[80px]">
        {/* Divider */}
        <div className="w-[1280px] h-[1px] bg-[#e0e0e0] mb-[40px]" />

        <div className="flex flex-row items-start justify-between">
          {/* Site name + Social */}
          <div className="flex flex-col gap-[16px]">
            <span className="text-[24px] font-normal text-black">
              Site name
            </span>
            <div className="flex flex-row gap-[8px]">
              {/* Facebook */}
              <div className="w-[40px] h-[40px] rounded-[4px] flex items-center justify-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.