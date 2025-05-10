import { useState } from 'react';

// Define the ToggleType type.
type ToggleType = [boolean, () => void];

/**
 * useToggle Hook.
 *
 * This hook is used to manage a boolean state.
 *
 * It provides a toggle function to switch the state
 * between true and false.
 *
 * @param boolean initial - The initial state (default is false).
 * @returns An array containing the current state and a function to toggle it.
 */
const useToggle = (initial = false): ToggleType => {
	const [state, setState] = useState(initial);

	/**
	 * Toggle function.
	 *
	 * This function toggles the current state
	 * between true and false.
	 *
	 * @returns void
	 */
	const toggle = () => setState(s => !s);

  return [state, toggle];
}

export default useToggle;
