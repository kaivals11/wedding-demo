"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Our categories based on the master brief
const categories = ['All', 'Coastal', 'Estate', 'City', 'Elopement'];

// The placeholder gallery data
const galleryData = [
  { id: 1, category: 'Coastal', image: '/images/12.jpg', span: 'md:col-span-8 md:col-start-1', aspect: 'aspect-[3/2]' },
  { id: 2, category: 'Estate', image: '/images/13.jpg', span: 'md:col-span-4 md:col-start-9 md:-mt-32', aspect: 'aspect-[4/5]' },
  { id: 3, category: 'City', image: '/images/14.jpg', span: 'md:col-span-5 md:col-start-2', aspect: 'aspect-[4/5]' },
  { id: 4, category: 'Elopement', image: '/images/15.jpg', span: 'md:col-span-7 md:col-start-6 md:-mt-48', aspect: 'aspect-[16/9]' },
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredImages = activeFilter === 'All' 
    ? galleryData 
    : galleryData.filter(item => item.category === activeFilter);

  return (
    <main className="min-h-screen bg-[#F7F5F0] text-[#2A2A2A] pt-48 pb-32 px-8">
      
      {/* Page Header */}
      <div className="max-w-7xl mx-auto mb-24">
        <h1 className="font-serif text-[clamp(3rem,6vw,6rem)] leading-tight max-w-4xl mb-12">
          A study in light, landscape, and emotion.
        </h1>
        
        {/* Sticky Filters */}
        <div className="flex flex-wrap gap-8 sticky top-32 z-40 bg-[#F7F5F0]/90 backdrop-blur-sm py-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`text-[12px] uppercase tracking-widest transition-all duration-300 ${
                activeFilter === cat 
                  ? 'line-through opacity-100' 
                  : 'opacity-40 hover:opacity-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* The Gallery Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 mt-12">
        <AnimatePresence mode="popLayout">
          {filteredImages.map((item) => (
            <motion.div
              key={item.id}
              layout // This makes the images float smoothly to their new positions!
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className={`${item.span} relative group overflow-hidden`}
            >
              <div className={`w-full ${item.aspect} bg-gray-200`}>
                <img 
                  src={item.image} 
                  alt={item.category} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

    </main>
  );
}