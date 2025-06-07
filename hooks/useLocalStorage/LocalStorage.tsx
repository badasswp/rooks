import type { JSX } from 'react';
import useLocalStorage from './';

/**
 * LocalStorage component.
 *
 * This component is used to demonstrate the
 * use of the useLocalStorage hook.
 *
 * @returns {JSX.Element} The LocalStorage component.
 */
const LocalStorage = (): JSX.Element => {
  const sample = useLocalStorage('sample');

  return (
    <div>
      <p>Local Storage</p>
      <p data-testid="sample">Your local storage item is {sample}</p>
    </div>
  );
};

export default LocalStorage;
