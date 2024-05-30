import Image from 'next/image';
import CategoriesSection from './_lib/categories';
import HeroSection from './_lib/hero';
import JoinSection from './_lib/join';
import Testimonials from './_lib/testimonials';

export default function IndexPage() {
  return (
    <>
      <div className="w-full my-5 h-[150px] container mx-auto">
        <Image
          src="/brewery_website/assets/10569956.png"
          width={1200}
          height={150}
          alt="banner"
        />
      </div>
      <HeroSection />
      <CategoriesSection />
      <JoinSection />
      <Testimonials />
    </>
  );
}
