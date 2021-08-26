import useSearch from 'hooks/useSearch';
import { MovieGenres, TvShowGenres } from 'utils/constants/genres';

const GenresFilter = (): JSX.Element => {
  const { mediaType } = useSearch();
  const genres = mediaType === 'movie' ? MovieGenres : TvShowGenres;

  return (
    <select>
      {Object.keys(genres).map((name) => (
        <option value={genres[name]} key={name}>
          {name}
        </option>
      ))}
    </select>
  );
};

export default GenresFilter;
