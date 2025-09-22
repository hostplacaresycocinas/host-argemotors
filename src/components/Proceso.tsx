'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { company } from '@/app/constants/constants';

const beneficios = [
  {
    titulo: 'Mejor precio garantizado',
    descripcion:
      'Con nuestro modelo de negocios y trayectoria en el mercado nos ahorramos costos operativos para garantizarte un precio acorde.',
    icono: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='w-full h-full'
        fill='currentColor'
        viewBox='0 0 24 24'
      >
        <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' />
      </svg>
    ),
  },
  {
    titulo: 'Revisión y Calidad',
    descripcion:
      'Todos los vehículos pasan por una exhaustiva inspección para garantizar un óptimo funcionamiento de los vehículos.',
    icono: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='w-full h-full'
        fill='currentColor'
        viewBox='0 0 24 24'
      >
        <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' />
      </svg>
    ),
  },
  {
    titulo: 'Documentación ágil',
    descripcion:
      'Te ofrecemos operaciones rápidas para que puedas disfrutar de tu nuevo vehículo sin preocupaciones.',
    icono: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='w-full h-full'
        fill='currentColor'
        viewBox='0 0 24 24'
      >
        <path d='M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z' />
      </svg>
    ),
  },
];

const Proceso = () => {
  return (
    <section
      className={`flex flex-col items-center justify-center py-10 md:py-16 `}
    >
      <div className='max-w-7xl w-full flex flex-col px-4 md:px-8'>
        {/* Título y subtítulo */}
        <div className='text-center mb-8 md:mb-12'>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '0px 0px -100px 0px' }}
            className='text-3xl md:text-4xl lg:text-5xl text-white mb-4 tracking-wide font-anton uppercase'
          >
            ¿Por qué
            <span className='text-color-primary-light'> elegirnos</span> ?
          </motion.h2>
          <div className='w-16 h-1 bg-color-primary mx-auto mb-6'></div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, margin: '0px 0px -100px 0px' }}
            className='text-white/70 max-w-2xl mx-auto text-lg  leading-relaxed'
          >
            Resolvemos todas tus dudas sobre nuestros servicios y procesos
          </motion.p>
        </div>
        {/* Título */}
        {/* Layout de tres columnas */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12'>
          {beneficios.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true, margin: '0px 0px -100px 0px' }}
              className='flex flex-col items-center text-center'
            >
              {/* Icono */}
              <div
                className={`flex items-center justify-center w-16 h-16 md:w-20 md:h-20 mb-4 md:mb-6 ${
                  company.darkmode ? 'text-color-primary' : 'text-blue-600'
                }`}
              >
                {b.icono}
              </div>

              {/* Título */}
              <h3
                className={`text-xl md:text-2xl font-bold mb-3 md:mb-4 ${
                  company.darkmode ? 'text-color-title-light' : 'text-blue-900'
                }`}
              >
                {b.titulo}
              </h3>

              {/* Descripción */}
              <p
                className={`text-sm md:text-base leading-relaxed max-w-sm ${
                  company.darkmode ? 'text-color-text-light' : 'text-gray-600'
                }`}
              >
                {b.descripcion}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Proceso;
