'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className="mr-4 hidden md:flex">
      <nav className="flex items-center gap-4 text-sm lg:gap-6">
        <Link
          href="/product"
          className={cn(
            'transition-colors hover:text-foreground/80 text-lg ',
            pathname === '/about' ? 'text-foreground' : 'text-foreground/60'
          )}
        >
          Product
        </Link>
        <Link
          href="#"
          className={cn(
            'transition-colors hover:text-foreground/80 text-lg ',
            pathname?.startsWith('/about')
              ? 'text-foreground'
              : 'text-foreground/60'
          )}
        >
          About
        </Link>
        <Link
          href="#"
          className={cn(
            'transition-colors hover:text-foreground/80 text-lg ',
            pathname?.startsWith('/contact')
              ? 'text-foreground'
              : 'text-foreground/60'
          )}
        >
          contact
        </Link>
      </nav>
    </div>
  );
}
