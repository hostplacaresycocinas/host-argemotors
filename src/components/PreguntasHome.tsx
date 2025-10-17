'use client';

import { company, preguntas } from '@/app/constants/constants';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PreguntasHome = () => {
  const [activeAnswer, setActiveAnswer] = useState<string | null>('preg-1');

  const toggleAnswer = (id: string) => {
    if (activeAnswer !== id) {
      setActiveAnswer(id);
    }
  };

  return (
    <section
      id='preguntasSection'
      className='mt-10 mb-16 md:mt-16 md:mb-24 relative overflow-hidden'
    >
      {/* Patrón de fondo decorativo para modo oscuro */}
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.02)_1px,transparent_0)] bg-[length:20px_20px]'></div>

      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        {/* Título y subtítulo */}
        <div className='text-center mb-8 md:mb-12'>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold leading-tight'>
            <span className='text-color-primary-light'>Preguntas </span>
            <span className='text-white'>Frecuentes</span>
          </h2>
        </div>

        {/* Grid de preguntas con nuevo diseño */}
        <div className='space-y-6'>
          {preguntas.map((pregunta, index) => (
            <motion.div
              key={pregunta.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '0px 0px -100px 0px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className='group'
            >
              <div
                onClick={() => toggleAnswer(pregunta.id)}
                className={`relative cursor-pointer transition-all duration-500 ease-out
                  ${
                    activeAnswer === pregunta.id
                      ? 'transform scale-[1.02]'
                      : 'hover:transform hover:scale-[1.01]'
                  }
                `}
              >
                {/* Línea decorativa lateral */}
                <div
                  className={`absolute left-0 top-0 bottom-0 w-1 rounded-full transition-all duration-500 ${
                    activeAnswer === pregunta.id
                      ? 'bg-color-primary shadow-lg shadow-color-primary/50'
                      : 'bg-white/20 group-hover:bg-white/40'
                  }`}
                ></div>

                {/* Contenido principal */}
                <div
                  className={`ml-6 p-6 md:p-8 rounded-r-2xl transition-all duration-500 ${
                    activeAnswer === pregunta.id
                      ? 'bg-gradient-to-r from-color-primary/15 via-color-primary/10 to-transparent border border-color-primary/30'
                      : 'bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20'
                  }`}
                >
                  {/* Header con pregunta */}
                  <div className='flex items-center justify-between gap-6'>
                    <div className='flex-1'>
                      <h4
                        className={`text-lg md:text-xl font-semibold transition-colors duration-300 ${
                          activeAnswer === pregunta.id
                            ? 'text-color-primary'
                            : 'text-white'
                        }`}
                      >
                        {pregunta.question}
                      </h4>
                    </div>

                    {/* Icono de flecha */}
                    <div
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                        activeAnswer === pregunta.id
                          ? `bg-color-primary ${
                              company.dark ? 'text-white' : 'text-black'
                            }`
                          : 'bg-white/10 text-white/70 group-hover:bg-white/20 group-hover:text-white'
                      }`}
                    >
                      <motion.div
                        animate={{
                          rotate: activeAnswer === pregunta.id ? 180 : 0,
                        }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <svg
                          className='w-4 h-4'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M19 9l-7 7-7-7'
                          />
                        </svg>
                      </motion.div>
                    </div>
                  </div>

                  {/* Contenido expandible */}
                  <AnimatePresence>
                    {activeAnswer === pregunta.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0, y: -10 }}
                        animate={{ height: 'auto', opacity: 1, y: 0 }}
                        exit={{ height: 0, opacity: 0, y: -10 }}
                        transition={{
                          duration: 0.4,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className='overflow-hidden'
                      >
                        <div className='mt-6 pt-6 border-t border-white/20'>
                          <p className='text-color-text-light leading-relaxed text-base md:text-lg'>
                            {pregunta.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Efecto de brillo en hover */}
                <div
                  className={`absolute inset-0 rounded-r-2xl opacity-0 transition-opacity duration-500 ${
                    activeAnswer === pregunta.id
                      ? 'opacity-100 bg-gradient-to-r from-color-primary/5 to-transparent'
                      : 'group-hover:opacity-100 bg-gradient-to-r from-white/5 to-transparent'
                  }`}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PreguntasHome;
