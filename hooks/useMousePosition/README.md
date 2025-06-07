# useMousePosition

The `useMousePosition` hook is a custom React hook that helps you get the mouse position on the window. It provides an object containing the x and y positions of the mouse.

## How To Use

```js
import type { JSX } from 'react';

import { useMousePosition } from '@badasswp/rooks';

/**
 * MousePosition component.
 *
 * This component is used to demonstrate the
 * use of the useMousePosition hook.
 *
 * @returns {JSX.Element} The MousePosition component.
 */
const MousePosition = (): JSX.Element => {
  const {x, y} = useMousePosition();

  return (
    <div>
      <p>Try to resize your Window</p>
      <p data-testid="pos-x">Your current mouse position on the x-axis is {x}</p>
      <p data-testid="pos-y">Your current mouse position on the y-axis is {y}</p>
    </div>
  );
}

export default MousePosition;
```
