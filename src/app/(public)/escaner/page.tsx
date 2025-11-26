'use client';

import Image from 'next/image';
import { company } from '@/app/constants/constants';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import Link from 'next/link';
import WhatsappFillIcon from '@/components/icons/WhatsappFillIcon';

const EscanerPage = () => {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className='relative h-44 md:h-52 lg:h-64 flex items-center justify-center overflow-hidden'>
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
            } text-2xl md:text-3xl lg:text-4xl mb-3 md:mb-4 lg:mb-5 font-semibold tracking-wide`}
          >
            Escáner Vehicular
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

      {/* Sección principal */}
      <section className='pb-16 md:pb-28 relative'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10'>
          <div className='flex flex-col lg:flex-row gap-8 lg:gap-12 items-center'>
            {/* Imagen del escáner */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className='w-full lg:w-1/2 flex justify-center'
            >
              <div className='relative w-full max-w-md aspect-square'>
                <Image
                  src='/assets/inicio/escaner.webp'
                  alt='Escáner de kilometraje profesional'
                  fill
                  className='object-contain'
                  priority
                />
              </div>
            </motion.div>

            {/* Contenido */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className='w-full lg:w-1/2'
            >
              <div className='mb-6'>
                <div className='flex items-center gap-3 mb-4'>
                  <div
                    className={`${
                      company.secondaryColor
                        ? 'bg-color-secondary-light'
                        : 'bg-color-primary'
                    } w-1 h-8 rounded`}
                  ></div>
                  <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-color-title-light'>
                    Verificá el kilometraje real
                  </h2>
                </div>
                <p className='text-lg md:text-xl text-color-text-light leading-relaxed mb-6'>
                  En {company.name} utilizamos tecnología de última generación
                  para garantizar la transparencia y confianza en cada
                  transacción. Contamos con equipamiento profesional de escaneo
                  que nos permite verificar el kilometraje real de cualquier
                  vehículo con precisión y confiabilidad.
                </p>
              </div>

              {/* Características */}
              <div className='space-y-4 mb-8'>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className='bg-color-bg-secondary border border-neutral-800 rounded-lg p-4'
                >
                  <h3 className='text-lg font-semibold text-color-title-light mb-2 flex items-center gap-2'>
                    <span className='text-color-primary'>✓</span>
                    Verificación completa
                  </h3>
                  <p className='text-color-text-light'>
                    Lectura precisa del kilometraje almacenado en los módulos
                    del vehículo
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className='bg-color-bg-secondary border border-neutral-800 rounded-lg p-4'
                >
                  <h3 className='text-lg font-semibold text-color-title-light mb-2 flex items-center gap-2'>
                    <span className='text-color-primary'>✓</span>
                    Transparencia total
                  </h3>
                  <p className='text-color-text-light'>
                    Te mostramos los datos reales del vehículo para que tomes
                    decisiones informadas
                  </p>
                </motion.div>
              </div>

              {/* Botón de contacto */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <Link
                  href={`https://api.whatsapp.com/send?phone=549${company.whatsapp[0]}&text=Hola! Me gustaría consultar sobre la verificación de kilometraje`}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='group inline-flex items-center gap-3 bg-color-primary hover:bg-color-primary-dark text-black font-semibold px-6 py-4 rounded-full transition-colors duration-300 shadow-lg'
                >
                  <WhatsappFillIcon className='w-6 h-6' />
                  <span>Consultar por WhatsApp</span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default EscanerPage;
