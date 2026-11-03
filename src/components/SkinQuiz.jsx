import React, { useState } from 'react';
import { Sparkles, Check, ArrowRight, MessageCircle, RotateCcw, Heart } from 'lucide-react';

export default function SkinQuiz() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    skinType: '',
    concern: '',
    routine: ''
  });

  const skinTypes = [
    { id: 'grasa', label: 'Grasa / Con brillo', desc: 'Sueles tener brillo en zona T y poros dilatados' },
    { id: 'mixta', label: 'Mixta', desc: 'Brillo en frente/nariz y mejillas secas o normales' },
    { id: 'seca', label: 'Seca / Tirante', desc: 'Sientes la piel deshidratada, tirante o con zonas opacas' },
    { id: 'sensible', label: 'Sensible', desc: 'Se enrojece con facilidad y reacciona a ciertos productos' },
  ];

  const concerns = [
    { id: 'antiedad', label: 'Líneas finas / Arrugas', desc: 'Quiero prevenir o atenuar signos de la edad' },
    { id: 'manchas', label: 'Manchas / Tono disparejo', desc: 'Busco iluminar e igualar el tono de mi rostro' },
    { id: 'poros_acne', label: 'Poros abiertos o brotes', desc: 'Deseo controlar el exceso de sebo e imperfecciones' },
    { id: 'deshidratacion', label: 'Falta de luminosidad y agua', desc: 'Mi piel se ve cansada, apagada y sin vida' },
  ];

  const routines = [
    { id: 'basica', label: 'Solo agua o jabón común', desc: 'Apenas estoy comenzando a interesarme por mi piel' },
    { id: 'bloqueador', label: 'Solo crema y bloqueador', desc: 'Tengo algunos productos pero nada estructurado' },
    { id: 'completa', label: 'Tengo rutina pero busco mejores resultados', desc: 'Quiero productos de grado dermatológico que de verdad funcionen' },
  ];

  const handleSelect = (category, value) => {
    setAnswers(prev => ({ ...prev, [category]: value }));
    if (step < 3) {
      setStep(prev => prev + 1);
    } else {
      setStep(4); // Result step
    }
  };

  const handleReset = () => {
    setAnswers({ skinType: '', concern: '', routine: '' });
    setStep(1);
  };

  // WhatsApp Message Generator
  const generateWhatsAppMessage = () => {
    const text = `Hola PSK! Realicé el Test de Diagnóstico de Piel en tu página web y estos son mis resultados:
- Tipo de piel: ${answers.skinType || 'No especificado'}
- Mi principal preocupación: ${answers.concern || 'No especificado'}
- Mi rutina actual: ${answers.routine || 'No especificado'}

¿Qué rutina Mary Kay me recomiendas para empezar?`;
    return encodeURIComponent(text);
  };

  return (
    <section id="test-piel" className="py-20 relative bg-gradient-to-b from-brand-cream via-brand-petal/25 to-brand-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-petal text-brand-deep text-xs font-semibold uppercase tracking-wider border border-brand-nude">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Diagnóstico Virtual Gratuito</span>
          </div>

          <h2 className="font-playfair text-3xl sm:text-5xl font-bold text-brand-wine">
            Descubre tu rutina ideal en 1 minuto
          </h2>
          <p className="font-allura text-3xl text-brand-deep">
            Un análisis rápido pensado para ti
          </p>
          <p className="text-sm text-brand-wine/75 max-w-lg mx-auto">
            Responde 3 preguntas sencillas y recibe mi asesoría directa por WhatsApp con la recomendación exacta para tu rostro.
          </p>
        </div>

        {/* Quiz Container Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-brand-nude/70 shadow-luxury relative overflow-hidden">
          
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center text-xs font-semibold text-brand-wine/70 mb-2">
              <span>{step <= 3 ? `Paso ${step} de 3` : '¡Diagnóstico Listo!'}</span>
              <span>{step === 1 ? '33%' : step === 2 ? '66%' : '100%'}</span>
            </div>
            <div className="h-2 w-full bg-brand-petal/40 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-brand-mauve to-brand-deep transition-all duration-500 rounded-full"
                style={{ width: `${step === 1 ? 33 : step === 2 ? 66 : 100}%` }}
              />
            </div>
          </div>

          {/* STEP 1: Tipo de piel */}
          {step === 1 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="text-center sm:text-left">
                <span className="text-xs uppercase font-bold text-brand-deep tracking-wider block mb-1">Pregunta 1</span>
                <h3 className="font-playfair text-2xl font-bold text-brand-wine">
                  ¿Cómo describirías la sensación de tu piel durante el día?
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skinTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => handleSelect('skinType', type.label)}
                    className="p-5 rounded-2xl border border-brand-nude/70 hover:border-brand-deep hover:bg-brand-petal/20 text-left transition-all duration-200 group flex flex-col justify-between"
                  >
                    <div>
                      <div className="font-playfair text-lg font-bold text-brand-wine group-hover:text-brand-deep mb-1">
                        {type.label}
                      </div>
                      <p className="text-xs text-brand-wine/70">
                        {type.desc}
                      </p>
                    </div>
                    <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-brand-deep">
                      <span>Seleccionar</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: Preocupación */}
          {step === 2 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="text-center sm:text-left">
                <span className="text-xs uppercase font-bold text-brand-deep tracking-wider block mb-1">Pregunta 2</span>
                <h3 className="font-playfair text-2xl font-bold text-brand-wine">
                  ¿Cuál es tu principal objetivo o preocupación a mejorar?
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {concerns.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => handleSelect('concern', c.label)}
                    className="p-5 rounded-2xl border border-brand-nude/70 hover:border-brand-deep hover:bg-brand-petal/20 text-left transition-all duration-200 group flex flex-col justify-between"
                  >
                    <div>
                      <div className="font-playfair text-lg font-bold text-brand-wine group-hover:text-brand-deep mb-1">
                        {c.label}
                      </div>
                      <p className="text-xs text-brand-wine/70">
                        {c.desc}
                      </p>
                    </div>
                    <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-brand-deep">
                      <span>Seleccionar</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3: Rutina actual */}
          {step === 3 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="text-center sm:text-left">
                <span className="text-xs uppercase font-bold text-brand-deep tracking-wider block mb-1">Pregunta 3</span>
                <h3 className="font-playfair text-2xl font-bold text-brand-wine">
                  ¿Cómo es tu rutina de cuidado facial actual?
                </h3>
              </div>

              <div className="space-y-3">
                {routines.map((r) => (
                  <button
                    key={r.id}
                    onClick={() => handleSelect('routine', r.label)}
                    className="w-full p-5 rounded-2xl border border-brand-nude/70 hover:border-brand-deep hover:bg-brand-petal/20 text-left transition-all duration-200 group flex items-center justify-between"
                  >
                    <div>
                      <div className="font-playfair text-lg font-bold text-brand-wine group-hover:text-brand-deep mb-1">
                        {r.label}
                      </div>
                      <p className="text-xs text-brand-wine/70">
                        {r.desc}
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-brand-deep group-hover:translate-x-1 transition-transform shrink-0 ml-4" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 4: Diagnosis summary & WhatsApp CTA */}
          {step === 4 && (
            <div className="space-y-6 text-center animate-fadeIn py-4">
              <div className="w-16 h-16 rounded-full bg-brand-petal/80 border border-brand-mauve text-brand-deep flex items-center justify-center mx-auto shadow-sm">
                <Heart className="w-8 h-8 fill-brand-deep" />
              </div>

              <div>
                <span className="font-allura text-3xl sm:text-4xl text-brand-deep block mb-1">
                  ¡Diagnóstico completado con éxito!
                </span>
                <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-brand-wine">
                  Resumen de tu perfil de piel:
                </h3>
              </div>

              {/* Answers Recap */}
              <div className="bg-brand-cream/80 p-5 rounded-2xl border border-brand-nude/50 max-w-lg mx-auto text-left space-y-2.5 text-sm text-brand-wine">
                <div className="flex justify-between items-center py-1 border-b border-brand-nude/30">
                  <span className="text-xs uppercase font-bold text-brand-deep">Tipo de piel:</span>
                  <span className="font-semibold">{answers.skinType}</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-brand-nude/30">
                  <span className="text-xs uppercase font-bold text-brand-deep">Preocupación:</span>
                  <span className="font-semibold">{answers.concern}</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-xs uppercase font-bold text-brand-deep">Rutina previa:</span>
                  <span className="font-semibold">{answers.routine}</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-brand-wine/70 max-w-md mx-auto">
                Haz clic abajo para enviarme tus respuestas por WhatsApp. Te responderé personalmente con los productos exactos recomendados para tu tipo de piel.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <a
                  href={`https://wa.me/51995610421?text=${generateWhatsAppMessage()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-brand-deep to-brand-wine text-white font-semibold text-sm tracking-wider uppercase shadow-luxury hover:brightness-110 active:scale-95 transition-all flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="w-4 h-4 fill-white/20" />
                  <span>Recibir Mi Recomendación por WhatsApp</span>
                </a>

                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto px-5 py-3.5 rounded-full border border-brand-nude text-brand-wine hover:bg-brand-petal/30 text-xs font-semibold flex items-center justify-center space-x-1.5 transition-all"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Repetir Test</span>
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}

