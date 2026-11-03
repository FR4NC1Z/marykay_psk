import React from 'react';
import { Heart, MessageCircle, Phone, MapPin, Sparkles } from 'lucide-react';
import { InstagramIcon } from './Icons';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-16 pb-12 border-t-4 border-brand-mauve relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-brand-petal text-brand-dark font-playfair font-bold text-lg flex items-center justify-center">
                +MK
              </div>
              <span className="font-playfair text-2xl font-bold tracking-tight">
                MK <span className="font-allura text-3xl text-brand-nude">con</span> PSK
              </span>
            </div>

            <p className="text-xs uppercase tracking-widest text-brand-nude font-semibold">
              Consultora de Belleza Independiente Mary Kay
            </p>

            <p className="font-allura text-2xl text-brand-petal">
              Tu mejor versión, siempre ♡
            </p>

            <p className="text-xs text-white/70 max-w-sm leading-relaxed">
              Acompañándote a descubrir y realzar tu belleza auténtica a través de rutinas dermatológicas personalizadas, maquillaje y empoderamiento femenino en todo el Perú.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-playfair text-base font-bold text-brand-petal tracking-wider uppercase">
              Navegación
            </h4>
            <ul className="space-y-2 text-xs text-white/75">
              <li>
                <a href="#inicio" className="hover:text-brand-petal transition-colors">Inicio</a>
              </li>
              <li>
                <a href="#filosofia" className="hover:text-brand-petal transition-colors">Filosofía de Belleza</a>
              </li>
              <li>
                <a href="#timewise" className="hover:text-brand-petal transition-colors">Rutina TimeWise®</a>
              </li>
              <li>
                <a href="#test-piel" className="hover:text-brand-petal transition-colors">Test de Diagnóstico de Piel</a>
              </li>
              <li>
                <a href="#categorias" className="hover:text-brand-petal transition-colors">Catálogo de Productos</a>
              </li>
              <li>
                <a href="#oportunidad" className="hover:text-brand-petal transition-colors">Oportunidad de Negocio</a>
              </li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-playfair text-base font-bold text-brand-petal tracking-wider uppercase">
              Contacto Directo
            </h4>

            <div className="space-y-2.5 text-xs text-white/80">
              <a
                href="https://wa.me/51995610421"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-brand-petal transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-brand-petal">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span>+51 995 610 421 (WhatsApp)</span>
              </a>

              <a
                href="https://www.instagram.com/psk_marykay?utm_source=ig_web_button_share_sheet&cplk=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-brand-petal transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-brand-petal">
                  <InstagramIcon className="w-3.5 h-3.5" />
                </div>
                <span>@psk_marykay</span>
              </a>

              <div className="flex items-center gap-2.5 text-white/60">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-brand-nude">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <span>Lima, Perú · Envíos a nivel nacional</span>
              </div>
            </div>

            <div className="pt-3">
              <a
                href="https://wa.me/51995610421?text=Hola%20PSK!%20Quiero%20hacerte%20una%20consulta."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-deep text-white text-xs font-semibold uppercase tracking-wider hover:bg-brand-wine hover:shadow-soft transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Escríbeme por WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 text-center space-y-3">
          <p className="text-[11px] text-white/50 max-w-3xl mx-auto leading-relaxed">
            * <strong>Aviso legal:</strong> Mary Kay® es una marca registrada de Mary Kay Inc. 
            Este sitio web es gestionado de manera independiente por PSK, Consultora de Belleza Independiente Mary Kay en Perú. 
            No es la tienda virtual oficial de la corporación Mary Kay Inc., sino un canal de asesoría personalizada, diagnóstico y venta directa autorizada.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-xs text-white/60">
            <span>© {new Date().getFullYear()} MK con PSK. Todos los derechos reservados.</span>
            <span className="hidden sm:inline">·</span>
            <span className="flex items-center gap-1">
              Diseñado con <Heart className="w-3.5 h-3.5 fill-brand-petal text-brand-petal inline" /> para tu mejor versión
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
