'use client';

import React, { useState, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import testimoniosData from '@/data/testimonios.json';
import Image from 'next/image';

interface Testimonio {
  id: number;
  nombre: string;
  comentario: string;
  rating: number;
  image: string;
}

const TestimoniosHome = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
      slidesToScroll: 1,
      breakpoints: {
        '(min-width: 768px)': { slidesToScroll: 2 },
        '(min-width: 1024px)': { slidesToScroll: 3 },
      },
    },
    [
      Autoplay({
        delay: 5000,
        stopOnInteraction: false,
        stopOnMouseEnter: false,
      }),
    ]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  useEffect(() => {
    if (emblaApi) {
      setScrollSnaps(emblaApi.scrollSnapList());
      emblaApi.on('select', () => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
      });
    }
  }, [emblaApi]);

  const scrollTo = (index: number) => {
    if (emblaApi) {
      emblaApi.scrollTo(index);
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-6 h-6 ${
          index < rating ? 'text-yellow-400' : 'text-gray-600'
        }`}
        fill='currentColor'
        viewBox='0 0 20 20'
      >
        <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
      </svg>
    ));
  };

  return (
    <section className='py-16'>
      <div className='container mx-auto px-4'>
        {/* Título de la sección */}

        {/* Frase motivacional */}
        <div className='text-center mb-8'>
          <h3 className='text-2xl md:text-3xl font-bold text-color-primary-light'>
            ¡Te esperamos para que vengas a vivir la experiencia!
          </h3>
        </div>

        {/* Carrusel de testimonios */}
        <div className='relative max-w-7xl mx-auto'>
          {/* Contenedor del carrusel */}
          <div className='overflow-hidden px-2' ref={emblaRef}>
            <div className='flex'>
              {testimoniosData.testimonios.map((testimonio: Testimonio) => (
                <div
                  key={testimonio.id}
                  className='flex-[0_0_100%] md:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(33.333%-16px)] min-w-0 ml-6'
                >
                  <div className='bg-neutral-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full border border-neutral-700 hover:cursor-grab active:cursor-grabbing select-none'>
                    {/* Header: Foto del cliente, nombre y logo de Google */}
                    <div className='flex items-start justify-between mb-4'>
                      <div className='flex items-center gap-3'>
                        {/* Avatar del cliente */}
                        <div className='w-10 h-10 rounded-full flex items-center justify-center'>
                          <Image
                            src={testimonio.image}
                            alt={testimonio.nombre}
                            width={40}
                            height={40}
                            className='rounded-full'
                          />
                        </div>
                        <div>
                          <h4 className='font-medium text-color-title-light text-base'>
                            {testimonio.nombre}
                          </h4>
                        </div>
                      </div>

                      {/* Logo de Google */}
                      <div className='flex items-center gap-2'>
                        <div className='w-8 h-8 rounded-full flex items-center justify-center'>
                          <svg
                            className='w-5 h-5 text-white'
                            viewBox='0 0 24 24'
                            fill='currentColor'
                          >
                            <path
                              d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'
                              fill='#4285F4'
                            />
                            <path
                              d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'
                              fill='#34A853'
                            />
                            <path
                              d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z'
                              fill='#FBBC05'
                            />
                            <path
                              d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z'
                              fill='#EA4335'
                            />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Estrellas de rating */}
                    <div className='flex items-center mb-4'>
                      {renderStars(testimonio.rating)}
                    </div>

                    {/* Comentario del cliente */}
                    <blockquote className='text-color-text-light text-base leading-relaxed mb-4'>
                      &quot;{testimonio.comentario}&quot;
                    </blockquote>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Indicadores */}
          <div className='flex justify-center mt-8 gap-2'>
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === selectedIndex
                    ? 'bg-color-primary scale-125'
                    : 'bg-color-text-light hover:bg-color-title-light'
                }`}
                aria-label={`Ir al testimonio ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimoniosHome;
