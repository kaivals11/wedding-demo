"use client";

import { motion } from 'framer-motion';

export default function Experience() {
  return (
    <main className="min-h-screen bg-[#F7F5F0] text-[#2A2A2A] pt-48 pb-32">
      
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-8 mb-32">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-serif text-[clamp(3rem,6vw,6rem)] leading-tight max-w-4xl"
        >
          We believe in the beauty of the unscripted.
        </motion.h1>
      </div>

      {/* Philosophy Layout */}
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 items-center">
        
        {/* Left Side: The Image */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="md:col-span-5"
        >
          <div className="w-full aspect-[4/5] bg-gray-200 overflow-hidden">
            <img 
              src="/images/16.jpg" 
              alt="Our Philosophy" 
              className="w-full h-full object-cover" 
            />
          </div>
        </motion.div>
        
        {/* Right Side: The Copy */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2 }}
          className="md:col-span-6 md:col-start-7 flex flex-col gap-8"
        >
          <h2 className="font-serif text-[clamp(2rem,3vw,3rem)] leading-none">
            Editorial restraint meets a documentary heart.
          </h2>
          
          <div className="w-12 h-[1px] bg-[#2A2A2A] my-4"></div> {/* Small decorative line */}
          
          <p className="text-lg leading-relaxed text-[#2A2A2A]/80">
            Your wedding is not a production; it is a milestone. Our approach is entirely documentary, meaning we do not interrupt moments to pose them. We anticipate, we observe, and we capture the genuine atmosphere of your weekend.
          </p>
          
          <p className="text-lg leading-relaxed text-[#2A2A2A]/80">
            From the sweeping architecture of your venue to the quiet tear your father sheds during the toast, we treat every element with the same editorial importance, ensuring your gallery feels like a cinematic record of your legacy.
          </p>
        </motion.div>

      </div>
    </main>
  );
}