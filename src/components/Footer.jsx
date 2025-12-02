import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, Linkedin, Github, Mail } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Footer = () => {
  const { toast } = useToast();
  // Using the larger vertical logo version for the footer
  const logoUrl = "https://horizons-cdn.hostinger.com/97f372b0-4310-4e8b-9932-1813a2ba56ef/152b761bbaa3c3f6ba513590e7c950c6.png";


  const handleSocialClick = (platform) => {
    toast({
      title: '🚧 Esta función aún no está implementada',
      description: '¡Pero no te preocupes! Puedes solicitarla en tu próximo mensaje. 🚀',
    });
  };

  const handleLinkClick = (link) => {
    toast({
      title: '🚧 Esta función aún no está implementada',
      description: '¡Pero no te preocupes! Puedes solicitarla en tu próximo mensaje. 🚀',
    });
  };

  const footerLinks = {
    producto: [
      { name: 'Características', href: '#' },
      { name: 'Precios', href: '#' },
      { name: 'Integraciones', href: '#' },
      { name: 'Actualizaciones', href: '#' }
    ],
    empresa: [
      { name: 'Acerca de', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Carreras', href: '#' },
      { name: 'Contacto', href: '#' }
    ],
    recursos: [
      { name: 'Ayuda', href: '#' },
      { name: 'Tutoriales', href: '#' },
      { name: 'API', href: '#' },
      { name: 'Comunidad', href: '#' }
    ],
    legal: [
      { name: 'Privacidad', href: '#' },
      { name: 'Términos', href: '#' },
      { name: 'Seguridad', href: '#' },
      { name: 'Cookies', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: Twitter, name: 'Twitter' },
    { icon: Linkedin, name: 'LinkedIn' },
    { icon: Github, name: 'GitHub' },
    { icon: Mail, name: 'Email' }
  ];

  return (
    <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-4">
                {/* Logo */}
                <img src={logoUrl} alt="Flowi Logo" className="h-12 sm:h-16 w-auto" /> {/* Adjusted height for better visibility */}
              </div>
              <p className="text-gray-400 mb-6 max-w-xs">
                Tu productividad sin estrés, guiada por la simplicidad. Transforma tu manera de trabajar.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <button
                    key={social.name}
                    onClick={() => handleSocialClick(social.name)}
                    className="w-10 h-10 bg-gray-800 hover:bg-orange-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </button>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <span className="text-white font-semibold mb-4 block capitalize">
                {category}
              </span>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => handleLinkClick(link.name)}
                      className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 border-t border-gray-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 Flowi. Todos los derechos reservados.
            </p>
            <p className="text-gray-500 text-sm">
              Hecho con ❤️ para aumentar tu productividad
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;