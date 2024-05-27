import React from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const ProductCard = () => {
  return (
    <div className="max-w-[220px]">
      <Link
        href={'/product/heineken'}
        className="flex flex-col border border-b-0 border-[#efefef] rounded-xl rounded-es-none rounded-ee-none text-center"
      >
        <Image
          className="object-contain max-w-[200px]"
          src="/assets/heineken.png"
          width={200}
          height={221}
          alt="beer Image"
        />
        <h5 className="font-semibold text-lg mt-5 border border-transparent border-t-black/60 pt-2  mb-2 text-center w-full block ">
          Coors Banquet
        </h5>
        <p className="text-[#119326] pb-4 font-semibold">$6.20</p>
      </Link>
      <Button
        variant={'default'}
        className="w-full rounded-xl rounded-ss-none rounded-se-none "
      >
        Add to Cart
      </Button>
    </div>
  );
};

export default ProductCard;
