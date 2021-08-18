import React from 'react';
import Section from 'components/Section';
import PopularTvShowList from 'components/PopularTvShowList';
import Loader from 'components/Loader';
import usePopularMedia from 'hooks/usePopularMedia';
import MEDIA_TYPES from 'data/mediaTypes';

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

const PopularTvShows = (): JSX.Element => {
  const { isLoading, popularMedia } = usePopularMedia(MEDIA_TYPES.TV);

  return (
    <Section title="Popular Tv Shows">
      {!isLoading ? <PopularTvShowList tvShowList={popularMedia as tvShow[] | []} /> : <Loader />}
    </Section>
  );
};

export default PopularTvShows;
