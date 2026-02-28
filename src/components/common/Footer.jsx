import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Footer = () => {
  const [time, setTime] = useState("");
  const footerRef = useRef(null);

  // Time update
  useEffect(() => {
    const updateTime = () => {
      const date = new Date();
      const options = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      };
      const formattedTime = new Intl.DateTimeFormat("en-US", options).format(
        date,
      );
      setTime(formattedTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      ref={footerRef}
      className="bg-black text-white px-4 lg:px-8 pt-10 pb-24 lg:pt-10 lg:pb-16 w-full flex flex-col justify-between border-t border-white/10 relative z-20 min-h-[50vh] lg:min-h-[70vh] overflow-hidden box-border"
    >
      {/* TOP SECTION */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-0 w-full mb-10 lg:mb-16">
        {/* Social Links */}
        <div className="flex flex-wrap justify-center items-center gap-2 lg:gap-2">
          {["FB", "IG", "IN", "BE"].map((social, index) => (
            <a
              key={index}
              href="/"
              className="footer-pill border-[1.5px] border-white rounded-full px-4 lg:px-6 py-1 lg:py-2 leading-tight text-3xl lg:text-5xl font-[font1] uppercase hover:bg-[#D3FD50] hover:text-black hover:border-[#D3FD50] transition-colors duration-300"
            >
              {social}
            </a>
          ))}
        </div>

        {/* Contact Pill */}
        <Link
          to="/contact"
          className="footer-pill border-[1.5px] border-white rounded-full px-6 lg:px-10 py-1 lg:py-2 leading-tight text-4xl lg:text-6xl font-[font1] uppercase flex items-center justify-center gap-2 lg:gap-4 hover:bg-white hover:text-black transition-colors duration-300 group"
        >
          CONTACT <span className="text-[0.7em] -mt-1 lg:-mt-2">♥</span>
        </Link>
      </div>

      {/* MIDDLE SECTION: LOGO */}
      <div className="flex justify-center flex-1 items-center w-full my-8 lg:my-0 lg:-translate-y-4">
        <div className="footer-logo w-48 h-48 lg:w-64 lg:h-64 rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(255,255,255,0.05)] hover:shadow-[0_0_50px_rgba(211,253,80,0.5)] transition-shadow duration-500 cursor-pointer flex justify-center items-center">
          <img
            src={logo}
            alt="Logo"
            className="w-full h-full object-cover rounded-3xl hover:scale-110 transition-transform duration-500"
          />
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="flex flex-col gap-6 lg:flex-row justify-between items-center w-full lg:gap-0 mt-auto font-[font1] text-[10px] lg:text-sm text-gray-200 uppercase tracking-wider">
        {/* Location & Time */}
        <div className="footer-bottom-element flex items-center justify-center lg:justify-start gap-1 w-full lg:w-1/3">
          <svg
            className="w-5 h-5 lg:w-6 lg:h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span className="whitespace-nowrap lg:ml-1 font-[font2] tracking-widest text-[#f0f0f0]">
            INDIA_{time}
          </span>
        </div>

        {/* Links */}
        <div className="footer-bottom-element flex flex-wrap justify-center items-center gap-4 lg:gap-6 w-full lg:w-1/3 text-center">
          <a href="#" className="hover:text-white transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Privacy Notice
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Ethical Report
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Consent Options
          </a>
        </div>

        {/* Back To Top */}
        <div className="footer-bottom-element flex justify-center lg:justify-end w-full lg:w-1/3">
          <button
            onClick={scrollToTop}
            className="hover:text-white font-[font2] tracking-widest transition-colors whitespace-nowrap"
          >
            BACK TO TOP
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
