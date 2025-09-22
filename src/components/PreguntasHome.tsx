'use client';

import { company, preguntas } from '@/app/constants/constants';
import { useState } from 'react';
import PlusIcon from './icons/PlusIcon';
import MinusIcon from './icons/MinusIcon';
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
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '0px 0px -100px 0px' }}
            className='text-3xl md:text-4xl lg:text-5xl text-white mb-4 tracking-wide font-anton uppercase'
          >
            <span className='text-color-primary-light'>Preguntas</span>{' '}
            Frecuentes
          </motion.h2>
          <div className='w-16 h-1 bg-color-primary mx-auto mb-6'></div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, margin: '0px 0px -100px 0px' }}
            className='text-white/70 max-w-2xl mx-auto text-lg  leading-relaxed'
          >
            Despejamos las dudas más comunes sobre nuestros servicios
          </motion.p>
        </div>

        {/* Grid de preguntas */}
        <div className='grid gap-4'>
          {preguntas.map((pregunta, index) => (
            <motion.div
              key={pregunta.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px 0px -100px 0px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className='group'
            >
              <div
                onClick={() => toggleAnswer(pregunta.id)}
                className={`relative bg-color-bg-secondary rounded-xl border transition-all duration-300 cursor-pointer overflow-hidden shadow-lg hover:shadow-xl
                  ${
                    activeAnswer === pregunta.id
                      ? 'border-color-primary/50 bg-gradient-to-r from-color-primary/10 to-color-primary/5 shadow-color-primary/20'
                      : 'border-white/20 hover:border-white/30 hover:from-white/8 hover:to-white/12'
                  }`}
              >
                <div className='p-6 md:p-8'>
                  <div className='flex items-start justify-between gap-4'>
                    <div className='flex-1'>
                      <h4
                        className={`text-lg md:text-xl font-medium mb-2 transition-colors duration-300 ${
                          activeAnswer === pregunta.id
                            ? 'text-color-primary'
                            : 'text-white group-hover:text-white/90'
                        }`}
                      >
                        {pregunta.question}
                      </h4>
                    </div>

                    {/* Botón de toggle */}
                    <div className='flex-shrink-0'>
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 border-2
                        ${
                          activeAnswer === pregunta.id
                            ? `bg-color-primary border-color-primary ${
                                company.dark ? 'text-white' : 'text-black'
                              }`
                            : 'bg-transparent border-white/30 text-white/70 group-hover:border-white/50 group-hover:text-white'
                        }`}
                      >
                        <motion.div
                          initial={false}
                          animate={{
                            scale: activeAnswer === pregunta.id ? 0.8 : 1,
                          }}
                          transition={{
                            duration: 0.2,
                            ease: 'easeInOut',
                          }}
                        >
                          {activeAnswer === pregunta.id ? (
                            <MinusIcon className='w-5 h-5' />
                          ) : (
                            <PlusIcon className='w-5 h-5' />
                          )}
                        </motion.div>
                      </div>
                    </div>
                  </div>

                  {/* Contenido expandible */}
                  <AnimatePresence>
                    {activeAnswer === pregunta.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PreguntasHome;
