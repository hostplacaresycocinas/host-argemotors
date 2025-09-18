'use client';

import { company } from '@/app/constants/constants';
import LocationIcon from '@/components/icons/LocationIcon';
import InstagramIcon from '@/components/icons/InstagramIcon';
import WhatsappFillIcon from '@/components/icons/WhatsappFillIcon';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

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
            } text-2xl md:text-3xl lg:text-4xl font-semibold mb-3 md:mb-4 lg:mb-6`}
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
      <section className=''>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16'>
          {/* Sección de redes sociales - Diseño horizontal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='mb-16'
          >
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              {/* WhatsApp */}
              <motion.a
                href={`https://api.whatsapp.com/send?phone=549${company.whatsapp[0]}&text=Hola! Quería hacer una consulta sobre un vehículo`}
                target='_blank'
                rel='noopener noreferrer'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className='group relative overflow-hidden bg-gradient-to-br from-color-primary/10 to-color-primary/5 rounded-2xl border border-color-primary/20 hover:border-color-primary/40 hover:scale-105'
              >
                <div className='p-8 text-center'>
                  <div className='w-16 h-16 bg-color-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300'>
                    <WhatsappFillIcon
                      className={`w-8 h-8 ${
                        company.dark ? 'text-white' : 'text-black'
                      }`}
                    />
                  </div>
                  <h3
                    className={`text-white text-xl font-semibold mb-2 group-hover:text-color-primary transition-colors`}
                  >
                    WhatsApp
                  </h3>
                  <p className='text-color-text-light mb-3'>
                    {company.whatsapp[0]}
                  </p>
                  <p className='text-color-primary font-medium'>
                    Envia tu consulta
                  </p>
                </div>
                <div className='absolute inset-0 bg-gradient-to-br from-color-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity'></div>
              </motion.a>

              {/* Instagram */}
              <motion.a
                href={`https://www.instagram.com/${company.instagram}/`}
                target='_blank'
                rel='noopener noreferrer'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className='group relative overflow-hidden bg-gradient-to-br from-color-primary/10 to-color-primary/5 rounded-2xl border border-color-primary/20 hover:border-color-primary/40 hover:scale-105'
              >
                <div className='p-8 text-center'>
                  <div className='w-16 h-16 bg-color-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300'>
                    <InstagramIcon
                      className={`w-8 h-8 ${
                        company.dark ? 'text-white' : 'text-black'
                      }`}
                    />
                  </div>
                  <h3
                    className={`text-white text-xl font-semibold mb-2 group-hover:text-color-primary transition-colors`}
                  >
                    Instagram
                  </h3>
                  <p className='text-color-text-light mb-3'>
                    @{company.instagram}
                  </p>
                  <p className='text-color-primary font-medium'>
                    Seguinos para novedades
                  </p>
                </div>
                <div className='absolute inset-0 bg-gradient-to-br from-color-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity'></div>
              </motion.a>

              {/* Ubicación */}
              <motion.a
                href={company.googlemapsLink || ''}
                target='_blank'
                rel='noopener noreferrer'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className='group relative overflow-hidden bg-gradient-to-br from-color-primary/10 to-color-primary/5 rounded-2xl border border-color-primary/20 hover:border-color-primary/40 hover:scale-105'
              >
                <div className='p-8 text-center'>
                  <div className='w-16 h-16 bg-color-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300'>
                    <LocationIcon
                      className={`w-8 h-8 ${
                        company.dark ? 'text-white' : 'text-black'
                      }`}
                    />
                  </div>
                  <h3
                    className={`text-white text-xl font-semibold mb-2 group-hover:text-color-primary transition-colors`}
                  >
                    Ubicación
                  </h3>
                  <p className='text-color-text-light mb-3'>
                    {company.adress}, {company.city}
                  </p>
                  <p className='text-color-primary font-medium'>
                    Ver en Google Maps
                  </p>
                </div>
                <div className='absolute inset-0 bg-gradient-to-br from-color-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity'></div>
              </motion.a>
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
