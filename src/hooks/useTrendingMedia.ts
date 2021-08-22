import axios from 'axios';
import { useEffect, useState } from 'react';
import {
  FilteredTrendingMovie,
  FilteredTrendingTvShow,
  TrendingMovie,
  TrendingTvShow} from 'types/media';

type Props = {
  readonly type: string;
  readonly timeRange: string;
};

type returnedData = {
  isLoading: boolean;
  isError: string;
  trendingMedia: (FilteredTrendingMovie | FilteredTrendingTvShow)[] | [];
};

const useTrendingMedia = ({ type, timeRange }: Props): returnedData => {
  const [trendingMedia, setTrendingMedia] = useState<
    (FilteredTrendingMovie | FilteredTrendingTvShow)[] | []
  >([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState('');

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const {
          data: { results }
        } = await axios.get(
          `https://api.themoviedb.org/3/trending/${type}/${timeRange}?api_key=${process.env.REACT_APP_TMDB_KEY}`
        );

        const list = results?.filter(
          (media: TrendingMovie | TrendingTvShow) => media.backdrop_path && media.poster_path
        );

        setIsLoading(false);
        setTrendingMedia(list);
      } catch (error) {
        setIsLoading(false);
        setIsError(error.message);
      }
    })();
  }, [type, timeRange]);

  return { isLoading, isError, trendingMedia };
};

export default useTrendingMedia;
