"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Approach() {
  // We set up our three concepts and link them to their respective images
  const concepts = [
    { id: 1, title: "I. Editorial Restraint", image: "/images/8.jpg" },
    { id: 2, title: "II. Unstaged Intimacy", image: "/images/9.jpg" },
    { id: 3, title: "III. Cinematic Scale", image: "/images/10.jpg" }
  ];

  // This state tracks which concept the user is currently hovering over
  // We default to the first concept (index 0)
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative w-full h-screen bg-[#1A1A1A] flex items-center justify-center overflow-hidden">
      
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={activeIndex}
            src={concepts[activeIndex].image}
            alt={concepts[activeIndex].title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.25 }} // Keep it dark so the text pops!
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full h-full object-cover"
          />
        </AnimatePresence>
      </div>

      {/* Foreground Text Layer */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-5xl px-8 space-y-8 md:space-y-12">
        {concepts.map((concept, index) => (
          <div 
            key={concept.id}
            onMouseEnter={() => setActiveIndex(index)}
            className="cursor-pointer group"
          >
            <h2 
              className={`font-serif text-[clamp(2.5rem,6vw,6rem)] leading-none text-center transition-all duration-300 ease-in-out
                ${activeIndex === index ? 'text-white opacity-100' : 'text-white opacity-40 group-hover:opacity-60'}
              `}
            >
              {concept.title}
            </h2>
          </div>
        ))}
      </div>

    </section>
  );
}