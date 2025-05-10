# useWindowSize

The `useWindowSize` hook is a custom React hook that helps you get the current window size. It provides an object containing the width and height of the window.

## How To Use

```js
import React, { JSX } from 'react';
import useWindowSize from './';

/**
 * WindowSize component.
 *
 * This component is used to demonstrate
 * the use of the useWindowSize hook.
 *
 * @returns {JSX.Element} The WindowSize component.
 */
const WindowSize = (): JSX.Element => {
  const {width, height} = useWindowSize();

  return (
    <div>
			<p>Try to resize your Window</p>
			<p>Your current Window width is {width}</p>
			<p>Your current Window height is {height}</p>
    </div>
  );
}

export default WindowSize;
```
