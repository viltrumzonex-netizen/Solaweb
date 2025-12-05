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
    <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-orange-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Lo que Dicen Nuestros Clientes
          </h2>
          <p className="text-xl text-gray-600">
            Resultados reales de empresas que transformaron su negocio con Flowi
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-orange-50/50 to-orange-100/50 backdrop-blur-sm rounded-xl p-8 border border-orange-200 hover:border-orange-400 transition-all duration-300 hover:shadow-lg hover:shadow-orange-200/20"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-orange-400 mb-4 opacity-60" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-800 text-lg leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="border-t border-orange-200 pt-4">
                <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-8 border border-orange-200 text-center">
            <div className="text-4xl font-bold text-orange-500 mb-2">30 min</div>
            <p className="text-orange-400">Reducción en cierre de caja</p>
          </div>
          
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-8 border border-orange-200 text-center">
            <div className="text-4xl font-bold text-orange-500 mb-2">100%</div>
            <p className="text-orange-400">Precisión en inventario</p>
          </div>
          
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-8 border border-orange-200 text-center">
            <div className="text-4xl font-bold text-orange-500 mb-2">∞</div>
            <p className="text-orange-400">Mejora en toma de decisiones</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
