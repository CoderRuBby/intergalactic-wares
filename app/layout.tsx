import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import HeaderNav from './components/header-nav/header-nav';
import FooterNav from './components/footer-nav/footer-nav';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Intergalactic wares',
  description: 'Intergalactic shop that fits every species needs.',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang='en'
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className='min-h-full flex flex-col bg-primary'>
        <HeaderNav />
        {/* urlParams && url <SideNav /> */}
        <main className='flex flex-1'>{children}</main>
        <FooterNav />
      </body>
    </html>
  );
}
