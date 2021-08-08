import React from 'react';
import { Wrapper, Image, Name, Genre } from './index.styles';
import movieGenres from 'data/genres/movie';
import tvShowGenres from 'data/genres/tvShow';

type LimitedMediaProps = {
  mediaType: 'tv' | 'movie';
  id: number;
  name: string;
  image: string;
  genreId: number | undefined;
};

type AllMediaProps = {
  id: number;
  mediaType: 'all';
  link: string;
  image: string;
  name: string;
};

type Props = LimitedMediaProps | AllMediaProps;

const MediaBox = (props: Props): JSX.Element => {
  let type;
  let genreName;
  const { id, image, mediaType, name } = props;

  if (props.mediaType !== 'all') {
    const { genreId } = props;
    const genres = mediaType === 'movie' ? movieGenres : tvShowGenres;
    genreName = genreId ? genres[genreId] : 'No data';
    type = mediaType;
  } else {
    const { link } = props;
    type = link;
  }

  return (
    <Wrapper to={`/${type}/${id}`}>
      <Image src={`https://image.tmdb.org/t/p/w300/${image}`} alt={name} mediaType={mediaType} />
      {props.mediaType !== 'all' ? (
        <>
          <Name>{name}</Name>
          <Genre>{genreName}</Genre>
        </>
      ) : null}
    </Wrapper>
  );
};

export default MediaBox;
