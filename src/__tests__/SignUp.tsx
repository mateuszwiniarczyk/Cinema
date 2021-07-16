import SignUp from 'pages/SignUp';
import { screen } from '@testing-library/react';
import { renderWithProviders } from 'helpers/renderWithProviders';

describe('<SignUp />', () => {
  it('should display a link to the login page', () => {
    renderWithProviders(<SignUp />);
    const link = screen.getByRole('link', { name: 'Sign In' });

    expect(link).toHaveAttribute('href', '/signin');
  });
});
