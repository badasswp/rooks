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
 * @returns BlurType
 */
const useBlur = (): BlurType => {
  const ref = useRef<HTMLDivElement>(null);
  const [isBlurred, setIsBlurred] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent): void => {
      const el = ref.current;
      if (el && !el.contains(e.target as Node) && !isBlurred) {
        setIsBlurred(true);
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
  }, [isBlurred]);

  return [isBlurred, ref];
};

export default useBlur;
