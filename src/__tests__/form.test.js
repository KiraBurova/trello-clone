import React from 'react';

import { render } from '@testing-library/react';

import Form from '../components/Form';

describe('<Form />', () => {
  it('renders', () => {
    const formData = {
      formTitle: 'Sign up form',
      buttonTitle: 'Sign up',
    };
    const { container, getByPlaceholderText, getByText } = render(<Form {...formData} />);

    expect(getByPlaceholderText('Password')).toBeTruthy();
    expect(getByPlaceholderText('Email')).toBeTruthy();
    expect(getByText(formData.buttonTitle)).toBeTruthy();
    expect(getByText(formData.formTitle)).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
  it('renders with disabled button', () => {
    const formData = {
      buttonTitle: 'Sign up',
      isValid: false,
    };
    const { container, getByText } = render(<Form {...formData} />);

    expect(getByText(formData.buttonTitle).disabled).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
  it('renders with error', () => {
    const formData = {
      errorText: 'Error',
    };
    const { container, getByText } = render(<Form {...formData} />);

    expect(getByText(formData.errorText)).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
  it('renders with loading text', () => {
    const formData = {
      loading: 'Loading!',
    };
    const { container, getByText } = render(<Form {...formData} />);

    expect(getByText(formData.loading)).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
