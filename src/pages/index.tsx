import React, { useState } from 'react';
import Header from '../components/Header'
import CopySection from '../components/CopySection';
import CodeBackground from '../components/CodeBackground';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

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
        
        <motion.a 
          href="https://github.com/allandantas21/GradeMe_42Rio"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-black/75 hover:bg-black text-white py-2 px-4 rounded-lg flex items-center gap-2 shadow-lg transition-colors duration-300"
          variants={childVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaGithub className="text-xl" />
          <span>See Source Code</span>
        </motion.a>
      </motion.div>
    </div>
  );
}
