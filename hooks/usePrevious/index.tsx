import { useEffect, useRef } from 'react';

/**
 * usePrevious Hook.
 *
 * This hook is used to track the previous
 * value of a given input.
 *
 * @param value - The value to be tracked
 * @returns The previous value of the input
 */

const usePrevious = <T,>(value: T): T | undefined => {
  const ref = useRef<T>(value);

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current ?? { value: '' };
}

export default usePrevious;
