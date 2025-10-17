'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Gallery = () => {
  return (
    <section className='mt-10 mb-16 md:mt-16 md:mb-24 relative overflow-hidden'>
      {/* Patrón de fondo sutil */}
      <div className='absolute inset-0 bg-grid-pattern opacity-5'></div>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 relative z-10'>
        <div className='text-center mb-8 md:mb-12'>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: '0px 0px -100px 0px' }}
            className='text-3xl md:text-4xl lg:text-5xl text-color-primary-light font-bold leading-tight'
          >
            Variedad de marcas y modelos
            <br />
            <span className='text-2xl md:text-3xl lg:text-4xl font-normal text-color-title-light'>
              para que elijas el que más te guste
            </span>
          </motion.h2>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: '0px 0px -100px 0px' }}
          className='relative w-full max-w-4xl mx-auto'
        >
          <div className='relative w-full rounded-lg md:rounded-xl overflow-hidden'>
            <Image
              src='/assets/gallery/gallery-image.webp'
              alt='Variedad de marcas de vehículos'
              width={418}
              height={741}
              className='object-cover w-full h-[300px] md:h-[500px] lg:h-[400px] max-w-4xl mx-auto'
              priority
            />
            {/* Máscara con efecto de viñeta */}
            <div className='absolute bottom-0 right-0 w-full h-24 md:h-40 bg-gradient-to-t from-black to-transparent'></div>
            <div className='absolute bottom-0 left-0 w-24 md:w-40 h-full bg-gradient-to-r from-black to-transparent'></div>
            <div className='absolute top-0 right-0 w-full h-24 md:h-40 bg-gradient-to-b from-black to-transparent'></div>
            <div className='absolute top-0 right-0 w-24 md:w-40 h-full bg-gradient-to-l from-black to-transparent'></div>
            <div className='absolute bottom-0 right-0 w-full h-full bg-black/50'></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
