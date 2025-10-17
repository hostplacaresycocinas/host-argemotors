'use client';

import Link from 'next/link';
import HeroCarousel from './HeroCarousel';
import { motion } from 'framer-motion';
import { company } from '@/app/constants/constants';

const HeroHome = () => {
  return (
    <section
      id='inicioSection'
      className='flex justify-center overflow-hidden bg-black'
    >
      <div className={`max-w-[1920px] w-full flex flex-col items-center z-10`}>
        <div className='flex justify-center max-w-6xl lg:max-w-[1920px] w-full mx-4 sm:mx-6 md:mx-8 lg:mx-10'>
          <article className='h-[460px] md:h-[480px] lg:h-[600px] xl:h-[680px] relative w-full flex flex-col items-center justify-center md:min-w-[430px] lg:min-w-[540px] z-20 px-4 md:px-8 lg:px-12'>
            <HeroCarousel />
            <div
              className={`absolute w-full h-full top-0 -right-0 bg-black/70 md:bg-black/80 -z-20`}
            ></div>

            {/* Contenido principal centrado */}
            <div className='flex flex-col items-center text-center max-w-4xl lg:max-w-5xl'>
              {/* Título principal */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className='mb-4 md:mb-6'
              >
                <h2 className='text-[28px] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-nowrap'>
                  <span className='text-color-primary-light'>
                    Explorá nuestro catálogo,
                  </span>
                  <br />
                  <span className='text-white'>
                    encontrá el auto que buscas
                  </span>
                </h2>
              </motion.div>

              {/* Descripción */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className='text-lg md:text-xl lg:text-2xl text-white mb-6 md:mb-8 leading-relaxed max-w-lg md:max-w-xl lg:max-w-2xl bg-color-primary/20 p-3 relative'
              >
                <p>
                  Transformá tu experiencia de compra con nuestro catálogo de
                  vehículos seleccionados, usados y 0km.
                </p>
                <div className='w-1 h-full bg-color-primary/80 absolute bottom-0 left-0'></div>
              </motion.div>

              {/* Botones de llamada a la acción */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className='flex flex-col sm:flex-row gap-4 md:gap-6'
              >
                {/* Botón primario */}
                <Link
                  href='/catalogo'
                  className='group relative w-52 lg:w-60 py-4 md:py-5 bg-color-primary hover:bg-color-primary-dark transition-colors rounded-full shadow-lg'
                >
                  <span
                    className={`${
                      company.dark ? 'text-white' : 'text-black'
                    } relative z-10 flex items-center justify-center gap-1 sm:gap-2 md:gap-3 font-semibold text-lg md:text-xl`}
                  >
                    <span>Vehículos</span>
                    <svg
                      className='w-5 h-5 transition-transform group-hover:translate-x-1'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M9 5l7 7-7 7'
                      />
                    </svg>
                  </span>
                </Link>

                {/* Botón secundario */}
                <Link
                  href='/contacto'
                  className='group relative w-52 lg:w-60 py-4 md:py-5 bg-transparent border-2 border-white hover:border-color-primary hover:bg-color-primary/10 rounded-full shadow-lg transition-colors'
                >
                  <span className='relative z-10 flex items-center justify-center gap-3 text-white hover:text-white font-semibold text-lg md:text-xl'>
                    <span>Contactanos</span>
                    <svg
                      className='w-5 h-5 transition-transform group-hover:translate-x-1'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M9 5l7 7-7 7'
                      />
                    </svg>
                  </span>
                </Link>
              </motion.div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default HeroHome;
