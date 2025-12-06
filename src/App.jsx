import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import MainFeatures from '@/components/MainFeatures';
import ModulesSection from '@/components/ModulesSection';
import Benefits from '@/components/Benefits';
import Industries from '@/components/Industries';
import Testimonials from '@/components/Testimonials';
import Demo from '@/components/Demo';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';
import TerminosCondiciones from '@/pages/TerminosCondiciones';
import PoliticaPrivacidad from '@/pages/PoliticaPrivacidad';
import SolicitudPrueba from '@/pages/SolicitudPrueba';
import ConfirmacionRegistro from '@/pages/ConfirmacionRegistro';

// Main home page component
const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-orange-50">
      <Header />
      <Hero />
      <Demo />
      <MainFeatures />
      <ModulesSection />
      <Benefits />
      <Industries />
      <Testimonials />
      <Footer />
      <Toaster />
    </div>
  );
};

// Layout for legal pages
const LegalPageLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {children}
      <Footer />
      <Toaster />
    </div>
  );
};

function App() {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <BrowserRouter>
      <Helmet>
        <title>Flowi - De la Lista de Pendientes al Flujo de Trabajo</title>
        <meta name="description" content="Tu productividad sin estrés, guiada por la simplicidad. Transforma tus tareas en flujo de trabajo eficiente con Flowi." />
      </Helmet>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/terminos-y-condiciones"
          element={
            <LegalPageLayout>
              <TerminosCondiciones />
            </LegalPageLayout>
          }
        />
        <Route
          path="/politica-privacidad"
          element={
            <LegalPageLayout>
              <PoliticaPrivacidad />
            </LegalPageLayout>
          }
        />
        <Route
          path="/solicitar-prueba"
          element={
            <LegalPageLayout>
              <SolicitudPrueba />
            </LegalPageLayout>
          }
        />
        <Route
          path="/confirmacion-registro" // <--- ESTA ES LA RUTA A MODIFICAR
          element={
            <LegalPageLayout> 
              <ConfirmacionRegistro />
            </LegalPageLayout> 
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App; 