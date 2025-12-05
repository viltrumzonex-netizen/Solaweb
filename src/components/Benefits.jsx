import React from 'react';
import { Zap, Target, TrendingUp, Clock, AlertCircle, PieChart } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: Zap,
      role: "Para el Dueño del Negocio",
      items: [
        { title: "Visibilidad Total", impact: "Conozca el estado de su negocio desde cualquier lugar" },
        { title: "Control de Inventario", impact: "Evite pérdidas por desabastecimiento o exceso de stock" },
        { title: "Flujo de Caja", impact: "Rastree cada bolívar y dólar que entra y sale" },
        { title: "Toma de Decisiones", impact: "Datos reales para estrategias efectivas" },
        { title: "Ahorro de Tiempo", impact: "Automatización de tareas administrativas" }
      ]
    },
    {
      icon: Target,
      role: "Para el Equipo de Ventas",
      items: [
        { title: "Agilidad", impact: "Procese ventas en segundos" },
        { title: "Precisión", impact: "Cálculos automáticos sin errores" },
        { title: "Información", impact: "Stock disponible en tiempo real" },
        { title: "Flexibilidad", impact: "Múltiples métodos de pago" },
        { title: "Profesionalismo", impact: "Interfaz moderna y fácil de usar" }
      ]
    },
    {
      icon: PieChart,
      role: "Para la Administración",
      items: [
        { title: "Reportes Automáticos", impact: "Información lista cuando la necesite" },
        { title: "Control de Créditos", impact: "Seguimiento de cuentas por cobrar" },
        { title: "Gestión Bancaria", impact: "Todas las cuentas centralizadas" },
        { title: "Auditoría", impact: "Trazabilidad completa de operaciones" },
        { title: "Cumplimiento", impact: "Registros ordenados para obligaciones fiscales" }
      ]
    }
  ];

  return (
    <section id="benefits" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Beneficios Empresariales
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Diseñado para impulsar cada área de su negocio
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((section, idx) => {
            const Icon = section.icon;
            return (
              <div key={idx} className="bg-orange-50 backdrop-blur-sm rounded-2xl p-8 border border-orange-200 hover:border-orange-400 transition-all duration-300">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{section.role}</h3>
                </div>

                <div className="space-y-5">
                  {section.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="border-l-2 border-orange-300 pl-4">
                      <h4 className="font-semibold text-gray-800 mb-1">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.impact}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* ROI Section */}
        <div className="mt-16 bg-gradient-to-r from-orange-400 to-orange-500 rounded-2xl p-8 border border-orange-600/50">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Inversión vs. Retorno</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <AlertCircle className="w-5 h-5" /> Sin Flowi
              </h4>
              <ul className="space-y-3 text-white">
                <li>• Horas en cálculos manuales</li>
                <li>• Pérdidas por desabastecimiento</li>
                <li>• Cuentas pendientes olvidadas</li>
                <li>• Decisiones basadas en intuición</li>
                <li>• Errores en cambio de moneda</li>
              </ul>
            </div>
            <div className="bg-white/20 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5" /> Con Flowi
              </h4>
              <ul className="space-y-3 text-white">
                <li>✓ Cierres automáticos en segundos</li>
                <li>✓ Alertas preventivas de stock</li>
                <li>✓ Seguimiento automático de cobros</li>
                <li>✓ Estrategias basadas en datos</li>
                <li>✓ Conversión automática precisa</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
