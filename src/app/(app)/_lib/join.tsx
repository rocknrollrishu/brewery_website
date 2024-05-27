import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';

type Props = {};

const JoinSection = (props: Props) => {
  return (
    <section className="container mx-auto py-28 grid grid-cols-12 gap-10">
      <article className="col-span-12 md:order-1 order-2 md:col-span-6 self-center">
        <h4 className="text-5xl">Join Our Beer Club</h4>
        <p className="text-[#78716C] text-xl mb-10">
          Get exclusive access to new releases.
        </p>
        <div className="flex flex-1 gap-4">
          <Button variant={'default'} className="w-1/2 py-6">
            Sign up
          </Button>
          <Button variant={'outline'} className="w-1/2 py-6">
            Shop More
          </Button>
        </div>
      </article>
      <div className="col-span-12 md:order-2 order-1 md:col-span-6">
        <Image
          src={'/assets/laughing_lummi.png'}
          width={576}
          height={412}
          alt="join image"
        />
      </div>
    </section>
  );
};

export default JoinSection;
