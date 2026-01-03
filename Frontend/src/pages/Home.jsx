import React, { useRef } from "react";
import logo from '../assets/Logo.png';
import bgimage from '../assets/image6.png'
import shadow from '../assets/Shadow.png'
import ufo from '../assets/Ufo.png'
import slogan from '../assets/Slogan.png'
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
      y: 350,
      duration: 5
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
        <img src={ufo} ref={ufoRef} className="absolute left-0 top-70 w-12 h-auto md:top-[30vw] md:w-[4vw]"></img>
      </div>
      <div className="absolute top-60 md:top-90 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div ref={shadowContainerRef} className="flex w-[200%] h-full">
          <img src={shadow} className="w-1/2 h-full object-cover opacity-90"/>
          <img src={shadow} className="w-1/2 h-full object-cover opacity-90"/>
        </div>
      </div>
      <div>
        <img src={slogan} ref={sloganref} className="absolute -top-10 w-[80vw] h-auto left-0 right-0 mx-auto md:top-0 md:mx-0 md:left-[30vw] md:right-auto md:h-[40vw] md:w-[40vw]"/>
      </div>
      <div>
        <img src={logo} className="absolute top-60 left-1/2 -translate-x-1/2 h-24 w-auto sm:h-32 md:h-[12vw] md:w-[28vw]"/>
      </div>

    </div>
  );
};

export default NeonHelipad;