import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

export default async function LoginPage() {
  return (
    <div className="lg:max-w-[500px] max-w-[400px] mx-auto border shadow rounded-xl my-20">
      <h2 className="text-center mx-auto my-8 text-4xl font-semibold w-fit py-2 border border-transparent border-b-black">
        Login
      </h2>
      <div className="md:mx-10 mx-4 my-7">
        <Input className="my-6" placeholder="Email" />
        <Input className="my-6" placeholder="Password" />
        <Button className="w-full h-12">Login</Button>
      </div>
      <div className="my-5 md:mx-10 mx-4">
        <hr className="border border-transparent border-b-[#ccc] mx-10 my-5" />
        <p className="text-center text-grey-300">Not signed up yet?</p>
        <Button className="w-full h-12 my-5" variant={'secondary'} asChild>
          <Link href={'/register'}> Register Here</Link>
        </Button>
      </div>
    </div>
  );
}
