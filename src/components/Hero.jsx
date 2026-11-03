import React from 'react';
import { Heart, Sparkles, MessageCircle, ArrowRight, ShieldCheck, Award, Smile } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Decorative background blobs & champagne glow */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-brand-petal/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-40 right-[-10%] w-[450px] h-[450px] bg-brand-champagne/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -bottom-10 left-[-5%] w-[400px] h-[400px] bg-brand-nude/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Pill tag */}
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-brand-petal/70 border border-brand-nude/60 text-brand-deep text-xs font-semibold tracking-wider uppercase shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-brand-deep" />
              <span>Consultora de Belleza Independiente Mary Kay</span>
            </div>

            {/* Main Headings */}
            <div className="space-y-2">
              <span className="font-allura text-4xl sm:text-5xl lg:text-6xl text-brand-deep block leading-tight">
                Tu mejor versión, siempre
                <span className="text-3xl ml-2 inline-block">♡</span>
              </span>
              <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-wine tracking-tight leading-[1.15]">
                Tu momento <br className="hidden sm:inline" />
                <span className="italic font-normal text-gradient">de cuidado y amor propio</span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-brand-wine/80 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Descubre rutinas diseñadas exactamente para las necesidades de tu piel. 
              Recibe una <strong>asesoría personalizada 1 a 1</strong>, prueba fórmulas dermatológicas de alta gama y realza tu belleza natural con la confianza que mereces.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="https://wa.me/51995610421?text=Hola%20PSK!%20Me%20encantaría%20agendar%20mi%20asesoría%20personalizada%20gratuita%20de%20cuidado%20de%20la%20piel."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-brand-deep via-brand-wine to-brand-deep text-white font-semibold text-sm tracking-wider uppercase shadow-luxury hover:shadow-soft hover:brightness-110 active:scale-95 transition-all flex items-center justify-center space-x-2.5 pulse-glow"
              >
                <MessageCircle className="w-4 h-4 fill-white/20" />
                <span>Agendar Asesoría Gratis</span>
              </a>

              <a
                href="#timewise"
                className="w-full sm:w-auto px-7 py-4 rounded-full bg-white/80 border border-brand-mauve/60 text-brand-wine hover:bg-brand-petal/40 font-semibold text-sm tracking-wide transition-all flex items-center justify-center space-x-2 group"
              >
                <span>Conocer Set TimeWise®</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-brand-deep" />
              </a>
            </div>

            {/* Key trust badges */}
            <div className="pt-6 border-t border-brand-nude/40 grid grid-cols-3 gap-3 max-w-lg mx-auto lg:mx-0">
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="flex items-center gap-1.5 text-brand-deep font-bold text-xs uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4" />
                  <span>100% Original</span>
                </div>
                <span className="text-[11px] text-brand-wine/70 mt-0.5">Garantía Mary Kay</span>
              </div>

              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="flex items-center gap-1.5 text-brand-deep font-bold text-xs uppercase tracking-wider">
                  <Award className="w-4 h-4" />
                  <span>Asesoría 1 a 1</span>
                </div>
                <span className="text-[11px] text-brand-wine/70 mt-0.5">Diagnóstico a medida</span>
              </div>

              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="flex items-center gap-1.5 text-brand-deep font-bold text-xs uppercase tracking-wider">
                  <Smile className="w-4 h-4" />
                  <span>Envíos Perú</span>
                </div>
                <span className="text-[11px] text-brand-wine/70 mt-0.5">Seguro y directo</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Photo */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Background frame luxury accents */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-brand-nude/40 via-brand-petal/60 to-brand-champagne/40 rounded-[2.5rem] transform rotate-2 blur-sm -z-10" />
            
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/90 max-w-md w-full bg-white">
              
              <img
                src="/images/consultant_hero.jpg"
                alt="Consultora Independiente Mary Kay - MK con PSK"
                className="w-full h-auto object-cover object-top hover:scale-[1.02] transition-transform duration-700"
                loading="eager"
              />

              {/* Elegant floating overlay badge */}
              <div className="absolute bottom-4 left-4 right-4 glass-card p-4 rounded-xl border border-white/60 shadow-lg text-center backdrop-blur-md">
                <div className="flex items-center justify-center gap-1.5 mb-1 text-brand-deep">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span className="font-playfair font-bold text-sm text-brand-wine tracking-wide">
                    MK con PSK
                  </span>
                  <Heart className="w-3 h-3 fill-brand-deep text-brand-deep" />
                </div>
                <p className="text-xs text-brand-wine/80 font-medium">
                  "Cuidar tu piel es un acto de amor y respeto hacia ti misma."
                </p>
                <div className="mt-2 text-[10px] text-brand-deep font-semibold tracking-widest uppercase">
                  Consultoría personalizada · Perú
                </div>
              </div>

            </div>

            {/* Circular Stamp from Brand Guide */}
            <div className="absolute -top-5 -right-3 sm:-right-5 bg-brand-cream/95 border-2 border-brand-mauve/60 rounded-full p-3.5 shadow-xl flex flex-col items-center justify-center text-center w-24 h-24 animate-bounce duration-1000">
              <span className="font-playfair text-[10px] font-bold text-brand-deep tracking-wider">+MK</span>
              <span className="text-[8px] font-allura text-brand-wine font-medium">con PSK</span>
              <Heart className="w-3 h-3 text-brand-deep fill-brand-petal mt-0.5" />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

