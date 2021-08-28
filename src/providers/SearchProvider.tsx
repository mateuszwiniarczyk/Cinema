import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FilteredPopularMovie, FilteredPopularTvShow } from 'types/media';

export const searchContext = createContext({});

export const SearchProvider: React.FC = ({ children }) => {
  const { type, genre }: { type: 'movie' | 'tv'; genre: string } = useParams();
  const [media, setMedia] = useState<(FilteredPopularMovie | FilteredPopularTvShow)[] | []>([]);
  const [isError, setIsError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [type]);

  let params = `&page=${currentPage}`;

  if (genre) {
    params += `&with_genres=${genre}`;
  }

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);

        const { data } = await axios.get(
          `https://api.themoviedb.org/3/discover/${type}?api_key=${process.env.REACT_APP_TMDB_KEY}${params}`
        );

        const { results, total_pages } = data;

        setTotalPages(total_pages);

        const list = results.filter(
          (result: FilteredPopularTvShow | FilteredPopularMovie) =>
            result.backdrop_path && result.poster_path
        );

        if (currentPage > 1) {
          setMedia((prevState) => [...prevState, ...list]);
        } else {
          setMedia(list);
        }

        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setIsError(error.message);
      }
    })();
  }, [type, params, currentPage]);

  const searchData = {
    media,
    isLoading,
    isError,
    mediaType: type,
    currentPage,
    totalPages,
    setCurrentPage
  };

  return <searchContext.Provider value={searchData}>{children}</searchContext.Provider>;
};
