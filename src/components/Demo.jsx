import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Demo = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Gestión de Inventario",
      subtitle: "Controla tu stock en tiempo real",
      description: "Visualiza todos tus productos, niveles de stock, alertas de reorden y valor total del inventario en USD y VES.",
      image: "/images/Inventario muestra.png"
    },
    {
      title: "Gestión de Clientes",
      subtitle: "Base de datos centralizada",
      description: "Administra tu cartera de clientes, límites de crédito, información de contacto y términos de pago personalizados.",
      image: "/images/Clientes muestra.png"
    },
    {
      title: "Acceso Seguro",
      subtitle: "Autenticación confiable",
      description: "Inicia sesión con tus credenciales y accede a toda la información de tu negocio desde cualquier dispositivo.",
      image: "/images/Inicio de secion para muestra.png"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="demo" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-orange-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Conoce Flowi en Acción
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explora las principales características de nuestra plataforma de gestión comercial
          </p>
        </div>

        {/* Slider Container */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-orange-200">
          <div className="relative h-96 sm:h-[500px] md:h-[600px] bg-gray-100 flex items-center justify-center">
            {/* Slides */}
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-full transition-colors shadow-lg"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-full transition-colors shadow-lg"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Info Section */}
          <div className="p-8 sm:p-12 bg-gradient-to-br from-orange-50 to-white">
            <h3 className="text-2xl sm:text-3xl font-bold text-orange-600 mb-2">
              {slides[currentSlide].title}
            </h3>
            <p className="text-lg text-orange-500 font-semibold mb-4">
              {slides[currentSlide].subtitle}
            </p>
            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              {slides[currentSlide].description}
            </p>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-orange-500 w-8'
                      : 'bg-orange-200 w-3 hover:bg-orange-300'
                  }`}
                  aria-label={`Ir a slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Features Under Demo */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-xl bg-orange-50 border-2 border-orange-200">
            <div className="text-4xl mb-3">🎨</div>
            <h4 className="font-bold text-orange-900 mb-2">Interfaz Intuitiva</h4>
            <p className="text-orange-700">
              Diseño moderno y fácil de usar para cualquier usuario
            </p>
          </div>

          <div className="text-center p-6 rounded-xl bg-orange-50 border-2 border-orange-200">
            <div className="text-4xl mb-3">⚡</div>
            <h4 className="font-bold text-orange-900 mb-2">Rápido y Eficiente</h4>
            <p className="text-orange-700">
              Procesa operaciones en segundos con máximo rendimiento
            </p>
          </div>

          <div className="text-center p-6 rounded-xl bg-orange-50 border-2 border-orange-200">
            <div className="text-4xl mb-3">🔒</div>
            <h4 className="font-bold text-orange-900 mb-2">Seguro y Confiable</h4>
            <p className="text-orange-700">
              Tu información protegida con encriptación y respaldos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
