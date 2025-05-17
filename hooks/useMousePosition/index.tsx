import { useState, useEffect } from 'react';

interface MousePosition {
  x: number;
  y: number;
}

/**
 * useMousePosition Hook.
 *
 * This hook is used to track the mouse
 * position on the window.
 *
 * It provides an object containing the x
 * and y positions of the mouse.
 *
 * @returns An object containing the current x and y mouse positions.
 */
const useMousePosition = (): MousePosition => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  /**
   * MouseMove event handler.
   *
   * This function updates the state with the
   * current mouse position.
   *
   * @returns void
   */
  const handleMouseTracker = (e: MouseEvent) => setMousePosition({ x: e.clientX, y: e.clientY });

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseTracker);

    return () => window.removeEventListener('mousemove', handleMouseTracker);
  }, []);

  return mousePosition;
}

export default useMousePosition;
