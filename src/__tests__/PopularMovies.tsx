import React from 'react';
import { render, screen, act } from 'test-utils';
import PopularMovies from 'components/PopularMovies';

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
