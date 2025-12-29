import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import bgVideo from '/Users/sarvesh/Documents/Amc_Website/Frontend/src/assets/Competetions/Register/Registervideo.mp4';
import upiImage from '/Users/sarvesh/Documents/Amc_Website/Frontend/src/assets/Payment/UpiImage.png'
const name = "Vtol'26" //comp name 
const totalPrice = 2000; //price

const VtolcompRegister = () => {
  const [teamSize, setTeamSize] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [txnId, setTxnId] = useState('');
  const [payeeName, setPayeeName] = useState('');
  const containerRef = useRef(null);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const now = new Date();
    setCurrentTime(now.toLocaleString());

    const ctx = gsap.context(() => {
      gsap.from(".form-panel", {
        x: -100,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: "power4.out"
      });
    }, containerRef);
    return () => ctx.revert();
  }, [submitted]);

  const handleDownload = () => {
    window.print();
  };

  if (submitted) {
    return (
      <div className="min-h-screen w-full  bg-black font-['VT323'] py-20 px-4 flex flex-col items-center justify-center overflow-x-hidden text-white ">
        <video src={bgVideo} autoPlay loop muted playsInline className="fixed inset-0 h-full w-full object-cover blur-md brightness-[0.3]" />
        
        <div id="invoice-capture" className="relative z-10 w-full max-w-2xl bg-black/80 border-2 border-cyan-500 p-10 backdrop-blur-xl shadow-[0_0_50px_rgba(34,211,238,0.2)] mt-10">
          <div className="border-b-2 border-cyan-500 pb-6 mb-8 flex justify-between items-start">
            <div>
              <h1 className="text-5xl uppercase tracking-tighter">Mission Receipt</h1>
              <p className="text-cyan-400 tracking-[0.3em]">OPERATION: {name}</p>
            </div>
            <div className="text-right">
              <p className="text-xs opacity-50">STATUS: VERIFIED</p>
              <p className="text-xs opacity-50">AUTH_NO: {Math.floor(Math.random() * 1000000)}</p>
            </div>
          </div>

          <div className="space-y-6 text-2xl uppercase">
            <div className="flex justify-between border-b border-white/10 py-2">
              <span className="text-cyan-500/70">Lead Pilot</span>
              <span>{payeeName || "PILOT_01"}</span>
            </div>
            <div className="flex justify-between border-b border-white/10 py-2">
              <span className="text-cyan-500/70">Squadron Size</span>
              <span>{teamSize + 1} Units</span>
            </div>
            <div className="flex justify-between border-b border-white/10 py-2">
              <span className="text-cyan-500/70">Transaction ID</span>
              <span className="text-purple-400">{txnId || "TXN_NULL"}</span>
            </div>
            <div className="flex justify-between border-b border-white/10 py-2">
              <span className="text-cyan-500/70">Deployment Time</span>
              <span>{currentTime}</span>
            </div>
            <div className="flex justify-between pt-8">
              <span className="text-3xl">Total Credits</span>
              <span className="text-4xl text-green-400 font-bold">₹{totalPrice}</span>
            </div>
          </div>

          <div className="mt-12 flex gap-4 no-print">
            <button 
              onClick={handleDownload}
              className="flex-1 bg-cyan-500 text-black py-4 text-2xl font-bold hover:bg-white transition-colors cursor-pointer"
            >
              SAVE MANIFEST (PDF)
            </button>
            <button 
              onClick={() => window.location.reload()}
              className="flex-1 border border-white/30 py-4 text-2xl hover:bg-white/10 transition-colors cursor-pointer"
            >
              RETURN
            </button>
          </div>
        </div>
        
        <style>{`
          @media print {
            .no-print { display: none !important; }
            body { background: white; }
            #invoice-capture { border: 2px solid black; color: black; background: white; box-shadow: none; }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="relative min-h-screen w-full bg-black font-['VT323'] py-20 px-4 flex flex-col items-center overflow-x-hidden">
      <video
        src={bgVideo}
        autoPlay loop muted playsInline
        className="fixed inset-0 h-full w-full object-cover blur-sm brightness-[0.5]"
      />
      <div className="relative z-10 w-full max-w-5xl flex flex-col gap-6 mt-15">
        <div className="form-panel p-8 backdrop-blur-md">
          <div className="flex justify-between items-end">
            <div>
              <p className="text-cyan-400 text-xl tracking-[0.3em] uppercase">Deployment Manifest</p>
              <h1 className="header-text text-7xl md:text-9xl text-white uppercase tracking-tighter ">
                {name}
              </h1>
            </div>
          </div>
        </div>

        <div className="form-panel bg-black/40 border border-white/10 p-8 backdrop-blur-xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-4 w-4 bg-cyan-500 animate-pulse"></div>
            <h2 className="text-3xl text-cyan-500 uppercase tracking-widest font-bold">Primary Pilot (Leader)</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            <input type="text" placeholder="PILOT NAME" className="cyber-input" value={payeeName} onChange={(e) => setPayeeName(e.target.value)} />
            <input type="text" placeholder="ROLL IDENTIFICATION" className="cyber-input" />
            <input type="email" placeholder="COMM CHANNEL (EMAIL)" className="cyber-input" />
            <input type="text" placeholder="SQUADRON (DEPT)" className="cyber-input" />
          </div>
        </div>

        <div className="form-panel bg-white/3 border border-white/10 p-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-3xl text-white uppercase tracking-widest">Recruit Wingmen</h2>
          </div>
          <div className="flex gap-4">
            {[0, 1, 2, 3, 4].map((num) => (
              <button key={num} onClick={() => setTeamSize(num)} className={`w-16 h-16 text-3xl font-bold border-2 transition-all cursor-pointer ${teamSize === num ? 'bg-cyan-500 text-black border-cyan-400 ' : 'border-white/20 text-white hover:border-cyan-500 bg-black/20'}`}>
                0{num}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Array.from({ length: teamSize }).map((_, i) => (
            <div key={i} className="wingman-panel bg-cyan-950/20 border border-cyan-500/20 p-6 backdrop-blur-lg">
              <input type="text" placeholder="NAME" className="cyber-input text-lg py-2" />
              <div className="grid grid-cols-2 gap-4 mt-4">
                <input type="text" placeholder="ROLL" className="cyber-input text-lg py-2" />
                <input type="text" placeholder="DEPT" className="cyber-input text-lg py-2" />
              </div>
            </div>
          ))}
        </div>

        <div className="form-panel bg-black/60 border border-purple-500/30 p-8 backdrop-blur-xl">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="shrink-0 bg-white p-4">
              <img src={upiImage} alt="QR" className="w-40 h-40" />
            </div>
            <div className="grow w-full space-y-6">
              <h2 className="text-3xl text-purple-400 uppercase tracking-widest">Payment Authentication</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" placeholder="TRANSACTION ID" className="cyber-input" value={txnId} onChange={(e) => setTxnId(e.target.value)} />
                <input type="text" value={currentTime} readOnly className="cyber-input opacity-50" />
              </div>
            </div>
          </div>
        </div>

        <div className="form-panel mt-4 p-10 flex justify-center">
          <button 
            onClick={() => setSubmitted(true)}
            className="px-24 py-8 bg-purple-600 text-black text-4xl font-bold uppercase tracking-[0.2em] hover:bg-green-400 hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
             Finalize Mission
          </button>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .cyber-input {
          background: rgba(0, 0, 0, 0.4);
          border-bottom: 2px solid rgba(255, 255, 255, 0.1);
          padding: 12px 16px;
          color: white;
          width: 100%;
          font-size: 1.5rem;
          font-family: 'VT323', monospace;
          transition: all 0.3s;
        }
        .cyber-input:focus {
          border-bottom-color: #22d3ee;
          outline: none;
        }
        .label-text { color: #22d3ee; text-transform: uppercase; font-size: 1.25rem; }
      `}} />
    </div>
  );
};

export default VtolcompRegister;