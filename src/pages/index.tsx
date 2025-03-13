import React, { useState } from 'react';
import Header from '../components/Header'
import CopySection from '../components/CopySection';
import CodeBackground from '../components/CodeBackground';
import { motion } from 'framer-motion';

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.3,
        delayChildren: 0.2,
        duration: 0.5 
      }
    }
  };
  
  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="bg-blue-100 relative h-screen overflow-hidden">
      <CodeBackground />
      <motion.div 
        className="relative z-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div variants={childVariants}>
          <Header />
        </motion.div>
        <motion.div variants={childVariants}>
          <CopySection />
        </motion.div>
      </motion.div>
    </div>
  );
}
