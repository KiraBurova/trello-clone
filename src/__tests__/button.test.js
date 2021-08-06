import React from 'react';

import { render } from '@testing-library/react';

import Button from '../components/Button';

describe('<Button />', () => {
  it('renders', () => {
    const { container, getByText } = render(<Button>Click me</Button>);

    expect(getByText('Click me')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
