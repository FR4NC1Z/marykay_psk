import React, { useState } from 'react';
import { Sun, Moon, Sparkles, Check, ArrowRight, ShieldCheck, Heart, MessageCircle } from 'lucide-react';

export default function ProductRoutine() {
  const [activeTab, setActiveTab] = useState('dia'); // 'dia' | 'noche' | 'todos'

  const products = [
    {
      id: 'cleanser',
      step: 'Paso 1',
      name: 'Limpiadora Facial 4 en 1 TimeWise®',
      badge: 'Día & Noche',
      time: 'both',
      benefits: [
        'Limpia en profundidad eliminando impurezas del ambiente',
        'Exfolia suavemente las células muertas sin irritar',
        'Refresca instantáneamente el rostro',
        'Ilumina y prepara la piel para absorber los tratamientos'
      ],
      desc: 'El primer paso indispensable para una piel limpia, suave y radiante todos los días.',
      tips: 'Aplica una pequeña cantidad con agua templada en rostro y cuello con movimientos circulares.'
    },
    {
      id: 'moisturizer',
      step: 'Paso 2',
      name: 'Humectante Facial Antioxidante TimeWise®',
      badge: 'Día & Noche',
      time: 'both',
      benefits: [
        'Hidratación intensa y continua por hasta 12 horas',
        'Fórmula ligera de rápida absorción no comedogénica',
        'Potente complejo antioxidante que previene el envejecimiento',
        'Mejora la elasticidad, firmeza y suavidad de la piel'
      ],
      desc: 'Mantiene la barrera de hidratación intacta contra el estrés oxidativo diario.',
      tips: 'Aplica después de limpiar sobre la piel seca con suaves toques ascendentes.'
    },
    {
      id: 'daytime',
      step: 'Paso 3 (Día)',
      name: 'Defensor de Día con FPS 30 TimeWise®',
      badge: 'Solo de Día',
      time: 'dia',
      benefits: [
        'Protección solar de amplio espectro UVA / UVB',
        'Defensa activa contra radicales libres y contaminación urbana',
        'Extracto botánico de flor de nopal que refuerza la barrera cutánea',
        'Acabado invisible sin sensación grasa ni residuos blancos'
      ],
      desc: 'Tu escudo diario indispensable contra el fotoenvejecimiento y las manchas solares.',
      tips: 'Aplica 15 minutos antes de exponerte a la luz solar o pantallas.'
    },
    {
      id: 'nighttime',
      step: 'Paso 3 (Noche)',
      name: 'Recuperador Nocturno TimeWise®',
      badge: 'Solo de Noche',
      time: 'noche',
      benefits: [
        'Perlas NutriBeads® que liberan resveratrol puro y vitaminas al romperse',
        'Estimula la producción natural de colágeno durante el descanso',
        'Repara el daño celular acumulado durante el día',
        'Despierta con la piel visiblemente descansada, firme y luminosa'
      ],
      desc: 'Un cóctel de nutrientes y perlas vivas que revitalizan la piel mientras duermes.',
      tips: 'Aplica antes de dormir sobre el rostro y cuello limpios.'
    }
  ];

  const filteredProducts = activeTab === 'todos' 
    ? products 
    : products.filter(p => p.time === 'both' || p.time === activeTab);

  return (
    <section id="timewise" className="py-20 relative bg-brand-cream overflow-hidden">
      
      {/* Decorative background circle */}
      <div className="absolute right-0 top-1/3 w-96 h-96 bg-brand-petal/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-petal/80 border border-brand-nude text-brand-deep text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Set Milagroso TimeWise®</span>
          </div>

          <h2 className="font-playfair text-3xl sm:text-5xl font-bold text-brand-wine">
            Tu rutina en 3 sencillos pasos
          </h2>
          <p className="font-allura text-3xl sm:text-4xl text-brand-deep">
            Cuidado antiedad inteligente para el día y la noche
          </p>
          <p className="text-sm sm:text-base text-brand-wine/75 max-w-xl mx-auto">
            El sistema favorito de Mary Kay para defender, demorar y demostrar resultados visibles en líneas finas, textura y luminosidad.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-full bg-white/90 border border-brand-nude/70 shadow-sm">
            <button
              onClick={() => setActiveTab('dia')}
              className={`flex items-center space-x-2 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === 'dia'
                  ? 'bg-brand-deep text-white shadow-sm'
                  : 'text-brand-wine hover:text-brand-deep'
              }`}
            >
              <Sun className="w-4 h-4" />
              <span>Rutina de Día</span>
            </button>

            <button
              onClick={() => setActiveTab('noche')}
              className={`flex items-center space-x-2 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === 'noche'
                  ? 'bg-brand-deep text-white shadow-sm'
                  : 'text-brand-wine hover:text-brand-deep'
              }`}
            >
              <Moon className="w-4 h-4" />
              <span>Rutina de Noche</span>
            </button>

            <button
              onClick={() => setActiveTab('todos')}
              className={`flex items-center space-x-2 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === 'todos'
                  ? 'bg-brand-deep text-white shadow-sm'
                  : 'text-brand-wine hover:text-brand-deep'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>Ver Todos (4 Productos)</span>
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((prod) => (
            <div
              key={prod.id}
              className="bg-white rounded-3xl p-7 border border-brand-nude/60 hover:border-brand-mauve shadow-luxury hover:shadow-soft transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header tag */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-playfair text-sm font-bold text-brand-deep tracking-wider uppercase">
                    {prod.step}
                  </span>
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-brand-petal/60 text-brand-wine border border-brand-nude/40">
                    {prod.badge}
                  </span>
                </div>

                <h3 className="font-playfair text-2xl font-bold text-brand-wine group-hover:text-brand-deep transition-colors mb-2">
                  {prod.name}
                </h3>
                <p className="text-xs text-brand-wine/70 mb-5 font-normal">
                  {prod.desc}
                </p>

                {/* Benefits List */}
                <div className="space-y-2.5 pt-4 border-t border-brand-nude/30">
                  <p className="text-[11px] uppercase tracking-wider font-bold text-brand-wine/80">
                    Beneficios clave:
                  </p>
                  {prod.benefits.map((b, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-brand-wine/85">
                      <div className="w-4 h-4 rounded-full bg-brand-petal/80 text-brand-deep flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                      </div>
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Tip & Action */}
              <div className="mt-8 pt-5 border-t border-brand-nude/40">
                <div className="bg-brand-cream/80 p-3 rounded-xl mb-4 border border-brand-nude/30">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand-deep block mb-0.5">
                    💡 Modo de uso:
                  </span>
                  <p className="text-[11px] text-brand-wine/75 italic">
                    {prod.tips}
                  </p>
                </div>

                <a
                  href={`https://wa.me/51995610421?text=Hola%20PSK!%20Deseo%20consultar%20sobre%20el%20producto:%20${encodeURIComponent(prod.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-full bg-brand-cream hover:bg-brand-petal text-brand-wine font-semibold text-xs uppercase tracking-wider border border-brand-mauve/50 transition-all flex items-center justify-center space-x-2 group-hover:border-brand-deep"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-brand-deep" />
                  <span>Consultar por WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Complete Set Banner Box */}
        <div className="mt-16 bg-gradient-to-r from-brand-petal/50 via-white to-brand-petal/50 rounded-3xl p-8 sm:p-10 border border-brand-mauve/50 shadow-soft text-center max-w-4xl mx-auto">
          <div className="max-w-2xl mx-auto space-y-4">
            <span className="font-allura text-3xl sm:text-4xl text-brand-deep">
              La combinación perfecta para tu rostro
            </span>
            <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-brand-wine">
              ¿Quieres adquirir el Set TimeWise® Completo con descuento de consultora?
            </h3>
            <p className="text-sm text-brand-wine/80">
              Escríbeme para evaluar si tu tipo de piel es <strong>Normal a Seca</strong> o <strong>Combinada a Grasa</strong>, y preparar tu pedido con entrega personalizada y asesoría continua.
            </p>
            <div className="pt-2">
              <a
                href="https://wa.me/51995610421?text=Hola%20PSK!%20Quiero%20pedir%20el%20Set%20Completo%20TimeWise%20y%20conocer%20las%20promociones%20vigentes."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2.5 px-8 py-4 rounded-full bg-brand-deep text-white font-semibold text-xs sm:text-sm tracking-wider uppercase shadow-luxury hover:bg-brand-wine hover:shadow-glow transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white/20" />
                <span>Pedir Set Completo con Asesoría</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

