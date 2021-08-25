import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FilteredPopularMovie, FilteredPopularTvShow } from 'types/media';

export const searchContext = createContext({});

export const SearchProvider: React.FC = ({ children }) => {
  const { type }: { type: 'movie' | 'tv' } = useParams();
  const [media, setMedia] = useState<(FilteredPopularMovie | FilteredPopularTvShow)[] | []>([]);
  const [isError, setIsError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const {
          data: { results }
        } = await axios.get(
          `https://api.themoviedb.org/3/discover/${type}?api_key=${process.env.REACT_APP_TMDB_KEY}`
        );

        const list = results.filter(
          (result: FilteredPopularTvShow | FilteredPopularMovie) =>
            result.backdrop_path && result.poster_path
        );
        setMedia(list);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setIsError(error.message);
      }
    })();
  }, [type]);

  const searchData = {
    media,
    isLoading,
    isError,
    mediaType: type
  };

  return <searchContext.Provider value={searchData}>{children}</searchContext.Provider>;
};
