import type { Metadata } from 'next';
import { Anton, Roboto } from 'next/font/google';
import './globals.css';
import { metadataCompany } from './constants/constants';
import { ScrollToTopProvider } from '../components/ScrollToTopProvider';

const anton = Anton({
  subsets: ['latin'],
  variable: '--font-anton',
  weight: ['400'],
});

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['400'],
});

export const metadata: Metadata = {
  metadataBase: new URL(metadataCompany.metadataBase),
  title: metadataCompany.title,
  description: metadataCompany.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='es'>
      <body
        className={`${anton.variable} ${roboto.variable} varible-anton font-roboto bg-color-bg-primary text-color-text text-lg antialiased`}
      >
        <ScrollToTopProvider />
        {children}
      </body>
    </html>
  );
}
