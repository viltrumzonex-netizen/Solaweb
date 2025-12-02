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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Planes para Cada Necesidad
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comienza gratis y escala cuando lo necesites
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6">
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
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                    Más Popular
                  </div>
                </div>
              )}

              <div className={`relative bg-white rounded-2xl border-2 ${plan.popular ? 'border-orange-500 shadow-2xl scale-105' : 'border-gray-200 shadow-lg'} p-8 hover:shadow-2xl transition-all duration-300 h-full flex flex-col`}>
                {/* Icon and Name */}
                <div className="mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-br ${plan.gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                    <plan.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-5xl font-bold text-gray-900">
                      ${plan.price}
                    </span>
                    <span className="ml-2 text-gray-600">
                      /{plan.period}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className={`w-5 h-5 bg-gradient-to-br ${plan.gradient} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  onClick={() => handleSelectPlan(plan.name)}
                  className={`w-full py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ${
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
          className="mt-16 text-center"
        >
          <p className="text-gray-600 text-lg">
            ¿Necesitas un plan personalizado? <button onClick={() => handleSelectPlan('Personalizado')} className="text-orange-600 font-semibold hover:text-orange-700 transition-colors">Contáctanos</button>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;