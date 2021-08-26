import { MovieGenres, TvShowGenres } from 'utils/constants/genres';

import { Genre, Image, Name, Wrapper } from './index.styles';

type MainMediaProps = {
  readonly id: number;
  readonly mediaType: 'tv' | 'movie';
  readonly name: string;
  readonly image: string;
  readonly genreId: number | undefined;
};

type AllMediaProps = {
  readonly id: number;
  readonly mediaType: 'all';
  readonly link: string;
  readonly image: string;
  readonly name: string;
};

type Props = MainMediaProps | AllMediaProps;

function getKeyByValue(object: { [key: string]: number }, value: number) {
  return Object.keys(object).find((key) => object[key] === value);
}

const MediaBox = (props: Props): JSX.Element => {
  let type;
  let genreName;
  const { id, image, mediaType, name } = props;
  if (props.mediaType !== 'all') {
    const { genreId } = props;
    const genres = mediaType === 'movie' ? MovieGenres : TvShowGenres;

    genreName = genreId ? getKeyByValue(genres, genreId) : 'No data';
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
