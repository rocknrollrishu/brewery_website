'use client';
import React from 'react';
import LandingAlert from '../LandingAlert';
import NotAccessAlert from './NotAccessAlert';

type Props = {
  value: null | string | undefined;
};

const ShowAlert = (props: Props) => {
  const { value } = props;
  return (
    <>
      {!value ? <LandingAlert /> : null}
      {value == '0' ? <NotAccessAlert /> : null}
    </>
  );
};

export default ShowAlert;
