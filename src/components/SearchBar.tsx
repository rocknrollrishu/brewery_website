'use client';
import React, { useState } from 'react';

import style from './index.module.css';
import useTypeHook from '@/lib/useTypeHook';

const SearchBar = () => {
  const [visible, setVisible] = useState(false);
  const { ref } = useTypeHook(visible);
  return (
    <div
      tabIndex={0}
      onFocus={() => setVisible(true)}
      className="flex rounded-lg bg-[#f7fafc] border  px-3 h-11 py-2 w-full max-w-[600px] items-center shadow"
    >
      {visible ? (
        <input
          type="text"
          className=" flex bg-transparent placeholder:text-#ccc pl-2 outline-0 w-[400px]"
          onBlur={(e) => {
            if (!e?.target?.value?.length) setVisible(false);
          }}
        />
      ) : null}
      {!visible ? (
        <div className="flex items-center w-[400px]">
          <span id="sentence" ref={ref} />
          <span className={style.inputCursor}></span>
        </div>
      ) : null}
      <svg
        className="w-4 h-4 text-gray-800 dark:text-white"
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
    </div>
  );
};

export default SearchBar;
