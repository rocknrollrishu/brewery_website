'use client';
import { useCallback, useEffect, useRef, useState } from 'react';

const useTypeHook = (isVisible: boolean) => {
  const ref = useRef<HTMLDivElement>(null);
  const timeRef = useRef<ReturnType<typeof setTimeout>>();
  //   const [text, setText] = useState('');
  const typeSentence = useCallback(async function typeSentence(
    sentence: string,
    eleRef: HTMLElement,
    delay = 100
  ) {
    const letters = sentence.split('');
    let i = 0;
    while (i < letters.length) {
      await waitForMs(delay);

      eleRef.append(letters[i]);
      i++;
    }
    return;
  },
  []);
  const deleteSentence = useCallback(async function deleteSentence(
    eleRef: HTMLElement
  ) {
    const sentence = eleRef?.innerText;
    const letters = sentence.split('');
    let i = 0;
    while (letters.length > 0) {
      await waitForMs(100);
      letters.pop();
      eleRef.textContent = letters.join('');
    }
  },
  []);
  const carousel = useCallback(
    async function carousel(carouselList: string[], eleRef: HTMLDivElement) {
      var i = 0;
      while (true) {
        await typeSentence(carouselList[i], eleRef);
        await waitForMs(1500);
        await deleteSentence(eleRef);
        await waitForMs(500);
        i++;
        if (i >= carouselList.length) {
          i = 0;
        }
      }
    },
    [deleteSentence, typeSentence]
  );
  useEffect(() => {
    if (ref.current) {
      carousel(
        [
          'Kingfisher',
          'Tuborg',
          'Carlsberg',
          'Budweiser',
          'Heineken',
          'Corona',
        ],
        ref.current
      );
    }
    return () => {
      if (timeRef.current) {
        clearTimeout(timeRef?.current);
      }
    };
  }, [ref, isVisible, timeRef, carousel]);

  function waitForMs(ms: number) {
    return new Promise((resolve) => {
      timeRef.current = setTimeout(resolve, ms);
    });
  }

  return {
    ref,
  };
};

export default useTypeHook;
