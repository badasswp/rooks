import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, getByRole, getByTestId, render } from '@testing-library/react';

import Toggle from '../hooks/useToggle/Toggle';

describe('<UseToggle />', () => {
  it('should render the component with no issues', () => {
    const { container } = render(<Toggle isChecked={false} />);

    expect(container).toMatchSnapshot();
  });

  it('should toggle the state using the useToggle hook', () => {
    const { container } = render(<Toggle isChecked={true} />);

    fireEvent.click(getByRole(container, 'checkbox'));
    expect(getByTestId(container, 'status').textContent).toBe('Checked: false');

    fireEvent.click(getByRole(container, 'checkbox'));
    expect(getByTestId(container, 'status').textContent).toBe('Checked: true');
  });
});
