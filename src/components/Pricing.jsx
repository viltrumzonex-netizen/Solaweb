import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Check, Sparkles, Zap, Crown } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Pricing = () => {
  const { toast } = useToast();

  const handleSelectPlan = (planName) => {
    toast({
      title: '🚧 Esta función aún no está implementada',
      description: '¡Pero no te preocupes! Puedes solicitarla en tu próximo mensaje. 🚀',
    });
  };

  const plans = [
    {
      name: 'Gratis',
      icon: Sparkles,
      price: '0',
      period: 'para siempre',
      description: 'Perfecto para comenzar',
      features: [
        'Hasta 10 proyectos',
        'Visualización básica',
        'Sincronización en 2 dispositivos',
        'Soporte por email'
      ],
      buttonText: 'Comenzar Gratis',
      popular: false,
      gradient: 'from-gray-500 to-gray-600'
    },
    {
      name: 'Pro',
      icon: Zap,
      price: '9',
      period: 'por mes',
      description: 'Para profesionales serios',
      features: [
        'Proyectos ilimitados',
        'Visualización avanzada',
        'Sincronización ilimitada',
        'Plantillas premium',
        'Integraciones con apps',
        'Soporte prioritario'
      ],
      buttonText: 'Empezar Prueba Gratis',
      popular: true,
      gradient: 'from-orange-500 to-orange-600'
    },
    {
      name: 'Equipos',
      icon: Crown,
      price: '29',
      period: 'por mes',
      description: 'Para equipos de alto rendimiento',
      features: [
        'Todo de Pro',
        'Colaboración en tiempo real',
        'Espacios de trabajo compartidos',
        'Análisis y reportes',
        'Gestión de permisos',
        'Soporte dedicado 24/7'
      ],
      buttonText: 'Contactar Ventas',
      popular: false,
      gradient: 'from-blue-500 to-blue-600'
    }
  ];

  return (
    <section id="pricing" className="py-12 sm:py-16 lg:py-20 px-3 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        {/* Removed: Planes para Cada Necesidad section */}

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative"
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 sm:-top-5 left-1/2 -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-semibold shadow-lg">
                    Más Popular
                  </div>
                </div>
              )}

              <div className={`relative bg-white rounded-2xl border-2 ${plan.popular ? 'border-orange-500 shadow-2xl sm:scale-105' : 'border-gray-200 shadow-lg'} p-5 sm:p-8 hover:shadow-2xl transition-all duration-300 h-full flex flex-col`}>
                {/* Icon and Name */}
                <div className="mb-4 sm:mb-6">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${plan.gradient} rounded-xl flex items-center justify-center mb-3 sm:mb-4 shadow-lg`}>
                    <plan.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-4 sm:mb-6">
                  <div className="flex items-baseline">
                    <span className="text-3xl sm:text-5xl font-bold text-gray-900">
                      ${plan.price}
                    </span>
                    <span className="ml-2 text-gray-600 text-xs sm:text-base">
                      /{plan.period}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-2 sm:space-y-4 mb-6 sm:mb-8 flex-grow">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 sm:gap-3">
                      <div className={`w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-br ${plan.gradient} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                      </div>
                      <span className="text-gray-700 text-xs sm:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  onClick={() => handleSelectPlan(plan.name)}
                  className={`w-full py-3 sm:py-6 text-xs sm:text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white'
                      : 'bg-white border-2 border-gray-300 text-gray-900 hover:border-gray-400'
                  }`}
                >
                  {plan.buttonText}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 sm:mt-16 text-center"
        >
          <p className="text-gray-600 text-xs sm:text-base lg:text-lg">
            ¿Necesitas un plan personalizado? <button onClick={() => handleSelectPlan('Personalizado')} className="text-orange-600 font-semibold hover:text-orange-700 transition-colors">Contáctanos</button>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;