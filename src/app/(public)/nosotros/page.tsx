'use client';

import Image from 'next/image';
import { company } from '@/app/constants/constants';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import CarStrokeIcon from '@/components/icons/CarStrokeIcon';

const NosotrosPage = () => {
  return (
    <>
      <Header />

      {/* Hero Section con imagen de fondo */}
      <section className='relative h-44 md:h-60 lg:h-72 flex items-center justify-center overflow-hidden'>
        {/* Imagen de fondo con overlay */}
        <div className='absolute inset-0 z-0'>
          <Image
            src='/assets/nosotros/nosotros-banner.webp'
            alt={`Equipo de ${company.name}`}
            fill
            className='object-cover'
            priority
          />
          <div className='absolute inset-0 bg-black/80'></div>
        </div>

        {/* Contenido centrado */}
        <div className='relative z-10 text-center px-4 max-w-4xl mx-auto'>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`${
              company.secondaryColor
                ? 'text-color-secondary-light'
                : 'text-color-primary-light'
            } text-2xl md:text-3xl lg:text-4xl mb-3 md:mb-4 lg:mb-6 font-anton uppercase tracking-wide`}
          >
            Nosotros
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='text-xl md:text-2xl text-white/90 font-medium leading-relaxed'
          >
            Transparencia y confianza en cada vehículo
          </motion.p>
        </div>
      </section>

      {/* Sección de historia con diseño moderno */}
      <section className='py-16 md:py-24 relative'>
        {/* Fondo con patrón */}
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.02)_1px,transparent_0)] bg-[length:30px_30px]'></div>

        <div className='max-w-7xl mx-auto px-4 relative z-10'>
          <div className='grid lg:grid-cols-2 gap-16 items-center'>
            {/* Texto con diseño de tarjeta */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className='order-2 lg:order-1'
            >
              <div className='bg-white/5 backdrop-blur rounded-2xl p-8 md:p-10 border border-white/10 shadow-xl'>
                <div className='space-y-6 text-color-text-light text-lg leading-relaxed'>
                  <div className='flex items-start gap-4'>
                    <div className='w-2 h-2 bg-color-primary rounded-full mt-3 flex-shrink-0'></div>
                    <p>
                      <span className='text-color-primary-light font-semibold text-xl'>
                        {company.name}
                      </span>{' '}
                      nació de la pasión por los automóviles y el compromiso con
                      la excelencia en el servicio. Desde nuestros inicios, nos
                      hemos dedicado a seleccionar cuidadosamente cada vehículo.
                    </p>
                  </div>

                  <div className='flex items-start gap-4'>
                    <div className='w-2 h-2 bg-color-primary rounded-full mt-3 flex-shrink-0'></div>
                    <p>
                      Hoy, seguimos siendo fieles a esos principios
                      fundamentales. Cada auto que seleccionamos, cada cliente
                      que atendemos y cada detalle que cuidamos refleja nuestro
                      compromiso con brindar la mejor experiencia posible en la
                      compra de vehículos usados.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Imagen con diseño moderno */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className='relative order-1 lg:order-2'
            >
              <div className='relative'>
                <div className='absolute -inset-4 bg-gradient-to-r from-color-primary/15 to-color-primary/15 rounded-2xl blur-xl'></div>
                <div className='relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl border border-white/10'>
                  <Image
                    src='/assets/nosotros/nosotros-1.webp'
                    alt='Nuestro equipo trabajando'
                    fill
                    className='object-cover'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/30 to-transparent'></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sección de compromisos con diseño moderno */}
      <section className='pt-8 pb-16 md:pt-12 md:pb-24 relative'>
        {/* Fondo con gradiente */}

        <div className='max-w-7xl mx-auto px-4 relative z-10'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-center mb-20'
          >
            <h2 className='text-3xl md:text-4xl lg:text-5xl text-white mb-4 font-anton uppercase tracking-wide'>
              Nuestras{' '}
              <span className='text-color-primary-light'>Fortalezas</span>
            </h2>
            <div className='w-20 h-1 bg-color-primary mx-auto mb-6'></div>
            <p className='text-color-text-light text-lg max-w-3xl mx-auto'>
              Tu confianza es nuestro motor, tu satisfacción nuestro destino
            </p>
          </motion.div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {/* Compromiso 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className='group'
            >
              <div className='bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-color-primary/30 transition-all duration-300 h-full'>
                <div className='w-16 h-16 bg-gradient-to-br from-color-primary/20 to-color-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300'>
                  <svg
                    className='w-8 h-8 text-color-primary'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                  </svg>
                </div>
                <h3 className='text-xl font-semibold text-white mb-3 text-center'>
                  Calidad Garantizada
                </h3>
                <p className='text-color-text-light text-center leading-relaxed'>
                  Cada vehículo pasa por rigurosas inspecciones
                </p>
              </div>
            </motion.div>

            {/* Compromiso 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className='group'
            >
              <div className='bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-color-primary/30 transition-all duration-300 h-full'>
                <div className='w-16 h-16 bg-gradient-to-br from-color-primary/20 to-color-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300'>
                  <svg
                    className='w-8 h-8 text-color-primary'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                  </svg>
                </div>
                <h3 className='text-xl font-semibold text-white mb-3 text-center'>
                  Respuesta Rápida
                </h3>
                <p className='text-color-text-light text-center leading-relaxed'>
                  Te respondemos en el menor tiempo posible
                </p>
              </div>
            </motion.div>

            {/* Compromiso 4 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className='group'
            >
              <div className='bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-color-primary/30 transition-all duration-300 h-full'>
                <div className='w-16 h-16 bg-gradient-to-br from-color-primary/20 to-color-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300'>
                  <CarStrokeIcon className='w-8 h-8 text-color-primary stroke-2' />
                </div>
                <h3 className='text-xl font-semibold text-white mb-3 text-center'>
                  Amplio Stock
                </h3>
                <p className='text-color-text-light text-center leading-relaxed'>
                  Gran variedad de vehículos para elegir
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default NosotrosPage;
