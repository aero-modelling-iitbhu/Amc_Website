import React from 'react'
import compimage from '/Users/sarvesh/Documents/Amc_Website/Frontend/src/assets/Competetions/WinterCAmp.png'
import { Link } from 'react-router-dom'
import ExploreCard from './ExploreCard'
const Wintercamp = () => {
  return (
      <div className='bg-black fixed h-screen w-full '>
            <ExploreCard image={compimage} name="WinterCamp" registerlink="register/winter" whatsapp="" ps="" pastwinner=""

                des="Winter Camp is a hands-on learning program held in December, designed to build strong foundations in drone and robotics systems.
Participants learn core flight controls, PID tuning, and component selection to understand how hardware and control logic work together.
The camp also introduces OpenCV-based computer vision, enabling basic perception and basic automation tasks.
Through practical sessions and guided projects, it bridges theory with real-world implementation and experimentation."

            ></ExploreCard>
    </div>
  )
}

export default Wintercamp
