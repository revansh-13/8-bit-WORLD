"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BootSequence from "@/components/BootSequence";
import StarCanvas from "@/components/StarCanvas";

export default function Home() {
  const [bootSequenceComplete, setBootSequenceComplete] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleSound = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    if (videoRef.current) {
      videoRef.current.muted = nextMuted;
    }
  };
  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden selection:bg-terminal-green selection:text-black">
      <StarCanvas />

      {/* Persistent CRT scanline overlay over the entire screen */}
      <div className="fixed inset-0 pointer-events-none bg-[linear-gradient(rgba(0,0,0,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_4px,3px_100%] z-50 animate-scanline" />

      {!bootSequenceComplete ? (
        <BootSequence onComplete={() => setBootSequenceComplete(true)} />
      ) : (
        <AnimatePresence>
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="relative z-10 w-full"
          >
            {/* HERO SECTION */}
            <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20 pb-32 overflow-hidden">
              {/* Local Hero Video Background */}
              <div className="absolute inset-0 w-full h-full z-0 opacity-70 mix-blend-screen">
                <video 
                  ref={videoRef}
                  autoPlay 
                  loop 
                  muted={isMuted} 
                  playsInline 
                  className="w-full h-full object-cover"
                >
                  <source src="/8-bit-video.mp4" type="video/mp4" />
                </video>
              </div>

              {/* Gradient fade out to match following sections */}
              <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-0" />

              {/* Sound Toggle Button */}
              <button 
                onClick={toggleSound}
                className="absolute top-8 right-8 z-50 font-vt323 text-xl md:text-2xl border-2 border-terminal-green text-terminal-green bg-black/50 px-4 py-2 hover:bg-terminal-green hover:text-black transition-colors"
              >
                [SOUND: {isMuted ? "OFF" : "ON"}]
              </button>

              <div className="z-10 border-4 border-space-blue bg-black/70 p-6 md:p-10 shadow-[0_0_50px_rgba(77,166,255,0.4)] backdrop-blur-sm max-w-4xl w-full text-center relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-space-blue opacity-50 group-hover:opacity-100 transition-opacity" />
                <motion.h2 
                  className="font-press-start text-xl md:text-3xl text-space-blue mb-4 tracking-widest break-words"
                  initial={{ textShadow: "0 0 0px rgba(77,166,255,0)" }}
                  animate={{ textShadow: "0 0 20px rgba(77,166,255,0.8)" }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  PLANET 8-BIT
                </motion.h2>

                <div className="font-vt323 text-lg md:text-xl text-terminal-green mb-8 max-w-3xl mx-auto leading-relaxed border-t border-b border-terminal-green/30 py-4">
                  <p className="mb-2 uppercase text-cyber-yellow">Initialize core tech stack...</p>
                  <ul className="grid grid-cols-2 gap-2 text-left w-fit mx-auto">
                    <li>[x] Next.js 14 App Router</li>
                    <li>[x] TypeScript Engine</li>
                    <li>[x] Framer Motion Physics</li>
                    <li>[x] Tailwind CSS v4 Engine</li>
                    <li>[x] Native HTML5 Star Canvas</li>
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05, textShadow: "0 0 8px rgb(255,45,149)" }}
                    whileTap={{ scale: 0.95 }}
                    className="font-press-start text-xs border-2 border-neon-pink text-neon-pink bg-black px-4 py-3 uppercase hover:bg-neon-pink/10 transition-colors"
                  >
                    Initiate Link
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05, textShadow: "0 0 8px rgb(255,229,0)" }}
                    whileTap={{ scale: 0.95 }}
                    className="font-press-start text-xs border-2 border-cyber-yellow text-cyber-yellow bg-black px-4 py-3 uppercase hover:bg-cyber-yellow/10 transition-colors"
                  >
                    System Logs
                  </motion.button>
                </div>
              </div>
              
              <motion.div 
                className="z-10 mt-16 font-vt323 text-xl text-accent-purple animate-bounce bg-black/50 px-4 py-2 rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
              >
                SCROLL TO DECRYPT SYSTEM
                <div className="text-center mt-1">▼</div>
              </motion.div>
            </section>

            {/* COMMUNICATIONS / LORE SECTION */}
            <section className="min-h-screen py-32 px-4 bg-black/40 backdrop-blur-md border-y-2 border-terminal-green relative flex flex-col items-center justify-center">
              <div className="max-w-6xl w-full grid md:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                  <motion.h3 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="font-press-start text-2xl md:text-4xl text-neon-pink"
                  >
                    DECODING THE LORE
                  </motion.h3>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <p className="font-vt323 text-2xl text-terminal-green/80 leading-relaxed mb-6">
                      In the year 209X, the galactic network collapsed into fragmented pixel sectors. Planet 8-Bit remains the last bastion of true freedom, where retro hackers and cyber-rogues commune to bend the fabric of reality.
                    </p>
                    <p className="font-vt323 text-2xl text-terminal-green/80 leading-relaxed">
                      Only those with the oldest hardware can tap into the corrupted mainframe. This isn't just a website; it's a living, breathing arcade emulator orbiting a dying star.
                    </p>
                  </motion.div>

                  <div className="flex items-center gap-4 border border-terminal-green/30 p-4 font-vt323 text-xl">
                    <span className="text-cyber-yellow animate-pulse">●</span>
                    <span className="text-terminal-green">ORBITAL UPLINK: STABLE</span>
                  </div>
                </div>

                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="relative aspect-square border-2 border-accent-purple bg-black p-4 shadow-[0_0_30px_rgba(139,92,246,0.3)] group"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.2)_0%,transparent_70%)]" />
                  <div className="w-full h-full border border-accent-purple/50 flex items-center justify-center relative overflow-hidden bg-black/40">
                    <div className="absolute w-full h-2 bg-accent-purple/30 animate-scanline z-30" />
                    <img 
                      src="/Whisk_dad61e5b14e958d876d41c28f9e64adedr.png" 
                      alt="Classified Data Artifact" 
                      className="w-full h-full object-contain p-4 z-20 opacity-90 transition-transform group-hover:scale-110 duration-700"
                      style={{ filter: 'drop-shadow(0 0 25px rgba(139,92,246,0.9))' }}
                    />
                  </div>
                </motion.div>
              </div>
            </section>

            {/* SYSTEM STATS SECTION */}
            <section className="relative min-h-[600px] py-20 px-4 flex flex-col items-center justify-center w-full overflow-hidden border-y border-space-blue/30 my-16">
              {/* Falling Code Video Background */}
              <div className="absolute inset-0 w-full h-full z-0 opacity-40 mix-blend-screen">
                <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                  <source src="/Whisk_qtzwq2ymvwy0ujzi1immljytqdnjrtlkhdzx0cm.mp4" type="video/mp4" />
                </video>
              </div>

              {/* Semi-transparent Terminal Glass Window */}
              <div className="relative z-10 w-full max-w-4xl bg-black/60 backdrop-blur-md border border-terminal-green/50 p-6 md:p-10 shadow-[0_0_40px_rgba(0,255,136,0.15)]">
                <div className="flex justify-between items-center border-b border-terminal-green/50 pb-4 mb-8">
                  <h3 className="font-press-start text-xl md:text-3xl text-terminal-green">SYSTEM_STATS</h3>
                  <div className="font-vt323 text-xl text-black animate-pulse px-3 py-1 bg-terminal-green">LIVE_UPLINK</div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 font-vt323 text-xl md:text-3xl text-terminal-green/80">
                  <div className="space-y-6">
                    <div className="flex justify-between border-b border-white/5 pb-2"><span>CPU_LOAD:</span> <span className="text-cyber-yellow">89.4% [CRIT]</span></div>
                    <div className="flex justify-between border-b border-white/5 pb-2"><span>MEM_ALLOC:</span> <span>3.4TB / 4.0TB</span></div>
                    <div className="flex justify-between border-b border-white/5 pb-2"><span>NET_UPLINK:</span> <span className="text-space-blue">STABLE</span></div>
                    <div className="flex justify-between pb-2"><span>THREAT_LVL:</span> <span className="text-neon-pink">ELEVATED</span></div>
                  </div>
                  <div className="space-y-4 border-t md:border-t-0 md:border-l border-terminal-green/30 pt-6 md:pt-0 md:pl-10">
                    <p className="text-space-blue mb-4">{">>"} RUNNING PROCESSES:</p>
                    <ul className="list-square pl-5 space-y-2 text-terminal-green/70">
                      <li>/bin/core_decrypt</li>
                      <li>/usr/local/warp_drive</li>
                      <li>kernel_subroutine_x86</li>
                      <li>ghost_protocol.exe</li>
                      <li className="text-cyber-yellow/80 mt-4 animate-pulse">Scanning ports...</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* MODULES / FEATURES SECTION */}
            <section className="min-h-screen py-32 px-4 relative flex flex-col items-center justify-center max-w-7xl mx-auto">
              <motion.h3 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-press-start text-2xl md:text-4xl text-cyber-yellow mb-20 text-center"
              >
                EQUIPPED MODULES
              </motion.h3>

              <div className="grid md:grid-cols-3 gap-8 w-full">
                {[
                  { 
                    title: "NEURAL DECK", 
                    color: "text-terminal-green", 
                    border: "border-terminal-green", 
                    bg: "bg-terminal-green",
                    shadow: "shadow-[0_0_15px_rgba(0,255,136,0.2)]",
                    hoverGlow: "hover:shadow-[0_0_30px_rgba(0,255,136,0.6)]",
                    desc: "Direct cranial uplink for traversing the ghost-net. Enhances synapse processing speed by 400% for rapid data decryptions.",
                    version: "v.1.04_rx",
                    status: "SYNCED"
                  },
                  { 
                    title: "CYBER OVERDRIVE", 
                    color: "text-neon-pink", 
                    border: "border-neon-pink",
                    bg: "bg-neon-pink",
                    shadow: "shadow-[0_0_15px_rgba(255,45,149,0.2)]",
                    hoverGlow: "hover:shadow-[0_0_30px_rgba(255,45,149,0.6)]",
                    desc: "Hardware voltage regulator that temporarily bypasses safety limits. Used to brute-force orbital firewalls during hostile encounters.",
                    version: "v.2.88_beta",
                    status: "CHARGING"
                  },
                  { 
                    title: "VOID COMPILER", 
                    color: "text-space-blue", 
                    border: "border-space-blue", 
                    bg: "bg-space-blue",
                    shadow: "shadow-[0_0_15px_rgba(77,166,255,0.2)]",
                    hoverGlow: "hover:shadow-[0_0_30px_rgba(77,166,255,0.6)]",
                    desc: "Quantum logic suite designed to translate uncorrupted 8-Bit architecture into modern vector spaces. Highly unstable.",
                    version: "v.9.0_void",
                    status: "ACTIVE"
                  }
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                    whileHover={{ scale: 1.05, y: -10 }}
                    className={`relative bg-black/80 backdrop-blur-sm p-8 border-2 ${item.border} ${item.shadow} ${item.hoverGlow} group transition-all duration-300 cursor-pointer`}
                  >
                    <div className="absolute top-0 left-0 w-full h-full bg-white opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none" />
                    
                    <div className="flex justify-between items-start mb-6 h-10">
                      <h4 className={`font-press-start text-sm ${item.color} uppercase`}>{item.title}</h4>
                      <span className={`text-xs font-vt323 ${item.color} animate-pulse px-2 border ${item.border}`}>{item.status}</span>
                    </div>
                    
                    <p className="font-vt323 text-xl text-gray-400 mb-8 min-h-[120px] leading-relaxed group-hover:text-gray-200 transition-colors">
                      {item.desc}
                    </p>

                    <div className="w-full h-1 bg-gray-800 relative overflow-hidden">
                      <motion.div 
                        className={`absolute top-0 left-0 h-full ${item.bg}`}
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ 
                          duration: 2.5, 
                          repeat: Infinity, 
                          ease: "linear",
                          delay: i * 0.5
                        }}
                      />
                    </div>
                    
                    <div className="flex justify-between items-center w-full mt-4">
                      <span className={`font-vt323 text-sm ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                        {">>"} Accessing module...
                      </span>
                      <p className="font-vt323 text-sm text-right opacity-50 group-hover:opacity-100 transition-opacity">
                        {item.version}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* LAST HOPE OF 8-BIT FOOTER SECTION */}
            <footer className="border-t-4 border-space-blue/50 pt-20 pb-10 px-4 bg-black relative z-20 overflow-hidden w-full">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(77,166,255,0.15)_0%,transparent_70%)] pointer-events-none" />
              
              <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="font-press-start text-xl md:text-3xl text-space-blue mb-8 tracking-widest text-center uppercase"
                  style={{ textShadow: "0 0 15px rgba(77,166,255,0.5)" }}
                >
                  THE LAST HOPE OF 8-BIT
                </motion.h2>

                <p className="font-vt323 text-xl md:text-2xl text-terminal-green/70 max-w-2xl text-center mb-16 leading-relaxed">
                  Preserving the ancient art of pixels and raw code in a galaxy consumed by hyper-rendered AI sludge. Join the resistance. Transmit your coordinates.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 font-vt323 text-lg md:text-xl text-center mb-12 w-full border-y border-space-blue/30 py-8">
                  <div className="space-y-4">
                    <h4 className="text-cyber-yellow mb-4 font-press-start text-xs uppercase opacity-80">Comms</h4>
                    <a href="#" className="block text-terminal-green/60 hover:text-cyber-yellow transition-colors duration-300">Frequency [Discord]</a>
                    <a href="#" className="block text-terminal-green/60 hover:text-cyber-yellow transition-colors duration-300">Holonet [Twitter]</a>
                    <a href="#" className="block text-terminal-green/60 hover:text-cyber-yellow transition-colors duration-300">Visuals [Instagram]</a>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-neon-pink mb-4 font-press-start text-xs uppercase opacity-80">Sectors</h4>
                    <a href="#" className="block text-terminal-green/60 hover:text-neon-pink transition-colors duration-300">Sector 1: Arcade</a>
                    <a href="#" className="block text-terminal-green/60 hover:text-neon-pink transition-colors duration-300">Sector 2: Hardware</a>
                    <a href="#" className="block text-terminal-green/60 hover:text-neon-pink transition-colors duration-300">Sector 3: Hack</a>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-accent-purple mb-4 font-press-start text-xs uppercase opacity-80">Archives</h4>
                    <a href="#" className="block text-terminal-green/60 hover:text-accent-purple transition-colors duration-300">Source Code</a>
                    <a href="#" className="block text-terminal-green/60 hover:text-accent-purple transition-colors duration-300">Lore Logs</a>
                    <a href="#" className="block text-terminal-green/60 hover:text-accent-purple transition-colors duration-300">Transmissions</a>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-space-blue mb-4 font-press-start text-xs uppercase opacity-80">System</h4>
                    <a href="#" className="block text-terminal-green/60 hover:text-space-blue transition-colors duration-300">Privacy Protocol</a>
                    <a href="#" className="block text-terminal-green/60 hover:text-space-blue transition-colors duration-300">Terms of Uplink</a>
                    <a href="#" className="block text-terminal-green/60 hover:text-space-blue transition-colors duration-300">Status: Nominal</a>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row w-full justify-between items-center text-terminal-green/40 font-vt323 text-xl">
                  <p>© 209X PLANET 8-BIT RESISTANCE</p>
                  <div className="flex items-center gap-3 mt-4 md:mt-0">
                    <div className="w-2.5 h-2.5 rounded-full bg-terminal-green animate-pulse" />
                    <span className="tracking-widest">SYSTEM CORE ONLINE</span>
                  </div>
                </div>
              </div>
            </footer>
          </motion.main>
        </AnimatePresence>
      )}
    </div>
  );
}
