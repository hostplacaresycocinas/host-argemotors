'use client';

import Image from 'next/image';
import { company } from '@/app/constants/constants';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import CompromisoIcon from '@/components/icons/CompromisoIcon';
import CarIcon from '@/components/icons/CarIcon';

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
            } text-2xl md:text-3xl lg:text-4xl mb-3 md:mb-4 lg:mb-6 font-anton tracking-wide`}
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

      {/* Sección principal con imagen y texto */}
      <section className='py-16 md:py-24 relative bg-black'>
        <div className='max-w-7xl mx-auto px-4'>
          <div className='grid lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
            {/* Imagen */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className='relative'
            >
              <div className='relative overflow-hidden shadow-2xl'>
                <Image
                  src='/assets/nosotros/nosotros-1.webp'
                  alt='Nuestro equipo trabajando'
                  width={600}
                  height={500}
                  className='h-full w-[360px] sm:w-[450px] md:w-[500px] lg:w-[600px] object-cover mx-auto rounded-xl md:rounded-2xl'
                />
                {/* Overlay sutil */}
                <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent'></div>
              </div>

              {/* Elementos decorativos */}
              <div className='absolute -top-4 -right-4 w-24 h-24 bg-color-primary/20 rounded-full blur-xl'></div>
              <div className='absolute -bottom-4 -left-4 w-32 h-32 bg-color-primary/10 rounded-full blur-2xl'></div>
            </motion.div>

            {/* Contenido */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className='space-y-8 max-w-lg md:max-w-2xl mx-auto'
            >
              <div className='flex items-center gap-2 text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-6'>
                <h1 className=' text-color-primary-light'>{company.name}</h1>
              </div>

              <div className='space-y-6'>
                <div className='flex items-start gap-4'>
                  <div className='flex items-center justify-center w-12 h-12 bg-color-primary rounded-lg flex-shrink-0'>
                    <svg
                      className={`${
                        company.dark ? 'text-white' : 'text-black'
                      } w-7 h-7`}
                      fill='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' />
                    </svg>
                  </div>
                  <div>
                    <h3 className='text-xl font-bold text-color-title-light mb-2'>
                      Pasión por los Autos
                    </h3>
                    <p className='text-color-text-light leading-relaxed'>
                      Nuestra historia comenzó con una pasión genuina por los
                      automóviles. Cada vehículo que seleccionamos es elegido
                      con el mismo amor y dedicación que ponemos en nuestro
                      trabajo diario.
                    </p>
                  </div>
                </div>

                <div className='flex items-start gap-4'>
                  <div className='flex items-center justify-center w-12 h-12 bg-color-primary rounded-lg flex-shrink-0'>
                    <svg
                      className={`${
                        company.dark ? 'text-white' : 'text-black'
                      } w-7 h-7`}
                      fill='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' />
                    </svg>
                  </div>
                  <div>
                    <h3 className='text-xl font-bold text-color-title-light mb-2'>
                      Atención al Cliente
                    </h3>
                    <p className='text-color-text-light leading-relaxed'>
                      Creemos que cada cliente merece una experiencia
                      personalizada. Nos tomamos el tiempo para entender tus
                      necesidades y encontrar el vehículo perfecto que se adapte
                      a tu estilo de vida.
                    </p>
                  </div>
                </div>

                <div className='flex items-start gap-4'>
                  <div className='flex items-center justify-center w-12 h-12 bg-color-primary rounded-lg flex-shrink-0'>
                    <CarIcon
                      className={`${
                        company.dark ? 'text-white' : 'text-black'
                      } w-8 h-8`}
                    />
                  </div>
                  <div>
                    <h3 className='text-xl font-bold text-color-title-light mb-2'>
                      Experiencia
                    </h3>
                    <p className='text-color-text-light leading-relaxed'>
                      Nuestro conocimiento del mercado automotriz nos permite
                      ofrecerte las mejores opciones con un servicio profesional
                      y confiable en cada etapa del proceso.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sección de valores */}
      <section className='pb-16 md:pb-24 relative'>
        <div className='max-w-7xl mx-auto px-4'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-color-title-light'>
              Nuestros <span className='text-color-primary-light'>Valores</span>
            </h2>
          </motion.div>

          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
            {/* Valor 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className='text-center group'
            >
              <div className='bg-color-bg-secondary backdrop-blur-sm rounded-xl p-6 border border-neutral-800 h-full'>
                <div className='w-16 h-16 bg-color-primary rounded-xl flex items-center justify-center mx-auto mb-4'>
                  <svg
                    className={`${
                      company.dark ? 'text-white' : 'text-black'
                    } w-8 h-8`}
                    fill='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' />
                  </svg>
                </div>
                <h3 className='text-lg font-bold text-color-title-light mb-2'>
                  Transparencia
                </h3>
                <p className='text-color-text-light lg:text-lg leading-relaxed text-balance'>
                  Información clara y honesta sobre cada vehículo
                </p>
              </div>
            </motion.div>

            {/* Valor 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className='text-center group'
            >
              <div className='bg-color-bg-secondary backdrop-blur-sm rounded-xl p-6 border border-neutral-800 h-full'>
                <div className='w-16 h-16 bg-color-primary rounded-xl flex items-center justify-center mx-auto mb-4'>
                  <svg
                    className={`${
                      company.dark ? 'text-white' : 'text-black'
                    } w-8 h-8`}
                    fill='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' />
                  </svg>
                </div>
                <h3 className='text-lg font-bold text-color-title-light mb-2'>
                  Calidad
                </h3>
                <p className='text-color-text-light lg:text-lg leading-relaxed text-balance'>
                  Vehículos seleccionados con los más altos estándares
                </p>
              </div>
            </motion.div>

            {/* Valor 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className='text-center group'
            >
              <div className='bg-color-bg-secondary backdrop-blur-sm rounded-xl p-6 border border-neutral-800 h-full'>
                <div className='w-16 h-16 bg-color-primary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300'>
                  <CompromisoIcon
                    className={`${
                      company.dark ? 'text-white' : 'text-black'
                    } w-10 h-8`}
                  />
                </div>
                <h3 className='text-lg font-bold text-color-title-light mb-2'>
                  Compromiso
                </h3>
                <p className='text-color-text-light lg:text-lg leading-relaxed text-balance'>
                  Dedicación total a satisfacer las necesidades de nuestros
                  clientes
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
