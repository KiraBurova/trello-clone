import React from 'react';

import { render, fireEvent, act } from '@testing-library/react';

import userEvent from '@testing-library/user-event';

import SignInScreen from '../screens/SignIn';

const mockFirebase = {
  auth: jest.fn(() => mockFirebase),
  signInWithEmailAndPassword: jest.fn(() => Promise.resolve('fakeResponse')),
};

jest.mock('react-router-dom', () => {
  return {
    Redirect: jest.fn(({ to }) => `Redirected to ${to}`),
    useHistory: () => ({
      push: jest.fn(),
    }),
  };
});

describe('<SignInScreen />', () => {
  //   it('renders', () => {
  //     const { container } = render(<SignInScreen />);

  //     expect(container.firstChild).toMatchSnapshot();
  //   });
  //   it('changes input values on change', () => {
  //     const { container, getByPlaceholderText } = render(<SignInScreen />);

  //     const email = 'test@test.com';
  //     const password = '123';

  //     userEvent.type(getByPlaceholderText('Email'), email);
  //     userEvent.type(getByPlaceholderText('Password'), password);

  //     expect(getByPlaceholderText('Email')).toHaveValue(email);
  //     expect(getByPlaceholderText('Password')).toHaveValue(password);

  //     expect(container.firstChild).toMatchSnapshot();
  //   });
  it('sign ins user', async () => {
    const { container, getByTestId } = render(<SignInScreen />);
    const form = getByTestId('form');

    fireEvent.submit(form);

    expect(container.firstChild).toMatchSnapshot();
  });
});
