"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const terminalLines = [
  "INITIALIZING SYSTEM CORE...",
  "CHECKING MEMORY MODULES... OK",
  "LOADING VIRTUAL ENVIRONMENT... OK",
  "ESTABLISHING CONNECTION TO MAIN SERVER...",
  "CONNECTION SECURED (PROTOCOL ZERO).",
  "SYSTEM ONLINE.",
];

export default function BootSequence({ onComplete }: { onComplete: () => void }) {
  const [lines, setLines] = useState<string[]>([]);
  const [booting, setBooting] = useState(true);

  useEffect(() => {
    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < terminalLines.length) {
        setLines((prev) => [...prev, terminalLines[currentLine]]);
        currentLine++;
      } else {
        clearInterval(interval);
        setTimeout(() => setBooting(false), 1500);
      }
    }, 400);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!booting) {
      setTimeout(onComplete, 3000);
    }
  }, [booting, onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black p-4 text-terminal-green animate-crt"
      >
        <div className="w-full max-w-3xl border-2 border-terminal-green p-6 relative bg-black/80 shadow-[0_0_20px_rgba(0,255,136,0.2)]">
          {/* Scanline overlay */}
          <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(0,255,136,0.1)_1px,transparent_1px)] bg-[size:100%_4px] opacity-20" />
          
          <div className="mb-8 font-press-start text-center">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xl md:text-2xl lg:text-3xl text-terminal-green mb-4 leading-tight break-words uppercase"
            >
              Welcome user get ready to log in
            </motion.h1>
          </div>

          <div className="font-vt323 text-lg md:text-2xl min-h-[200px] flex flex-col justify-end">
            {lines.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="mb-2"
              >
                {">"} {line}
              </motion.div>
            ))}
            {booting && (
              <div className="animate-blink mt-2 inline-block w-3 h-5 bg-terminal-green" />
            )}
            {!booting && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-6 text-cyber-yellow animate-pulse text-center text-xl md:text-3xl font-press-start"
              >
                ACCESS GRANTED
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
