import React, { useState } from 'react'; // added useState import
import Header from '../components/Header'
import CopySection from '../components/CopySection';

export default function Home() {

  return (
    <div className="bg-blue-100">
      <Header />
      <CopySection />
    </div>
  );
}
