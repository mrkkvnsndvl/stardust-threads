import type { Metadata } from 'next';
import '../styles/global.css';

import { Karla, Playfair_Display } from 'next/font/google';

const karla = Karla({
  subsets: ['latin'],
  variable: '--font-karla',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Stardust Threads',
  description: 'E-commerce platform',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <main className={`${karla.variable} ${playfair.variable} antialiased`}>
          {children}
        </main>
      </body>
    </html>
  );
}
