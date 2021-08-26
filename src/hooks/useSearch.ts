import { searchContext } from 'providers/SearchProvider';
import { useContext } from 'react';
import { FilteredPopularMovie, FilteredPopularTvShow } from 'types/media';

type SearchData = {
  isLoading: boolean;
  isError: string;
  media: (FilteredPopularMovie | FilteredPopularTvShow)[] | [];
  mediaType: 'movie' | 'tv';
  setGenre: (genreId: number) => void;
};

const useSearch = (): SearchData => {
  return useContext(searchContext) as SearchData;
};

export default useSearch;
