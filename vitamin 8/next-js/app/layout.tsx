'use client';

import './globals.css';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const containerClass = clsx('container', {
    'dark-mode': pathname === '/dark-mode',
  });

  return (
    <html lang="en">
      <body className={containerClass}>{children}</body>
    </html>
  );
}
