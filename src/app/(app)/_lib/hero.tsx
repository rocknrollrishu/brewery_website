import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <section className="mb-28 pt-10px">
      <div className=" h-[484px] w-full relative bg-gradient-to-b from-slate-300">
        <Image
          height={484}
          width={1200}
          src={'/brewery_website/assets/hero_image.png'}
          alt="hero image"
          className="w-full h-full object-cover object-[top_-142px_left_0px] absolute mix-blend-overlay"
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
          <Button variant={'default'} className="w-full max-w-80 py-6 ">
            Order Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
