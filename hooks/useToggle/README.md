# useToggle

The `useToggle` hook is a custom React hook that helps you manage a boolean state. It provides a toggle function to switch the state between true and false.

## How To Use

```js
import React, { JSX } from 'react';
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
      <p>Checked: {JSON.stringify(checked)}</p>
      <input type="checkbox" checked={checked} onChange={setChecked}/>
    </div>
  );
}

export default Toggle;
```
