import React from 'react';
import SignIn from 'pages/SignIn';
import { render, screen } from 'test-utils';

describe('<SignIn />', () => {
  it('should display a link to the login page', () => {
    render(<SignIn />);
    const link = screen.getByRole('link', { name: 'Sign Up' });

    expect(link).toHaveAttribute('href', '/signup');
  });
});
