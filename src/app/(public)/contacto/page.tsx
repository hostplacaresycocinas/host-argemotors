'use client';

import { company, sedes } from '@/app/constants/constants';
import InstagramIcon from '@/components/icons/InstagramIcon';
import WhatsappFillIcon from '@/components/icons/WhatsappFillIcon';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
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
          {/* Nuestros locales */}
          <div className='mb-16'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className='flex items-center gap-3 mb-8'
            >
              <div className='w-1 h-6 bg-color-primary rounded'></div>
              <h2 className='text-2xl md:text-3xl font-bold text-color-title-light'>
                Nuestros locales
              </h2>
            </motion.div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8'>
              {sedes.map((sede, index) => (
                <motion.div
                  key={sede.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={sede.googlemapsLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='block group relative h-72 sm:h-80 lg:h-96 rounded-2xl overflow-hidden border border-neutral-800 shadow-[0_8px_30px_-15px_rgba(0,0,0,0.7)]'
                  >
                    {/* Foto del local */}
                    <Image
                      src={sede.image}
                      alt={sede.name}
                      fill
                      className='object-cover transition-transform duration-700 group-hover:scale-105'
                    />

                    {/* Gradiente por encima */}
                    <div className='absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/10'></div>

                    {/* Información sobre la foto */}
                    <div className='absolute inset-x-0 bottom-0 p-5 sm:p-7'>
                      <h3 className='text-color-title-light text-xl sm:text-2xl font-bold mb-3'>
                        {sede.name}
                      </h3>
                      <div className='flex items-start gap-2 mb-2'>
                        <LocationIcon
                          className={`w-5 h-5 shrink-0 mt-0.5 ${
                            company.secondaryColor
                              ? 'text-color-secondary-light'
                              : 'text-color-primary-light'
                          }`}
                        />
                        <p className='text-color-text-light'>{sede.adress}</p>
                      </div>
                      <div className='flex items-start gap-2'>
                        <ClockIcon
                          className={`w-5 h-5 shrink-0 mt-0.5 ${
                            company.secondaryColor
                              ? 'text-color-secondary-light'
                              : 'text-color-primary-light'
                          }`}
                        />
                        <div className='text-color-text-light flex flex-col'>
                          {sede.schedule.map((horario) => (
                            <span key={horario}>{horario}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Redes sociales */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className='grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16'
          >
            {/* WhatsApp */}
            <a
              href={`https://api.whatsapp.com/send?phone=549${company.whatsapp[0]}&text=Hola! Quería hacer una consulta sobre un vehículo`}
              target='_blank'
              rel='noopener noreferrer'
              className='block'
            >
              <div className='group bg-color-bg-secondary flex flex-col items-center backdrop-blur-sm rounded-2xl p-6 border border-neutral-800 h-full'>
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
              <div className='group bg-color-bg-secondary flex flex-col items-center backdrop-blur-sm rounded-2xl p-6 border border-neutral-800 h-full'>
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
                <div className='group bg-color-bg-secondary flex flex-col items-center backdrop-blur-sm rounded-2xl p-6 border border-neutral-800 h-full'>
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
                <div className='group bg-color-bg-secondary flex flex-col items-center backdrop-blur-sm rounded-2xl p-6 border border-neutral-800 h-full'>
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
      </section>

      <Footer />
    </>
  );
};

export default ContactoPage;
