import React, { useState } from 'react';
import { Sparkles, Heart, Menu, X, MessageCircle } from 'lucide-react';
import { InstagramIcon } from './Icons';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Filosofía', href: '#filosofia' },
    { name: 'Rutina TimeWise', href: '#timewise' },
    { name: 'Test de Piel', href: '#test-piel' },
    { name: 'Categorías', href: '#categorias' },
    { name: 'Emprende', href: '#oportunidad' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-nav transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo Brand */}
          <a href="#inicio" className="group flex items-center space-x-2 text-left">
            <div className="w-10 h-10 rounded-full bg-brand-petal/80 border border-brand-mauve/40 flex items-center justify-center text-brand-wine font-playfair font-bold text-lg shadow-sm group-hover:scale-105 transition-transform">
              <span className="text-xs mr-0.5 text-brand-deep">✦</span>MK
            </div>
            <div className="flex flex-col">
              <span className="font-playfair text-xl sm:text-2xl font-bold tracking-tight text-brand-wine group-hover:text-brand-deep transition-colors flex items-center gap-1">
                MK <span className="font-allura text-2xl font-normal text-brand-deep">con</span> PSK
                <Heart className="w-3.5 h-3.5 text-brand-deep fill-brand-petal inline-block" />
              </span>
              <span className="text-[10px] tracking-widest uppercase font-montserrat text-brand-wine/70 font-medium">
                Consultora Independiente Mary Kay
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-7 text-sm font-medium text-brand-wine/85">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-brand-deep transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-brand-mauve hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href="https://www.instagram.com/psk_marykay?utm_source=ig_web_button_share_sheet&cplk=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram @psk_marykay"
              className="p-2.5 rounded-full text-brand-wine hover:text-brand-deep hover:bg-brand-petal/50 transition-all border border-brand-nude/40"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>

            <a
              href="https://wa.me/51995610421?text=Hola%20PSK!%20Visité%20tu%20página%20web%20y%20deseo%20agendar%20una%20asesoría%20personalizada%20de%20cuidado%20de%20la%20piel."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-gradient-to-r from-brand-deep to-brand-wine text-white px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase hover:shadow-soft hover:brightness-105 active:scale-95 transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-white/20" />
              <span>Asesoría Gratis</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <a
              href="https://wa.me/51995610421?text=Hola%20PSK!%20Quiero%20asesoría%20Mary%20Kay."
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-brand-deep text-white"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-brand-wine hover:bg-brand-petal/40 transition-colors"
              aria-label="Abrir menú"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="md:hidden bg-brand-cream/98 border-b border-brand-nude/50 px-6 pt-3 pb-6 space-y-4 shadow-luxury animate-fadeIn">
          <div className="flex flex-col space-y-3 font-medium text-brand-wine">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="py-2 px-3 rounded-lg hover:bg-brand-petal/40 transition-colors text-base"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-brand-nude/40 flex flex-col gap-2.5">
            <a
              href="https://wa.me/51995610421?text=Hola%20PSK!%20Deseo%20agendar%20una%20asesoría%20personalizada%20con%20Mary%20Kay."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 w-full bg-brand-deep text-white py-3 rounded-full text-sm font-semibold tracking-wide uppercase shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Contactar por WhatsApp</span>
            </a>
            <a
              href="https://www.instagram.com/psk_marykay?utm_source=ig_web_button_share_sheet&cplk=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 w-full border border-brand-mauve text-brand-wine py-2.5 rounded-full text-sm font-medium hover:bg-brand-petal/30"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>Seguir en Instagram @psk_marykay</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
