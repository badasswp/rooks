import { useEffect } from 'react';
import type { JSX } from 'react';
import useBlur from './';

/**
 * Blur component.
 *
 * This component is used to demonstrate
 * the use of the useBlur hook.
 *
 * @returns {JSX.Element} The Blur component.
 */
const Blur = (): JSX.Element => {
  const [isBlurred, isBlurredRef] = useBlur();

  const handleBlur = () => {
    console.log('Blur event has been triggered');
  }

  useEffect(() => {
    if (isBlurred) {
      handleBlur();
    }
  })

  return (
    <>
      <p data-testid="status">{JSON.stringify(isBlurred)}</p>
      <div data-testid="element" ref={isBlurredRef} style={{ height: 100, border: '1px solid #ccc' }} contentEditable/>
    </>
  );
}

export default Blur;
