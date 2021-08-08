import React from 'react';
import { Wrapper, Image, Name, Genre } from './index.styles';
import movieGenres from 'data/genres/movie';
import tvShowGenres from 'data/genres/tvShow';

type props = {
  mediaType: 'tv' | 'movie';
  id: number;
  name: string;
  image: string;
  genreId: number | undefined;
};

const MediaBox = ({ name, image, mediaType, genreId, id }: props): JSX.Element => {
  const genres = mediaType === 'movie' ? movieGenres : tvShowGenres;
  const genreName = genreId ? genres[genreId] : 'No data';

  return (
    <Wrapper to={`/${mediaType}/${id}`}>
      <Image src={`https://image.tmdb.org/t/p/w300/${image}`} alt={name} />
      <Name>{name}</Name>
      <Genre>{genreName}</Genre>
    </Wrapper>
  );
};

export default MediaBox;
