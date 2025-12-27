import React from 'react'
import bgVid from '/Users/sarvesh/Documents/Amc_Website/Frontend/src/assets/Competetions/e.mp4'
import leftmain from '/Users/sarvesh/Documents/Amc_Website/Frontend/src/assets/Competetions/leftmain.svg'
import rightmain from '/Users/sarvesh/Documents/Amc_Website/Frontend/src/assets/Competetions/rightmain.svg'
import { Link } from 'react-router-dom'
const ExploreCard = (props) => {
  return (
          <div className='bg-black fixed h-screen w-full '>
              <video src={bgVid} className='h-full w-full top-0 left-0 blur-sm absolute z-0' autoPlay muted loop></video>
              <div>
                  <div className=' top-[10vw] left-[15vw] h-[20vw] w-[20vw] absolute '>
                      <img
                          src={props.image}
                          className="h-full w-full rounded-3xl
               border border-purple-400/30
               shadow-[0_0_6px_1px_rgba(168,85,247,0.15)]"
                      />
                      <div className=' h-[10vw] w-full mt-5'>
                          <a href={props.whatsapp} className='absolute h-[2.5vw] w-[12vw] left-[3.9vw] vt323-regular text-white bg-black border-pink-600 border-2 rounded-2xl text-2xl pl-12 hover:bg-white hover:text-black transtion-all duration-500'>
                              WhatsApp
                          </a>
                          <a href={props.ps} className='absolute h-[2.5vw] w-[12vw] left-[3.9vw] mt-13 vt323-regular text-white bg-black border-purple-600 border-2 rounded-2xl text-2xl pl-18 hover:bg-white hover:text-black transtion-all duration-500'>
                              PS
                          </a>
                          <a href={props.pastwinner} className='absolute h-[2.5vw] w-[12vw] left-[3.9vw] mt-26 vt323-regular text-white bg-black border-green-600 border-2 rounded-2xl text-2xl pl-8 hover:bg-white hover:text-black transtion-all duration-500'>
                              Past Winners
                          </a>
                      </div>
                  </div>
                  <div className=' top-[14vw] left-[45vw] h-[20vw] w-[40vw] absolute'>
                      <div className='vt323-regular text-5xl text-white top-0 relative h-[5vw] w-full '>
                          {props.name}
                      </div>
                      <div className='w-full h-full flex justify-between '>
                          <img src={leftmain} className='h-[23vw] left-0'></img>
                          <div className='text-white vt323-regular text-[1.45vw] '>
                                {props.des}
                          </div>
                          <img src={rightmain} className='h-[23vw] right-0'></img>
                      </div>
                      <div className=' w-full bottom-0 h-[4vw] flex justify-center'>
                          <Link to={props.registerlink} className='h-[4vw] w-[10vw] bg-black border-purple-800 border-2  text-white text-3xl pl-6 pt-2 mt-16 rounded-3xl vt323-regular hover:bg-white hover:text-green-900 transition-all duration-400   '>Register</Link>
                      </div>
                  </div>
              </div>
  
          </div>
      )
}

export default ExploreCard
