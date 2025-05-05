'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import './globals.css'; // ✅ important

export default function Home() {
  const pathname = usePathname();

  const containerClass = clsx('container', {
    'dark-mode': pathname === '/dark-mode',
  });

  return (
    <div className={containerClass}>
      <h1>Welcome to the homepage</h1>
      <Link href="/dark-mode">
        <button>Dark-Mode</button>
      </Link>
      <Link href="/light-mode">
        <button>Light-Mode</button>
      </Link>
    </div>
  );
}