'use client';

import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Start from '@/components/Start';
import About from '@/components/About';
import Team from '@/components/Team';
import Footer from '@/components/Footer';
import ButtonTop from '@/components/button/ButtonTop';
import SplashScreen from '@/components/SplashScreen';

const links = [
  { href: '/', label: 'Home', to: 'start' },
  { href: '/about', label: 'About', to: 'about' },
  { href: '/team', label: 'Team', to: 'team' },
];

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {loading ? (
        <>
          <SplashScreen />
        </>
      ) : (
        <>
          <Navbar links={links} />
          <div id="start">
            <Start />
          </div>
          <div id="about">
            <About />
          </div>
          <div id="team">
            <Team />
          </div>
          <Footer />
          <ButtonTop />
        </>
      )}
    </>
  );
}
