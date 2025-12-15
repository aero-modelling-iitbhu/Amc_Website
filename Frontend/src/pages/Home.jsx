import React, { useRef } from "react";
import logo from '/Users/sarvesh/Documents/Amc_Website/Frontend/src/assets/Logo.png';
import logoTop from '/Users/sarvesh/Documents/Amc_Website/Frontend/src/assets/Logo Top.png'
import aircraft from '/Users/sarvesh/Documents/Amc_Website/Frontend/src/assets/Aircraft3.png'
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
const NeonHelipad = () => {
  const planeRef=useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".guide-light",{
      backgroundColor: "#008000",
      duration:0.5,
    })
    tl.to(planeRef.current, {
      y: -250,            
      duration: 3,       
      ease: "power2.inOut", 
      delay: 2       
    });
    tl.to(".guide-light",{
      backgroundColor: "#F22900",
      duration:1,
    })
    tl.to(planeRef.current, {
      y: "-=30",          
      yoyo: true,         
      repeat: -1,         
      duration: 1.5,     
      ease: "sine.inOut" 
    });
  });


  return (
    <div className="relative w-full h-screen bg-[#05000a] overflow-hidden flex flex-col items-center justify-end">
       <div className="top-0 absolute left-0 h-full w-full bg-linear-to-b from-[#1a0b2e] to-[#000000]"></div>

       <div>
        <div className="top-0 left-2 absolute h-[10vw] w-[10vw]">
          <img className="h-[8vw] w-[8vw]" src={logoTop}></img>
        </div>
        <div>

        </div>

       </div>

       <div>
        <img src={logo} className="h-[12vw] w-[30vw] top-50 left-130 absolute"></img>
        </div>
        

      <div className="absolute bottom-[-10%] w-full h-[50vh] flex justify-center items-center perspective-container">
        <div className="relative w-[300px] h-[300px] bg-[#111] border-[1px] border-white/10 rounded-full shadow-2xl helipad-tilt flex justify-center items-center">
          <div className="absolute inset-[20px] border-[8px] border-[#ff00ff] rounded-full shadow-[0_0_50px_#ff00ff] opacity-80"></div>
          <div className="absolute inset-[10px] border-[2px] border-dashed border-[#ff00ff]/30 rounded-full animate-spin-slow"></div>
          <h1 className="text-[150px] font-black text-transparent bg-clip-text bg-linear-to-b from-[#ff00ff] to-[#aa00aa] drop-shadow-[0_0_30px_#ff00ff] select-none" style={{ fontFamily: 'Arial, sans-serif' }}>
            H</h1>
          <div className="guide-light absolute top-10 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rounded-full shadow-[0_0_20px_white] animate-pulse"></div>
          <div className="guide-light absolute bottom-10 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rounded-full shadow-[0_0_20px_white] animate-pulse"></div>
        </div>
      </div>
      <div  ref={planeRef} className="absolute bottom-[0%] left-1/2 -translate-x-1/2 z-20 pointer-events-none">
          <img src={aircraft} className="h-[15vw] w-[22vw] object-contain" alt="aircraft" />
        </div>

    </div>
  );
};

export default NeonHelipad;