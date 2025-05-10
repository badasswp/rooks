import React, { useState, JSX } from 'react';
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
      <p>Current: {count}</p>
      <p>Previous: {prevCount}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Previous;
