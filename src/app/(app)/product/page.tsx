import ProductCard from '@/components/product-card';
import { nanoid } from 'nanoid';
import Image from 'next/image';

export default async function ProductList() {
  return (
    <div className="container pb-28 pt-10">
      <div className=" pb-14">
        <div className="w-full mb-10 h-[150px]">
          <Image
            src="/brewery_website/assets/10569956.png"
            width={1200}
            height={150}
            alt="banner"
          />
        </div>
        <h2 className="font-bold text-5xl mb-2 bg-[#]">Beers</h2>
        <p className="text-[#78716C] text-xl mb-10">
          Freshly brewed just for you.
        </p>
      </div>

      <div className="flex flex-wrap gap-5">
        {new Array(18).fill(0).map((e) => {
          return <ProductCard key={nanoid()} />;
        })}
      </div>
    </div>
  );
}
