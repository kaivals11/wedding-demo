"use client"; // This tells Next.js we are using interactive animations here

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Hero() {
  // 1. We list the exact paths to the images in our public folder
  const images = [
    '/images/1.jpg',
    '/images/2.jpg',
    '/images/3.jpg'
  ];

  // 2. We create a tracker to know which image is currently showing
  const [currentIndex, setCurrentIndex] = useState(0);

  // 3. We set up a timer that changes the image every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000); 
    
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-cinematic-dark">
      
      {/* Background Images Cross-Fade Loop */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {/* Note: Change .jpg to .png here if your images are PNGs! */}
          <img
            src={images[currentIndex]}
            alt="Hero background"
            className="w-full h-full object-cover opacity-50" 
          />
        </motion.div>
      </AnimatePresence>

      {/* Typography Overlay (Sits on top of the images) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-8">
        <h1 className="text-hero font-serif text-white max-w-5xl leading-[1.1]">
          The architecture of a memory.
        </h1>
      </div>

    </section>
  );
}