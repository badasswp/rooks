import React from 'react';
import '@testing-library/jest-dom';
import { getByTestId, render } from '@testing-library/react';

import WindowSize from '../hooks/useWindowSize/WindowSize';

describe('<UseWindowSize />', () => {
  it('should render the component with no issues', () => {
    const { container } = render(<WindowSize />);

    expect(container).toMatchSnapshot();
  });

  it('should display the width & height using the useWindowSize hook', () => {
    Object.defineProperty(window, 'innerWidth', {
      value: 1366,
      writable: true,
    });

    Object.defineProperty(window, 'innerHeight', {
      value: 768,
      writable: true,
    });

    const { container } = render(<WindowSize />);

    expect(getByTestId(container, 'width').textContent).toBe('Your current Window width is 1366');

    expect(getByTestId(container, 'height').textContent).toBe('Your current Window height is 768');
  });
});
