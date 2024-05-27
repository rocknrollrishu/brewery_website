import CategoriesSection from './_lib/categories';
import HeroSection from './_lib/hero';
import JoinSection from './_lib/join';
import Testimonials from './_lib/testimonials';

export default function IndexPage() {
  return (
    <>
      <HeroSection />
      <CategoriesSection />
      <JoinSection />
      <Testimonials />
    </>
  );
}
