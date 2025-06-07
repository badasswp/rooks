import type { JSX } from 'react';

import Blur from '../../hooks/useBlur/Blur';
import LocalStorage from '../../hooks/useLocalStorage/LocalStorage';
import MousePosition from '../../hooks/useMousePosition/MousePosition';
import Previous from '../../hooks/usePrevious/Previous';
import SelectedText from '../../hooks/useSelectedText/SelectedText';
import Toggle from '../../hooks/useToggle/Toggle';
import WindowSize from '../../hooks/useWindowSize/WindowSize';

import './App.css';

/**
 * App component.
 *
 * This component is used to demonstrate
 * the use of the custom React hooks.
 *
 * @returns {JSX.Element} The App component.
 */
const App = (): JSX.Element => {
  return (
    <>
      <h1>useBlur</h1>
      <Blur />

      <h1>useLocalStorage</h1>
      <LocalStorage />

      <h1>useMousePosition</h1>
      <MousePosition />

      <h1>usePrevious</h1>
      <Previous />

      <h1>useSelectedText</h1>
      <SelectedText />

      <h1>useToggle</h1>
      <Toggle isChecked={false} />

      <h1>useWindowSize</h1>
      <WindowSize />
    </>
  );
};

export default App;
