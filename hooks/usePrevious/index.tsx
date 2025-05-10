import { useEffect, useRef } from 'react';

interface UsePreviousProps {
	value: string|number|boolean|null;
}

/**
 * usePrevious Hook.
 *
 * This hook is used to track the previous
 * value of a given input.
 *
 * @param value - The value to be tracked
 * @returns The previous value of the input
 */
const usePrevious = (value: UsePreviousProps): UsePreviousProps => {
  const ref = useRef<UsePreviousProps>(null);

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current ?? { value: '' };
}

export default usePrevious;
