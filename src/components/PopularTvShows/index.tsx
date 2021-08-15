import React from 'react';
import Section from 'components/Section';
import PopularTvShowList from 'components/PopularTvShowList';
import Loader from 'components/Loader';
import usePopularMedia from 'hooks/usePopularMedia';

const PopularTvShows = (): JSX.Element => {
  const { isLoading, popularMedia } = usePopularMedia('tv');

  return (
    <Section title="Popular Tv Shows">
      {!isLoading ? <PopularTvShowList tvShowList={popularMedia} /> : <Loader />}
    </Section>
  );
};

export default PopularTvShows;
