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
