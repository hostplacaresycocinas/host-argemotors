'use client';

import { navigation } from '@/app/constants/constants';
import { company } from '@/app/constants/constants';

import Image from 'next/image';
import InstagramIcon from './icons/InstagramIcon';
import FacebookIcon from './icons/FacebookIcon';
import LocationIcon from './icons/LocationIcon';

import Link from 'next/link';
import EmailFillIcon from './icons/EmailFillIcon';
import WhatsappFillIcon from './icons/WhatsappFillIcon';
import OnlymotorsLogo from './icons/OnlymotorsLogo';

const Footer = () => {
  return (
    <footer className='relative bg-black overflow-hidden'>
      {/* Resplandor color primario detrás del footer */}
      <div className='absolute -top-10 left-0 right-0 h-32 bg-gradient-to-b from-color-primary/40 via-color-primary/30 to-transparent blur-3xl'></div>

      {/* Patrón de fondo decorativo */}
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.02)_1px,transparent_0)] bg-[length:30px_30px]'></div>

      <div className='relative z-10 max-w-7xl mx-auto px-6 lg:px-8'>
        {/* Sección principal */}
        <div className='pt-16 md:pt-20'>
          {/* Logo y descripción centrados */}
          <div className='text-center mb-16'>
            <div className='mb-8'>
              {company.favicon ? (
                <div className='w-48 sm:w-52 md:w-56 lg:w-60 h-14 sm:h-16 md:h-18 mx-auto'>
                  <Image
                    className='w-full h-full object-contain'
                    src='/assets/company/logo.webp'
                    alt={`${company.name} logo`}
                    width={256}
                    height={64}
                  />
                </div>
              ) : (
                <div className='w-56 sm:w-60 md:w-64 lg:w-72 h-16 md:h-20 mx-auto'>
                  <Image
                    className='w-full h-full object-contain'
                    src='/assets/company/logo.webp'
                    alt={`${company.name} logo`}
                    width={240}
                    height={56}
                  />
                </div>
              )}
            </div>
            <p className='text-color-text-light text-lg leading-relaxed max-w-2xl mx-auto mb-8'>
              {company.footer}
            </p>
          </div>

          {/* Grid de contenido */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-12 mb-16'>
            {/* Navegación */}
            <div className='text-center md:text-left'>
              <h3 className='text-white text-xl font-bold mb-8 relative'>
                Navegación
                <div className='absolute -bottom-2 left-1/2 md:left-0 transform md:transform-none -translate-x-1/2 w-16 h-0.5 bg-color-primary rounded-full'></div>
              </h3>
              <ul className='space-y-4'>
                {navigation.map((link) => (
                  <li key={link.id}>
                    <Link
                      href={`${link.url}`}
                      className='text-color-text-light hover:text-color-primary transition-all duration-300 text-base group relative'
                    >
                      <span className='relative z-10'>{link.title}</span>
                      <div className='absolute -bottom-1 left-0 w-0 h-0.5 bg-color-primary transition-all duration-300 group-hover:w-full'></div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contacto */}
            <div className='text-center md:text-left'>
              <h3 className='text-white text-xl font-bold mb-8 relative'>
                Contacto
                <div className='absolute -bottom-2 left-1/2 md:left-0 transform md:transform-none -translate-x-1/2 w-16 h-0.5 bg-color-primary rounded-full'></div>
              </h3>
              <div className='space-y-6'>
                {/* Dirección */}
                {(company.adress || company.city) && (
                  <Link
                    href={`${company.googlemapsLink}`}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center gap-2 group'
                  >
                    <div className='w-12 h-12 rounded-full bg-color-primary/20 flex items-center justify-center group-hover:bg-color-primary/30 transition-colors'>
                      <LocationIcon className='w-6 h-6 text-color-primary group-hover:text-color-primary-light transition-colors' />
                    </div>
                    <span className='text-color-text-light text-base leading-relaxed group-hover:text-color-primary transition-colors'>
                      {company.adress && `${company.adress}, `}
                      {company.city && `${company.city}`}
                    </span>
                  </Link>
                )}

                {/* WhatsApp */}
                {company.whatsapp &&
                  company.whatsapp.map((whatsappNumber, idx) => (
                    <a
                      key={idx}
                      href={`https://api.whatsapp.com/send?phone=549${whatsappNumber}&text=Hola! Quería hacer una consulta`}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex items-center gap-2 group'
                    >
                      <div className='w-12 h-12 rounded-full bg-color-primary/20 flex items-center justify-center group-hover:bg-color-primary/30 transition-colors'>
                        <WhatsappFillIcon className='w-6 h-6 text-color-primary' />
                      </div>
                      <span className='text-color-text-light group-hover:text-color-primary transition-colors text-base'>
                        {whatsappNumber}
                      </span>
                    </a>
                  ))}

                {/* Email */}
                {company.email && (
                  <a
                    href={`mailto:${company.email}`}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center gap-2 group'
                  >
                    <div className='w-12 h-12 rounded-full bg-color-primary/20 flex items-center justify-center group-hover:bg-color-primary/30 transition-colors'>
                      <EmailFillIcon className='w-6 h-6 text-color-primary' />
                    </div>
                    <span className='text-color-text-light group-hover:text-color-primary transition-colors text-base'>
                      {company.email}
                    </span>
                  </a>
                )}
              </div>
            </div>

            {/* Redes sociales */}
            <div className='text-center md:text-left'>
              <h3 className='text-white text-xl font-bold mb-8 relative'>
                Redes Sociales
                <div className='absolute -bottom-2 left-1/2 md:left-0 transform md:transform-none -translate-x-1/2 w-16 h-0.5 bg-color-primary rounded-full'></div>
              </h3>
              <div className='flex flex-col items-center md:items-start gap-6'>
                {company.instagram && (
                  <a
                    href={`https://www.instagram.com/${company.instagram}/`}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center gap-4 group'
                  >
                    <div className='w-12 h-12 rounded-full bg-color-primary/20 flex items-center justify-center group-hover:bg-color-primary/30 transition-colors'>
                      <InstagramIcon className='w-6 h-6 text-color-primary' />
                    </div>
                    <span className='text-color-text-light group-hover:text-color-primary transition-colors text-base'>
                      @{company.instagram}
                    </span>
                  </a>
                )}
                {company.facebook && (
                  <a
                    href={`${company.facebook}`}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center gap-4 group'
                  >
                    <div className='w-12 h-12 rounded-full bg-color-primary/20 flex items-center justify-center group-hover:bg-color-primary/30 transition-colors'>
                      <FacebookIcon className='w-6 h-6 text-color-primary' />
                    </div>
                    <span className='text-color-text-light group-hover:text-color-primary transition-colors text-base'>
                      Facebook
                    </span>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Línea separadora */}
          <div className='relative mb-12'>
            <div className='h-px bg-gradient-to-r from-transparent via-white/20 to-transparent'></div>
          </div>
        </div>

        {/* Sección inferior */}
        <div className='pb-8 md:pb-12'>
          <div className='flex flex-col items-center gap-6 text-center'>
            <div className='text-color-text-light text-base'>
              © Copyright {new Date().getFullYear()} - {company.name}. Todos los
              derechos reservados.
            </div>

            <div className='flex items-center gap-2 text-base'>
              <span className='text-color-text-light'>Desarrollado por:</span>
              <a
                href='https://www.onlymotors.com.ar/'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:opacity-80 transition-opacity duration-300'
              >
                <OnlymotorsLogo
                  className='w-24 md:w-28'
                  gradientStart='#ffffff'
                  gradientEnd='#A1A1A1'
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
