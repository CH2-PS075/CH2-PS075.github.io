import React from 'react';
import Navbar from '@/components/Navbar';
import Start from '@/components/Start';
import About from '@/components/About';
import Team from '@/components/Team';
import Footer from '@/components/Footer';
import ButtonTop from '@/components/button/ButtonTop';

const links = [
  { href: '/', label: 'Home', to: 'start' },
  { href: '/about', label: 'About', to: 'about' },
  { href: '/team', label: 'Team', to: 'team' },
];

export default function Home() {
  return (
    <>
      <Navbar links={links} />
      <div id="start"><Start /></div>
      <div id="about"><About /></div>
      <div id="team"><Team /></div>
      <Footer />
      <ButtonTop />
    </>
  );
}
