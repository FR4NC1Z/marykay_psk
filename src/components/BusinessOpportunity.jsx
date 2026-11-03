import React from 'react';
import { Sparkles, Heart, CheckCircle2, TrendingUp, Users, Gift, ArrowRight, MessageCircle } from 'lucide-react';

export default function BusinessOpportunity() {
  const perks = [
    {
      icon: TrendingUp,
      title: "Ganancias desde 30% a 50%",
      desc: "Excelente margen de ganancia en cada producto y bonificaciones por desarrollo de equipo."
    },
    {
      icon: Users,
      title: "Acompañamiento & Capacitación",
      desc: "Te enseño paso a paso cómo asesorar clientes, manejar redes sociales y hacer demostraciones exitosas."
    },
    {
      icon: Gift,
      title: "Kit de Inicio Accesible",
      desc: "Comienza con productos de alta demanda a un precio preferencial exclusivo para nuevas consultoras."
    },
    {
      icon: Heart,
      title: "Tú decides tus horarios",
      desc: "Trabaja desde casa o en tus tiempos libres, compatible con tu empleo actual, estudios o familia."
    }
  ];

  return (
    <section id="oportunidad" className="py-20 relative bg-gradient-to-tr from-brand-petal/30 via-white to-brand-champagne/30 overflow-hidden">
      
      {/* Decorative Blur */}
      <div className="absolute -top-12 -left-12 w-96 h-96 bg-brand-mauve/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Copy & Details */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-deep text-white text-xs font-semibold uppercase tracking-wider shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-brand-petal" />
              <span>Oportunidad de Crecimiento</span>
            </div>

            <div className="space-y-2">
              <span className="font-allura text-4xl sm:text-5xl text-brand-deep block">
                Emprende conmigo en Mary Kay
                <span className="text-2xl ml-1">♡</span>
              </span>
              <h2 className="font-playfair text-3xl sm:text-5xl font-bold text-brand-wine leading-tight">
                Construye tu propio negocio de belleza independiente
              </h2>
            </div>

            <p className="text-base text-brand-wine/80 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
              ¿Deseas generar ingresos extras, tener descuentos especiales en tus propios productos y ser dueña de tus metas? 
              Te invito a formar parte de mi equipo en Perú. Tendrás mi guía directa desde el día uno.
            </p>

            {/* Perks list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {perks.map((p, idx) => {
                const Icon = p.icon;
                return (
                  <div key={idx} className="bg-white/80 p-4 rounded-2xl border border-brand-nude/60 shadow-sm flex items-start gap-3 text-left">
                    <div className="w-9 h-9 rounded-xl bg-brand-petal text-brand-deep flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-playfair text-base font-bold text-brand-wine">
                        {p.title}
                      </h3>
                      <p className="text-xs text-brand-wine/70 mt-0.5">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="https://wa.me/51995610421?text=Hola%20PSK!%20Me%20interesa%20iniciar%20mi%20negocio%20independiente%20con%20Mary%20Kay.%20¿Cómo%20puedo%20empezar%20y%20qué%20kits%20hay%20disponibles?"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-brand-deep hover:bg-brand-wine text-white font-semibold text-xs sm:text-sm tracking-wider uppercase shadow-luxury hover:shadow-soft active:scale-95 transition-all flex items-center justify-center space-x-2.5"
              >
                <MessageCircle className="w-4 h-4 fill-white/20" />
                <span>Quiero Ser Consultora</span>
              </a>

              <a
                href="https://www.instagram.com/psk_marykay?utm_source=ig_web_button_share_sheet&cplk=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-4 rounded-full border border-brand-mauve text-brand-wine hover:bg-white text-xs sm:text-sm font-semibold tracking-wide transition-all flex items-center justify-center space-x-2"
              >
                <span>Conoce Mi Comunidad en IG</span>
                <ArrowRight className="w-4 h-4 text-brand-deep" />
              </a>
            </div>

          </div>

          {/* Right: Testimonial & Quote Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-8 border border-brand-nude shadow-luxury relative">
              <div className="w-14 h-14 rounded-full bg-brand-petal/80 border border-brand-mauve text-brand-deep flex items-center justify-center font-playfair font-bold text-xl mb-6">
                +MK
              </div>

              <blockquote className="space-y-4">
                <p className="font-playfair text-xl italic text-brand-wine leading-snug">
                  "Mary Kay no solo transforma la piel de las personas, transforma vidas al darte la libertad de soñar en grande y trabajar por tus propias metas."
                </p>
                <div className="pt-4 border-t border-brand-nude/40">
                  <p className="font-bold text-brand-wine text-sm">PSK</p>
                  <p className="text-xs text-brand-deep font-semibold uppercase tracking-wider">
                    Consultora Independiente Mary Kay Perú
                  </p>
                  <p className="font-allura text-xl text-brand-deep mt-1">
                    Tu mejor versión, siempre ♡
                  </p>
                </div>
              </blockquote>

              <div className="mt-6 pt-4 bg-brand-cream/70 rounded-2xl p-4 border border-brand-nude/30 flex items-center justify-between text-xs font-semibold text-brand-wine">
                <span>📍 Envíos e inicios en todo el Perú</span>
                <span className="text-brand-deep font-bold">100% Flexible</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

