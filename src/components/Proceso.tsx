'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { company } from '@/app/constants/constants';

const beneficios = [
  {
    titulo: 'Amplia Selección',
    descripcion:
      'Contamos con una gran variedad de vehículos 0 Km y usados multimarcas, cuidadosamente seleccionados para ofrecerte las mejores opciones del mercado.',
    numero: '01',
  },
  {
    titulo: 'Garantía de Calidad',
    descripcion:
      'Cada vehículo pasa por un riguroso control de calidad y verificación técnica para asegurar su óptimo funcionamiento y condición.',
    numero: '02',
  },
  {
    titulo: 'Asesoramiento Personalizado',
    descripcion:
      'Nuestro equipo profesional te acompaña en todo el proceso, brindándote asesoramiento experto para encontrar el vehículo ideal para vos.',
    numero: '03',
  },
  {
    titulo: 'Financiación Flexible',
    descripcion:
      'Ofrecemos diferentes opciones de financiamiento adaptadas a tus necesidades para que puedas adquirir tu vehículo de forma accesible.',
    numero: '04',
  },
];

const Proceso = () => {
  return (
    <section className='flex flex-col items-center justify-center py-10 md:py-16 relative'>
      {/* Fondo con patrón */}
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.02)_1px,transparent_0)] bg-[length:30px_30px]'></div>

      <div className='max-w-7xl w-full flex flex-col px-4 md:px-8 relative z-10'>
        {/* Título y subtítulo */}
        <div className='text-center mb-12 md:mb-16'>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '0px 0px -100px 0px' }}
            className='text-3xl md:text-4xl lg:text-5xl text-white mb-4 tracking-wide font-anton uppercase'
          >
            ¿Por qué
            <span className='text-color-primary-light'> elegirnos</span>?
          </motion.h2>
          <div className='w-20 h-1 bg-color-primary mx-auto mb-6'></div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, margin: '0px 0px -100px 0px' }}
            className='text-color-text-light max-w-2xl mx-auto text-lg leading-relaxed'
          >
            Compromiso, calidad y transparencia en cada operación
          </motion.p>
        </div>

        {/* Grid de beneficios con nuevo diseño */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8'>
          {beneficios.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true, margin: '0px 0px -100px 0px' }}
            >
              <div className='relative bg-white/5 backdrop-blur rounded-2xl p-6 md:p-8 border border-white/10 h-full overflow-hidden'>
                {/* Número grande de fondo */}
                <div className='absolute -top-4 -right-4 text-8xl md:text-9xl font-bold text-color-primary/5 select-none'>
                  {b.numero}
                </div>

                {/* Contenido */}
                <div className='relative z-10'>
                  <div className='flex items-center gap-4 mb-4'>
                    <div className='flex items-center justify-center w-12 h-12 bg-gradient-to-br from-color-primary/20 to-color-primary/10 rounded-xl'>
                      <span className='text-2xl font-bold text-color-primary'>
                        {b.numero}
                      </span>
                    </div>
                    <h3 className='text-xl md:text-2xl font-bold text-white'>
                      {b.titulo}
                    </h3>
                  </div>

                  <p className='text-color-text-light text-base leading-relaxed'>
                    {b.descripcion}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Proceso;
