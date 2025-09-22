'use client';

import HeroHome from '@/components/HeroHome';
import PreguntasHome from '@/components/PreguntasHome';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CarsHome from '@/components/CarsHome';
import Gallery from '@/components/Gallery';
import Proceso from '@/components/Proceso';

export default function Home() {
  return (
    <>
      <Header />
      <div className='relative min-h-screen w-full'>
        <div className='flex justify-center min-h-screen'>
          <main className='flex flex-col w-full'>
            <HeroHome />
            <section className='flex flex-col gap-8 md:gap-10 lg:gap-12 mt-10 mb-10 md:mt-16 md:mb-16'>
              <CarsHome title='Nuestros Vehículos' />
            </section>
            <Proceso />
            <Gallery />
            <PreguntasHome />
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}
