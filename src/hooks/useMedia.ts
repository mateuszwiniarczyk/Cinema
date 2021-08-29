import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FilteredPopularMovie, FilteredPopularTvShow } from 'types/media';

type Params = {
  type: string;
  id: string;
};

type returnedData = {
  isLoading: boolean;
  isError: string;
  media: FilteredPopularMovie | FilteredPopularTvShow | null;
  type: string;
};

const useMedia = (): returnedData => {
  const { type, id } = useParams<Params>();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState('');
  const [media, setMedia] = useState<null | FilteredPopularTvShow | FilteredPopularMovie>(null);

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
