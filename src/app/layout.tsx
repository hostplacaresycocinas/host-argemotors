import type { Metadata } from 'next';
import { Nunito_Sans, Roboto } from 'next/font/google';
import './globals.css';
import { metadataCompany } from './constants/constants';
import { ScrollToTopProvider } from '../components/ScrollToTopProvider';

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  variable: '--font-nunito_sans',
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
        className={`${nunitoSans.variable} ${roboto.variable} varible-nunito_sans font-nunito_sans bg-color-bg-primary text-color-text text-lg antialiased`}
      >
        <ScrollToTopProvider />
        {children}
      </body>
    </html>
  );
}
