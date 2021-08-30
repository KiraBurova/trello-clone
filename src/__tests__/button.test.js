import React from 'react';

import { render } from '@testing-library/react';

import Button from '../components/Button';

describe('<Button />', () => {
  it('renders', () => {
    const { container, queryByText } = render(<Button>Click me</Button>);

    expect(queryByText('Click me')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
  it('shows loader', () => {
    const { container, queryByText } = render(<Button isLoading={true}>Click me</Button>);

    expect(queryByText('Click me')).toBeFalsy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
