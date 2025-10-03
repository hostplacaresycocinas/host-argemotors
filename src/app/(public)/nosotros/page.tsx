'use client';

import Image from 'next/image';
import { company } from '@/app/constants/constants';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

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
            Más de 20 años de trayectoria en el mercado automotor
          </motion.p>
        </div>
      </section>

      {/* Sección de historia con diseño moderno */}
      <section className='py-16 md:py-24 relative'>
        {/* Fondo con patrón */}
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.02)_1px,transparent_0)] bg-[length:30px_30px]'></div>

        <div className='max-w-7xl mx-auto px-4 relative z-10'>
          <div className='flex flex-col gap-12'>
            {/* Texto con diseño de tarjeta */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className='bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-white/10 shadow-xl'>
                <h2 className='text-2xl md:text-3xl font-bold text-white mb-6'>
                  ¿Quiénes Somos?
                </h2>
                <div className='space-y-6 text-color-text-light text-base md:text-lg leading-relaxed'>
                  <p>
                    <span className='text-color-primary-light font-semibold'>
                      {company.name}
                    </span>{' '}
                    es una empresa fundada en el año 1997 con una gran
                    trayectoria de más de 20 años en el mercado Automotor
                    buscando la satisfacción del cliente.
                  </p>

                  <p>
                    Somos una concesionaria dedicada a la comercialización de
                    vehículos 0 Km. y usados multimarcas de primera calidad,
                    caracterizados por sus excelentes condiciones debido a un
                    previo control de calidad. De esta manera, centramos la
                    atención en el óptimo cuidado, presentación y documentación
                    en regla de cada vehículo, de modo que la venta sea
                    realizada de manera exitosa.
                  </p>

                  <p>
                    Contamos con atención personalizada para acompañarlo en la
                    búsqueda y selección de su vehículo, cumpliendo con las
                    expectativas y satisfaciendo sus necesidades.
                  </p>

                  <p>
                    Con un gran plantel distribuido en las distintas áreas de la
                    empresa, estamos en condiciones de brindar a nuestros
                    clientes los más altos estándares de servicio. En permanente
                    proceso de capacitación para atender los requerimientos de
                    un mercado cada vez más exigente y con la experiencia y
                    transparencia que nos caracteriza en el rubro automotor,
                    ofrecemos todos nuestros canales de comunicación, entre
                    ellos nuestro Sitio Web Oficial, nuestra Fan Page Facebook,
                    Instagram, como herramientas para acercarnos de manera más
                    directa con nuestros clientes y con quienes sin serlo,
                    tienen la intención de acercarse al mundo {company.name} de
                    la forma más amigable.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sección de Misión y Visión */}
      <section className='py-16 md:py-20 relative'>
        <div className='max-w-7xl mx-auto px-4 relative z-10'>
          <div className='grid md:grid-cols-2 gap-8'>
            {/* Misión */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className='bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 h-full'>
                <div className='flex items-center gap-3 mb-6'>
                  <div className='w-12 h-12 bg-gradient-to-br from-color-primary/20 to-color-primary/10 rounded-xl flex items-center justify-center'>
                    <svg
                      className='w-6 h-6 text-color-primary'
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
                  <h3 className='text-2xl font-bold text-white'>Misión</h3>
                </div>
                <p className='text-color-text-light text-base md:text-lg leading-relaxed'>
                  Brindar un servicio de calidad, compromiso y eficiencia que
                  supere las expectativas de nuestros clientes.
                </p>
              </div>
            </motion.div>

            {/* Visión */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className='bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 h-full'>
                <div className='flex items-center gap-3 mb-6'>
                  <div className='w-12 h-12 bg-gradient-to-br from-color-primary/20 to-color-primary/10 rounded-xl flex items-center justify-center'>
                    <svg
                      className='w-6 h-6 text-color-primary'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                      />
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
                      />
                    </svg>
                  </div>
                  <h3 className='text-2xl font-bold text-white'>Visión</h3>
                </div>
                <p className='text-color-text-light text-base md:text-lg leading-relaxed'>
                  Consolidarnos como un concesionario de eficiencia en el
                  mercado y en la red, principalmente enfocado hacia el cliente,
                  acompañando la filosofía del grupo {company.name}.
                </p>
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
              Nuestros <span className='text-color-primary-light'>Valores</span>
            </h2>
            <div className='w-20 h-1 bg-color-primary mx-auto mb-6'></div>
            <p className='text-color-text-light text-lg max-w-3xl mx-auto'>
              Principios que guían nuestro trabajo día a día
            </p>
          </motion.div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {/* Valor 1 - Seriedad */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className='group'
            >
              <div className='bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 h-full'>
                <div className='w-16 h-16 bg-gradient-to-br from-color-primary/20 to-color-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6'>
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
                  Seriedad
                </h3>
                <p className='text-color-text-light text-center leading-relaxed'>
                  Nos preocupamos por incrementar nuestro prestigio día a día,
                  para ello seguimos procesos claros y precisos beneficiando a
                  nuestros clientes y a nuestra gente.
                </p>
              </div>
            </motion.div>

            {/* Valor 2 - Compromiso */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className='group'
            >
              <div className='bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 h-full'>
                <div className='w-16 h-16 bg-gradient-to-br from-color-primary/20 to-color-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6'>
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
                      d='M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                    />
                  </svg>
                </div>
                <h3 className='text-xl font-semibold text-white mb-3 text-center'>
                  Compromiso
                </h3>
                <p className='text-color-text-light text-center leading-relaxed'>
                  Nos esforzamos por cumplir y respetar las pautas acordadas con
                  el cliente, así como también los lineamientos propuestos por{' '}
                  {company.name}.
                </p>
              </div>
            </motion.div>

            {/* Valor 3 - Calidad */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className='group'
            >
              <div className='bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 h-full'>
                <div className='w-16 h-16 bg-gradient-to-br from-color-primary/20 to-color-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6'>
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
                      d='M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z'
                    />
                  </svg>
                </div>
                <h3 className='text-xl font-semibold text-white mb-3 text-center'>
                  Calidad
                </h3>
                <p className='text-color-text-light text-center leading-relaxed'>
                  En los productos y servicios ofrecidos procurando fortalecer
                  la relación con nuestros clientes, y con ello el crecimiento
                  de nuestra empresa.
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
