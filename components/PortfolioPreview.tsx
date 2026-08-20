"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function PortfolioPreview() {
  // We use this reference to track exactly where the user is scrolling
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax Math: We tell Framer Motion to move these elements at different speeds
  const ySlow = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const yFast = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section ref={containerRef} className="relative w-full py-24 md:py-48 bg-[#F7F5F0] text-[#2A2A2A] overflow-hidden">
      
      {/* 12-Column Asymmetrical Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-4 relative">
        
        {/* Image 1: Large Base Landscape (Moves slowly) */}
        <motion.div 
          style={{ y: ySlow }}
          className="col-span-1 md:col-span-7 md:col-start-1 group cursor-pointer z-0"
        >
          <div className="overflow-hidden aspect-[3/2] bg-gray-200">
            <img src="/images/5.jpg" alt="Lake Como" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          <p className="mt-4 text-xs uppercase tracking-widest">Villa Balbiano, Lake Como</p>
        </motion.div>

        {/* Image 2: Vertical Portrait overlapping Image 1 (Removed 'hidden md:block' so it shows up on phones!) */}
        <motion.div 
          style={{ y: yFast }}
          className="col-span-1 md:col-span-4 md:col-start-8 md:-mt-48 z-10 group cursor-pointer"
        >
           <div className="overflow-hidden aspect-[4/5] bg-gray-200 shadow-2xl">
            <img src="/images/6.jpg" alt="The Bowery" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          <p className="mt-4 text-xs uppercase tracking-widest">The Bowery, New York</p>
        </motion.div>
        
       {/* Image 3: Abstract Square sitting below (Moves slowly) */}
        <motion.div 
          style={{ y: ySlow }}
          className="col-span-1 md:col-span-5 md:col-start-4 md:mt-32 z-0 group cursor-pointer"
        >
           <div className="overflow-hidden aspect-square bg-gray-200">
            <img src="/images/7.jpg" alt="Details" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          
          {/* Your custom label */}
          <p className="mt-4 text-xs uppercase tracking-widest">Cinematic Details, Paris</p>
          
        </motion.div>
      </div>
    </section>
  );
}