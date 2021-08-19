import React from 'react';
import Section from 'components/Section';
import PopularMovieList from 'components/PopularMovieList';

const PopularMovies = (): JSX.Element => (
  <Section title="Popular Movies">
    <PopularMovieList />
  </Section>
);

export default PopularMovies;
