import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

export default async function RegisterPage() {
  return (
    <div className="lg:max-w-[500px] max-w-[400px] mx-auto border shadow rounded-xl my-20">
      <h2 className="text-center mx-auto my-8 text-4xl font-semibold w-fit py-2 border border-transparent border-b-black">
        Register
      </h2>
      <div className="md:mx-10 mx-4 my-7">
        <Input className="my-6" placeholder="Fist Name" />
        <Input className="my-6" placeholder="Last Name" />
        <Input className="my-6" placeholder="Email" />
        <Input className="my-6" placeholder="Password" />
        <Button className="w-full h-12">Register</Button>
      </div>
      <div className="my-5 md:mx-10 mx-4">
        <hr className="border border-transparent border-b-[#ccc] mx-10 my-5" />
        <p className="text-center text-slate-600">Already have an account?</p>
        <Button className="w-full h-12 my-5" variant={'secondary'}>
          <Link href={'/login'}>Login Here</Link>
        </Button>
      </div>
    </div>
  );
}
