import React from 'react';
import { Heart, Sparkles, Flower2, Palette, TrendingUp, CheckCircle2 } from 'lucide-react';

export default function BrandValues() {
  const pillars = [
    {
      icon: Heart,
      title: "Productos de Alta Calidad",
      description: "Fórmulas científicamente respaldadas, probadas dermatológicamente y diseñadas para entregar resultados visibles y duraderos.",
      badge: "Garantía Mary Kay"
    },
    {
      icon: Flower2,
      title: "Cuidado de la Piel",
      description: "Rutinas personalizadas para cada tipo de piel, edad y objetivo: desde hidratación profunda hasta renovación celular intensiva.",
      badge: "Dermatológico"
    },
    {
      icon: Palette,
      title: "Maquillaje Profesional",
      description: "Tonos, acabados y texturas creados para resaltar tus rasgos naturales, con cobertura ligera, de larga duración y nutritiva.",
      badge: "Tendencias & Color"
    },
    {
      icon: TrendingUp,
      title: "Oportunidad de Crecimiento",
      description: "Sé dueña de tu propio tiempo e ingresos. Forma parte de una comunidad de mujeres emprendedoras con capacitación constante.",
      badge: "Emprende Hoy"
    }
  ];

  return (
    <section id="filosofia" className="py-20 relative bg-gradient-to-b from-brand-cream via-brand-petal/20 to-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <p className="font-montserrat text-xs tracking-widest text-brand-deep font-semibold uppercase">
            MARY KAY · FILOSOFÍA DE MARCA
          </p>
          <span className="font-allura text-4xl sm:text-5xl text-brand-deep block">
            Belleza que te acompaña en cada etapa
            <span className="text-2xl ml-1">♡</span>
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-brand-wine tracking-tight">
            Pilares pensados para cuidar de ti
          </h2>
          <div className="w-20 h-0.5 bg-brand-mauve mx-auto mt-4 rounded-full" />
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl p-7 border border-brand-nude/50 hover:border-brand-mauve transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-brand-petal to-brand-nude/40 flex items-center justify-center text-brand-deep mb-5 group-hover:scale-110 transition-transform shadow-sm">
                    <Icon className="w-6 h-6 stroke-[1.8]" />
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-brand-petal/60 text-brand-wine inline-block mb-3">
                    {item.badge}
                  </span>
                  <h3 className="font-playfair text-xl font-bold text-brand-wine mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-brand-wine/75 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-brand-nude/40 flex items-center gap-1.5 text-xs text-brand-deep font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Asesoría incluida</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Brand signature banner */}
        <div className="mt-14 max-w-2xl mx-auto text-center p-6 rounded-2xl bg-white/70 border border-brand-nude/60 shadow-sm">
          <p className="font-allura text-2xl sm:text-3xl text-brand-deep mb-1">
            Belleza · Cuidado · Confianza · Contigo
            <Heart className="w-4 h-4 inline-block ml-1.5 fill-brand-deep text-brand-deep" />
          </p>
          <p className="text-xs uppercase tracking-widest text-brand-wine/60 font-semibold">
            MK con PSK · Consultora Independiente Mary Kay
          </p>
        </div>

      </div>
    </section>
  );
}

