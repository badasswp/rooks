# usePrevious

The `usePrevious` hook is a custom React hook that helps you track the previous value of a state or prop across renders.

## How To Use

```js
import React, { useState } from 'react';
import usePrevious from './usePrevious';

const Counter = () => {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);

  return (
    <div>
      <p>Current: {count}</p>
      <p>Previous: {prevCount}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;
```
