import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import videoBg from '/Users/sarvesh/Documents/Amc_Website/Frontend/src/assets/Victory/Video2.mp4';
import achievements from '/Users/sarvesh/Documents/Amc_Website/Frontend/src/assets/Victory/Achievements.js'
gsap.registerPlugin(ScrollTrigger);

const Victory = () => {
    const container = useRef();

    useGSAP(() => {
        gsap.to('.glow-text', {
            opacity: 0.4,
            textShadow: "0 0 0px rgba(255,255,255,0)",
            repeat: -1,
            yoyo: true,
            duration: 2,
            ease: "power1.inOut"
        });
        gsap.from('.tree-line', {
            scaleY: 0,
            transformOrigin: "top",
            scrollTrigger: {
                trigger: ".tree-container",
                start: "top 20%",
                end: "bottom bottom",
                scrub: 1,
            }
        });
        const branches = gsap.utils.toArray('.branch-item');
        branches.forEach((branch) => {
            gsap.from(branch, {
                x: branch.classList.contains('left-side') ? -100 : 100,
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: branch,
                    start: "top 80%",
                    end: "top 50%",
                    scrub: 1,
                }
            });
        });
    }, { scope: container });

    return (
        <div ref={container} className="relative min-h-[200vh] w-full bg-black overflow-x-hidden">
            <video
                src={videoBg}
                autoPlay loop muted playsInline
                className="fixed top-0 left-0 w-full h-full object-cover z-0  scale-105 opacity-50"
            />

            <div className="relative z-10 py-20 flex flex-col items-center">
                <h1 className="glow-text text-6xl md:text-8xl font-black text-purple-300 vt323-regular uppercase tracking-tighter mb-32 text-center drop-shadow-[0_0_30px_rgba(255,255,255,0.8)]">
                    Achievements
                </h1>
                <div className="tree-container relative w-full max-w-5xl px-4">

                    <div className="tree-line absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-linear-to-b from-yellow-400 via-white to-transparent opacity-80" />

                    {achievements.map((item, index) => {
                        const isLeft = index % 2 === 0;
                        return (
                            <div
                                key={index}
                                className={`branch-item flex items-center w-full mb-24 ${isLeft ? 'flex-row-reverse left-side' : 'right-side'}`}>
                                <div className="w-1/2 px-8">
                                    <div className="group p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:bg-white/10 hover:border-pink-600 transition-all duration-500">
                                        <span className="text-purple-400 font-mono text-2xl font-bold">{item.year}</span>
                                        <h3 className="text-white text-3xl font-bold mt-2 group-hover:translate-x-2 transition-transform">{item.title}</h3>
                                        <p className="text-gray-400 mt-3 leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-black border-4 border-purple-400 rounded-full z-20 shadow-[0_0_15px_#facc15]" />

                                <div className="w-1/2" />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Victory;