import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Section from 'components/Section';
import PopularTvShowList from 'components/PopularTvShowList';
import Loader from 'components/Loader';

type tvShow = {
  backdrop_path: string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
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

const PopularTvShows = (): JSX.Element => {
  const [tvShowList, setTvShowList] = useState<tvShow[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
      )
      .then(({ data: { results } }) => {
        const list = results?.filter((media: tvShow) => media.backdrop_path);
        setTvShowList(list);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
      });
  }, []);

  return (
    <Section title="Popular Tv Shows">
      {!isLoading ? <PopularTvShowList tvShowList={tvShowList} /> : <Loader />}
    </Section>
  );
};

export default PopularTvShows;
