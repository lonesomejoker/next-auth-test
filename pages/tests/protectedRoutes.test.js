import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import Dashboard from '../dashboard';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));
jest.mock('js-cookie', () => ({
  get: jest.fn(),
}));

test('should redirect unauthenticated users to the login page', async () => {
  const mockPush = jest.fn();
  useRouter.mockReturnValue({ push: mockPush });
  Cookies.get.mockReturnValue(undefined); 

  render(<Dashboard />);

  await waitFor(() => {
    expect(mockPush).toHaveBeenCalledWith('/');
  });
});
