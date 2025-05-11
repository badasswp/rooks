import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, getByTestId, render } from '@testing-library/react';

import Blur from '../hooks/useBlur/Blur';

describe('<UseBlur />', () => {
  it('should render the component with no issues', () => {
    const { container } = render(<Blur/>);

    expect(container).toMatchSnapshot();
  });

  it('should fire the event passed to the useBlur hook', () => {
    const { container } = render(<Blur />);

    const element = getByTestId(container, 'element');

    element.focus();
    expect(getByTestId(container, 'status').textContent).toBe('false');

    element.blur();
  });
});
