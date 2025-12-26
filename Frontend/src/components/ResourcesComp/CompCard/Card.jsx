import React from 'react'
import mainCard from '/Users/sarvesh/Documents/Amc_Website/Frontend/src/assets/Competetions/cardCoponent/MainCard.svg'
import bottomleft from '/Users/sarvesh/Documents/Amc_Website/Frontend/src/assets/Competetions/cardCoponent/BottomLeft.png'
import bottomright from '/Users/sarvesh/Documents/Amc_Website/Frontend/src/assets/Competetions/cardCoponent/bottomright.png'
import { Link } from 'react-router-dom'
const Card = (props) => {
    return (
            <div className='h-[20vw] w-[15vw] relative group'>
                <div className='relative z-10 '>
                    <img src={mainCard} className='w-full h-full' alt="main" />
                </div>
                <div className=' h-[2vw] w-[2wv] top-0 left-[4vw] absolute z-30 text-white vt323-regular text-3xl group-hover:top-8 transition-all duration-400'>
                    {props.name}
                </div>
                <div className=' h-[14vw] w-[11.3vw] top-10 left-7 absolute z-10 group-hover:blur transition-all duration-400'>
                    <img src={props.image} className='h-full w-full'></img>
                </div>
                <div className='text-[1.2vw] text-white vt323-regular h-[7vw] w-[10vw] absolute left-9 top-25 z-30 opacity-0 group-hover:opacity-100 transition-all duration-400'>
                    {props.des}
                </div>
                <div className='h-full w-full absolute bottom-[0.5vw] group-hover:-left-[0.1vw] left-[1vw] z-0 transition-all duration-400'>
                    <img src={bottomleft} className='h-full w-full' alt="decoration" />
                </div>
                <div className='h-full w-full absolute bottom-[0.5vw] -left-[1vw] z-0 group-hover:left-[0.1vw] transition-all duration-400'>
                    <img src={bottomright} className='h-full w-full' alt="decoration" />
                </div>
                <div className='absolute bottom-11 left-3 h-[2vw] w-[13.2vw] z-40 flex justify-between align-middle'>
                    <div>
                        <Link className='text-white text-[1.4vw] vt323-regular p-1 border-2 group-hover:text-black group-hover:bg-white border-purple-500 ml-4 bg-black ' to={props.explore}>Explore </Link>
                    </div>
                    <div>
                        <Link className='text-white text-[1.4vw] vt323-regular p-1 border-2 group-hover:text-black group-hover:bg-white border-purple-500 mr-3 bg-black ' to={props.register}>Register </Link>
                    </div>
                </div>
            </div>
    )
}

export default Card
