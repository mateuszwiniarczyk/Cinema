import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { WatchlistMovie, WatchlistTvShow } from 'types/media';

interface Params {
  type: 'tv' | 'movie';
  id: string;
}

interface ReturnedData {
  isLoading: boolean;
  isError: string;
  media: WatchlistMovie | WatchlistTvShow | null;
  type: 'tv' | 'movie';
}

const useMedia = (): ReturnedData => {
  const { type, id } = useParams<Params>();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState('');
  const [media, setMedia] = useState<null | WatchlistMovie | WatchlistTvShow>(null);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const { data } = await axios(
          `https://api.themoviedb.org/3/${type}/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
        );

        setMedia(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setIsError(error.message);
      }
    })();
  }, [type, id]);

  return { isLoading, isError, media, type };
};

export default useMedia;
