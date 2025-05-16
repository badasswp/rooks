import '@testing-library/jest-dom';
import { getByTestId, render, waitFor } from '@testing-library/react';

import MousePosition from '../hooks/useMousePosition/MousePosition';

describe('<UseMousePosition />', () => {
  it('should render the component with no issues', () => {
    const { container } = render(<MousePosition />);

    expect(container).toMatchSnapshot();
  });

  it('should display the x and y positions using the useMousePosition hook', async () => {
    const { container } = render(<MousePosition />);

    const mouseMoveEvent = new MouseEvent('mousemove', {
      bubbles: true,
      clientX: 300,
      clientY: 200,
    });

    window.dispatchEvent(mouseMoveEvent);

    await waitFor(() => {
      expect(getByTestId(container, 'pos-x')).toHaveTextContent(
        'Your current mouse position on the x-axis is 300'
      );
      expect(getByTestId(container, 'pos-y')).toHaveTextContent(
        'Your current mouse position on the y-axis is 200'
      );
    });
  });
});
