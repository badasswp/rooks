import type { JSX } from 'react';

import Toggle from '../../hooks/useToggle/Toggle';
import Previous from '../../hooks/usePrevious/Previous';
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
			<h1>usePrevious</h1>
			<Previous />

			<h1>useToggle</h1>
			<Toggle isChecked={false} />

			<h1>useWindowSize</h1>
			<WindowSize />
    </>
  )
}

export default App
