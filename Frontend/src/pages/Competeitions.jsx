import React from 'react'
import bgvid from '/Users/sarvesh/Documents/Amc_Website/Frontend/src/assets/Competetions/compvid.mp4'
import mainCard from '/Users/sarvesh/Documents/Amc_Website/Frontend/src/assets/Competetions/cardCoponent/MainCard.svg'
import bottomleft from '/Users/sarvesh/Documents/Amc_Website/Frontend/src/assets/Competetions/cardCoponent/BottomLeft.png'
import bottomright from '/Users/sarvesh/Documents/Amc_Website/Frontend/src/assets/Competetions/cardCoponent/bottomright.png'
const Competetions = () => {
  return (
    <div>
      <div className='h-screen w-full relative bg-black'>
        <div>
          <video 
            src={bgvid} 
            autoPlay 
            loop 
            muted 
            playsInline
            className="fixed top-0 left-0 w-full h-full object-cover"
          ></video>
          <div className='h-[20vw]  w-[40vw] absolute top-[7vw] left-[32vw]'>
             <h1 className="glow-text text-6xl md:text-7xl font-black text-blue-300 vt323-regular uppercase tracking-tighter mb-32 text-center drop-shadow-[0_0_30px_rgba(255,255,255,0.8)]">
                    Ready to Fly!!!
                </h1>
          </div>
        </div>
        <div className='h-[20vw] w-[15vw] absolute top-[18vw] left-[17vw] group '>
          <div className='h-full w-full relative'>
            <div className='relative z-10'>
              <img src={mainCard} className='w-full h-full' alt="main" />
            </div>
            <div className=' h-[2vw] w-[2wv] top-0 left-[4vw] absolute z-20 text-white vt323-regular text-3xl'>
              AeroAcrade
            </div>
            <div className='bg-red-500 h-[13vw] w-[11.3vw] top-10 left-7 absolute z-20'>
              
            </div>
            <div className='h-full w-full absolute bottom-[0.5vw] group-hover:-left-[0.1vw] left-[1vw] z-0 transition-all duration-400'>
              <img src={bottomleft} className='h-full w-full' alt="decoration" />
            </div>
            <div className='h-full w-full absolute bottom-[0.5vw] -left-[1vw] z-0 group-hover:left-[0.1vw] transition-all duration-400'>
              <img src={bottomright} className='h-full w-full' alt="decoration" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Competetions