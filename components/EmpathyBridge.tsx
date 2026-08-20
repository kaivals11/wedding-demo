"use client"; // We need this for the scroll animations!

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function EmpathyBridge() {
  return (
    // We use our warm cream background (#F7F5F0) and dark charcoal text (#2A2A2A)
    <section className="relative w-full px-8 py-32 md:py-48 bg-[#F7F5F0] text-[#2A2A2A] flex justify-center">
      
      {/* 12-Column Grid Setup */}
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-center">
        
        {/* Left Side: Asymmetrical Image (Spans 4 columns) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="md:col-span-4 md:col-start-1"
        >
          <img 
            src="/images/4.jpg" 
            alt="Editorial detail" 
            className="w-full aspect-[4/5] object-cover"
          />
        </motion.div>

        {/* Right Side: Text Block (Spans 6 columns) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2 }}
          className="md:col-span-6 md:col-start-7 flex flex-col items-start"
        >
          <h2 className="font-serif text-[clamp(2.5rem,4vw,4rem)] leading-tight mb-8">
            Documenting the quiet moments and the loud celebrations with equal reverence.
          </h2>
          
          <p className="text-lg leading-relaxed mb-12">
            You are not a prop in a photoshoot. Your wedding is a living, breathing experience. We approach your weekend with editorial restraint and a documentary heart, ensuring your images are as authentic as the love that built them.
          </p>
          
          <Link href="/experience" className="naked-link !border-[#2A2A2A]/30 hover:!border-[#2A2A2A]">
            Discover our philosophy →
          </Link>
        </motion.div>

      </div>
    </section>
  );
}