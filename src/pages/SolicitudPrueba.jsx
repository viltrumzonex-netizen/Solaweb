import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const SolicitudPrueba = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    empresa: '',
    telefono: '',
    pais: '',
    tipoNegocio: '',
    mensaje: ''
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Enviar email usando FormSubmit (alternativa a Formspree)
      const formBody = new FormData();
      formBody.append('nombre', formData.nombre);
      formBody.append('apellido', formData.apellido);
      formBody.append('email', formData.email);
      formBody.append('empresa', formData.empresa);
      formBody.append('telefono', formData.telefono);
      formBody.append('pais', formData.pais);
      formBody.append('tipoNegocio', formData.tipoNegocio);
      formBody.append('mensaje', formData.mensaje);

      const response = await fetch('https://formspree.io/f/xanrbkop', {
        method: 'POST',
        body: formBody,
        headers: {
          'Accept': 'application/json'
        }
      });
      if (response.ok) {
        // Redirigir a página de confirmación
        navigate('/confirmacion-registro');
      } else {
        setError('Hubo un error al enviar el formulario. Intenta nuevamente.');
      }
    } catch (err) {
      setError('Error al conectar con el servidor. Intenta nuevamente.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-orange-50">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-8 px-4 sm:px-6 lg:px-8 bg-white/70 backdrop-blur-md border-b border-orange-200 sticky top-16 z-20"
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            Solicita tu Prueba Gratuita
          </h1>
          <p className="text-gray-600 text-lg">
            Acceso completo a Flowi durante 14 días, sin tarjeta de crédito requerida
          </p>
        </div>
      </motion.div>

      {/* Content */}
      <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl p-6 sm:p-10 border border-orange-100"
          >
            {/* Form Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 pb-8 border-b border-orange-100">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 mb-3">
                  <span className="text-xl">✓</span>
                </div>
                <p className="text-sm text-gray-600">14 días gratis</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 mb-3">
                  <span className="text-xl">✓</span>
                </div>
                <p className="text-sm text-gray-600">Sin tarjeta requerida</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 mb-3">
                  <span className="text-xl">✓</span>
                </div>
                <p className="text-sm text-gray-600">Acceso completo</p>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm"
                >
                  {error}
                </motion.div>
              )}

              {/* Nombre y Apellido */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all text-gray-900" // MODIFICADO
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Apellido *
                  </label>
                  <input
                    type="text"
                    name="apellido"
                    value={formData.apellido}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all text-gray-900" // MODIFICADO
                    placeholder="Tu apellido"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all text-gray-900" // MODIFICADO
                  placeholder="tu@email.com"
                />
              </div>

              {/* Teléfono y País */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all text-gray-900" // MODIFICADO
                    placeholder="+58 (123) 456-7890"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    País *
                  </label>
                  <select
                    name="pais"
                    value={formData.pais}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all bg-white text-gray-900" // MODIFICADO
                  >
                    <option value="">Selecciona un país</option>
                    <option value="Venezuela">Venezuela</option>
                    <option value="Colombia">Colombia</option>
                    <option value="México">México</option>
                    <option value="Argentina">Argentina</option>
                    <option value="España">España</option>
                    <option value="Otro">Otro</option>
                  </select>
                </div>
              </div>

              {/* Empresa */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Nombre de la Empresa *
                </label>
                <input
                  type="text"
                  name="empresa"
                  value={formData.empresa}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all text-gray-900" // MODIFICADO
                  placeholder="Nombre de tu empresa"
                />
              </div>

              {/* Tipo de Negocio */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Tipo de Negocio *
                </label>
                <select
                  name="tipoNegocio"
                  value={formData.tipoNegocio}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all bg-white text-gray-900" // MODIFICADO
                >
                  <option value="">Selecciona un tipo</option>
                  <option value="Retail">Retail / Tienda</option>
                  <option value="Servicios">Servicios</option>
                  <option value="Restaurante">Restaurante / Café</option>
                  <option value="Farmacia">Farmacia</option>
                  <option value="Electrónica">Electrónica</option>
                  <option value="Ropa">Ropa y Moda</option>
                  <option value="Supermercado">Supermercado</option>
                  <option value="Otro">Otro</option>
                </select>
              </div>

              {/* Mensaje */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Cuéntanos sobre tu negocio (opcional)
                </label>
                <textarea
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all resize-none text-gray-900" // MODIFICADO
                  placeholder="¿Cuáles son tus principales necesidades?"
                  rows="4"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl hover:shadow-orange-400/40 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Enviando...' : 'Solicitar Prueba Gratuita'}
              </motion.button>

              {/* Privacy Notice */}
              <p className="text-center text-xs sm:text-sm text-gray-500">
                Al continuar, aceptas nuestros{' '}
                <a href="/terminos-y-condiciones" className="text-orange-600 hover:text-orange-700">
                  Términos y Condiciones
                </a>{' '}
                y{' '}
                <a href="/politica-privacidad" className="text-orange-600 hover:text-orange-700">
                  Política de Privacidad
                </a>
              </p>
            </form>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-orange-100 shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="text-2xl">⚡</span> Rápido de Configurar
                </h3>
                <p className="text-gray-600 text-sm">
                  Comienza en minutos. Tu equipo estará productivo el mismo día.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-orange-100 shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="text-2xl">🔒</span> Totalmente Seguro
                </h3>
                <p className="text-gray-600 text-sm">
                  Tus datos están encriptados y protegidos en la nube con Supabase.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-orange-100 shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="text-2xl">📞</span> Soporte Dedicado
                </h3>
                <p className="text-gray-600 text-sm">
                  Nuestro equipo está aquí para ayudarte en cada paso del camino.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-orange-100 shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="text-2xl">💰</span> Precio Flexible
                </h3>
                <p className="text-gray-600 text-sm">
                  Planes adaptados a cualquier tamaño de negocio, desde startups hasta pymes.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SolicitudPrueba;