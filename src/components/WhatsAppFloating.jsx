import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Heart } from 'lucide-react';

export default function WhatsAppFloating() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show tooltip after 3 seconds
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Tooltip speech bubble */}
      {showTooltip && (
        <div className="mb-3 max-w-xs bg-white rounded-2xl p-3.5 shadow-2xl border border-brand-nude/80 animate-fadeIn relative mr-1">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 right-2 text-brand-wine/50 hover:text-brand-wine"
            aria-label="Cerrar mensaje"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="flex items-center gap-1.5 mb-1 text-brand-deep font-bold text-xs uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block" />
            <span>Consultora en línea</span>
          </div>
          <p className="text-xs text-brand-wine/85 font-medium pr-3 leading-snug">
            ¡Hola! ¿Deseas saber cuál es tu rutina Mary Kay ideal? Escríbeme directamente aquí ♡
          </p>
        </div>
      )}

      {/* Floating Button */}
      <a
        href="https://wa.me/51995610421?text=Hola%20PSK!%20Te%20escribo%20desde%20tu%20página%20web,%20deseo%20asesoría%20sobre%20los%20productos%20Mary%20Kay."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp a PSK Mary Kay"
        className="w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 to-emerald-500 text-white flex items-center justify-center shadow-luxury hover:scale-110 active:scale-95 transition-all group relative pulse-glow"
      >
        <MessageCircle className="w-7 h-7 fill-white/20 stroke-[2.2]" />
        
        {/* Little brand heart pill */}
        <span className="absolute -top-1 -left-1 w-5 h-5 rounded-full bg-brand-deep text-white flex items-center justify-center text-[10px] shadow">
          <Heart className="w-2.5 h-2.5 fill-white" />
        </span>
      </a>

    </div>
  );
}

