import React from 'react';
import SignIn from 'pages/SignIn';
import { screen } from '@testing-library/react';
import { renderWithProviders } from 'helpers/renderWithProviders';

describe('<SignIn />', () => {
  it('should display a link to the login page', () => {
    renderWithProviders(<SignIn />);
    const link = screen.getByRole('link', { name: 'Sign Up' });

    expect(link).toHaveAttribute('href', '/signup');
  });
});
