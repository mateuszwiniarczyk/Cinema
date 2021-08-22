import SignUp from 'pages/SignUp';
import { render, screen } from 'test-utils';

describe('<SignUp />', () => {
  it('should display a link to the login page', () => {
    render(<SignUp />);
    const link = screen.getByRole('link', { name: 'Sign In' });

    expect(link).toHaveAttribute('href', '/signin');
  });
});
