# usePrevious

The `usePrevious` hook is a custom React hook that helps you track the previous value of a state or prop across renders.

## How To Use

```js
import { useState } from 'react';
import type { JSX } from 'react';

import { usePrevious } from '@badasswp/rooks';

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
