'use client';
import React from 'react';
import LandingAlert from '../LandingAlert';
import NotAccessAlert from './NotAccessAlert';
import { ACCESS_COOKIES } from '@/lib/contants';
import Cookies from 'js-cookie';

const ShowAlert = () => {
  const isAccess = Cookies.get(ACCESS_COOKIES);
  return (
    <>
      {!isAccess ? <LandingAlert /> : null}
      {isAccess === '0' ? <NotAccessAlert /> : null}
    </>
  );
};

export default ShowAlert;
