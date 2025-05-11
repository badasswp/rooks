import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, getByRole, getByTestId, render } from '@testing-library/react';

import Previous from '../hooks/usePrevious/Previous';

describe('<UsePrevious />', () => {
  it('should render the component with no issues', () => {
    const { container } = render(<Previous/>);

    expect(container).toMatchSnapshot();
  });

  it('should retain the previous state from the usePrevious hook', () => {
    const { container } = render(<Previous />);

    fireEvent.click(getByRole(container, 'button'));
    expect(getByTestId(container, 'current').textContent).toBe('Current: 1');
    expect(getByTestId(container, 'previous').textContent).toBe('Previous: 0');

    fireEvent.click(getByRole(container, 'button'));
    expect(getByTestId(container, 'current').textContent).toBe('Current: 2');
    expect(getByTestId(container, 'previous').textContent).toBe('Previous: 1');
  });
});
