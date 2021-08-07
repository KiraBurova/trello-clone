import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';

import Form from '../components/Form';

const mockLogin = jest.fn((email, password) => {
  return new Promise.resolve({ email, password });
});

describe('<Form />', () => {
  beforeEach(() => {
    render(<Form login={mockLogin} />);
  });
  it('should display required error when value is invalid', async () => {
    fireEvent.submit(screen.getByRole('button'));

    expect(await screen.findAllByRole('alert')).toHaveLength(2);
    expect(mockLogin).toHaveBeenCalledTimes(0);
  });
  it('should display error when email is invalid', async () => {
    const emailInput = screen.getByPlaceholderText(/email/i);
    fireEvent.change(emailInput, {
      target: {
        value: '',
      },
    });

    fireEvent.submit(screen.getByRole('button'));

    expect(await screen.findByText('Email is required')).toBeTruthy();
    expect(mockLogin).toHaveBeenCalledTimes(0);
    expect(emailInput.value).toBe('');
  });
  it('should display error when password is invalid', async () => {
    const passwordInput = screen.getByPlaceholderText(/password/i);
    fireEvent.input(passwordInput, {
      target: {
        value: '',
      },
    });

    fireEvent.submit(screen.getByRole('button'));

    expect(await screen.findByText('Password is required')).toBeTruthy();
    expect(mockLogin).toHaveBeenCalledTimes(0);
    expect(passwordInput.value).toBe('');
  });
});
