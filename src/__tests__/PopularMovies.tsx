import PopularMovies from 'components/PopularMovies';
import { act,render, screen } from 'test-utils';

describe('<PopularMovies />', () => {
  it('renders information about loading movies', async () => {
    await act(async () => {
      render(<PopularMovies />);

      const loader = await screen.findByText('loader.svg');
      expect(loader).toBeInTheDocument();
    });
  });

  it('renders movies list', async () => {
    render(<PopularMovies />);

    const name = await screen.findByText('Jungle Cruise');
    expect(name).toBeInTheDocument();
  });
});
