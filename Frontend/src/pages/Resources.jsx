import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import { gsap } from 'gsap'
import {useNavigate} from 'react-router-dom'
import rosimage from '/Users/sarvesh/Documents/Amc_Website/Frontend/src/assets/ResourcesImages/Ros/image.png'
import gazeboimg from '/Users/sarvesh/Documents/Amc_Website/Frontend/src/assets/ResourcesImages/Ros/gazebo.png'
import px4img from '/Users/sarvesh/Documents/Amc_Website/Frontend/src/assets/ResourcesImages/Px4/Px4img.png'
import drone from '/Users/sarvesh/Documents/Amc_Website/Frontend/src/assets/ResourcesImages/Px4/drone.png'
import cube from '/Users/sarvesh/Documents/Amc_Website/Frontend/src/assets/ResourcesImages/Ardupilot/cube.png'
import motor from '/Users/sarvesh/Documents/Amc_Website/Frontend/src/assets/ResourcesImages/Components/Motor.png'
import esc from '/Users/sarvesh/Documents/Amc_Website/Frontend/src/assets/ResourcesImages/Components/Flight.png'

const Resources = () => {
    const navigate=useNavigate();

    return (
        <div className='bg-black absolute h-screen w-full'>
            <div className='mt-40 vt323-regular'>
                <div className='border-y origin-top group border-white relative overflow-hidden h-[10vw]' onClick={()=>{navigate('/resources/ros')}}>
                    <h1 className='text-[8vw] text-center leading-none uppercase text-white'>Ros2</h1>

                    <div className='absolute opacity-0 group-hover:opacity-100 flex flex-nowrap w-full left-0 top-0 h-full items-center pointer-events-none'>

                        <div className='flex min-w-full movex items-center justify-around bg-linear-to-b to-purple-900 from-pink-900 shrink-0 gap-4'>
                            <h2 className='whitespace-nowrap text-black text-[8vw] uppercase shrink-0'>perceive all</h2>
                            <img className='h-[7vw] w-[15vw] object-cover shrink-0 rounded-full' src={rosimage} alt="ros" />

                            <h2 className='whitespace-nowrap text-black text-[8vw] uppercase shrink-0'>perceive all</h2>
                            <img className='h-[7vw] w-[15vw] object-cover shrink-0 rounded-full' src={rosimage} alt="gazebo" />
                        </div>
                        <div className='flex min-w-full movex items-center justify-around bg-linear-to-b to-purple-900 from-pink-900 shrink-0 gap-4'>
                            <h2 className='whitespace-nowrap text-black text-[8vw] uppercase shrink-0'>perceive all</h2>
                            <img className='h-[7vw] w-[15vw] object-cover shrink-0 rounded-full' src={rosimage} alt="ros" />

                            <h2 className='whitespace-nowrap text-black text-[8vw] uppercase shrink-0'>perceive all</h2>
                            <img className='h-[7vw] w-[15vw] object-cover shrink-0 rounded-full' src={rosimage} alt="gazebo" />
                        </div>

                    </div>
                </div>

                <div className='border-y origin-top group border-white relative overflow-hidden h-[10vw]' onClick={()=>{navigate('/resources/px4')}}>
                    <h1 className='text-[8vw] text-center leading-none uppercase text-white'>PX4</h1>

                    <div className='absolute opacity-0 group-hover:opacity-100 flex flex-nowrap w-full left-0 top-0 h-full items-center pointer-events-none'>

                        <div className='flex min-w-full movex items-center justify-around bg-linear-to-b to-purple-900 from-pink-900 shrink-0 gap-4'>
                            <h2 className='whitespace-nowrap text-black text-[8vw] uppercase shrink-0'>Observe all</h2>
                            <img className='h-[7vw] w-[15vw] object-cover shrink-0 rounded-full' src={px4img} alt="ros" />

                            <h2 className='whitespace-nowrap text-black text-[8vw] uppercase shrink-0'>observe all</h2>
                            <img className='h-[7vw] w-[15vw] object-cover shrink-0 rounded-full' src={drone} alt="gazebo" />
                        </div>
                        <div className='flex min-w-full movex items-center justify-around bg-linear-to-b to-purple-900 from-pink-900 shrink-0 gap-4'>
                            <h2 className='whitespace-nowrap text-black text-[8vw] uppercase shrink-0'>observe all</h2>
                            <img className='h-[7vw] w-[15vw] object-cover shrink-0 rounded-full' src={px4img} alt="ros" />

                            <h2 className='whitespace-nowrap text-black text-[8vw] uppercase shrink-0'>observe all</h2>
                            <img className='h-[7vw] w-[15vw] object-cover shrink-0 rounded-full' src={drone} alt="gazebo" />
                        </div>

                    </div>
                </div>

                <div className='border-y origin-top group border-white relative overflow-hidden h-[10vw]' onClick={()=>{navigate('/resources/ardupilot')}}>
                    <h1 className='text-[8vw] text-center leading-none uppercase text-white'>Ardupilot</h1>

                    <div className='absolute opacity-0 group-hover:opacity-100 flex flex-nowrap w-full left-0 top-0 h-full items-center pointer-events-none'>

                        <div className='flex min-w-full movex items-center justify-around bg-linear-to-b to-purple-900 from-pink-900 shrink-0 gap-4'>
                            <h2 className='whitespace-nowrap text-black text-[8vw] uppercase shrink-0'>perceive all</h2>
                            <img className='h-[7vw] w-[15vw] object-cover shrink-0 rounded-full' src={cube} alt="ros" />

                            <h2 className='whitespace-nowrap text-black text-[8vw] uppercase shrink-0'>perceive all</h2>
                            <img className='h-[7vw] w-[15vw] object-cover shrink-0 rounded-full' src={drone} alt="gazebo" />
                        </div>
                        <div className='flex min-w-full movex items-center justify-around bg-linear-to-b to-purple-900 from-pink-900 shrink-0 gap-4'>
                            <h2 className='whitespace-nowrap text-black text-[8vw] uppercase shrink-0'>perceive all</h2>
                            <img className='h-[7vw] w-[15vw] object-cover shrink-0 rounded-full' src={cube} alt="ros" />

                            <h2 className='whitespace-nowrap text-black text-[8vw] uppercase shrink-0'>perceive all</h2>
                            <img className='h-[7vw] w-[15vw] object-cover shrink-0 rounded-full' src={drone} alt="gazebo" />
                        </div>

                    </div>
                </div>

                <div className='border-y origin-top group border-white relative overflow-hidden h-[10vw]'onClick={()=>{navigate('/resources/components')}}>
                    <h1 className='text-[8vw] text-center leading-none uppercase text-white'>Components</h1>

                    <div className='absolute opacity-0 group-hover:opacity-100 flex flex-nowrap w-full left-0 top-0 h-full items-center pointer-events-none'>

                        <div className='flex min-w-full movex items-center justify-around bg-linear-to-b to-purple-900 from-pink-900 shrink-0 gap-4'>
                            <h2 className='whitespace-nowrap text-black text-[8vw] uppercase shrink-0'>Observe all</h2>
                            <img className='h-[7vw] w-[15vw] object-cover shrink-0 rounded-full' src={motor} alt="ros" />

                            <h2 className='whitespace-nowrap text-black text-[8vw] uppercase shrink-0'>observe all</h2>
                            <img className='h-[7vw] w-[15vw] object-cover shrink-0 rounded-full' src={esc} alt="gazebo" />
                        </div>
                        <div className='flex min-w-full movex items-center justify-around bg-linear-to-b to-purple-900 from-pink-900 shrink-0 gap-4'>
                            <h2 className='whitespace-nowrap text-black text-[8vw] uppercase shrink-0'>observe all</h2>
                            <img className='h-[7vw] w-[15vw] object-cover shrink-0 rounded-full' src={motor} alt="ros" />

                            <h2 className='whitespace-nowrap text-black text-[8vw] uppercase shrink-0'>observe all</h2>
                            <img className='h-[7vw] w-[15vw] object-cover shrink-0 rounded-full' src={esc} alt="gazebo" />
                        </div>

                    </div>
                </div>


            </div>
        </div>
    )
}

export default Resources
