'use client';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import Image from 'next/image';
import React from 'react';

const currentYear = new Date().getFullYear();

const NotAccessAlert = () => {
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
            WE&apos;RE SORRY!
          </AlertDialogTitle>
          <AlertDialogDescription className="text-center mb-4">
            <p className="mb-4">
              You must be 18 years of age or older to enter this site.
            </p>
            <p className="mb-4">
              If you believe you&apos;re seeing this in error, please clear your
              cache.
            </p>
          </AlertDialogDescription>
        </AlertDialogHeader>

        <p className="text-center mb-4">
          <span>
            &copy;&nbsp;{currentYear}&nbsp;bmjgrouplimited, All rights reserved.
          </span>
        </p>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default NotAccessAlert;
