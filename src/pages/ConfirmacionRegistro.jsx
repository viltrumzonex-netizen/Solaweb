import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const ConfirmacionRegistro = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirigir al home después de 10 segundos
    const timer = setTimeout(() => {
      navigate('/#home');
    }, 10000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-orange-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-2xl p-8 sm:p-12 border border-orange-100 text-center"
        >
          {/* Success Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, type: 'spring', stiffness: 100 }}
            className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 mb-6 mx-auto"
          >
            <svg
              className="w-10 h-10 sm:w-12 sm:h-12 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            ¡Solicitud Enviada!
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg sm:text-xl text-gray-600 mb-8"
          >
            Hemos recibido tu solicitud de prueba gratuita
          </motion.p>

          {/* Details Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-orange-50 rounded-xl p-6 sm:p-8 border border-orange-200 mb-8"
          >
            <p className="text-gray-700 mb-4 text-base sm:text-lg">
              Pronto recibirás un correo electrónico en tu bandeja de entrada con:
            </p>
            <ul className="space-y-3 text-left max-w-md mx-auto">
              <li className="flex items-center gap-3 text-gray-700">
                <svg
                  className="w-5 h-5 text-orange-600 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Tu cuenta de acceso</span>
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <svg
                  className="w-5 h-5 text-orange-600 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Instrucciones para empezar</span>
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <svg
                  className="w-5 h-5 text-orange-600 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Acceso a soporte premium</span>
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <svg
                  className="w-5 h-5 text-orange-600 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Guía de configuración rápida</span>
              </li>
            </ul>
          </motion.div>

          {/* Info Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-blue-50 rounded-xl p-6 border border-blue-200 mb-8"
          >
            <p className="text-sm sm:text-base text-blue-900">
              <strong>📧 Revisa tu spam:</strong> Si no ves nuestro correo en los próximos 5 minutos, 
              revisa tu carpeta de spam o contacta a <span className="font-semibold">whilder_2014@hotmail.com</span>
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={() => navigate('/#home')}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Volver al Inicio
            </button>
            <a
              href="https://wa.me/584121156707" // Nueva URL de WhatsApp
              target="_blank" // Para abrir en una pestaña nueva
              rel="noopener noreferrer" // Seguridad web estándar
              className="px-6 sm:px-8 py-3 sm:py-4 bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
            >
              Contactar Soporte
            </a>
          </motion.div>

          {/* Timer */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-sm text-gray-500 mt-8"
          >
            Serás redirigido al inicio en 10 segundos...
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default ConfirmacionRegistro;
