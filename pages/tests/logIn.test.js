import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import Home from '../index'; 

jest.mock('js-cookie');
jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('Home component', () => {
  it('should authenticate and redirect to the dashboard on successful login', () => {
    const push = jest.fn();
    useRouter.mockReturnValue({ push });

    render(<Home />);

    // mocks by giving user input
    fireEvent.change(screen.getByPlaceholderText(/Username/i), {
      target: { value: 'testuser' },
    });
    fireEvent.change(screen.getByPlaceholderText(/Password/i), {
      target: { value: 'password' },
    });

    // mocks by clikcing Login Button
    fireEvent.click(screen.getByText(/Log In/i));

    // checks if cookie is set
    expect(Cookies.set).toHaveBeenCalledWith('loggedin', 'true');

    // checks if the user is redirected to the dashboard after getting cookie
    expect(push).toHaveBeenCalledWith('/dashboard');
  });
});
