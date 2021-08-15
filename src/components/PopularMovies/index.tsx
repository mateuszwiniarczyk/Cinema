import React from 'react';
import Section from 'components/Section';
import PopularMovieList from 'components/PopularMovieList';
import Loader from 'components/Loader';
import usePopularMedia from 'hooks/usePopularMedia';

type movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
};

const PopularMovies = (): JSX.Element => {
  const { isLoading, popularMedia } = usePopularMedia('movie');

  return (
    <Section title="Popular Movies">
      {!isLoading ? <PopularMovieList movieList={popularMedia as movie[] | []} /> : <Loader />}
    </Section>
  );
};

export default PopularMovies;
