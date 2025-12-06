import React from 'react';
import { motion } from 'framer-motion';

const TerminosCondiciones = () => {
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
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Términos y Condiciones</h1>
          <p className="text-gray-600">Últimas actualización: Diciembre 2025</p>
        </div>
      </motion.div>

      {/* Content */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-gray-700"
          >
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Aceptación de los Términos</h2>
              <p>
                Al acceder y utilizar la plataforma Flowi (la "Plataforma"), usted ("Usuario" o "Cliente") acepta y se compromete a cumplir con estos Términos y Condiciones de Uso ("Términos"). Si no está de acuerdo con estos Términos, no debe usar la Plataforma.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Descripción del Servicio</h2>
              <p>
                Flowi es un Sistema Integral de Gestión Comercial, una Aplicación Web Progresiva (PWA), diseñada para asistir a emprendedores y PYMEs en la profesionalización de sus operaciones comerciales. La Plataforma ofrece módulos clave que incluyen:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Punto de Venta Inteligente y multimoneda (USD/VES)</li>
                <li>Gestión Profesional de Inventario con alertas de stock</li>
                <li>Control Financiero, Conversión de Divisas y Gestión de Cuentas Bancarias</li>
                <li>Gestión de Cuentas por Cobrar, Clientes y Proveedores</li>
                <li>Dashboard Ejecutivo, Reportes y Cierre de Caja Automatizado</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Uso y Acceso a la Plataforma</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Requisitos</h3>
              <p>Para usar Flowi, el Usuario requiere una conexión a internet y un navegador web compatible (Chrome, Firefox, Safari, Edge).</p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">Cuentas de Usuario</h3>
              <p>El acceso está restringido a usuarios registrados. El Cliente es responsable de mantener la confidencialidad de sus credenciales de acceso y de todas las actividades que ocurran bajo su cuenta, incluyendo las realizadas por usuarios secundarios con roles y permisos asignados.</p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">Uso Permitido</h3>
              <p>La Plataforma solo debe utilizarse para fines comerciales legítimos relacionados con la gestión del negocio del Usuario, tal como se describe en estos Términos.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Obligaciones del Usuario</h2>
              <p>El Usuario se compromete a:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Veracidad de la Información:</strong> Proporcionar información precisa y completa durante el registro y mantenerla actualizada.</li>
                <li><strong>Cumplimiento Legal:</strong> Utilizar la Plataforma en cumplimiento con todas las leyes y regulaciones aplicables en su jurisdicción, incluidas las obligaciones fiscales, laborales y de protección al consumidor.</li>
                <li><strong>Datos y Transacciones:</strong> El Usuario es el único responsable de la exactitud de todos los datos ingresados en la Plataforma (precios, inventario, tasas de cambio manuales, referencias de pago, etc.). Flowi actúa como una herramienta de registro y gestión, pero no como un validador fiscal o bancario primario.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Propiedad Intelectual</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Propiedad de Flowi</h3>
              <p>La Plataforma Flowi, su código, diseño, interfaz de usuario, manuales, logotipos y todo el contenido asociado son propiedad exclusiva de Flowi y están protegidos por leyes de derechos de autor y propiedad intelectual.</p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">Propiedad del Contenido del Usuario</h3>
              <p>El Usuario conserva la propiedad de los datos, información, imágenes y documentos que cargue o ingrese en la Plataforma (datos de ventas, inventario, clientes, etc.). Flowi utilizará estos datos únicamente para proporcionar el servicio.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Políticas de Pago y Facturación</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Suscripción</h3>
              <p>El acceso a Flowi se proporciona mediante un modelo de suscripción, cuyos detalles de precios, planes y períodos se especificarán en un Anexo de Precios.</p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">Cambios de Precio</h3>
              <p>Flowi se reserva el derecho de modificar sus precios y planes de servicio, notificando a los Usuarios con al menos treinta (30) días de anticipación.</p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">Cancelación</h3>
              <p>La cancelación del servicio por parte del Usuario puede realizarse en cualquier momento, pero no dará lugar al reembolso de las tarifas ya pagadas por el período de facturación actual.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Limitación de Responsabilidad</h2>
              <p>Flowi se compromete a mantener la Plataforma operativa y segura. Sin embargo, el Usuario acepta que:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Uso "Tal Cual":</strong> La Plataforma se proporciona "tal cual" y "según disponibilidad". Flowi no garantiza que el servicio será ininterrumpido, libre de errores o que cumplirá con todas las expectativas del Usuario.</li>
                <li><strong>Datos y Pérdidas:</strong> Flowi utiliza un Respaldo en la nube con Supabase. No obstante, Flowi no será responsable por daños o pérdidas de datos que resulten de fallas técnicas fuera de su control directo, errores del usuario, o cualquier otra causa.</li>
                <li><strong>Confiabilidad de la Información:</strong> La función de Sincronización con APIs oficiales para la tasa de cambio depende de servicios externos. Flowi no garantiza la exactitud en tiempo real de estas tasas y el Usuario es responsable de su configuración y monitoreo.</li>
                <li><strong>Daños Indirectos:</strong> Flowi no será responsable por pérdidas de ingresos, oportunidades de negocio, o daños indirectos, consecuentes o especiales resultantes del uso o la incapacidad de usar la Plataforma.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Privacidad y Seguridad de Datos</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Confidencialidad</h3>
              <p>Flowi se compromete a proteger la confidencialidad de los datos del negocio del Usuario.</p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">Seguridad</h3>
              <p>Flowi implementa medidas de seguridad como la encriptación de datos, autenticación de usuarios y roles/permisos.</p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">Política de Privacidad</h3>
              <p>El uso de Flowi también se rige por su Política de Privacidad separada, que describe cómo se recopilan, usan y protegen los datos personales y comerciales.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Disposiciones Generales</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Modificaciones</h3>
              <p>Flowi se reserva el derecho de modificar estos Términos en cualquier momento. La notificación de cambios se realizará a través de la Plataforma o por correo electrónico. El uso continuado de la Plataforma después de dichas modificaciones constituye la aceptación de los nuevos Términos.</p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">Ley Aplicable y Jurisdicción</h3>
              <p>Estos Términos se regirán e interpretarán de acuerdo con las leyes aplicables en la jurisdicción del Usuario.</p>
            </section>

            <div className="mt-12 p-6 bg-orange-50 rounded-lg border border-orange-200">
              <p className="text-sm text-gray-600">
                Si tiene preguntas sobre estos Términos y Condiciones, contáctenos a través de nuestra plataforma.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TerminosCondiciones;
