import Select from 'components/Select';
import { UseSelectStateChange } from 'downshift';
import useSearch from 'hooks/useSearch';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { MOVIE_GENRES, TV_SHOW_GENRES } from 'utils/constants/genres';
import { MEDIA_TYPES } from 'utils/constants/mediaTypes';

const GenresFilter = (): JSX.Element => {
  const history = useHistory();
  const { mediaType, setCurrentPage } = useSearch();
  const [selectedGenre, setSelectedGenre] = useState<null | string>(null);
  const genres = mediaType === MEDIA_TYPES.MOVIE ? MOVIE_GENRES : TV_SHOW_GENRES;
  const items = Object.keys(genres);

  const handleSelectedItemChange = ({ selectedItem }: UseSelectStateChange<string>): void => {
    if (selectedItem) {
      const genreId = genres[selectedItem];
      history.push(`/search/${mediaType}/${genreId}`);
      setSelectedGenre(selectedItem);
      setCurrentPage(1);
    }
  };

  useEffect(() => {
    setSelectedGenre(null);
  }, [mediaType]);

  return (
    <Select
      items={items}
      label="Genres"
      handleSelectedItemChange={handleSelectedItemChange}
      selectedItem={selectedGenre}
    />
  );
};

export default GenresFilter;
