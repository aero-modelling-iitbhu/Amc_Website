import React from 'react'
import { HelmInfo } from '../assets/Helm_Images/2024-25/helm'

const Members = () => {
    return (
        <div className="bg-black w-full ">
            {HelmInfo.map((Members,key)=>(
                 <section className="h-screen relative overflow-hidden flex items-center justify-center" key={key}>
                
                <div className="absolute h-[15vw] w-full top-[30%] overflow-hidden flex items-center z-0 opacity-40">
                    <div className="helma flex whitespace-nowrap">
                        <div className="text-white text-[10vw] uppercase vt323-regular leading-none">
                            {Members.role} • {Members.role} • {Members.role} •&nbsp;
                        </div>
                        <div className="text-white text-[10vw] uppercase vt323-regular leading-none">
                           {Members.role} • {Members.role} • {Members.role} •&nbsp;
                        </div>
                    </div>
                </div>

                <div className="relative z-10 top-0 flex items-center justify-center">
                    <img
                        src={Members.img}
                        className="h-[50vw] w-[35vw] object-cover rounded-2xl shadow-2xl"
                    />
                </div>

                <div className="absolute h-[6vw] w-full top-[65%] overflow-hidden flex items-center z-20 pointer-events-none">
                    <div className="helmb flex whitespace-nowrap">
                        <div className="text-purple-500 text-[6vw] uppercase vt323-regular  px-4">
                            {Members.name} &nbsp;&nbsp;&nbsp;&nbsp; {Members.name} &nbsp;&nbsp;&nbsp;&nbsp;
                        </div>
                        <div className="text-purple-500 text-[6vw] uppercase vt323-regular px-4">
                            {Members.name} &nbsp;&nbsp;&nbsp;&nbsp; {Members.name} &nbsp;&nbsp;&nbsp;&nbsp;
                        </div>
                    </div>
                </div>
            </section>
            ))}
        </div>
    )
}

export default Members
