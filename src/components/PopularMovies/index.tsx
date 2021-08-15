import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Section from 'components/Section';
import PopularMovieList from 'components/PopularMovieList';
import Loader from 'components/Loader';

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
  const [movieList, setMovieList] = useState<movie[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
      )
      .then(({ data: { results } }) => {
        const list = results?.filter((media: movie) => media.backdrop_path);
        setMovieList(list);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
      });
  }, []);

  return (
    <Section title="Popular Movies">
      {!isLoading ? <PopularMovieList movieList={movieList} /> : <Loader />}
    </Section>
  );
};

export default PopularMovies;
