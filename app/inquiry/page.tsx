"use client";

import { motion } from 'framer-motion';

export default function Inquiry() {
  return (
    <main className="min-h-screen bg-[#121212] text-white pt-48 pb-32 px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-24"
        >
          <p className="text-[10px] uppercase tracking-widest text-[#D4C8B8] mb-6">
            Availability & Commissions
          </p>
          <h1 className="font-serif text-[clamp(3rem,6vw,6rem)] leading-tight mb-8">
            Let us build something beautiful.
          </h1>
          <p className="text-lg text-white/60 max-w-xl leading-relaxed">
            We take on a limited number of commissions each year to ensure every couple receives our full creative focus. Please share the details of your weekend below.
          </p>
        </motion.div>

        {/* The Form */}
        <motion.form 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="space-y-16"
          onSubmit={(e) => e.preventDefault()} // Prevents page reload for demo
        >
          {/* 2-Column Grid for short inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            <div className="flex flex-col group">
              <label className="text-[10px] uppercase tracking-widest text-white/40 mb-2 transition-colors group-focus-within:text-white">Names</label>
              <input type="text" className="bg-transparent border-b border-white/20 py-2 focus:outline-none focus:border-white transition-colors" placeholder="Sarah & James" />
            </div>
            
            <div className="flex flex-col group">
              <label className="text-[10px] uppercase tracking-widest text-white/40 mb-2 transition-colors group-focus-within:text-white">Email Address</label>
              <input type="email" className="bg-transparent border-b border-white/20 py-2 focus:outline-none focus:border-white transition-colors" placeholder="hello@example.com" />
            </div>
            
            <div className="flex flex-col group">
              <label className="text-[10px] uppercase tracking-widest text-white/40 mb-2 transition-colors group-focus-within:text-white">Wedding Date</label>
              <input type="text" className="bg-transparent border-b border-white/20 py-2 focus:outline-none focus:border-white transition-colors" placeholder="September 2027" />
            </div>
            
            <div className="flex flex-col group">
              <label className="text-[10px] uppercase tracking-widest text-white/40 mb-2 transition-colors group-focus-within:text-white">Venue / Location</label>
              <input type="text" className="bg-transparent border-b border-white/20 py-2 focus:outline-none focus:border-white transition-colors" placeholder="Lake Como, Italy" />
            </div>

          </div>

          {/* Full-width Textarea for the vision */}
          <div className="flex flex-col group">
            <label className="text-[10px] uppercase tracking-widest text-white/40 mb-2 transition-colors group-focus-within:text-white">Tell us about your vision</label>
            <textarea 
              rows={4} 
              className="bg-transparent border-b border-white/20 py-2 focus:outline-none focus:border-white transition-colors resize-none" 
              placeholder="What is the feeling you want your guests to walk away with?"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            className="text-xs uppercase tracking-widest border border-white px-10 py-5 hover:bg-white hover:text-[#121212] transition-colors duration-500"
          >
            Submit Inquiry
          </button>
          
        </motion.form>

      </div>
    </main>
  );
}