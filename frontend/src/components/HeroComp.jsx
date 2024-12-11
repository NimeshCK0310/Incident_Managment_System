import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect } from "react";
import { useMotionTemplate, useMotionValue, motion, animate } from "framer-motion";
import logo from '../assets/logo.png'
import logo2 from '../assets/logo-2.png'
import logo3 from '../assets/logo-3.png'
import logo4 from '../assets/logo-4.png'
import logo5 from '../assets/logo-5.png'

const COLORS_TOP = ["#1E67C6", "#006400"]; 

export const HeroComp = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;

  return (
    <motion.section
      style={{ backgroundImage }} // Apply the background gradient here
      className="relative grid min-h-screen place-content-center overflow-hidden bg-gray-950 px-4 py-24 text-gray-200"
    >
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-3xl font-medium leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight">
          We Ensure Better Service for a Better World!
        </h1>
        <p className="my-6 max-w-xl text-center text-base leading-relaxed md:text-lg md:leading-relaxed">
          Your trusted and proven partner for innovative and exciting communication experiences delivered with passion, quality, and commitment.
        </p>
      </div>

      {/* Ribbon Logos Container */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
        <motion.div
          className="flex gap-8"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 12, ease: "easeInOut", repeat: Infinity }}
        >
          <img src={logo} alt="Logo 1" className="w-30 h-24" />
          <img src={logo2} alt="Logo 2" className="w-30 h-24" />
          <img src={logo3} alt="Logo 3" className="w-30 h-24" />
          <img src={logo4} alt="Logo 4" className="w-30 h-24" />
          <img src={logo5} alt="Logo 5" className="w-30 h-24" />
        </motion.div>
      </div>

      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div>
    </motion.section>
  );
};
