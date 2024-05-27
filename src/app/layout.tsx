import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Beer | You need',
  description: 'the beer shop',

  icons: {
    icon: '/assets/favicon-32x32.png',
    shortcut: '/assets/favicon-16x16.png',
    apple: '/assets/apple-touch-icon.png',
    other: {
      rel: 'apple-touch-icon',
      url: '/assets/favicon-16x16.png',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
