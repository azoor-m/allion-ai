```jsx
import React from "react";

const About = () => {
  return (
    <div className="relative bg-white" style={{ width: "1440px", height: "1788px" }}>
      {/* Navigation */}
      <div
        className="absolute top-0 left-0 bg-white flex items-center justify-between px-20"
        style={{ width: "1440px", height: "164px" }}
      >
        <span className="text-black font-medium" style={{ fontSize: "20px" }}>
          Site name
        </span>
        <div className="flex items-center" style={{ gap: "48px" }}>
          <span className="text-black font-medium" style={{ fontSize: "20px" }}>
            Page
          </span>
          <span className="text-black font-medium" style={{ fontSize: "20px" }}>
            Page
          </span>
          <span className="text-black font-medium" style={{ fontSize: "20px" }}>
            Page
          </span>
          <button
            className="bg-black text-white font-medium rounded-lg"
            style={{
              fontSize: "16px",
              paddingLeft: "24px",
              paddingRight: "24px",
              paddingTop: "14px",
              paddingBottom: "14px",
            }}
          >
            Button
          </button>
        </div>
      </div>

      {/* Image + Copy Section */}
      <div
        className="absolute flex items-center justify-center"
        style={{ top: "164px", left: "0", width: "1440px", gap: "80px" }}
      >
        {/* Image Placeholder */}
        <div
          className="rounded-lg flex-shrink-0"
          style={{
            width: "508px",
            height: "657px",
            backgroundColor: "#f7f7f7",
            marginLeft: "160px",
          }}
        />

        {/* Copy */}
        <div
          className="flex flex-col"
          style={{ width: "624px", gap: "24px" }}
        >
          <h1
            className="text-black font-bold"
            style={{ fontSize: "64px", lineHeight: "1.2", margin: 0 }}
          >
            About
          </h1>
          <p
            className="font-normal"
            style={{ fontSize: "24px", color: "#828282", margin: 0 }}
          >
            Subheading for description or instructions
          </p>
          <p
            className="font-medium text-black"
            style={{ fontSize: "20px", margin: 0, lineHeight: "1.6" }}
          >
            Body text for your whole article or post. We'll put in some lorem ipsum to show how a filled-out page might look:
            <br /><br />
            Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur.
          </p>
        </div>
      </div>

      {/* Contact Me Heading */}
      <div
        className="absolute"
        style={{ top: "1020px", left: "160px", width: "624px" }}
      >
        <h2
          className="text-black font-semibold"
          style={{ fontSize: "32px", margin: 0 }}
        >
          Contact me
        </h2>
      </div>

      {/* Form */}
      <div
        className="absolute flex flex-col"
        style={{ top: "1096px", left: "160px", width: "626px", gap: "32px" }}
      >
        {/* First + Last Name Row */}
        <div className="flex" style={{ gap: "32px" }}>
          {/* First Name */}
          <div className="flex flex-col" style={{ width: "295px", gap: "8px" }}>
            <label
              className="text-black font-medium"
              style={{ fontSize: "16px" }}
            >
              First name
            </label>
            <div
              className="bg-white rounded-lg border border-gray-200"
              style={{
                width: "295px",
                height: "48px",
                paddingLeft: "16px",
                paddingRight: "16px",
                paddingTop: "12px",
                paddingBottom: "12px",
                boxSizing: "border-box",
              }}
            >
              <span
                className="font-medium"
                style={{ fontSize: "16px", color: "#828282" }}
              >
                Jane
              </span>
            </div>
          </div>

          {/* Last Name */}
          <div className="flex flex-col" style={{ width: "297px", gap: "8px" }}>
            <label
              className="text-black font-medium"
              style={{ fontSize: "16px" }}
            >
              Last name
            </label>
            <div
              className="bg-white rounded-lg border border-gray-200"
              style={{
                width: "297px",
                height: "48px",
                paddingLeft: "16px",
                paddingRight: "16px",
                paddingTop: "12px",
                paddingBottom: "12px",
                boxSizing: "border-box",
              }}
            >
              <span
                className="font-medium"
                style={{ fontSize: "16px", color: "#828282" }}
              >
                Smitherton
              </span>
            </div>
          </div>
        </div>

        {/* Email */}
        <div className="flex flex-col" style={{ width: "626px", gap: "8px" }}>
          <label
            className="text-black font-medium"
            style={{ fontSize: "16px" }}
          >
            Email address
          </label>
          <div
            className="bg-white rounded-lg border border-gray-200"
            style={{
              width: "626px",
              height: "48px",
              paddingLeft: "16px",
              paddingRight: "16px",
              paddingTop: "12px",
              paddingBottom: "12px",
              boxSizing: "border-box",
            }}
          >
            <span
              className="font-medium"
              style={{ fontSize: "16px", color: "#828282" }}
            >
              email@janesfakedomain.net
            </span>
          </div>
        </div>

        {/* Message */}
        <div className="flex flex-col" style={{ width: "626px", gap: "8px" }}>
          <label
            className="text-black font-medium"
            style={{ fontSize: "16px" }}
          >
            Your message
          </label>
          <div
            className="bg-white rounded-lg border border-gray-200"
            style={{
              width: "626px",
              height: "162px",
              paddingLeft: "16px",
              paddingRight: "16px",
              paddingTop: "12px",
              paddingBottom: "12px",
              boxSizing: "border-box",
            }}
          >
            <span
              className="font-medium"
              style={{ fontSize: "16px", color: "#828282" }}
            >
              Enter your question or message
            </span>
          </div>
        </div>

        {/* Submit Button */}
        <button
          className="bg-black text-white font-medium rounded-lg flex items-center"
          style={{
            width: "626px",
            height: "62px",
            fontSize: "20px",
            