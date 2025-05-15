# rooks

A list of custom React hooks.

> <span style="color:red">**CAUTION:**</span>
>
> These React hooks should be carefully reviewed & vetted before being used on a Production website.

## useBlur

The `useBlur` hook is a custom React hook that helps you track when the user has clicked outside an element.

### How To Use

```js
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
```

## useMousePosition

The `useMousePosition` hook is a custom React hook that helps you get the mouse position on the window. It provides an object containing the x and y positions of the mouse.

### How To Use

```js
import type { JSX } from 'react';
import useMousePosition from './';

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

## usePrevious

The `usePrevious` hook is a custom React hook that helps you track the previous value of a state or prop across renders.

### How To Use

```js
import { useState } from 'react';
import type { JSX } from 'react';
import usePrevious from './';

/**
 * Previous component.
 *
 * This component is used to demonstrate
 * the use of the usePrevious hook.
 *
 * @returns {JSX.Element} The Previous component.
 */
const Previous = (): JSX.Element => {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);

  return (
    <div>
      <p data-testid="current">Current: {count}</p>
      <p data-testid="previous">Previous: {prevCount}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Previous;
```

## useSelectedText

The `useSelectedText` hook is a custom React hook that helps you track the selected text by the user.

### How To Use

```js
import type { JSX } from 'react';
import useSelectedText from './';

/**
 * SelectedText component.
 *
 * This component is used to demonstrate
 * the use of the useSelectedText hook.
 *
 * @returns {JSX.Element} The SelectedText component.
 */
const SelectedText = (): JSX.Element => {
  const selectedText = useSelectedText();

  return (
    <section>
      <p>{selectedText || `Nothing Selected.`}</p>
      <div>Qui et duis eu esse anim culpa. Elit officia et voluptate aute sint est laboris consequat do adipisicing culpa adipisicing ad. Excepteur sint minim enim duis culpa quis non voluptate. Sint nulla consectetur et eu. Pariatur et laboris amet officia tempor est tempor irure elit anim ad exercitation velit amet cillum. Sunt adipisicing ea voluptate magna aute et. Est fugiat ea aute culpa reprehenderit. Duis consequat minim cupidatat eiusmod mollit eu sit aliqua consequat dolore.</div>
    </section>
  );
}

export default SelectedText;
```

## useToggle

The `useToggle` hook is a custom React hook that helps you manage a boolean state. It provides a toggle function to switch the state between true and false.

### How To Use

```js
import type { JSX } from 'react';
import useToggle from './';

interface ToggleProps {
  isChecked: boolean;
}

/**
 * Toggle component.
 *
 * This component is used to demonstrate
 * the use of the useToggle hook.
 *
 * @param {boolean} isChecked - The initial state of the toggle.
 * @returns {JSX.Element} The Toggle component.
 */
const Toggle = ({ isChecked }: ToggleProps): JSX.Element => {
  const [checked, setChecked] = useToggle(isChecked);

  return (
    <div>
      <p data-testid="status">Checked: {JSON.stringify(checked)}</p>
      <input type="checkbox" checked={checked} onChange={setChecked}/>
    </div>
  );
}

export default Toggle;
```

## useWindowSize

The `useWindowSize` hook is a custom React hook that helps you get the current window size. It provides an object containing the width and height of the window.

### How To Use

```js
import type { JSX } from 'react';
import useWindowSize from './';

/**
 * WindowSize component.
 *
 * This component is used to demonstrate the
 * use of the useWindowSize hook.
 *
 * @returns {JSX.Element} The WindowSize component.
 */
const WindowSize = (): JSX.Element => {
  const {width, height} = useWindowSize();

  return (
    <div>
      <p>Try to resize your Window</p>
      <p data-testid="width">Your current Window width is {width}</p>
      <p data-testid="height">Your current Window height is {height}</p>
    </div>
  );
}

export default WindowSize;
```
