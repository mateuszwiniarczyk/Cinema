import React from 'react';
import Section from 'components/Section';
import PopularMovieList from 'components/PopularMovieList';
import Loader from 'components/Loader';
import usePopularMedia from 'hooks/usePopularMedia';

const PopularMovies = (): JSX.Element => {
  const { isLoading, popularMedia } = usePopularMedia('movie');

  return (
    <Section title="Popular Movies">
      {!isLoading ? <PopularMovieList movieList={popularMedia} /> : <Loader />}
    </Section>
  );
};

export default PopularMovies;
