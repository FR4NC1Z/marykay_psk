import React from 'react';
import { Sparkles, Heart, FileText, ArrowUpRight, MessageCircle } from 'lucide-react';

export default function CatalogCategories() {
  const categories = [
    {
      title: "Cuidado Facial",
      subtitle: "Skincare Avanzado",
      description: "Sistemas TimeWise®, Clinical Solutions® con retinol puro, Botanical Effects® y Clear Proof® para pieles con tendencia a imperfecciones.",
      tag: "Best Sellers",
      items: ["TimeWise 3D", "Retinol Clínico", "Mascarillas de Carbón", "Sueros Vitamina C + E"]
    },
    {
      title: "Maquillaje Profesional",
      subtitle: "Color & Cobertura",
      description: "Bases TimeWise 3D con tecnología IntelliMatch®, polvos traslúcidos sedosos, labiales de larga duración y máscaras de pestañas de alto impacto.",
      tag: "Tendencia",
      items: ["Base Matte 3D", "Lash Intensity", "Labiales Mate Supreme", "Polvo Traslúcido"]
    },
    {
      title: "Cuerpo y Manos",
      subtitle: "Spa en Casa",
      description: "El icónico Set Satin Hands® (Manos de Seda), bálsamos exfoliantes Satin Lips® y lociones reafirmantes con manteca de karité.",
      tag: "Favoritos",
      items: ["Set Manos de Seda", "Satin Lips Karité", "Loción Reafirmante", "Gel Post Solar"]
    },
    {
      title: "Fragancias Exclusivas",
      subtitle: "Aromas que Conquistan",
      description: "Perfumería fina de alta fijación elaborada por casas perfumistas internacionales para ella y para él.",
      tag: "Exclusivo",
      items: ["Modern Charm", "Pink Diamonds", "True Passion", "Upscale & Cityscape"]
    }
  ];

  return (
    <section id="categorias" className="py-20 relative bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <p className="text-xs uppercase font-bold tracking-widest text-brand-deep">
            PORTAFOLIO MARY KAY
          </p>
          <span className="font-allura text-4xl sm:text-5xl text-brand-deep block">
            Descubre todo lo que tengo para ti
            <Heart className="w-4 h-4 inline-block ml-1 fill-brand-deep" />
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-brand-wine">
            Líneas de Belleza & Cuidado Integral
          </h2>
          <div className="w-20 h-0.5 bg-brand-mauve mx-auto mt-4 rounded-full" />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 border border-brand-nude/70 hover:border-brand-deep shadow-luxury hover:shadow-soft transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-brand-petal/70 text-brand-wine border border-brand-nude/40">
                    {cat.tag}
                  </span>
                  <span className="text-xs text-brand-deep font-semibold">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="font-playfair text-2xl font-bold text-brand-wine group-hover:text-brand-deep transition-colors">
                  {cat.title}
                </h3>
                <p className="text-xs font-semibold text-brand-deep/80 uppercase tracking-wider mb-3">
                  {cat.subtitle}
                </p>
                <p className="text-xs text-brand-wine/70 leading-relaxed mb-5">
                  {cat.description}
                </p>

                {/* Bullet items */}
                <div className="space-y-1.5 pt-4 border-t border-brand-nude/40">
                  {cat.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex items-center gap-1.5 text-xs text-brand-wine/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-mauve shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-brand-nude/40">
                <a
                  href={`https://wa.me/51995610421?text=Hola%20PSK!%20Deseo%20conocer%20los%20productos%20disponibles%20de%20la%20categoría%20${encodeURIComponent(cat.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-full border border-brand-nude/80 hover:bg-brand-petal/40 text-brand-wine text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors group-hover:border-brand-deep"
                >
                  <span>Consultar Catálogo</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-brand-deep" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Digital Catalog Download Banner */}
        <div className="mt-14 glass-card rounded-3xl p-8 border border-brand-mauve/60 shadow-soft max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-deep">
              <FileText className="w-4 h-4" />
              <span>Catálogo Virtual Oficial</span>
            </div>
            <h3 className="font-playfair text-2xl font-bold text-brand-wine">
              ¿Quieres ver la revista digital del mes con precios y ofertas?
            </h3>
            <p className="text-xs sm:text-sm text-brand-wine/75 max-w-xl">
              Pídeme el catálogo digital actualizado en PDF directamente a mi WhatsApp y descubre las promociones vigentes de Mary Kay Perú.
            </p>
          </div>

          <a
            href="https://wa.me/51995610421?text=Hola%20PSK!%20Por%20favor%20envíame%20el%20Catálogo%20Virtual%20del%20mes%20en%20PDF%20con%20las%20ofertas%20vigentes."
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-7 py-3.5 rounded-full bg-brand-deep text-white text-xs sm:text-sm font-semibold tracking-wider uppercase shadow-md hover:bg-brand-wine transition-all flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4 fill-white/20" />
            <span>Pedir Catálogo en PDF</span>
          </a>
        </div>

      </div>
    </section>
  );
}

