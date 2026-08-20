"use client";

import { motion } from 'framer-motion';

export default function Trust() {
  return (
    // Note the py-[20vh] - this creates that massive, luxurious vertical spacing
    <section className="relative w-full py-[20vh] px-8 bg-[#F7F5F0] text-[#2A2A2A]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
        
        {/* Left Side: The Massive Quote */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="md:col-span-7 md:col-start-1"
        >
          <h2 className="font-serif text-[clamp(2rem,3vw,3rem)] leading-snug mb-8">
            “They didn’t just photograph how the day looked. They captured exactly how it felt. Looking at our gallery is like stepping back into the magic.”
          </h2>
          <p className="text-xs uppercase tracking-widest text-[#2A2A2A]/60">
            — Sarah & James, The Amalfi Coast
          </p>
        </motion.div>

        {/* Right Side: The Anchor Image */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2 }}
          className="md:col-span-4 md:col-start-9"
        >
          <div className="aspect-[4/5] bg-gray-200 overflow-hidden">
            <img 
              src="/images/11.jpg" 
              alt="Joyful candid moment" 
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}