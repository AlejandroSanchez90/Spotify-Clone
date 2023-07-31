import { useEffect, useState } from 'react';

function useDebounce<T>(value: T, delay?: number): T {
  const [debounceValue, setDebounceValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(value);

      return () => {
        clearTimeout(timer);
      };
    }, delay || 500);
  }, [delay, value]);

  return debounceValue;
}

export default useDebounce;
