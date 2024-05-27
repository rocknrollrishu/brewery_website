import Link from 'next/link';
import { Button } from './ui/button';
import { docsConfig } from '@/config/docs';
import Image from 'next/image';

const currentYear = new Date().getFullYear();
export default function SiteFooter() {
  return (
    <div className="w-full px-16 py-20 container">
      <div className="px-10 mb-16">
        <div className="mb-4">
          {' '}
          <Image src="/assets/logo.png" alt="" width={200} height={47} />
        </div>
        <div className="flex flex-wrap gap-4">
          {docsConfig.footerNav.top?.map((e, i) => {
            return (
              <Button variant={'ghost'} asChild key={i}>
                <Link href={e?.href}>{e?.title}</Link>
              </Button>
            );
          })}
        </div>
      </div>
      <div className=" p-2 border-t-2 border-[#1C1917] flex items-center flex-wrap justify-between">
        <div>
          {docsConfig.footerNav.bottom?.map((e, i) => {
            return (
              <Button variant={'link'} asChild key={i}>
                <Link href={e?.href}>{e?.title}</Link>
              </Button>
            );
          })}
        </div>
        <span>
          &copy;&nbsp;{currentYear}&nbsp;bmjgrouplimited, All rights reserved.
        </span>
      </div>
    </div>
  );
}
