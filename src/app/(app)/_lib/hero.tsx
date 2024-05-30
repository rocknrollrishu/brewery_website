import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <section className="mb-28">
      <div className="max-w-[1800px] mx-auto h-[484px] w-full relative bg-gradient-to-b from-slate-500">
        <Image
          height={484}
          width={860}
          src={'/brewery_website/assets/hero_image_2.png'}
          alt="hero image"
          className="w-full h-full object-fill  aspect-[16/9] absolute mix-blend-overlay"
        />
      </div>
      <div className="p-8 pt-0 mb:mt-[-50px] container">
        <h4 className="text-5xl font-semibold mb-2">
          Discover Our Bestsellers
        </h4>
        <p className="text-[#78716C] text-xl mb-10">
          Freshly brewed just for you.
        </p>
        <div className="flex flex-1 gap-4">
          <Button variant={'default'} className="w-full max-w-80 py-6 " asChild>
            <Link href={'/product'}>Order Now</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
