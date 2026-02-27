import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const Contact = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ delay: 1.4 });

    tl.from(".contact-heading span", {
      y: 120,
      rotateX: 90,
      duration: 1,
      stagger: 0.08,
      ease: "power4.out",
    })
      .from(
        ".contact-subtext",
        {
          y: 40,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.4",
      )
      .from(
        ".contact-row",
        {
          y: 30,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
        },
        "-=0.3",
      )
      .from(
        ".contact-social",
        {
          y: 30,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
        },
        "-=0.2",
      )
      .from(
        ".contact-cta",
        {
          scale: 0.8,
          duration: 0.8,
          ease: "elastic.out(1, 0.5)",
        },
        "-=0.3",
      );
  }, []);

  const skills = [
    { role: "Frontend Development", detail: "React.js Specialist" },
    { role: "Mobile Development", detail: "Flutter App Builder" },
    { role: "UI Engineering", detail: "Responsive Web Expert" },
    { role: "Animation & Interaction", detail: "GSAP Enthusiast" },
    { role: "API Integration", detail: "REST & Firebase" },
    { role: "Performance", detail: "Clean Code Advocate" },
  ];

  const socials = [
    { name: "GitHub", url: "https://github.com/rishav-rocks" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/rishavkarmakar/" },
    { name: "Instagram", url: "https://www.instagram.com/rocksrishav/" },
  ];

  return (
    <div
      ref={containerRef}
      className="bg-black text-white min-h-screen flex flex-col"
    >
      {/* Hero Heading */}
      <div className="pt-40 lg:pt-52 px-6 lg:px-16">
        <h1 className="contact-heading font-[font2] text-6xl lg:text-[10vw] uppercase leading-[0.9] tracking-tighter overflow-hidden">
          <span className="inline-block">L</span>
          <span className="inline-block">e</span>
          <span className="inline-block">t</span>
          <span className="inline-block">'</span>
          <span className="inline-block">s</span>
          <span className="inline-block">&nbsp;</span>
          <span className="inline-block">C</span>
          <span className="inline-block">o</span>
          <span className="inline-block">n</span>
          <span className="inline-block">n</span>
          <span className="inline-block">e</span>
          <span className="inline-block">c</span>
          <span className="inline-block">t</span>
        </h1>
        <p className="contact-subtext font-[font1] text-gray-400 lg:text-xl text-sm mt-6 lg:mt-10 lg:w-1/2">
          I'm always open to new opportunities, collaborations, and exciting
          projects. Got an idea? Let's turn it into reality.
        </p>
      </div>

      {/* Skills / What I Do */}
      <div className="mt-16 lg:mt-28 px-6 lg:px-16">
        <div className="border-t border-gray-800">
          {skills.map((item, index) => (
            <div
              key={index}
              className="contact-row group flex flex-col sm:flex-row sm:items-center sm:justify-between py-4 lg:py-6 border-b border-gray-800 cursor-pointer transition-all duration-300 hover:px-2 gap-1 sm:gap-0"
            >
              <span className="font-[font1] text-[10px] sm:text-xs lg:text-sm text-gray-500 uppercase tracking-widest">
                {item.role}
              </span>
              <span className="font-[font2] text-base sm:text-lg lg:text-3xl uppercase tracking-tight group-hover:text-[#D3FD50] transition-colors duration-300">
                {item.detail}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Social + CTA */}
      <div className="mt-16 lg:mt-28 px-6 lg:px-16 pb-16 lg:pb-28">
        {/* Socials */}
        <div className="flex flex-wrap gap-3 mb-12 lg:mb-20">
          {socials.map((item, index) => (
            <a
              key={index}
              href={item.url}
              className="contact-social border border-gray-700 rounded-full px-5 py-2 lg:px-8 lg:py-3 font-[font2] text-sm lg:text-xl uppercase tracking-tight hover:bg-[#D3FD50] hover:text-black hover:border-[#D3FD50] transition-all duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col-reverse sm:flex-row items-start sm:items-end justify-between gap-8">
          <div className="font-[font1] text-gray-500 text-xs lg:text-sm">
            <p>Available for freelance</p>
            <p className="mt-1">Based in India — Working Worldwide</p>
          </div>

          <a href="mailto:[rishavrocks87@gmail.com]" className="contact-cta group">
            <div className="border-2 border-white rounded-full px-6 py-3 sm:px-8 sm:py-4 lg:px-16 lg:py-6 transition-all duration-500 group-hover:bg-[#D3FD50] group-hover:border-[#D3FD50] group-hover:scale-105">
              <span className="font-[font2] text-2xl sm:text-3xl lg:text-6xl uppercase tracking-tighter group-hover:text-black transition-colors duration-300">
                Hire Me ✦
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
