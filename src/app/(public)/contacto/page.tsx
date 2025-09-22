'use client';

import { company } from '@/app/constants/constants';
import InstagramIcon from '@/components/icons/InstagramIcon';
import WhatsappFillIcon from '@/components/icons/WhatsappFillIcon';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import PhoneIcon from '@/components/icons/PhoneIcon';
import LocationStrokeIcon from '@/components/icons/LocationStrokeIcon';
import FacebookIcon from '@/components/icons/FacebookIcon';

const ContactoPage = () => {
  return (
    <>
      <Header />
      {/* Hero Section con imagen de fondo */}
      <section className='relative h-44 md:h-60 lg:h-72 flex items-center justify-center overflow-hidden'>
        {/* Imagen de fondo con overlay */}
        <div className='absolute inset-0 z-0'>
          <Image
            src='/assets/contacto/contacto-banner.webp'
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
            Contacto
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='text-xl md:text-2xl text-white/90 font-medium leading-relaxed'
          >
            Contactanos para cualquier consulta
          </motion.p>
        </div>
      </section>

      {/* Información de contacto principal */}
      <section className='py-16 md:py-24'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
          {/* Sección de información principal - Diseño tipo barbershop */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='mb-16'
          >
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative'>
              {/* Líneas divisoras */}
              <div className='hidden md:block absolute top-0 bottom-0 left-1/3 w-px bg-gray-600/30'></div>
              <div className='hidden md:block absolute top-0 bottom-0 right-1/3 w-px bg-gray-600/30'></div>
              {/* Ubicación */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className='text-center'
              >
                <div className='w-16 h-16 flex items-center justify-center mx-auto mb-3 md:mb-5'>
                  <LocationStrokeIcon className='w-9 h-9 text-color-primary' />
                </div>
                <h3 className='text-white text-xl font-bold mb-4 uppercase tracking-wide'>
                  Ubicación
                </h3>
                <a
                  href={`${company.googlemapsLink}`}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-color-text-light mb-4 leading-relaxed hover:text-color-title-light transition-colors'
                >
                  {company.adress},
                  <br />
                  {company.city}
                </a>
              </motion.div>

              {/* Contacto */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className='text-center'
              >
                <div className='w-16 h-16 flex items-center justify-center mx-auto mb-3 md:mb-5'>
                  <PhoneIcon className='w-9 h-9 text-color-primary' />
                </div>
                <h3 className='text-white text-xl font-bold mb-4 uppercase tracking-wide'>
                  Contacto
                </h3>
                <div>
                  <a
                    href={`https://api.whatsapp.com/send?phone=549${company.whatsapp[0]}&text=Hola! Quería hacer una consulta sobre un vehículo`}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-color-text-light mb-2 leading-relaxed hover:text-color-title-light transition-colors'
                  >
                    {company.whatsapp[0]}
                  </a>
                </div>
                <div>
                  <a
                    href={`https://www.instagram.com/${company.instagram}/`}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-color-text-light mb-4 leading-relaxed hover:text-color-title-light transition-colors'
                  >
                    @{company.instagram}
                  </a>
                </div>
              </motion.div>

              {/* Horarios */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className='text-center'
              >
                <div className='w-16 h-16 flex items-center justify-center mx-auto mb-3 md:mb-5'>
                  <svg
                    className='w-9 h-9 text-color-primary'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                  </svg>
                </div>
                <h3 className='text-white text-xl font-bold mb-4 uppercase tracking-wide'>
                  Horarios
                </h3>
                <div className='space-y-2 text-color-text-light'>
                  {company.openDays.map((day, index) => (
                    <div key={index} className='leading-relaxed'>
                      <span className='font-medium'>{day.title}:</span>{' '}
                      {day.time}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Sección de redes sociales adicionales */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className='mb-16'
          >
            <div className='text-center mb-8'>
              <h2 className='text-2xl md:text-3xl text-white mb-4 tracking-wide font-anton uppercase'>
                Seguinos en Redes
              </h2>
              <div className='w-16 h-px bg-color-primary mx-auto mb-6'></div>
            </div>

            <div className='flex justify-center gap-5'>
              <motion.a
                href={`https://api.whatsapp.com/send?phone=549${company.whatsapp[0]}&text=Hola! Quería hacer una consulta sobre un vehículo`}
                target='_blank'
                rel='noopener noreferrer'
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className='group'
              >
                <div className='w-14 h-14 bg-color-primary-light rounded-full flex items-center justify-center hover:bg-color-primary-dark transition-colors'>
                  <WhatsappFillIcon
                    className={`${
                      company.dark
                        ? 'text-color-title-light'
                        : 'text-color-title'
                    } w-7 h-7`}
                  />
                </div>
              </motion.a>

              <motion.a
                href={`https://www.instagram.com/${company.instagram}/`}
                target='_blank'
                rel='noopener noreferrer'
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className='group'
              >
                <div className='w-14 h-14 bg-gradient-to-br from-color-primary-light to-color-primary-dark rounded-full flex items-center justify-center hover:from-color-primary-dark hover:to-color-primary-light transition-all'>
                  <InstagramIcon
                    className={`${
                      company.dark
                        ? 'text-color-title-light'
                        : 'text-color-title'
                    } w-7 h-7`}
                  />
                </div>
              </motion.a>

              {company.facebook ? (
                <motion.a
                  href={`${company.facebook}`}
                  target='_blank'
                  rel='noopener noreferrer'
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className='group'
                >
                  <div className='w-14 h-14 bg-gradient-to-br from-color-primary-light to-color-primary-dark rounded-full flex items-center justify-center hover:from-color-primary-dark hover:to-color-primary-light transition-all'>
                    <FacebookIcon
                      className={`${
                        company.dark
                          ? 'text-color-title-light'
                          : 'text-color-title'
                      } w-7 h-7`}
                    />
                  </div>
                </motion.a>
              ) : (
                ''
              )}
            </div>
          </motion.div>

          {/* Mapa */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className='bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10'
          >
            <div className='relative'>
              <iframe
                className='w-full h-80 sm:h-96 md:h-[28rem] lg:h-[32rem]'
                src={`${company.googlemaps}`}
                width='100%'
                height='400'
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
                style={{
                  minWidth: '450px',
                  border: 'none',
                }}
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ContactoPage;
