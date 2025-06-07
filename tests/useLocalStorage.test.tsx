import React from 'react';
import '@testing-library/jest-dom';
import { getByTestId, render } from '@testing-library/react';

import LocalStorage from '../hooks/useLocalStorage/LocalStorage';

describe('<UseLocalStorage />', () => {
  it('should render the component with no issues', () => {
    const { container } = render(<LocalStorage />);

    expect(container).toMatchSnapshot();
  });

  it('should display the localStorage item using the useLocalStorage hook', () => {
    const localStorageMock = (() => {
      let store: Record<string, string> = {
        sample: 'Hello World',
      };
      return {
        getItem: jest.fn((key: string) => store[key] || null),
        setItem: jest.fn((key: string, value: string) => {
          store[key] = value;
        }),
        removeItem: jest.fn((key: string) => {
          delete store[key];
        }),
        clear: jest.fn(() => {
          store = {};
        }),
      };
    })();

    Object.defineProperty(window, 'localStorage', {
      value: localStorageMock,
      writable: true,
    });

    const { container } = render(<LocalStorage />);

    expect(getByTestId(container, 'sample').textContent).toBe(
      'Your local storage item is Hello World'
    );
  });
});
