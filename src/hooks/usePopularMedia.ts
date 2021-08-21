import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { PopularMovie, PopularTvShow, FilteredPopularMovie, FilteredPopularTvShow } from 'types';

type returnedData = {
  isLoading: boolean;
  isError: string;
  popularMedia: (FilteredPopularMovie | FilteredPopularTvShow)[] | [];
};

const usePopularMedia = (type: string): returnedData => {
  const [popularMedia, setPopularMedia] = useState<
    (FilteredPopularMovie | FilteredPopularTvShow)[] | []
  >([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState('');
  const isMounted = useRef(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const {
          data: { results }
        } = await axios.get(
          `https://api.themoviedb.org/3/${type}/popular?api_key=${process.env.REACT_APP_TMDB_KEY}`
        );

        const list = results?.filter(
          (media: PopularTvShow | PopularMovie) => media.backdrop_path && media.poster_path
        );

        if (isMounted.current) {
          setPopularMedia(list);
          setIsLoading(false);
        }
      } catch (error) {
        setIsLoading(false);
        setIsError(error.message);
      }
    })();
  }, [type]);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  return { isLoading, isError, popularMedia };
};

export default usePopularMedia;
