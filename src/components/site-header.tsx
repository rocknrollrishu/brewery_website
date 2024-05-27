'use client';
import Link from 'next/link';

import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

import { Icons } from '@/components/icons';
import { MainNav } from '@/components/main-nav';
import { MobileNav } from '@/components/mobile-nav';

import { Button, buttonVariants } from '@/components/ui/button';
import Image from 'next/image';
import useTypeHook from '@/lib/useTypeHook';
import { PersonIcon } from '@radix-ui/react-icons';
import SearchBar from './SearchBar';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex flex-col h-28 max-w-screen-2xl items-center w-full">
        <div className="mr-4 flex w-full items-center pt-4">
          <Link href="/" className="flex items-center space-x-2 mr-auto">
            <Image src="/assets/logo.png" alt="asdf" width={150} height={50} />
          </Link>
          <div className="mx-auto">
            <SearchBar />
          </div>
          <div className="flex ml-auto gap-2">
            <Button variant={'default'} asChild>
              <Link href={'/login'}>
                <PersonIcon width={24} height={24} className="mr-2" /> Login
              </Link>
            </Button>
            <Button variant={'outline'}>
              <svg
                className="inline-flex mr-2"
                width="25px"
                height="24px"
                viewBox="0 0 25 24"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  id="Desktop"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <g
                    id="Collection---Standard"
                    transform="translate(-1371.000000, -31.000000)"
                    stroke="#000"
                  >
                    <g
                      id="Group-430"
                      transform="translate(1372.000000, 32.409091)"
                    >
                      <path
                        d="M16.138528,19.164502 C16.138528,18.0499349 17.0412769,17.147186 18.155844,17.147186 C19.2704111,17.147186 20.17316,18.0499349 20.17316,19.164502 C20.17316,20.2790691 19.2704111,21.181818 18.155844,21.181818 C17.0412769,21.181818 16.138528,20.2790691 16.138528,19.164502 L16.138528,19.164502 Z"
                        id="Stroke-422"
                      ></path>
                      <path
                        d="M6.051948,19.164502 C6.051948,18.0499349 6.95469691,17.147186 8.069264,17.147186 C9.18383109,17.147186 10.08658,18.0499349 10.08658,19.164502 C10.08658,20.2790691 9.18383109,21.181818 8.069264,21.181818 C6.95469691,21.181818 6.051948,20.2790691 6.051948,19.164502 L6.051948,19.164502 Z"
                        id="Stroke-424"
                      ></path>
                      <path
                        d="M0,0 L3.025974,0 L5.56577484,12.6969869 C5.84819908,14.1121341 7.08985708,15.12987 8.53223802,15.12987 L20.17316,15.12987"
                        id="Stroke-426"
                      ></path>
                      <polyline
                        id="Stroke-428"
                        points="4.034632 3.025974 23.199134 3.025974 21.181818 11.095238 6.051948 13.112554"
                      ></polyline>
                    </g>
                  </g>
                </g>
              </svg>
              Cart
            </Button>
          </div>
        </div>
        <div className="flex gap-4 justify-center items-center my-4">
          <MainNav />
        </div>
      </div>
    </header>
  );
}
