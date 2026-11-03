import React from 'react';
import { Star, Heart, Quote } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: "Camila R.",
      city: "Lima",
      text: "La asesoría de PSK fue clave. Tenía la piel opaca y deshidratada; me recomendó el set TimeWise y en 2 semanas la textura cambió por completo. La atención por WhatsApp fue súper atenta y rápida.",
      product: "Set TimeWise® 3D",
      rating: 5
    },
    {
      name: "Fiorella M.",
      city: "Arequipa",
      text: "El Defensor de Día FPS 30 no deja la cara blanca ni grasosa, me encantó. Además me envió muestras para probar antes de decidir. 100% recomendada como consultora.",
      product: "Defensor de Día con FPS 30",
      rating: 5
    },
    {
      name: "Lucía S.",
      city: "Trujillo",
      text: "Empecé comprándole sus productos y hoy formo parte de su equipo de consultoras. Me ha enseñado todo con mucha paciencia. ¡Amo la comunidad que hemos creado!",
      product: "Consultora Independiente",
      rating: 5
    }
  ];

  return (
    <section className="py-20 relative bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <p className="text-xs uppercase font-bold tracking-widest text-brand-deep">
            EXPERIENCIAS REALES
          </p>
          <span className="font-allura text-4xl sm:text-5xl text-brand-deep block">
            Historias que inspiran confianza
            <Heart className="w-4 h-4 inline-block ml-1 fill-brand-deep" />
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-brand-wine">
            Lo que dicen quienes ya cuidan su piel conmigo
          </h2>
          <div className="w-20 h-0.5 bg-brand-mauve mx-auto mt-4 rounded-full" />
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-7 border border-brand-nude/70 shadow-luxury hover:shadow-soft transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 stroke-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-brand-petal stroke-[1.5]" />
                </div>

                <p className="text-sm text-brand-wine/80 italic leading-relaxed mb-6">
                  "{rev.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-brand-nude/40 flex items-center justify-between">
                <div>
                  <h4 className="font-playfair font-bold text-base text-brand-wine">
                    {rev.name}
                  </h4>
                  <span className="text-xs text-brand-wine/60 font-medium">
                    {rev.city}, Perú
                  </span>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-brand-petal/60 text-brand-deep">
                  {rev.product}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

