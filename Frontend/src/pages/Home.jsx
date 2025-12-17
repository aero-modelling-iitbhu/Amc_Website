import React, { useRef } from "react";
import logo from '/Users/sarvesh/Documents/Amc_Website/Frontend/src/assets/Logo.png';
import bgimage from '/Users/sarvesh/Documents/Amc_Website/Frontend/src/assets/image6.png'
import shadow from '/Users/sarvesh/Documents/Amc_Website/Frontend/src/assets/Shadow.png'
import ufo from '/Users/sarvesh/Documents/Amc_Website/Frontend/src/assets/Ufo.png'
import slogan from '/Users/sarvesh/Documents/Amc_Website/Frontend/src/assets/Slogan.png'
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { MotionPathPlugin } from "gsap/all";

gsap.registerPlugin(MotionPathPlugin)
const NeonHelipad = () => {
  const planeRef = useRef(null);
  const shadowContainerRef = useRef(null);
  const ufoRef = useRef(null);
  const sloganref = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(planeRef.current, {
      y: -250,
      duration: 3,
      ease: "power2.inOut",
      delay: 2
    });
    tl.to(planeRef.current, {
      y: "-=30",
      yoyo: true,
      repeat: -1,
      duration: 1.5,
      ease: "sine.inOut"
    });
    gsap.to(shadowContainerRef.current, {
      xPercent: -50,
      duration: 5,
      repeat: -1,
      ease: "none",
    });
    gsap.to(ufoRef.current, {
      duration: 15,
      ease: "power1.inOut",
      repeat: -1,
      motionPath: {
        path: "M -200 0 C 300 100 800 -200 1800 -500",

        autoRotate: true,
        alignOrigin: [0.5, 0.5],
      }
    })
    const sl = gsap.timeline()
    sl.to(sloganref.current, {
      x: 430,
      duration: 5,
      delay: 1
    })
    sl.to(sloganref.current, {
      y: -250,
      duration: 3
    })
    sl.to(sloganref.current, {
      y: '-=15',
      yoyo: true,
      repeat: -1,
      duration: 1,
      ease: "sine.inOut"
    })
  });

  return (
    <div className="relative w-full h-screen bg-[#05000a] overflow-hidden flex flex-col items-center justify-end">
      <img src={bgimage} className="h-full w-full top-0 left-0 absolute blur-[2px]" alt="Background"></img>
      
      <div>
        <img src={ufo} ref={ufoRef} className="top-100 h-[4vw] left-0 w-[4vw] absolute"></img>
      </div>
      <div className="absolute top-90 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div ref={shadowContainerRef} className="flex w-[200%] h-full">
          <img
            src={shadow}
            className="w-1/2 h-full object-cover opacity-90"
            alt="Shadow Fog 1"
          />
          <img
            src={shadow}
            className="w-1/2 h-full object-cover opacity-90"
            alt="Shadow Fog 2"
          />
        </div>
      </div>

      <div>
        <img src={slogan} ref={sloganref} className="top-150 left-0 h-[40vw] w-[40vw] absolute"></img>
      </div>
      <div>
        <img src={logo} className="h-[12vw] w-[30vw] top-60 left-130 absolute" alt="Main Logo"></img>
      </div>

    </div>
  );
};

export default NeonHelipad;