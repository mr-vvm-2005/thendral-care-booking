import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import DoctorProfile from '@/components/DoctorProfile';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <DoctorProfile />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
