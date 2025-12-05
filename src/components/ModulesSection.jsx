import React, { useState } from 'react';
import { ChevronDown, ShoppingCart, Package, TrendingUp, Users, BarChart3, Lock, CreditCard, FileText } from 'lucide-react';

const ModulesSection = () => {
  const [expandedModule, setExpandedModule] = useState(0);

  const modules = [
    {
      icon: ShoppingCart,
      title: "Punto de Venta Inteligente",
      subtitle: "Procese ventas en segundos",
      details: {
        problem: "Registros manuales y lentos que generan cuellos de botella en las ventas",
        features: [
          "Interfaz visual con catálogo de productos interactivo",
          "Carrito de compras dinámico con cálculos automáticos",
          "Múltiples métodos de pago: Efectivo USD, Bolívares, Pago Móvil, Zelle, Pagos Mixtos",
          "Validación de stock en tiempo real",
          "Referencias de pago y últimos 4 dígitos para trazabilidad"
        ],
        impact: "Tiempo de procesamiento reducido de minutos a segundos"
      }
    },
    {
      icon: Package,
      title: "Gestión de Inventario",
      subtitle: "Conozca su stock en todo momento",
      details: {
        problem: "Desabastecimiento sorpresivo y pérdida de ventas o exceso de inventario sin salida",
        features: [
          "Panel visual con métricas clave del inventario",
          "Total de productos y valor total en USD/VES",
          "Sistema de alertas automáticas configurables",
          "Gestión completa con precios en doble moneda",
          "Galería de imágenes múltiples por producto",
          "Búsqueda y filtros avanzados"
        ],
        impact: "Eliminación de pérdidas por desabastecimiento o sobreinventario"
      }
    },
    {
      icon: TrendingUp,
      title: "Control Financiero Multimoneda",
      subtitle: "Domine sus finanzas en cualquier moneda",
      details: {
        problem: "Confusión con cambios de moneda y cálculos errados en conversiones",
        features: [
          "Soporte nativo para USD y Bolívares",
          "Tasa de cambio configurable con actualización manual o automática",
          "Conversión automática de precios",
          "Balance consolidado en ambas monedas",
          "Historial de tasas de cambio"
        ],
        impact: "Precisión absoluta en cálculos financieros en cualquier moneda"
      }
    },
    {
      icon: CreditCard,
      title: "Gestión de Cuentas Bancarias",
      subtitle: "Todas sus cuentas en un solo lugar",
      details: {
        problem: "Cuentas dispersas sin seguimiento centralizado de transacciones",
        features: [
          "Registro de múltiples cuentas: Pago Móvil, Zelle, Transferencias",
          "Seguimiento detallado de transacciones con referencias",
          "Estadísticas bancarias con balances por moneda",
          "Sincronización automática con ventas",
          "Historial completo de ingresos y egresos"
        ],
        impact: "Visibilidad completa de todas las transacciones bancarias"
      }
    },
    {
      icon: FileText,
      title: "Cuentas por Cobrar",
      subtitle: "Nunca pierda de vista un pago pendiente",
      details: {
        problem: "Dinero no cobrado por falta de seguimiento y control de plazos",
        features: [
          "Registro de facturas a crédito con asignación a clientes",
          "Estados de cuenta: Pendiente, Pagado, Vencido, Cancelado",
          "Términos de pago configurables (15, 30, 45, 60, 90 días)",
          "Alertas automáticas de vencimiento",
          "Gráficos de distribución de cartera"
        ],
        impact: "Aumento en la recuperación de cartera vencida"
      }
    },
    {
      icon: Users,
      title: "Gestión de Clientes y Proveedores",
      subtitle: "Construya relaciones comerciales sólidas",
      details: {
        problem: "Información dispersa sin base de datos centralizada de contactos",
        features: [
          "Directorio completo de clientes con información de contacto",
          "Límites de crédito y términos de pago personalizados",
          "Base de datos de proveedores con información fiscal",
          "Datos bancarios para pagos",
          "Estado activo/inactivo"
        ],
        impact: "Información centralizada para mejor toma de decisiones comerciales"
      }
    },
    {
      icon: BarChart3,
      title: "Dashboard Ejecutivo",
      subtitle: "Tome decisiones informadas con datos en tiempo real",
      details: {
        problem: "Falta de visibilidad ejecutiva y decisiones basadas en intuición",
        features: [
          "Métricas clave al instante: Ingresos, Ventas, Inventario, Cuentas por Cobrar",
          "Gráficos interactivos de tendencias y productos más vendidos",
          "Comparativas mensuales",
          "Resumen de métodos de pago",
          "Acciones rápidas desde el dashboard"
        ],
        impact: "Decisiones estratégicas basadas en datos en tiempo real"
      }
    },
    {
      icon: FileText,
      title: "Reportes y Análisis",
      subtitle: "Información estratégica para su crecimiento",
      details: {
        problem: "Dificultad para generar reportes y analizar tendencias históricas",
        features: [
          "Reportes personalizables por período: 7, 30, 90 días y último año",
          "Análisis de ventas, productos top y segmentos de clientes",
          "Exportación en PDF y CSV",
          "Métricas: Ingresos, Ticket Promedio, Transacciones, Clientes Activos",
          "Reportes formateados con logo de la empresa"
        ],
        impact: "Acceso inmediato a información estratégica para crecimiento"
      }
    }
  ];

  return (
    <section id="modules" className="py-12 sm:py-16 lg:py-24 px-3 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-orange-50">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Módulos Completos de Gestión
          </h2>
          <p className="text-sm sm:text-base lg:text-xl text-gray-600 max-w-2xl mx-auto px-2">
            Cada módulo está diseñado para resolver problemas específicos de tu negocio
          </p>
        </div>

        {/* Modules Accordion */}
        <div className="space-y-3 sm:space-y-4">
          {modules.map((module, index) => {
            const Icon = module.icon;
            const isExpanded = expandedModule === index;
            
            return (
              <div
                key={index}
                className={`border border-orange-200 rounded-lg overflow-hidden transition-all duration-300 ${
                  isExpanded ? 'bg-orange-50 shadow-lg shadow-orange-200/40' : 'bg-orange-50 hover:bg-orange-100'
                }`}
              >
                {/* Header */}
                <button
                  onClick={() => setExpandedModule(isExpanded ? -1 : index)}
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 flex items-center gap-3 sm:gap-4 hover:bg-orange-100 transition-colors"
                >
                  <div className="p-2 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex-shrink-0">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div className="flex-1 text-left min-w-0">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 truncate">{module.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-600 line-clamp-1">{module.subtitle}</p>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 sm:w-5 sm:h-5 text-orange-400 transition-transform duration-300 flex-shrink-0 ${
                      isExpanded ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Content */}
                {isExpanded && (
                  <div className="px-4 sm:px-6 py-4 sm:py-6 border-t border-orange-200 bg-orange-50">
                    {/* Problem */}
                    <div className="mb-4 sm:mb-6 pb-4 sm:pb-6 border-b border-orange-200">
                      <h4 className="text-xs sm:text-sm font-semibold text-red-500 mb-2">El Problema</h4>
                      <p className="text-gray-700 text-xs sm:text-sm">{module.details.problem}</p>
                    </div>

                    {/* Features */}
                    <div className="mb-4 sm:mb-6 pb-4 sm:pb-6 border-b border-purple-700/50">
                      <h4 className="text-xs sm:text-sm font-semibold text-orange-600 mb-3 sm:mb-4">Características</h4>
                      <ul className="space-y-1.5 sm:space-y-2">
                        {module.details.features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex gap-2 sm:gap-3 text-gray-700 text-xs sm:text-sm">
                            <span className="text-orange-500 font-bold flex-shrink-0">✓</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Impact */}
                    <div className="bg-gradient-to-r from-orange-100 to-orange-50 rounded-lg p-3 sm:p-4">
                      <h4 className="text-xs sm:text-sm font-semibold text-gray-800 mb-1">Impacto</h4>
                      <p className="text-gray-800 font-semibold text-xs sm:text-sm">{module.details.impact}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;
