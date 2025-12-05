import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      text: "Antes tardaba 30 minutos en hacer el cierre de caja. Ahora son 2 clics.",
      author: "Dueño de Tienda",
      role: "Comercio Minorista",
      rating: 5
    },
    {
      text: "Por fin sé cuánto tengo realmente en inventario sin contar caja por caja.",
      author: "Gerente de Almacén",
      role: "Distribuidora",
      rating: 5
    },
    {
      text: "Mis clientes aprecian que pueda cobrar en la moneda que prefieran.",
      author: "Propietario de Restaurante",
      role: "Alimentos y Bebidas",
      rating: 5
    },
    {
      text: "Los reportes me ayudan a entender qué productos debo reponer primero.",
      author: "Responsable de Compras",
      role: "Comercio al Mayor",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-12 sm:py-16 lg:py-24 px-3 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-orange-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Lo que Dicen Nuestros Clientes
          </h2>
          <p className="text-sm sm:text-base lg:text-xl text-gray-600 px-2">
            Resultados reales de empresas que transformaron su negocio con Flowi
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-orange-50/50 to-orange-100/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 lg:p-8 border border-orange-200 hover:border-orange-400 transition-all duration-300 hover:shadow-lg hover:shadow-orange-200/20"
            >
              {/* Quote Icon */}
              <Quote className="w-6 sm:w-8 h-6 sm:h-8 text-orange-400 mb-3 sm:mb-4 opacity-60" />

              {/* Stars */}
              <div className="flex gap-1 mb-3 sm:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 sm:w-4 h-3.5 sm:h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-800 text-sm sm:text-base lg:text-lg leading-relaxed mb-5 sm:mb-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="border-t border-orange-200 pt-3 sm:pt-4">
                <h4 className="font-semibold text-gray-900 text-sm sm:text-base">{testimonial.author}</h4>
                <p className="text-xs sm:text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-10 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-4 sm:p-6 lg:p-8 border border-orange-200 text-center">
            <div className="text-3xl sm:text-4xl font-bold text-orange-500 mb-2">30 min</div>
            <p className="text-orange-400 text-xs sm:text-sm lg:text-base">Reducción en cierre de caja</p>
          </div>
          
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-4 sm:p-6 lg:p-8 border border-orange-200 text-center">
            <div className="text-3xl sm:text-4xl font-bold text-orange-500 mb-2">100%</div>
            <p className="text-orange-400 text-xs sm:text-sm lg:text-base">Precisión en inventario</p>
          </div>
          
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-4 sm:p-6 lg:p-8 border border-orange-200 text-center">
            <div className="text-3xl sm:text-4xl font-bold text-orange-500 mb-2">∞</div>
            <p className="text-orange-400 text-xs sm:text-sm lg:text-base">Mejora en toma de decisiones</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
