import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import bgVideo from '/Users/sarvesh/Documents/Amc_Website/Frontend/src/assets/Competetions/Register/Registervideo.mp4';

const AeroArcadeForm = () => {
  const [teamSize, setTeamSize] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".form-panel", {
        x: -100,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: "power4.out"
      });
      
      gsap.from(".header-text", {
        y: -50,
        opacity: 0,
        duration: 1,
        delay: 0.5
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    gsap.fromTo(".wingman-panel", 
      { scale: 0.9, opacity: 0 }, 
      { scale: 1, opacity: 1, duration: 0.4, stagger: 0.1, ease: "back.out(1.7)" }
    );
  }, [teamSize]);

  const totalPrice = 2000;

  return (
    <div ref={containerRef} className="relative min-h-screen w-full bg-black font-['VT323'] py-20 px-4 flex flex-col items-center overflow-x-hidden">
      <video
        src={bgVideo}
        autoPlay loop muted playsInline
        className="fixed inset-0 h-full w-full object-cover blur-sm brightness-[0.5]"
      />
      <div className="relative z-10 w-full max-w-5xl flex flex-col gap-6 mt-15">
        <div className="form-panel  p-8 backdrop-blur-md">
          <div className="flex justify-between items-end">
            <div>
              <p className="text-cyan-400 text-xl tracking-[0.3em] uppercase">Deployment Manifest</p>
              <h1 className="header-text text-7xl md:text-9xl text-white uppercase tracking-tighter ">
                Vtol'26
              </h1>
            </div>
            <div className="text-right hidden md:block">
              <p className="text-white/35 text-sm tracking-widest uppercase">System Status: Active</p>
              <p className="text-white/35 text-sm tracking-widest uppercase">Encryption: AES-256</p>
            </div>
          </div>
        </div>

        <div className="form-panel bg-black/40 border border-white/10 p-8 backdrop-blur-xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-4 w-4 bg-cyan-500 animate-pulse"></div>
            <h2 className="text-3xl text-cyan-500 uppercase tracking-widest font-bold">Primary Pilot (Leader)</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            <div className="group">
              <label className="label-text">Pilot Name</label>
              <input type="text" placeholder="REQUIRED" className="cyber-input" />
            </div>
            <div className="group">
              <label className="label-text">Roll Identification</label>
              <input type="text" placeholder="ID_NUM" className="cyber-input" />
            </div>
            <div className="group">
              <label className="label-text">Comm Channel (Email)</label>
              <input type="email" placeholder="PILOT@AMC.iitbhu" className="cyber-input" />
            </div>
            <div className="group">
              <label className="label-text">Squadron (Dept)</label>
              <input type="text" placeholder="SECTOR" className="cyber-input" />
            </div>
          </div>
        </div>

        <div className="form-panel bg-white/3 border border-white/10 p-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-3xl text-white uppercase tracking-widest">Recruit Wingmen</h2>
            <p className="text-cyan-500/50 text-lg uppercase italic mt-1">Select additional units for the mission</p>
          </div>
          <div className="flex gap-4">
            {[0, 1, 2, 3, 4].map((num) => (
              <button
                key={num}
                onClick={() => setTeamSize(num)}
                className={`w-16 h-16 text-3xl font-bold border-2 transition-all cursor-pointer ${
                  teamSize === num 
                  ? 'bg-cyan-500 text-black border-cyan-400 ' 
                  : 'border-white/20 text-white hover:border-cyan-500 bg-black/20'
                }`}
              >
                0{num}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Array.from({ length: teamSize }).map((_, i) => (
            <div key={i} className="wingman-panel bg-cyan-950/20 border border-cyan-500/20 p-6 backdrop-blur-lg">
              <div className="flex justify-between items-center mb-4 border-b border-cyan-500/20 pb-2">
                <span className="text-cyan-500 text-xl font-bold tracking-widest uppercase">Wingman_0{i + 1}</span>
                <span className="text-white/20 text-xs font-mono">NODE_ACTIVE</span>
              </div>
              <div className="space-y-4">
                <input type="text" placeholder="NAME" className="cyber-input text-lg py-2" />
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="ROLL" className="cyber-input text-lg py-2" />
                  <input type="text" placeholder="DEPT" className="cyber-input text-lg py-2" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="form-panel mt-4 bg-linear-to-r from-purple-900/40 via-black/60 to-purple-900/40 border-y border-purple-500/30 p-10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <p className="text-white/40 text-xl tracking-[0.4em] uppercase">Mission Requisition Fee</p>
            <div className="text-8xl text-white font-bold tracking-tighter leading-none mt-2">
              ₹<span className="text-green-400 drop-shadow-[0_0_15px_#4ade80]">{totalPrice}</span>
            </div>
          </div>

          <button className="relative group px-20 py-8 bg-purple-600 text-black text-4xl font-bold uppercase tracking-[0.2em] transition-all hover:bg-green-400 hover:scale-105 active:scale-95 cursor-pointer shadow-[0_0_40px_rgba(147,51,234,0.4)] overflow-hidden">
             <span className="relative z-10">Confirm & Pay</span>
             <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </button>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .cyber-input {
          background: rgba(0, 0, 0, 0.4);
          border-bottom: 2px solid rgba(255, 255, 255, 0.1);
          border-right: 1px solid rgba(255, 255, 255, 0.05);
          padding: 12px 16px;
          color: white;
          width: 100%;
          font-size: 1.5rem;
          font-family: 'VT323', monospace;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .cyber-input:focus {
          border-bottom-color: #22d3ee;
          background: rgba(34, 211, 238, 0.05);
          outline: none;
          padding-left: 24px;
        }
        .label-text {
          color: rgba(34, 211, 238, 0.8);
          text-transform: uppercase;
          letter-spacing: 0.15em;
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
          display: block;
        }
        .drop-shadow-glow {
          filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.3));
        }
      `}} />
    </div>
  );
};

export default AeroArcadeForm;