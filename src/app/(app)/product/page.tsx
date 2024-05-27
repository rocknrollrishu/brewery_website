import ProductCard from '@/components/product-card';
import { nanoid } from 'nanoid';

export default async function ProductList() {
  return (
    <div className="container pb-28 pt-10">
      <div className=" pb-14">
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
