import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer = () => {
  const logoUrl = "https://horizons-cdn.hostinger.com/97f372b0-4310-4e8b-9932-1813a2ba56ef/152b761bbaa3c3f6ba513590e7c950c6.png";

  return (
    <footer className="bg-gray-900 text-white py-10 sm:py-16 px-3 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 mb-10 sm:mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <img src={logoUrl} alt="Flowi Logo" className="h-10 sm:h-12 lg:h-16 w-auto" />
            </div>
            <p className="text-gray-400 mb-5 sm:mb-6 max-w-xs text-sm sm:text-base">
              Tu productividad sin estrés, guiada por la simplicidad. Transforma tu manera de trabajar.
            </p>
          </motion.div>

          {/* Legal Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-white font-semibold text-base">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/terminos-y-condiciones"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300 text-sm sm:text-base"
                >
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link
                  to="/politica-privacidad"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300 text-sm sm:text-base"
                >
                  Política de Privacidad
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-6 sm:pt-8 border-t border-gray-800"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-center sm:text-left">
            <p className="text-gray-400 text-xs sm:text-sm">
              © 2025 Flowi. Todos los derechos reservados.
            </p>
            <p className="text-gray-500 text-xs sm:text-sm">
              Hecho con ❤️ para aumentar tu productividad
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
