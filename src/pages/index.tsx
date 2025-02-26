import React, { useState } from 'react';
import Header from '../components/Header'
import CopySection from '../components/CopySection';
import CodeBackground from '../components/CodeBackground';
import '../styles/codeHighlight.css';

export default function Home() {
  return (
    <div className="bg-blue-100 relative h-screen overflow-hidden">
      <CodeBackground />
      <div className="relative z-10">
        <Header />
        <CopySection />
      </div>
    </div>
  );
}
