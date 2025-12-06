import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header'; // Import the new Header component
import Hero from '@/components/Hero';
import MainFeatures from '@/components/MainFeatures';
import ModulesSection from '@/components/ModulesSection';
import Benefits from '@/components/Benefits';
import Industries from '@/components/Industries';
import Testimonials from '@/components/Testimonials';
import Demo from '@/components/Demo';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';

function App() {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Flowi - De la Lista de Pendientes al Flujo de Trabajo</title>
        <meta name="description" content="Tu productividad sin estrés, guiada por la simplicidad. Transforma tus tareas en flujo de trabajo eficiente con Flowi." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-orange-50">
        <Header /> {/* Render the Header component */}
        <Hero />
        <Demo />
        <MainFeatures />
        <ModulesSection />
        <Benefits />
        <Industries />
        <Testimonials />
        <Pricing />
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;