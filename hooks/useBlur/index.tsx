import { useEffect, useState, useRef } from 'react';
import type { Ref } from 'react';

// Define the BlurType type.
type BlurType = [boolean, Ref<HTMLDivElement>];

/**
 * useBlur Hook.
 *
 * This hook is used to track when the user
 * has clicked outside an element.
 *
 * @param {Function} onBlur The callback function to be run on blur.
 * @returns BlurType
 */
const useBlur = (onBlur: () => void): BlurType => {
  const ref = useRef<HTMLDivElement>(null);
  const [isBlurred, setIsBlurred] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent): void => {
      const el = ref.current;
      if (el && !el.contains(e.target as Node) && !isBlurred) {
        setIsBlurred(true);
        setTimeout(onBlur, 150);
      }
    };

    const handleFocusIn = (e: FocusEvent): void => {
      const el = ref.current;
      if (el && el.contains(e.target as Node)) {
        setIsBlurred(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('focusin', handleFocusIn);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('focusin', handleFocusIn);
    };
  }, [onBlur, isBlurred]);

  return [isBlurred, ref];
};

export default useBlur;
