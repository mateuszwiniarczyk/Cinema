import React from 'react';
import { Wrapper, Image, Title, Genre } from './index.styles';
import movieGenres from 'data/genres/movie';
import tvShowGenres from 'data/genres/tvShow';

type movieProps = {
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

type tvShowProps = {
  backdrop_path: string | null;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
};

type props = {
  mediaType: 'tv' | 'movie';
  media: movieProps | tvShowProps;
};

const MediaBox = ({ media, mediaType }: props): JSX.Element => {
  let title;
  if ('name' in media) {
    title = media.name;
  } else {
    title = media.title;
  }

  const genres = mediaType === 'movie' ? movieGenres : tvShowGenres;
  const genre = media.genre_ids[0];
  const mainGenre = genres[genre] ? genres[genre] : 'No data';

  return (
    <Wrapper to={`/${mediaType}/${media.id}`}>
      <Image src={`https://image.tmdb.org/t/p/w300/${media.backdrop_path}`} alt={title} />
      <div>
        <Title>{title}</Title>
        <Genre>{mainGenre}</Genre>
      </div>
    </Wrapper>
  );
};

export default MediaBox;
