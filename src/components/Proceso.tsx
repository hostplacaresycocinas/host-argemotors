'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import FinanciacionIcon from './icons/FinanciacionIcon';
import AtencionIcon from './icons/AtencionIcon';
import { company } from '@/app/constants/constants';
import CarFilledIcon from './icons/CarFilledIcon';

const beneficios = [
  {
    titulo: 'Multimarca',
    descripcion:
      'Amplia variedad de vehículos de diferentes marcas para que encuentres el que mejor se adapte a tus necesidades.',
    icono: CarFilledIcon,
  },
  {
    titulo: 'Financiación',
    descripcion:
      'Opciones de financiamiento flexibles y adaptadas a tu presupuesto para que puedas adquirir tu vehículo ideal.',
    icono: FinanciacionIcon,
  },
  {
    titulo: 'Atención Personalizada',
    descripcion:
      'Servicio personalizado y profesional con cientos de clientes satisfechos en nuestro historial.',
    icono: AtencionIcon,
  },
];

const Proceso = () => {
  return (
    <section className='flex flex-col items-center justify-center py-16 md:py-24 relative'>
      <div className='max-w-7xl w-full flex flex-col px-4 md:px-8 relative z-10'>
        {/* Título centrado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '0px 0px -100px 0px' }}
          className='text-center mb-16'
        >
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold leading-tight'>
            <span className='text-color-primary-light'>¿Por qué </span>
            <span className='text-white'>elegirnos?</span>
          </h2>
        </motion.div>

        {/* Contenido en dos columnas */}
        <div className='flex flex-col lg:flex-row items-center gap-12 lg:gap-16'>
          {/* Columna izquierda - Beneficios */}
          <div className='flex-1 max-w-2xl'>
            <div className='space-y-6'>
              {beneficios.map((b, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true, margin: '0px 0px -100px 0px' }}
                >
                  <div className='bg-color-bg-secondary backdrop-blur-sm rounded-xl p-6 border border-neutral-800'>
                    <div className='flex items-start gap-4'>
                      {/* Icono */}
                      <div className='flex items-center justify-center w-12 h-12 bg-color-primary rounded-lg flex-shrink-0'>
                        <b.icono
                          className={`${
                            company.dark ? 'text-white' : 'text-black'
                          } w-7 h-7`}
                        />
                      </div>

                      {/* Contenido */}
                      <div className='flex-1'>
                        <h3 className='text-xl font-bold text-white mb-1'>
                          {b.titulo}
                        </h3>
                        <p className='text-gray-300 leading-relaxed'>
                          {b.descripcion}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Columna derecha - Imagen */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '0px 0px -100px 0px' }}
            className='flex-1 max-w-2xl'
          >
            <div className='relative'>
              {/* Imagen principal */}
              <div className='relative rounded-2xl overflow-hidden shadow-2xl'>
                <Image
                  src='/assets/gallery/gallery-1000-1.webp'
                  alt='Vehículo de alta calidad'
                  className='w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover'
                  width={1000}
                  height={800}
                />
                {/* Overlay sutil */}
                <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent'></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Proceso;
