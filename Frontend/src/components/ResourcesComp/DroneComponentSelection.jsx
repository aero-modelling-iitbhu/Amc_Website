import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

const markdownContent = `
**Objective:** This guide helps in selecting **motors, ESCs, propellers, and batteries** based on payload requirements. It includes essential formulas for **thrust, power estimation, and flight time**, commonly used in defense and high-altitude operations.

---

## 1. Define Requirements First

### Key Weights
- **Payload Weight (W_payload):** Camera, sensors, payload (kg or g)
- **Frame Weight (W_frame):** Frame + landing gear + electronics
- **Battery Weight**
- **Other Components**

### Total Weight
\`\`\`text
W_total = W_payload + W_frame + Battery + Other components
\`\`\`

### Safety Factor
- Typically **2× total weight**
- Ensures maneuver margin and reliability

---

## 2. Motor & Propeller Selection

Choose motors based on:
- Required thrust per motor
- Efficiency (g/W)
- KV rating (RPM/Volt)
- Battery voltage compatibility

### Thrust per Motor Formula

\`\`\`math
T_motor = (W_total × Safety Factor) / Number of Motors
\`\`\`

### Example (Quadcopter)

\`\`\`math
W_total = 2 kg
Safety factor = 2
Motors = 4

T_motor = (2 × 9.8 × 2) / 4 = 9.8 N per motor
\`\`\`

> 💡 **Conversion:** 1 N ≈ 101.97 g ⇒ Required thrust ≈ 1000 g per motor.  
> ✅ Select motor-prop combo giving **~1000 g thrust at 50–60% throttle** for efficiency.

---

## 3. ESC Selection

### Current Rating Rule

\`\`\`math
ESC_rating ≥ Motor_Max_Current × 1.3
\`\`\`

### Guidelines
- 20–30% current headroom
- Voltage rating must match battery (e.g., 3S / 4S / 6S)

---

## 4. Propeller Selection

- Larger props → more thrust at lower RPM
- More efficient, especially for endurance

### KV Matching Guide

| Motor KV | Prop Size |
|--------|-----------|
| 700–900 KV | 10″–15″ |
| >1200 KV | 5″–8″ |

> Always verify using **manufacturer thrust tables** or test bench data.

---

## 5. Battery Selection

Battery selection depends on:
- Voltage (S rating)
- Capacity (mAh)
- Discharge rate (C-rating)

### Flight Time Estimation

\`\`\`math
T_flight (min) = (Battery_Capacity / 1000 × 0.8 × 60) / Avg_Current
\`\`\`

---

## 6. Altitude & Air Density Effects

Air density decreases with altitude → thrust reduces.

### Air Density Values

| Altitude | Density (kg/m³) | Thrust Factor |
|--------|------------------|---------------|
| Sea Level | 1.225 | ×1.00 |
| 3000 m (Leh) | 0.909 | ×0.74 |
| 5000 m (Siachen) | 0.736 | ×0.60 |

---

### Thrust Correction Formula

\`\`\`math
T_actual = T_sea_level × (ρ_actual / ρ_sea_level)
\`\`\`
`;
export default function DroneComponentSelection() {
  return (
    <div className="flex min-h-screen bg-[#020617] text-slate-300 selection:bg-cyan-500/30">
      <main className="flex-1 lg:ml-64">
        <header className="relative overflow-hidden border-b border-slate-800 bg-slate-950 px-8 py-20 lg:px-16">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 h-96 w-96 bg-cyan-500/5 blur-[120px]" />
          <div className="max-w-4xl relative z-10">
            <span className="inline-block rounded-full bg-cyan-500/10 px-3 py-1 text-[11px] font-bold text-cyan-400 ring-1 ring-inset ring-cyan-500/20 mb-6 uppercase tracking-wider">
              Engineering Whitepaper
            </span>
            <h1 className="text-5xl lg:text-7xl font-black tracking-tighter text-white mb-8">
              Drone <span className="text-cyan-400">Component</span> Selection
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl leading-relaxed font-medium">
              A practical engineering guide for selecting motors, ESCs, propellers,
              and batteries based on payload, thrust, and altitude.
            </p>
          </div>
        </header>

        <section className="px-8 py-16 lg:px-16 bg-[#020617]">
          <div className="max-w-4xl">
            <div className="
              prose prose-invert prose-slate max-w-none
              prose-h2:text-white prose-h2:text-3xl prose-h2:font-extrabold prose-h2:mt-20 prose-h2:mb-8 prose-h2:border-b prose-h2:border-slate-800 prose-h2:pb-4
              prose-h3:text-cyan-400 prose-h3:text-xl prose-h3:font-bold prose-h3:mt-12
              prose-p:text-slate-400 prose-p:text-[17px] prose-p:leading-8
              prose-strong:text-cyan-100 prose-strong:font-bold
              prose-blockquote:border-l-cyan-500 prose-blockquote:bg-slate-900/50 prose-blockquote:py-1 prose-blockquote:px-6 prose-blockquote:rounded-r-lg
              prose-table:border prose-table:border-slate-800
              prose-th:bg-slate-900 prose-th:px-4 prose-th:py-3 prose-th:text-cyan-300
              prose-td:px-4 prose-td:py-3 prose-td:border-t prose-td:border-slate-800
            ">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
                components={{
                  code({ inline, className, children }) {
                    const match = /language-(\w+)/.exec(className || '')
                    const lang = match ? match[1] : 'text';
                    
                    if (!inline && match) {
                      return (
                        <div className="my-10 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xl">
                          <div className="flex items-center justify-between px-5 py-2.5 bg-slate-900/80 border-b border-slate-800">
                            <span className="text-[10px] font-bold tracking-widest text-slate-500 uppercase">{lang}</span>
                            <div className="flex gap-1.5">
                              <div className="w-2 h-2 rounded-full bg-slate-700" />
                              <div className="w-2 h-2 rounded-full bg-slate-700" />
                            </div>
                          </div>
                          <SyntaxHighlighter
                            style={vscDarkPlus}
                            language={lang}
                            PreTag="div"
                            customStyle={{
                              margin: 0,
                              padding: '1.5rem',
                              background: 'transparent',
                              fontSize: '14px',
                              lineHeight: '1.7',
                            }}
                          >
                            {String(children).replace(/\n$/, '')}
                          </SyntaxHighlighter>
                        </div>
                      )
                    }
                    return (
                      <code className="bg-slate-800 text-cyan-300 px-1.5 py-0.5 rounded font-mono text-sm">
                        {children}
                      </code>
                    )
                  },
                }}
              >
                {markdownContent}
              </ReactMarkdown>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}