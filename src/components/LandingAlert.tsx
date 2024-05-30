'use client';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { nanoid } from 'nanoid';
import Cookies from 'js-cookie';
import Image from 'next/image';
import Link from 'next/link';
import { ACCESS_COOKIES } from '@/lib/contants';
import { useRouter } from 'next/navigation';

const currentYear = new Date().getFullYear();

const LandingAlert = () => {
  const router = useRouter();
  const handleClick = (isTrue: 0 | 1) => {
    Cookies.set(ACCESS_COOKIES, String(isTrue));
    // if (!isTrue) {
    router.refresh();
    // }
  };
  return (
    <AlertDialog open>
      <AlertDialogContent>
        <AlertDialogHeader>
          <div className="text-center flex justify-center my-4">
            <Image
              src="/brewery_website/assets/logo.png"
              alt="asdf"
              width={150}
              height={50}
            />
          </div>

          <AlertDialogTitle className="text-center mb-4">
            Welcome to our Site!
          </AlertDialogTitle>
          <AlertDialogDescription className="text-center mb-4">
            <p className="mb-4">
              Are you of the legal drinking age in the country from where you
              are accessing this website?
            </p>
            <p className="mb-4">By entering this site you agree to:</p>
            {[
              {
                title: 'Privacy Policy',
                href: '#',
              },
              {
                title: 'Terms of Service',
                href: '#',
              },
            ].map((e) => {
              return (
                <Button variant={'link'} asChild key={nanoid()}>
                  <Link href={e?.href}>{e?.title}</Link>
                </Button>
              );
            })}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="sm:justify-center justify-center mb-4 gap-4">
          <AlertDialogAction className="w-full" onClick={() => handleClick(1)}>
            Continue
          </AlertDialogAction>
          <AlertDialogCancel className="w-full" onClick={() => handleClick(0)}>
            Cancel
          </AlertDialogCancel>
        </AlertDialogFooter>
        <p className="text-center mb-4">
          <span>
            &copy;&nbsp;{currentYear}&nbsp;bmjgrouplimited, All rights reserved.
          </span>
        </p>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default LandingAlert;
