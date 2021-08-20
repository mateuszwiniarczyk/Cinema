import { useEffect, useState } from 'react';
import axios from 'axios';

type Props = {
  readonly type: string;
  readonly timeRange: string;
};

type movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  media_type: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

type tvShow = {
  backdrop_path: string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  media_type: string;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
};

type returnedData = {
  isLoading: boolean;
  isError: string;
  trendingMedia: (movie | tvShow)[] | [];
};

const useTrendingMedia = ({ type, timeRange }: Props): returnedData => {
  const [trendingMedia, setTrendingMedia] = useState<(movie | tvShow)[] | []>([]);
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

        setIsLoading(false);
        setTrendingMedia(results);
      } catch (error) {
        setIsLoading(false);
        setIsError(error.message);
      }
    })();
  }, [type, timeRange]);

  return { isLoading, isError, trendingMedia };
};

export default useTrendingMedia;
