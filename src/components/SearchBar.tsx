'use client';
import React, { useState } from 'react';

import style from './index.module.css';
import useTypeHook from '@/lib/useTypeHook';
import { Button } from './ui/button';

const SearchBar = () => {
  const [visible, setVisible] = useState(false);
  const { ref } = useTypeHook(visible);
  return (
    <div
      tabIndex={0}
      onFocus={() => setVisible(true)}
      className="flex rounded-lg bg-[#f7fafc] border  h-11 w-full sm:min-w-[600px] items-center shadow"
    >
      {visible ? (
        <input
          type="text"
          className=" flex bg-transparent placeholder:text-#ccc px-4  outline-0 flex-1 sm:w-[400px]"
          onBlur={(e) => {
            if (!e?.target?.value?.length) setVisible(false);
          }}
        />
      ) : null}
      {!visible ? (
        <div className="flex items-center flex-1 sm:w-[400px] px-4">
          <span id="sentence" ref={ref} />
          <span className={style.inputCursor}></span>
        </div>
      ) : null}
      <Button className="h-11 w-11 flex justify-center items-center  rounded-s-none">
        <svg
          className="min-w-4 h-4 text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </Button>
    </div>
  );
};

export default SearchBar;
