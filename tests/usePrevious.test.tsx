import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import Previous from '../hooks/usePrevious/Previous';

describe('<UsePrevious />', () => {
  it('should show the component with no rendering issues', () => {
    const { container } = render(<Previous/>);

    expect(container).toMatchSnapshot();
  });
});
