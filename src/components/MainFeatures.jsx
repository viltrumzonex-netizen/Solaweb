import React from 'react';
import { ShoppingCart, Package, TrendingUp, Users, BarChart3, Lock, CreditCard, FileText } from 'lucide-react';

const MainFeatures = () => {
  const features = [
    {
      icon: ShoppingCart,
      title: "Punto de Venta Inteligente",
      description: "Procese ventas en segundos con interfaz visual intuitiva. Soporte para múltiples métodos de pago: Efectivo, Bolívares, Pago Móvil, Zelle y pagos mixtos.",
      highlight: "Validación de stock en tiempo real"
    },
    {
      icon: Package,
      title: "Gestión de Inventario",
      description: "Conozca su stock en todo momento. Alertas automáticas de stock bajo, galería de imágenes y búsqueda avanzada.",
      highlight: "Valor total del inventario en USD y VES"
    },
    {
      icon: TrendingUp,
      title: "Control Financiero Multimoneda",
      description: "Domine sus finanzas en USD y Bolívares. Tasa de cambio configurable con sincronización automática.",
      highlight: "Balance consolidado en ambas monedas"
    },
    {
      icon: Users,
      title: "Gestión de Clientes y Proveedores",
      description: "Directorio completo con información de contacto, límites de crédito y términos de pago personalizados.",
      highlight: "Base de datos centralizada y completa"
    },
    {
      icon: BarChart3,
      title: "Dashboard Ejecutivo",
      description: "Tome decisiones informadas con datos en tiempo real. Métricas clave, gráficos interactivos y comparativas mensuales.",
      highlight: "Ingresos, ventas y análisis al instante"
    },
    {
      icon: FileText,
      title: "Reportes y Análisis",
      description: "Reportes personalizables por período. Exportación en PDF y CSV para análisis detallado.",
      highlight: "Información estratégica para su crecimiento"
    },
    {
      icon: CreditCard,
      title: "Cuentas por Cobrar",
      description: "Nunca pierda de vista un pago pendiente. Alertas automáticas de vencimiento y seguimiento de cartera.",
      highlight: "Estados de cuenta y tendencias de cobros"
    },
    {
      icon: Lock,
      title: "Seguridad y Respaldo",
      description: "Autenticación de usuarios, roles y permisos, datos encriptados. Respaldo en la nube con sincronización offline.",
      highlight: "Trazabilidad completa de operaciones"
    }
  ];

  return (
    <section id="main-features" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-orange-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Características Principales
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Todas las herramientas que necesita para profesionalizar su negocio
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-orange-50 backdrop-blur-sm rounded-lg p-6 border border-orange-200 hover:border-orange-400 transition-all duration-300 hover:shadow-xl hover:shadow-orange-200/40"
              >
                <div className="mb-4 inline-block p-3 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {feature.description}
                </p>
                <div className="pt-4 border-t border-orange-200">
                  <p className="text-sm text-orange-600 font-medium">
                    ✓ {feature.highlight}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MainFeatures;
