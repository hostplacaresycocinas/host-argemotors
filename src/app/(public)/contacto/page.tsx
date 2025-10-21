'use client';

import { company } from '@/app/constants/constants';
import InstagramIcon from '@/components/icons/InstagramIcon';
import WhatsappFillIcon from '@/components/icons/WhatsappFillIcon';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import PhoneIcon from '@/components/icons/PhoneIcon';
import FacebookIcon from '@/components/icons/FacebookIcon';
import LocationIcon from '@/components/icons/LocationIcon';
import ClockIcon from '@/components/icons/ClockIcon';
import EmailFillIcon from '@/components/icons/EmailFillIcon';

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
            } text-2xl md:text-3xl lg:text-4xl mb-3 md:mb-4 lg:mb-6 font-anton tracking-wide`}
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
          {/* Grid principal - Información a la izquierda, Redes a la derecha */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16'>
            {/* Columna izquierda - Información de contacto */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className='bg-color-bg-secondary backdrop-blur-sm rounded-2xl p-8 border border-neutral-800'
            >
              {/* Ubicación */}
              <div className='flex items-center gap-3 mb-6'>
                <div className='w-12 h-12 bg-color-primary rounded-lg flex items-center justify-center flex-shrink-0'>
                  <LocationIcon
                    className={`w-6 h-6 ${
                      company.dark
                        ? 'text-color-title-light'
                        : 'text-color-title'
                    }`}
                  />
                </div>
                <h3 className='text-xl font-bold text-color-title-light'>
                  Ubicación
                </h3>
              </div>
              <div className='text-color-text-light block mb-8'>
                {company.adress}, {company.city}
              </div>

              {/* Línea divisoria */}
              <div className='w-full h-[0.5px] bg-color-primary mb-8'></div>

              {/* Contacto */}
              <div className='flex items-center gap-3 mb-6'>
                <div className='w-12 h-12 bg-color-primary rounded-lg flex items-center justify-center flex-shrink-0'>
                  <PhoneIcon
                    className={`w-6 h-6 ${
                      company.dark
                        ? 'text-color-title-light'
                        : 'text-color-title'
                    }`}
                  />
                </div>
                <h3 className='text-xl font-bold text-color-title-light'>
                  Contacto
                </h3>
              </div>
              <div className='space-y-3 mb-8'>
                <a
                  href={`https://api.whatsapp.com/send?phone=549${company.whatsapp[0]}&text=Hola! Quería hacer una consulta sobre un vehículo`}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-color-text-light hover:text-color-primary-light transition-colors block'
                >
                  {company.whatsapp[0]}
                </a>
                <a
                  href={`https://www.instagram.com/${company.instagram}/`}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-color-text-light hover:text-color-primary-light transition-colors block'
                >
                  @{company.instagram}
                </a>
              </div>

              {/* Línea divisoria */}
              <div className='w-full h-[0.5px] bg-color-primary mb-8'></div>

              {/* Horarios */}
              <div className='flex items-center gap-3 mb-6'>
                <div className='w-12 h-12 bg-color-primary rounded-lg flex items-center justify-center flex-shrink-0'>
                  <ClockIcon
                    className={`w-6 h-6 ${
                      company.dark
                        ? 'text-color-title-light'
                        : 'text-color-title'
                    }`}
                  />
                </div>
                <h3 className='text-xl font-bold text-color-title-light'>
                  Horarios
                </h3>
              </div>
              <div className='space-y-2'>
                {company.openDays.map((day, index) => (
                  <div key={index} className='text-color-text-light'>
                    <span className='font-medium'>{day}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Columna derecha - Redes sociales */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className='space-y-6'
            >
              {/* WhatsApp */}
              <a
                href={`https://api.whatsapp.com/send?phone=549${company.whatsapp[0]}&text=Hola! Quería hacer una consulta sobre un vehículo`}
                target='_blank'
                rel='noopener noreferrer'
                className='block'
              >
                <div className='group bg-color-bg-secondary flex flex-col items-center backdrop-blur-sm rounded-2xl p-6 border border-neutral-800'>
                  <div className='flex justify-center mb-4'>
                    <WhatsappFillIcon className='w-12 h-12 group-hover:text-color-primary-dark transition-colors text-color-primary' />
                  </div>
                  <h3 className='group-hover:text-color-primary-light transition-colors text-color-title-light font-bold text-lg lg:text-xl mb-2'>
                    WhatsApp
                  </h3>
                  <p className=' text-color-text-light text-sm lg:text-base'>
                    Chatea con nosotros
                  </p>
                </div>
              </a>

              {/* Instagram */}
              <a
                href={`https://www.instagram.com/${company.instagram}/`}
                target='_blank'
                rel='noopener noreferrer'
                className='block'
              >
                <div className='group bg-color-bg-secondary flex flex-col items-center backdrop-blur-sm rounded-2xl p-6 border border-neutral-800'>
                  <div className='flex justify-center mb-4'>
                    <InstagramIcon className='w-11 h-11 group-hover:text-color-primary-dark transition-colors text-color-primary' />
                  </div>
                  <h3 className='group-hover:text-color-primary-light transition-colors text-color-title-light font-bold text-lg lg:text-xl mb-2'>
                    Instagram
                  </h3>
                  <p className=' text-color-text-light text-sm lg:text-base'>
                    @{company.instagram}
                  </p>
                </div>
              </a>

              {/* Facebook */}
              {company.facebook ? (
                <a
                  href={`${company.facebook}`}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='block'
                >
                  <div className='group bg-color-bg-secondary flex flex-col items-center backdrop-blur-sm rounded-2xl p-6 border border-neutral-800'>
                    <div className='flex justify-center mb-4'>
                      <FacebookIcon className='w-12 h-12 group-hover:text-color-primary-dark transition-colors text-color-primary' />
                    </div>
                    <h3 className='group-hover:text-color-primary-light transition-colors text-color-title-light font-bold text-lg lg:text-xl mb-2'>
                      Facebook
                    </h3>
                    <p className=' text-color-text-light text-sm lg:text-base'>
                      Seguinos en Facebook
                    </p>
                  </div>
                </a>
              ) : (
                <a
                  href={`mailto:${company.email}`}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='block'
                >
                  <div className='group bg-color-bg-secondary flex flex-col items-center backdrop-blur-sm rounded-2xl p-6 border border-neutral-800'>
                    <div className='flex justify-center mb-4'>
                      <EmailFillIcon className='w-12 h-12 group-hover:text-color-primary-dark transition-colors text-color-primary' />
                    </div>
                    <h3 className='group-hover:text-color-primary-light transition-colors text-color-title-light font-bold text-lg lg:text-xl mb-2'>
                      Email
                    </h3>
                    <p className=' text-color-text-light text-sm lg:text-base'>
                      Envíanos un email
                    </p>
                  </div>
                </a>
              )}
            </motion.div>
          </div>

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
