import React from 'react';
import { motion } from 'framer-motion';
import { Eye, RefreshCw, Target } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Eye,
      title: 'Visualiza',
      description: 'Observa todas tus tareas en un tablero claro e intuitivo. Entiende tu carga de trabajo de un vistazo y prioriza con facilidad.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: RefreshCw,
      title: 'Sincroniza',
      description: 'Mantén todo actualizado en tiempo real entre todos tus dispositivos. Accede a tu flujo de trabajo desde donde estés.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Target,
      title: 'Concéntrate',
      description: 'Elimina las distracciones y enfócate en lo que realmente importa. Una tarea a la vez, un objetivo cumplido.',
      color: 'from-green-500 to-green-600'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
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
            Productividad Simplificada
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tres pilares fundamentales para transformar tu manera de trabajar
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="relative bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative element */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${feature.color} opacity-5 rounded-bl-full`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20"
        >
          <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
            <img className="w-full h-auto" alt="Flowi features showcase with task visualization" src="https://images.unsplash.com/photo-1648134859211-4a1b57575f4e" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;