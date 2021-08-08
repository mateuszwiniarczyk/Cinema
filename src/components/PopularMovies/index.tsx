import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Section from 'components/Section';
import PopularMovieList from 'components/PopularMovieList';

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

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
      )
      .then(({ data: { results } }) => {
        const list = results?.filter((media: movie) => media.backdrop_path);
        setMovieList(list);
      });
  }, []);

  return (
    <Section title="Popular Movies">
      <PopularMovieList movieList={movieList} />
    </Section>
  );
};

export default PopularMovies;
