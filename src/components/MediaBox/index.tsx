import React from 'react';
import { Wrapper, Image, Name, Genre } from './index.styles';
import MOVIE_GENRES from 'data/genres/movie';
import TV_SHOW_GENRES from 'data/genres/tvShow';
import MEDIA_TYPES from 'data/mediaTypes';

type LimitedMediaProps = {
  mediaType: MEDIA_TYPES.TV | MEDIA_TYPES.MOVIE;
  id: number;
  name: string;
  image: string;
  genreId: number | undefined;
};

type AllMediaProps = {
  id: number;
  mediaType: MEDIA_TYPES.ALL;
  link: string;
  image: string;
  name: string;
};

type Props = LimitedMediaProps | AllMediaProps;

const MediaBox = (props: Props): JSX.Element => {
  let type;
  let genreName;
  const { id, image, mediaType, name } = props;

  if (props.mediaType !== MEDIA_TYPES.ALL) {
    const { genreId } = props;
    const genres = mediaType === MEDIA_TYPES.MOVIE ? MOVIE_GENRES : TV_SHOW_GENRES;
    genreName = genreId ? genres[genreId] : 'No data';
    type = mediaType;
  } else {
    const { link } = props;
    type = link;
  }

  return (
    <Wrapper to={`/${type}/${id}`}>
      <Image
        src={`https://image.tmdb.org/t/p/w300/${image}`}
        alt={name}
        mediaType={mediaType}
        loading="lazy"
      />
      {props.mediaType !== MEDIA_TYPES.ALL ? (
        <>
          <Name>{name}</Name>
          <Genre>{genreName}</Genre>
        </>
      ) : null}
    </Wrapper>
  );
};

export default MediaBox;
