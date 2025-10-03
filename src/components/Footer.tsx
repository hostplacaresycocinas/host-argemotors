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
    <footer className='relative bg-gradient-to-b from-neutral-900 to-neutral-950 overflow-hidden'>
      <div className='relative z-10 max-w-7xl mx-auto px-6 lg:px-8'>
        {/* Sección principal */}
        <div className='pt-8 pb-12 md:pt-12 md:pb-16'>
          {/* Grid principal */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-6 md:gap-8 lg:gap-12 mb-8 md:mb-12'>
            {/* Logo y descripción */}
            <div>
              <div className='mb-6'>
                {company.favicon ? (
                  <div className='w-40 sm:w-44 md:w-44 lg:w-48 h-12 sm:h-14'>
                    <Image
                      className='w-full h-full object-contain object-left'
                      src='/assets/company/logo.webp'
                      alt={`${company.name} logo`}
                      width={256}
                      height={64}
                    />
                  </div>
                ) : (
                  <div className='w-52 sm:w-52 md:w-56 lg:w-64 h-14 md:h-16'>
                    <Image
                      className='w-full h-full object-contain object-left'
                      src='/assets/company/logo.webp'
                      alt={`${company.name} logo`}
                      width={240}
                      height={56}
                    />
                  </div>
                )}
              </div>
              <p className='text-color-text-light text-base leading-relaxed'>
                {company.footer}
              </p>
            </div>
            {/* Navegación */}
            <div>
              <h3 className='text-color-title-light text-xl font-medium mb-6 relative'>
                Navegación
                <div className='absolute -bottom-2 left-0 w-16 h-0.5 bg-gradient-to-r from-color-primary to-transparent rounded-full'></div>
              </h3>
              <ul className='space-y-4'>
                {navigation.map((link) => (
                  <li key={link.id}>
                    <Link
                      href={`${link.url}`}
                      className='text-color-text-light hover:text-color-title-light transition-all duration-300 flex items-center group text-base'
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contacto */}
            <div>
              <h3 className='text-color-title-light text-xl font-medium mb-6 relative'>
                Contacto
                <div className='absolute -bottom-2 left-0 w-16 h-0.5 bg-gradient-to-r from-color-primary to-transparent rounded-full'></div>
              </h3>
              <div className='space-y-4'>
                {/* Dirección */}
                {(company.adress || company.city) && (
                  <a
                    href={`${company.googlemapsLink}`}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center gap-3 group'
                  >
                    <div className='w-10 h-10 rounded-lg bg-color-primary flex items-center justify-center flex-shrink-0 group-hover:bg-color-primary-dark transition-colors'>
                      <LocationIcon
                        className={`w-6 h-6 ${
                          company.dark
                            ? 'text-color-title-light'
                            : 'text-color-title'
                        }`}
                      />
                    </div>
                    <span className='text-color-text-light group-hover:text-color-title-light transition-colors text-base leading-relaxed'>
                      {company.adress && `${company.adress}, `}
                      {company.city && `${company.city}`}
                    </span>
                  </a>
                )}

                {/* WhatsApp */}
                {company.whatsapp &&
                  company.whatsapp.map((whatsappNumber, idx) => (
                    <a
                      key={idx}
                      href={`https://api.whatsapp.com/send?phone=549${whatsappNumber}&text=Hola! Quería hacer una consulta`}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex items-center gap-3 group'
                    >
                      <div className='w-10 h-10 rounded-lg bg-color-primary flex items-center justify-center flex-shrink-0 group-hover:bg-color-primary-dark transition-colors'>
                        <WhatsappFillIcon
                          className={`w-6 h-6 ${
                            company.dark
                              ? 'text-color-title-light'
                              : 'text-color-title'
                          }`}
                        />
                      </div>
                      <span className='text-color-text-light group-hover:text-color-title-light transition-colors text-base'>
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
                    className='flex items-center gap-3 group'
                  >
                    <div className='w-10 h-10 rounded-lg bg-color-primary flex items-center justify-center flex-shrink-0 group-hover:bg-color-primary-dark transition-colors'>
                      <EmailFillIcon
                        className={`w-6 h-6 ${
                          company.dark
                            ? 'text-color-title-light'
                            : 'text-color-title'
                        }`}
                      />
                    </div>
                    <span className='text-color-text-light group-hover:text-color-title-light transition-colors text-base'>
                      {company.email}
                    </span>
                  </a>
                )}
              </div>
            </div>

            {/* Redes sociales */}
            <div>
              <h3 className='text-color-title-light text-xl font-medium mb-6 relative'>
                Seguinos
                <div className='absolute -bottom-2 left-0 w-16 h-0.5 bg-gradient-to-r from-color-primary to-transparent rounded-full'></div>
              </h3>
              <div className='space-y-4'>
                {company.instagram && (
                  <a
                    href={`https://www.instagram.com/${company.instagram}/`}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center gap-3 group'
                  >
                    <div className='w-10 h-10 rounded-lg bg-color-primary flex items-center justify-center group-hover:bg-color-primary-dark transition-colors'>
                      <InstagramIcon
                        className={`w-[22px] h-[22px] ${
                          company.dark
                            ? 'text-color-title-light'
                            : 'text-color-title'
                        }`}
                      />
                    </div>
                    <span className='text-color-text-light group-hover:text-color-title-light transition-colors text-base'>
                      @{company.instagram}
                    </span>
                  </a>
                )}
                {company.facebook && (
                  <a
                    href={`${company.facebook}`}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center gap-3 group'
                  >
                    <div className='w-10 h-10 rounded-lg bg-color-primary flex items-center justify-center group-hover:bg-color-primary-dark transition-colors'>
                      <FacebookIcon
                        className={`w-6 h-6 ${
                          company.dark
                            ? 'text-color-title-light'
                            : 'text-color-title'
                        }`}
                      />
                    </div>
                    <span className='text-color-text-light group-hover:text-color-title-light transition-colors text-base'>
                      Facebook
                    </span>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Línea separadora decorativa */}
          <div className='relative'>
            <div className='h-0.5 bg-gradient-to-r from-transparent via-color-primary to-transparent'></div>
          </div>
        </div>

        {/* Sección inferior */}
        <div className='pb-8 md:pb-12'>
          <div className='flex flex-col lg:flex-row justify-between items-center gap-6'>
            <div className='text-color-text-light text-base text-center lg:text-left'>
              © Copyright {new Date().getFullYear()} - {company.name}. Todos los
              derechos reservados.
            </div>

            <div className='flex items-center gap-1.5 text-base'>
              <span
                className={`${
                  company.darkmode ? 'text-color-text-light' : 'text-color-text'
                }`}
              >
                Desarrollado por:
              </span>
              <a
                href='https://www.onlymotors.com.ar/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <OnlymotorsLogo
                  className='w-24 md:w-28 hover:opacity-80 transition-opacity duration-300'
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
