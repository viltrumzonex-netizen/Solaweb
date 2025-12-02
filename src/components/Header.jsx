import React from 'react';
import { motion } from 'framer-motion';
import PillNav from './PillNav';

const Header = () => {
  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'Características', href: '#features' },
    { label: 'Precios', href: '#pricing' },
    { label: 'Demo', href: '#demo' }
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-4 px-4 sm:px-6 lg:px-8 bg-purple-900/40 backdrop-blur-md sticky top-0 z-40 border-b border-orange-500/20"
    >
      <div className="max-w-7xl mx-auto">
        <PillNav
          logo="/images/flowi-gato.png"
          logoAlt="Flowi"
          items={navItems}
          activeHref="#"
          baseColor="#ffffff"
          pillColor="#581c87"
          hoveredPillTextColor="#f97316"
          pillTextColor="#d1d5db"
          ease="power3.easeOut"
          initialLoadAnimation={true}
        />
      </div>
    </motion.header>
  );
};

export default Header;
