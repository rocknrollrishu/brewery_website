import { docsConfig } from '@/config/docs';
import { siteConfig } from '@/config/site';
import { nanoid } from 'nanoid';
import Image from 'next/image';
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

type Props = {};

const CategoriesSection = (props: Props) => {
  return (
    <div className="pb-28 px-8 container mx-auto">
      <p className="text-xs text-primary font-semibold">Categories</p>
      <h4 className="text-5xl mb-2 font-semibold">Crafted Excellence</h4>
      <p className="text-[#78716C] text-xl mb-5">
        Discover our wide range of handcrafted beers, each brewed with passion
        and precision.
      </p>
      <div className="pt-14 container sm:px-24 px-0">
        <Carousel
          opts={{
            align: 'center',
          }}
          className="w-full"
        >
          <CarouselContent>
            {docsConfig.categories?.map((e) => {
              const url = `/brewery_website/assets${e?.image}`;

              return (
                <CarouselItem
                  key={nanoid()}
                  className="basis-1/2 md:basis-1/3 lg:basis-1/4 select-none"
                >
                  <article className="max-w-[200px] bg-[#d5d5d5] rounded-3xl flex flex-col justify-center items-center p-4">
                    <Image
                      src={url}
                      width={200}
                      height={100}
                      alt="beer categories"
                    />
                    <footer className="p-2">
                      <p className="font-semibold text-xl">{e?.title}</p>
                    </footer>
                  </article>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default CategoriesSection;
