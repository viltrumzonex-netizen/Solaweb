import React from 'react';
import { Store, Utensils, Smartphone, Wrench, Truck, Lightbulb, Briefcase } from 'lucide-react';

const Industries = () => {
  const industries = [
    {
      icon: Store,
      name: "Comercios Minoristas",
      examples: "Tiendas, boutiques, ferreterías",
      description: "Gestione múltiples puntos de venta y centralice inventario"
    },
    {
      icon: Utensils,
      name: "Alimentos y Bebidas",
      examples: "Restaurantes, cafeterías, panaderías",
      description: "Control de ingredientes y gestión de recetas con multimoneda"
    },
    {
      icon: Wrench,
      name: "Servicios",
      examples: "Peluquerías, talleres, consultorios",
      description: "Facturación de servicios y seguimiento de clientes"
    },
    {
      icon: Smartphone,
      name: "Tecnología",
      examples: "Tiendas de celulares, computación",
      description: "Inventario de productos electrónicos con especificaciones"
    },
    {
      icon: Truck,
      name: "Mayoristas",
      examples: "Distribuidores, importadores",
      description: "Gestión de múltiples proveedores y cuentas por pagar"
    },
    {
      icon: Lightbulb,
      name: "Emprendimientos",
      examples: "Negocios en crecimiento",
      description: "Escalabilidad desde el inicio sin costos prohibitivos"
    },
    {
      icon: Briefcase,
      name: "Freelancers",
      examples: "Profesionales independientes",
      description: "Facturación y seguimiento de pagos pendientes"
    }
  ];

  return (
    <section id="industries" className="py-12 sm:py-16 lg:py-24 px-3 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-orange-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Ideal para Diversos Negocios
          </h2>
          <p className="text-sm sm:text-base lg:text-xl text-gray-600 max-w-2xl mx-auto px-2">
            Flowi se adapta a cualquier tipo de industria y modelo de negocio
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-orange-50/40 to-orange-50/40 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-orange-200 hover:border-orange-400 transition-all duration-300 hover:shadow-lg hover:shadow-orange-200/20"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400/0 to-orange-400/0 group-hover:from-orange-400/5 group-hover:to-orange-400/5 rounded-xl transition-all duration-300" />
                
                <div className="relative">
                  <div className="mb-3 sm:mb-4 inline-block p-2 sm:p-3 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                    {industry.name}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
                    {industry.examples}
                  </p>
                  
                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                    {industry.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-10 sm:mt-16 bg-gradient-to-r from-orange-400 to-orange-500 rounded-2xl p-6 sm:p-8 lg:p-12 text-center border border-orange-500/50">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4">
            ¿Tu negocio no está en la lista?
          </h3>
          <p className="text-white mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base">
            Flowi es lo suficientemente flexible para adaptarse a cualquier tipo de negocio. 
            Nuestro equipo puede ayudarte a personalizar la solución para tus necesidades específicas.
          </p>
          <button className="bg-white text-orange-600 px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors text-sm sm:text-base">
            Contacta con nosotros
          </button>
        </div>
      </div>
    </section>
  );
};

export default Industries;
