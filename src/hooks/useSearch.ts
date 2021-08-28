import { searchContext } from 'providers/SearchProvider';
import { useContext } from 'react';
import { FilteredPopularMovie, FilteredPopularTvShow } from 'types/media';

type SearchData = {
  isLoading: boolean;
  isError: string;
  media: (FilteredPopularMovie | FilteredPopularTvShow)[] | [];
  mediaType: 'movie' | 'tv';
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
};

const useSearch = (): SearchData => {
  const context = useContext(searchContext) as SearchData;

  if (!context) {
    throw Error('useSearch needs to be used inside SearchContext');
  }

  return context;
};

export default useSearch;
