import Select from 'components/Select';
import { UseSelectStateChange } from 'downshift';
import useSearch from 'hooks/useSearch';
import { MovieGenres, TvShowGenres } from 'utils/constants/genres';

const GenresFilter = (): JSX.Element => {
  const { mediaType, setGenre } = useSearch();
  const genres = mediaType === 'movie' ? MovieGenres : TvShowGenres;
  const items = Object.keys(genres);

  const handleSelectedItemChange = ({ selectedItem }: UseSelectStateChange<string>): void => {
    if (selectedItem) {
      const genreId = genres[selectedItem];
      setGenre(genreId);
    }
  };

  return (
    <Select items={items} label="Genres" handleSelectedItemChange={handleSelectedItemChange} />
  );
};

export default GenresFilter;
