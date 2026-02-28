import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { NavbarContext } from "../../context/NavContext";
import logo from "../../assets/images/logo.png";

const FullScreenNav = () => {
  const fullNavLinksRef = useRef(null);
  const fullScreenRef = useRef(null);

  const [navOpen, setNavOpen] = useContext(NavbarContext);

  function handleNavClick() {
    setNavOpen(false);
  }

  function gsapAnimation() {
    const tl = gsap.timeline();
    tl.to(".fullscreennav", {
      display: "block",
    });
    tl.to(".stairing", {
      delay: 0.2,
      height: "100%",
      stagger: {
        amount: -0.3,
      },
    });
    tl.to(".link", {
      opacity: 1,
      rotateX: 0,
      stagger: {
        amount: 0.3,
      },
    });
    tl.to(".navlink", {
      opacity: 1,
    });
  }
  function gsapAnimationReverse() {
    const tl = gsap.timeline();
    tl.to(".link", {
      opacity: 0,
      rotateX: 90,
      stagger: {
        amount: 0.1,
      },
    });
    tl.to(".stairing", {
      height: 0,
      stagger: {
        amount: 0.1,
      },
    });
    tl.to(".navlink", {
      opacity: 0,
    });
    tl.to(".fullscreennav", {
      display: "none",
    });
  }

  useGSAP(
    function () {
      if (navOpen) {
        gsapAnimation();
      } else {
        gsapAnimationReverse();
      }
    },
    [navOpen],
  );

  return (
    <div
      ref={fullScreenRef}
      id="fullscreennav"
      className="fullscreennav hidden text-white overflow-hidden h-screen w-full z-50 absolute"
    >
      <div className="h-screen w-full fixed">
        <div className="h-full w-full flex">
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
        </div>
      </div>
      <div ref={fullNavLinksRef} className="relative h-screen flex flex-col">
        <div className="navlink flex w-full justify-between lg:p-5 p-2 items-start">
          <div className="">
            <div className="flex items-center gap-2 lg:gap-3">
              <img
                src={logo}
                alt="Rishav Logo"
                className="w-10 h-10 lg:w-12 lg:h-12 object-contain rounded-full border border-white/20 shadow-md"
              />
              <h1 className="text-3xl lg:text-4xl font-[font2] uppercase tracking-tighter text-white">
                Rishav
              </h1>
            </div>
          </div>
          <div
            onClick={() => {
              setNavOpen(false);
            }}
            className="lg:h-32 h-20 w-20 lg:w-32 relative cursor-pointer"
          >
            <div className="lg:h-44 h-28 lg:w-1 w-0.5 -rotate-45 origin-top absolute bg-[#D3FD50]"></div>
            <div className="lg:h-44 h-28 lg:w-1 w-0.5 right-0 rotate-45 origin-top absolute bg-[#D3FD50]"></div>
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-center">
          <Link
            to="/"
            onClick={handleNavClick}
            className="link origin-top relative border-t-1 border-white block cursor-pointer"
          >
            <h1 className="font-[font2] text-4xl lg:text-[6vw] text-center lg:leading-[0.8] lg:pt-6 pt-3 uppercase">
              Home
            </h1>
            <div className="moveLink absolute text-black flex top-0 bg-[#D3FD50]">
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[font2] lg:text-[6vw] text-4xl text-center lg:leading-[0.8] lg:pt-6 pt-3 uppercase">
                  BACK TO HOME
                </h2>
                <img
                  className="lg:h-28 h-12 rounded-full shrink-0 lg:w-72 w-28 object-cover"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] lg:text-[6vw] text-4xl text-center lg:leading-[0.8] lg:pt-6 pt-3 uppercase">
                  BACK TO HOME
                </h2>
                <img
                  className="lg:h-28 h-12 rounded-full shrink-0 lg:w-72 w-28 object-cover"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt=""
                />
              </div>
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[font2] lg:text-[6vw] text-4xl text-center lg:leading-[0.8] lg:pt-6 pt-3 uppercase">
                  BACK TO HOME
                </h2>
                <img
                  className="lg:h-28 h-12 rounded-full shrink-0 lg:w-72 w-28 object-cover"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] lg:text-[6vw] text-4xl text-center lg:leading-[0.8] lg:pt-6 pt-3 uppercase">
                  BACK TO HOME
                </h2>
                <img
                  className="lg:h-28 h-12 rounded-full shrink-0 lg:w-72 w-28 object-cover"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt=""
                />
              </div>
            </div>
          </Link>
          <Link
            to="/projects"
            onClick={handleNavClick}
            className="link origin-top relative border-t-1 border-white block cursor-pointer"
          >
            <h1 className="font-[font2] text-4xl lg:text-[6vw] text-center lg:leading-[0.8] lg:pt-6 pt-3 uppercase">
              Projects
            </h1>
            <div className="moveLink absolute text-black flex top-0 bg-[#D3FD50]">
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[font2] lg:text-[6vw] text-4xl text-center lg:leading-[0.8] lg:pt-6 pt-3 uppercase">
                  SEE EVERYTHING
                </h2>
                <img
                  className="lg:h-28 h-12 rounded-full shrink-0 lg:w-72 w-28 object-cover"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] lg:text-[6vw] text-4xl text-center lg:leading-[0.8] lg:pt-6 pt-3 uppercase">
                  SEE EVERYTHING
                </h2>
                <img
                  className="lg:h-28 h-12 rounded-full shrink-0 lg:w-72 w-28 object-cover"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt=""
                />
              </div>
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[font2] lg:text-[6vw] text-4xl text-center lg:leading-[0.8] lg:pt-6 pt-3 uppercase">
                  SEE EVERYTHING
                </h2>
                <img
                  className="lg:h-28 h-12 rounded-full shrink-0 lg:w-72 w-28 object-cover"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] lg:text-[6vw] text-4xl text-center lg:leading-[0.8] lg:pt-6 pt-3 uppercase">
                  SEE EVERYTHING
                </h2>
                <img
                  className="lg:h-28 h-12 rounded-full shrink-0 lg:w-72 w-28 object-cover"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt=""
                />
              </div>
            </div>
          </Link>
          <Link
            to="/agency"
            onClick={handleNavClick}
            className="link origin-top relative border-t-1 border-white block cursor-pointer"
          >
            <h1 className="font-[font2] text-4xl lg:text-[6vw] text-center lg:leading-[0.8] lg:pt-6 pt-3 uppercase">
              Journey
            </h1>
            <div className="moveLink absolute text-black flex top-0 bg-[#D3FD50]">
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[font2] lg:text-[6vw] text-4xl text-center lg:leading-[0.8] lg:pt-6 pt-3 uppercase">
                  TO KNOW EVERYTHING
                </h2>
                <img
                  className="lg:h-28 h-12 rounded-full shrink-0 lg:w-72 w-28 object-cover"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] lg:text-[6vw] text-4xl text-center lg:leading-[0.8] lg:pt-6 pt-3 uppercase">
                  TO KNOW EVERYTHING
                </h2>
                <img
                  className="lg:h-28 h-12 rounded-full shrink-0 lg:w-72 w-28 object-cover"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt=""
                />
              </div>
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[font2] lg:text-[6vw] text-4xl text-center lg:leading-[0.8] lg:pt-6 pt-3 uppercase">
                  TO KNOW EVERYTHING
                </h2>
                <img
                  className="lg:h-28 h-12 rounded-full shrink-0 lg:w-72 w-28 object-cover"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] lg:text-[6vw] text-4xl text-center lg:leading-[0.8] lg:pt-6 pt-3 uppercase">
                  TO KNOW EVERYTHING
                </h2>
                <img
                  className="lg:h-28 h-12 rounded-full shrink-0 lg:w-72 w-28 object-cover"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt=""
                />
              </div>
            </div>
          </Link>
          <Link
            to="/contact"
            onClick={handleNavClick}
            className="link origin-top relative border-t-1 border-white block cursor-pointer"
          >
            <h1 className="font-[font2] text-4xl lg:text-[6vw] text-center lg:leading-[0.8] lg:pt-6 pt-3 uppercase">
              CONTACT
            </h1>
            <div className="moveLink absolute text-black flex top-0 bg-[#D3FD50]">
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[font2] lg:text-[6vw] text-4xl text-center lg:leading-[0.8] lg:pt-6 pt-3 uppercase">
                  LETS CONNECT
                </h2>
                <img
                  className="lg:h-28 h-12 rounded-full shrink-0 lg:w-72 w-28 object-cover"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] lg:text-[6vw] text-4xl text-center lg:leading-[0.8] lg:pt-6 pt-3 uppercase">
                  LETS CONNECT
                </h2>
                <img
                  className="lg:h-28 h-12 rounded-full shrink-0 lg:w-72 w-28 object-cover"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt=""
                />
              </div>
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[font2] lg:text-[6vw] text-4xl text-center lg:leading-[0.8] lg:pt-6 pt-3 uppercase">
                  LETS CONNECT
                </h2>
                <img
                  className="lg:h-28 h-12 rounded-full shrink-0 lg:w-72 w-28 object-cover"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] lg:text-[6vw] text-4xl text-center lg:leading-[0.8] lg:pt-6 pt-3 uppercase">
                  LETS CONNECT
                </h2>
                <img
                  className="lg:h-28 h-12 rounded-full shrink-0 lg:w-72 w-28 object-cover"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt=""
                />
              </div>
            </div>
          </Link>
          <Link
            to="/"
            onClick={handleNavClick}
            className="link origin-top relative border-y-1 border-white block cursor-pointer"
          >
            <h1 className="font-[font2] text-4xl lg:text-[6vw] text-center lg:leading-[0.8] lg:pt-6 pt-3 uppercase">
              Blogs
            </h1>
            <div className="moveLink absolute text-black flex top-0 bg-[#D3FD50]">
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[font2] lg:text-[6vw] text-4xl text-center lg:leading-[0.8] lg:pt-6 pt-3 uppercase">
                  READ THE ARTICLES
                </h2>
                <img
                  className="lg:h-28 h-12 rounded-full shrink-0 lg:w-72 w-28 object-cover"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] lg:text-[6vw] text-4xl text-center lg:leading-[0.8] lg:pt-6 pt-3 uppercase">
                  READ THE ARTICLES
                </h2>
                <img
                  className="lg:h-28 h-12 rounded-full shrink-0 lg:w-72 w-28 object-cover"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt=""
                />
              </div>
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[font2] lg:text-[6vw] text-4xl text-center lg:leading-[0.8] lg:pt-6 pt-3 uppercase">
                  READ THE ARTICLES
                </h2>
                <img
                  className="lg:h-28 h-12 rounded-full shrink-0 lg:w-72 w-28 object-cover"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] lg:text-[6vw] text-4xl text-center lg:leading-[0.8] lg:pt-6 pt-3 uppercase">
                  READ THE ARTICLES
                </h2>
                <img
                  className="lg:h-28 h-12 rounded-full shrink-0 lg:w-72 w-28 object-cover"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt=""
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FullScreenNav;
