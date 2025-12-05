import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import PillNav from './PillNav';

const Header = () => {
  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Demo', href: '#demo' },
    { label: 'Características', href: '#main-features' },
    { label: 'Módulos', href: '#modules' },
    { label: 'Beneficios', href: '#benefits' },
    { label: 'Industrias', href: '#industries' },
    { label: 'Testimonios', href: '#testimonials' },
    { label: 'Precios', href: '#pricing' }
  ];

  const [activeHref, setActiveHref] = useState('#home');

  useEffect(() => {
    const sectionIds = navItems.map(i => i.href).filter(h => h.startsWith('#')).map(h => h.slice(1));
    const sections = sectionIds
      .map(id => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      entries => {
        const visible = entries.filter(e => e.isIntersecting);
        if (visible.length === 0) return;
        visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const top = visible[0];
        if (top && top.target && top.target.id) {
          setActiveHref('#' + top.target.id);
        }
      },
      {
        root: null,
        rootMargin: '-20% 0px -40% 0px',
        threshold: [0.1, 0.25, 0.5, 0.75, 1]
      }
    );

    sections.forEach(s => observer.observe(s));

    return () => observer.disconnect();
  }, [navItems]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-3 px-3 sm:px-6 lg:px-8 bg-white/70 backdrop-blur-md sticky top-0 z-40 border-b border-orange-200"
    >
      <div className="max-w-7xl mx-auto">
        <PillNav
          logo="/images/flowi-gato.png"
          logoAlt="Flowi"
          items={navItems}
          activeHref={activeHref}
          baseColor="#ffffff"
          pillColor="#f97316"
          hoveredPillTextColor="#ffffff"
          pillTextColor="#111827"
          ease="power3.easeOut"
          initialLoadAnimation={true}
        />
      </div>
    </motion.header>
  );
};

export default Header;
