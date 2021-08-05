import React from 'react';
import { Wrapper, Image, Title } from './index.styles';
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

  return (
    <Wrapper to={`/${mediaType}/${media.id}`}>
      <Image src={`https://image.tmdb.org/t/p/w300/${media.backdrop_path}`} alt="" />
      <Title>{title}</Title>
    </Wrapper>
  );
};

export default MediaBox;
