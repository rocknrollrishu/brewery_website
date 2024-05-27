import { Button, buttonVariants } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import { MinusIcon, PlusIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
export default async function ProductDetailPage() {
  return (
    <div className="mb-10">
      <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-6xl px-4 mx-auto py-6">
        <div className="grid gap-4 md:gap-10 items-start">
          <div className="grid gap-4">
            <Image
              alt="Product Image"
              className="aspect-square object-contain border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
              height={600}
              src="/assets/heineken.png"
              width={600}
            />
          </div>
        </div>
        <div className="grid gap-4 md:gap-10 items-start">
          <div className="grid gap-4">
            <h1 className="font-bold text-3xl">Craft Brew Lager</h1>
            <div className="flex items-center gap-4 text-[#119326]">
              <h2 className="font-bold text-2xl">$49.99</h2>
            </div>
            <div>
              <p>Style: Hazy IPA</p>
              <p>ABV: 7.2%</p>
              <p>
                This Hazy IPA is bursting with juicy, tropical hop flavors.
                Brewed with a blend of Citra, Mosaic, and Simcoe hops, it has a
                soft, pillowy mouthfeel and a hazy, golden appearance.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Button size="icon" variant="ghost">
                <MinusIcon className="w-4 h-4" />
              </Button>
              <span className="text-lg font-medium">2</span>
              <Button size="icon" variant="ghost">
                <PlusIcon className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <form className="grid gap-4 md:gap-10">
            <Button size="lg">Add to Cart</Button>
          </form>
        </div>
      </div>
      <div className="mb-10 max-w-6xl px-4 mx-auto py-6">
        <div className=" border-b-2 mb-4">
          <p
            className={cn(
              buttonVariants({ variant: 'ghost' }),
              'text-primary border-2 border-transparent border-b-primary rounded-xs'
            )}
          >
            Overview
          </p>
        </div>
        <div className="grid gap-4 text-sm leading-loose">
          <p>
            Acme Craft Lager is a premium lager beer that is brewed with the
            finest ingredients and a meticulous brewing process. This beer
            features a clean, crisp taste with a subtle hop aroma that provides
            a refreshing and balanced drinking experience.
          </p>
        </div>
      </div>
    </div>
  );
}
