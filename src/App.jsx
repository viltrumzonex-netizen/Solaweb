import React from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header'; // Import the new Header component
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';

function App() {
  return (
    <>
      <Helmet>
        <title>Flowi - De la Lista de Pendientes al Flujo de Trabajo</title>
        <meta name="description" content="Tu productividad sin estrés, guiada por la simplicidad. Transforma tus tareas en flujo de trabajo eficiente con Flowi." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-b from-purple-950 via-purple-900 to-purple-950">
        <Header /> {/* Render the Header component */}
        <Hero />
        <Features />
        <Pricing />
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;