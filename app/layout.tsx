import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.randazaengenharia.com.br'),
  title: 'Randaza Engenharia Estrutural',
  description: 'Engenharia estrutural, recuperação, laudos técnicos, retrofit de fachadas e construções em São Paulo.',
  icons: {
    icon: [{ url: '/images/logo-randaza-original.png?v=2', type: 'image/png' }],
    shortcut: ['/images/logo-randaza-original.png?v=2'],
    apple: [{ url: '/images/logo-randaza-original.png?v=2', type: 'image/png' }],
  },
  openGraph: {
    title: 'Randaza Engenharia Estrutural',
    description: 'Estruturas confiáveis começam por decisões claras.',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Randaza Engenharia Estrutural' }],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Randaza Engenharia Estrutural',
    description: 'Estruturas confiáveis começam por decisões claras.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body></html>;
}
