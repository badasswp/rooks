import { useState, useEffect } from 'react';

interface WindowSizeType {
  width: number;
  height: number;
}

/**
 * useWindowSize Hook.
 *
 * This hook is used to get the current
 * window size.
 *
 * It provides an object containing the width
 * and height of the window.
 *
 * @returns An object containing the current window width and height.
 */
const useWindowSize = (): WindowSizeType => {
  const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  /**
   * Resize event handler.
   *
   * This function updates the state with
   * the current window size.
   *
   * @returns void
   */
  const handleResize = () => setSize({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return size;
}

export default useWindowSize;
