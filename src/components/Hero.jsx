import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, BarChart3 } from 'lucide-react';
import StickerPeel from './StickerPeel';
import GradientText from './GradientText';
import AuroraCSS from './AuroraCSS';
import ImageController from './ImageController';

const Hero = () => {
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  
  // Calcular posiciones responsivas basadas en el ancho de pantalla
  const getResponsivePositions = () => {
    if (screenWidth < 640) { // Mobile
      return {
        left: { posX: -80, posY: -10, scale: 0.9 },
        center: { posX: 0, posY: -40, scale: 1.1 },
        right: { posX: 80, posY: -10, scale: 0.9 }
      };
    } else if (screenWidth < 1024) { // Tablet
      return {
        left: { posX: -120, posY: -20, scale: 1.1 },
        center: { posX: -6, posY: -50, scale: 1.2 },
        right: { posX: 120, posY: -20, scale: 1.1 }
      };
    } else { // Desktop
      return {
        left: { posX: -200, posY: -24, scale: 1.3 },
        center: { posX: -6, posY: -54, scale: 1.35 },
        right: { posX: 200, posY: -24, scale: 1.3 }
      };
    }
  };
  
  const responsivePos = getResponsivePositions();
  
  const [images, setImages] = useState([
    { id: 'left', name: 'Izquierda', posX: responsivePos.left.posX, posY: responsivePos.left.posY, scale: responsivePos.left.scale, opacity: 1, zIndex: 20 },
    { id: 'center', name: 'Centro', posX: responsivePos.center.posX, posY: responsivePos.center.posY, scale: responsivePos.center.scale, opacity: 1, zIndex: 40 },
    { id: 'right', name: 'Derecha', posX: responsivePos.right.posX, posY: responsivePos.right.posY, scale: responsivePos.right.scale, opacity: 1, zIndex: 30 },
  ]);

  // Detectar cambios de tamaño de pantalla y actualizar posiciones
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Actualizar posiciones cuando el tamaño de pantalla cambie
  useEffect(() => {
    const pos = getResponsivePositions();
    setImages(prevImages => [
      { ...prevImages[0], posX: pos.left.posX, posY: pos.left.posY, scale: pos.left.scale },
      { ...prevImages[1], posX: pos.center.posX, posY: pos.center.posY, scale: pos.center.scale },
      { ...prevImages[2], posX: pos.right.posX, posY: pos.right.posY, scale: pos.right.scale },
    ]);
  }, [screenWidth]);

  // Load settings from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('flowi_images_config');
    if (saved) {
      try {
        setImages(JSON.parse(saved));
      } catch (e) {
        console.log('Error loading config');
      }
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('flowi_images_config', JSON.stringify(images));
  }, [images]);

  // Keyboard shortcut to toggle editor
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.shiftKey && e.key === 'E') {
        e.preventDefault();
        setIsEditorOpen(!isEditorOpen);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isEditorOpen]);

  const updateImage = (id, property, value) => {
    setImages(images.map(img => 
      img.id === id ? { ...img, [property]: value } : img
    ));
  };

  const getImageConfig = (id) => images.find(img => img.id === id);
  const handleCTA = () => {
    const event = new CustomEvent('show-toast', {
      detail: {
        title: '¡Próximamente!',
        description: 'La plataforma Flowi estará disponible muy pronto. Déjanos tu email para ser de los primeros.'
      }
    });
    window.dispatchEvent(event);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative overflow-visible py-24 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center bg-purple-950">
      {/* Aurora Background Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <AuroraCSS colorStops={['#FF4000', '#FA0000', '#FF4000']} />
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-orange-500 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2.5, delay: 0.5 }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            x: [0, 30, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 right-1/4 w-32 h-32 bg-orange-400/5 rounded-full blur-2xl"
        />
      </div>

      {/* Draggable Sticker Container - Full Hero Width */}
      <div className="absolute top-0 left-0 w-screen h-screen z-50 pointer-events-none">
        <StickerPeel
          imageSrc="/images/flowi-gato.png"
          width={160}
          rotate={0}
          peelBackHoverPct={20}
          peelBackActivePct={40}
          shadowIntensity={0.6}
          lightingIntensity={0.1}
          initialPosition={{ x: 280, y: 50 }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-30 w-full h-auto pointer-events-auto">

        <div className="grid lg:grid-cols-2 gap-12 items-center relative z-30 pointer-events-auto">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8 relative"
          >

            {/* Main Headline */}
            <motion.h1 variants={itemVariants} className="text-5xl lg:text-6xl font-bold text-white leading-tight">
              El Núcleo
              <br />
              <GradientText
                colors={['#FCB045', '#FCB045', '#FD1D1D', '#FD1D1D', '#FD1D1D']}
                animationSpeed={3}
                showBorder={false}
                className="text-5xl lg:text-6xl font-bold"
              >
                Operacional
              </GradientText>
              <br />
              para PyMEs <span className="text-black">Financieras.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p variants={itemVariants} className="text-xl text-gray-300 max-w-lg">
              Plataforma integral que fusiona gestión comercial y control bancario en tiempo real para PyMEs Financieras.
            </motion.p>

            {/* Features List */}
            <motion.div variants={itemVariants} className="space-y-3">
              {[
                { icon: '✓', text: 'Dashboard unificado' },
                { icon: '✓', text: 'Control bancario en tiempo real' },
                { icon: '✓', text: 'Reportes y análisis avanzados' },
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <span className="text-orange-400 text-lg font-bold">{feature.icon}</span>
                  <span className="text-gray-200">{feature.text}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4 z-30 relative pointer-events-auto">
              <Button
                onClick={handleCTA}
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-purple-950 px-8 py-6 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 group z-30 relative pointer-events-auto"
                size="lg"
              >
                Solicitar prueba gratuita
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Mockups Gallery */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="relative h-full flex items-center justify-center z-30 pointer-events-auto"
          >

            <div className="relative w-full h-96 flex items-center justify-center z-30 pointer-events-auto">
              {/* Left - Sales/Menu Mobile */}
              {(() => {
                const cfg = getImageConfig('left');
                const baseX = cfg.posX;
                return (
                  <motion.div
                    key="left-image"
                    initial={{ x: baseX, y: cfg.posY }}
                    animate={{ 
                      y: [cfg.posY, cfg.posY - 8, cfg.posY],
                      x: [baseX, baseX + 4, baseX - 4, baseX]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute cursor-pointer hover-scale-115 pointer-events-auto"
                    style={{
                      opacity: cfg.opacity,
                      zIndex: cfg.zIndex,
                      scale: cfg.scale
                    }}
                  >
                    <img 
                      src="/images/CapturaM2-removebg-preview_1764622751470.png"
                      alt="Sistema de Ventas"
                      className="h-80 rounded-2xl transition-transform duration-300 object-contain"
                    />
                  </motion.div>
                );
              })()}

              {/* Center - Login/Bienvenida Mobile (Main) */}
              {(() => {
                const cfg = getImageConfig('center');
                const centerBaseX = cfg.posX;
                const centerBaseY = cfg.posY;
                return (
                  <motion.div
                    key="center-image"
                    initial={{ x: centerBaseX, y: centerBaseY }}
                    animate={{ 
                      y: [centerBaseY, centerBaseY - 8, centerBaseY],
                      x: [centerBaseX, centerBaseX + 4, centerBaseX - 4, centerBaseX]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                    className="absolute cursor-pointer hover-scale-120 pointer-events-auto"
                    style={{
                      left: '50%',
                      marginLeft: '-96px',
                      opacity: cfg.opacity,
                      zIndex: cfg.zIndex,
                      scale: cfg.scale
                    }}
                  >
                    <img 
                      src="/images/imagen_2025-11-25_213752383-removebg-preview_1764622751475.png"
                      alt="Bienvenida Login"
                      className="h-96 rounded-3xl transition-transform duration-300 object-contain"
                    />
                  </motion.div>
                );
              })()}

              {/* Right - Reports Mobile */}
              {(() => {
                const cfg = getImageConfig('right');
                const baseX = cfg.posX;
                return (
                  <motion.div
                    key="right-image"
                    initial={{ x: baseX, y: cfg.posY }}
                    animate={{ 
                      y: [cfg.posY, cfg.posY - 8, cfg.posY],
                      x: [baseX, baseX - 4, baseX + 4, baseX]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                    className="absolute cursor-pointer hover-scale-115 pointer-events-auto"
                    style={{
                      opacity: cfg.opacity,
                      zIndex: cfg.zIndex,
                      scale: cfg.scale
                    }}
                  >
                    <img 
                      src="/images/imagen_2025-11-25_213425438-removebg-preview_1764622751475.png"
                      alt="Reportes"
                      className="h-80 rounded-2xl transition-transform duration-300 object-contain"
                    />
                  </motion.div>
                );
              })()}
            </div>
          </motion.div>
        </div>

        {/* Dashboard Full Width Below All Content */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="mt-24 w-full"
        >
          <img 
            src="/images/dashboard-full.png"
            alt="Dashboard Flowi"
            className="w-full rounded-3xl shadow-2xl object-contain"
          />
        </motion.div>
      </div>

      {/* Image Controller */}
      <ImageController 
        isOpen={isEditorOpen} 
        onClose={() => setIsEditorOpen(false)}
        images={images}
        onUpdateImage={updateImage}
      />
    </section>
  );
};

export default Hero;