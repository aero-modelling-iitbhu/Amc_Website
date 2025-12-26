import React from 'react'
import bgvid from '/Users/sarvesh/Documents/Amc_Website/Frontend/src/assets/Competetions/compvid.mp4'
import Card from '/Users/sarvesh/Documents/Amc_Website/Frontend/src/components/ResourcesComp/CompCard/Card.jsx'
import { Competetion } from '../assets/Competetions/Comp'
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
          <div className='h-[20vw]  w-[40vw] absolute top-[5vw] left-[32vw]'>
            <h1 className="glow-text text-6xl md:text-7xl font-black text-blue-300 vt323-regular uppercase tracking-tighter mb-32 text-center drop-shadow-[0_0_30px_rgba(255,255,255,0.8)]">
              Ready to Fly!!!
            </h1>
          </div>
        </div>
        <div className='relative z-20 flex gap-50 pt-[13vw]  pr-[5vw] pl-[12vw]'>
            <Card
            name={Competetion[0].name}
            des={Competetion[0].description}
            image={Competetion[0].img}
            explore={Competetion[0].ExploreLink}
            register={Competetion[0].RegisterLink}
          />
          <Card
            name={Competetion[1].name}
            des={Competetion[1].description}
            image={Competetion[1].img}
            explore={Competetion[1].ExploreLink}
            register={Competetion[1].RegisterLink}
          />
          <Card
            name={Competetion[2].name}
            des={Competetion[2].description}
            image={Competetion[2].img}
            explore={Competetion[2].ExploreLink}
            register={Competetion[2].RegisterLink}
          />
        </div>
        <div className='pl-[41vw] pt-[3vw]'>
          <Card  name={Competetion[3].name}
            des={Competetion[3].description}
            image={Competetion[3].img}
            explore={Competetion[3].ExploreLink}
            register={Competetion[3].RegisterLink}></Card>
        </div>
      </div>
    </div>
  )
}

export default Competetions