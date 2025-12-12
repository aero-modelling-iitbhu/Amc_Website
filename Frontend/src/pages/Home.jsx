import React from 'react'
import image from '/Users/sarvesh/Documents/Amc_Website/Frontend/src/assets/Bgmain2.png' 
import bottomimage from '/Users/sarvesh/Documents/Amc_Website/Frontend/src/assets/BgBottom.png'
import Sky from '/Users/sarvesh/Documents/Amc_Website/Frontend/src/assets/Sky.jpg'
import { useRef } from 'react';
import gsap from 'gsap';
import {useGSAP} from '@gsap/react'
const Home = () => {
  const containerRef = useRef(null);
  const bottomRef = useRef(null);

  useGSAP(() => {
    if (containerRef.current) {
        gsap.fromTo(containerRef.current, 
        { xPercent: -50 }, 
        { 
            xPercent: 0, 
            duration: 30,
            ease: "none", 
            repeat: -1 
        }
        );
    }
    if (bottomRef.current) {
        gsap.fromTo(bottomRef.current, 
        { xPercent: -50 }, 
        {
            xPercent: 0, 
            duration: 10,
            ease: "none", 
            repeat: -1 
        }
        );
    }
  });
  return (
    <div className='relative h-screen w-screen overflow-hidden'>
        <div className='absolute top-0 left-0 h-full w-full z-0'>
            <img src={Sky} className='h-[30vw] w-full object-cover'></img>
        </div>
      <div className='absolute h-screen w-full overflow-hidden'>
        <div ref={containerRef} className='flex h-full w-[200%] absolute top-0 left-0'>
        <img src={image} className='h-full w-1/2 object-cover' alt="Background" />
        <img src={image} className='h-full w-1/2 object-cover' alt="Background" />
      </div>
      <div ref={bottomRef} className='flex h-full w-[200%] absolute top-24 left-0 z-10 pointer-events-none'>
        <img src={bottomimage} className='h-full w-1/2 object-cover' alt="Foreground" />
        <img src={bottomimage} className='h-full w-1/2 object-cover' alt="Foreground" />
      </div>
      </div>

    </div>
  )
}

export default Home