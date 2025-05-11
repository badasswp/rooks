# useBlur

The `useBlur` hook is a custom React hook that helps you track when the user has clicked outside an element.

## How To Use

```js
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
  const handleBlur = () => {
    console.log('Blur event has been triggered');
  }

  const [isBlurred, isBlurredRef] = useBlur(handleBlur);

  return (
    <>
      <p>{JSON.stringify(isBlurred)}</p>
      <div ref={isBlurredRef} style={{ height: 100, border: '1px solid #ccc' }} contentEditable/>
    </>
  );
}

export default Blur;
```
