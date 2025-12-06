import React from 'react';
import { motion } from 'framer-motion';

const PoliticaPrivacidad = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-orange-50">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-8 px-4 sm:px-6 lg:px-8 bg-white/70 backdrop-blur-md border-b border-orange-200"
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Política de Privacidad</h1>
          <p className="text-gray-600">Vigencia: Diciembre 2025</p>
        </div>
      </motion.div>

      {/* Content */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-6 text-gray-700">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Responsable del Tratamiento de Datos</h2>
              <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                <p><strong>Entidad:</strong> Flowi - Sistema Integral de Gestión Comercial</p>
                <p><strong>Correo de Contacto:</strong> privacy@flowi.app</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Tipos de Datos que Recopilamos</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">A. Datos del Usuario (Datos del Cliente de Flowi)</h3>
              <p className="mb-3">Información recopilada directamente para crear y mantener su cuenta:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>Nombre completo, correo electrónico, número de teléfono</li>
                <li>Nombre de la empresa, RIF/CI</li>
                <li>Credenciales de acceso</li>
                <li>Datos de pago y registro de suscripción</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">B. Datos Comerciales (Datos de Terceros Ingresados por el Usuario)</h3>
              <p className="mb-3">Información sensible que ingresa en la Plataforma sobre su negocio:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Transacciones y Ventas:</strong> Historial de ventas, ingresos, detalles de productos, métodos de pago, referencias de pago y cierres de caja</li>
                <li><strong>Inventario:</strong> Nombres de productos, precios en doble moneda (USD/VES), stock y costos</li>
                <li><strong>Datos Financieros:</strong> Balances y transacciones de cuentas bancarias</li>
                <li><strong>Contactos de Terceros:</strong> Información de clientes y proveedores</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Finalidad de la Recolección de Datos</h2>
              <div className="space-y-4">
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Datos del Usuario (2.A)</h4>
                  <p className="text-sm text-gray-600">Gestionar la cuenta, facturar la suscripción, proporcionar asistencia técnica y notificaciones sobre el servicio.</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Datos Comerciales (2.B)</h4>
                  <p className="text-sm text-gray-600">Proporcionar funcionalidades esenciales: procesar ventas, calcular stock, generar reportes, conversiones de moneda y cierre de caja.</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Ambos Tipos</h4>
                  <p className="text-sm text-gray-600">Mejorar la Plataforma, garantizar seguridad y realizar respaldos automáticos.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Seguridad y Almacenamiento</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Respaldo y Almacenamiento</h3>
              <p className="mb-4">Los datos están protegidos y almacenados en la nube utilizando Supabase, con cifrado en tránsito y en reposo.</p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Medidas de Seguridad</h3>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>Encriptación de datos sensibles</li>
                <li>Autenticación segura de usuarios</li>
                <li>Sistema robusto de roles y permisos</li>
                <li>Acceso restringido y auditoria</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Retención de Datos</h3>
              <p>Retendremos sus datos mientras su cuenta esté activa. Tras cancelar su suscripción, los datos serán eliminados conforme a nuestra política de retención interna (generalmente tras 90 días).</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Transferencia y Compartición de Datos</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Política General</h3>
              <p className="mb-4">Flowi no vende sus datos ni sus Datos Comerciales a terceros.</p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Compartición Permitida</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Proveedores de Servicios:</strong> Datos limitados con terceros que ayudan a operar (hosting, procesador de pagos, APIs de tasa de cambio)</li>
                <li><strong>Requerimiento Legal:</strong> Si estamos obligados por orden judicial o proceso legal vinculante</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Derechos del Usuario</h2>
              <p className="mb-4">Usted tiene derechos sobre sus propios datos (Datos del Usuario 2.A). Puede ejercerlos contactando a privacy@flowi.app:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Derecho de Acceso:</strong> Solicitar una copia de sus datos</li>
                <li><strong>Derecho de Rectificación:</strong> Solicitar corrección de datos inexactos</li>
                <li><strong>Derecho de Supresión:</strong> Solicitar eliminación de sus datos</li>
                <li><strong>Derecho de Oposición:</strong> Oponerse al procesamiento de datos</li>
                <li><strong>Derecho a la Portabilidad:</strong> Recibir sus datos en formato estructurado</li>
              </ul>

              <div className="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
                <p className="text-sm text-gray-700">
                  <strong>Nota sobre Datos Comerciales (2.B):</strong> Si es controlador de datos de sus clientes, cualquier solicitud de terceros debe ser dirigida a usted. Flowi le proporcionará herramientas para cumplir.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Uso de Cookies</h2>
              <p className="mb-4">Flowi utiliza cookies para funcionalidad y análisis:</p>
              
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Cookies Técnicas (Esenciales)</h3>
              <p className="mb-4">Necesarias para que la aplicación funcione (mantener sesión iniciada, autenticación).</p>

              <h3 className="text-lg font-semibold text-gray-800 mb-2">Cookies Analíticas</h3>
              <p className="mb-4">Nos ayudan a entender cómo interactúan los usuarios con la Plataforma para mejorarla.</p>

              <p className="text-sm text-gray-600">Al usar Flowi, usted acepta el uso de estas cookies.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Cambios en la Política de Privacidad</h2>
              <p>
                Podemos actualizar esta Política periódicamente. Le notificaremos cualquier cambio importante mediante notificación dentro de la Plataforma o correo electrónico. El uso continuado de Flowi constituye aceptación de la nueva Política.
              </p>
            </section>

            <div className="mt-12 p-6 bg-orange-50 rounded-lg border border-orange-200">
              <h3 className="font-semibold text-gray-900 mb-2">¿Preguntas sobre Privacidad?</h3>
              <p className="text-sm text-gray-600">
                Contáctenos a: <strong>privacy@flowi.app</strong>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PoliticaPrivacidad;
