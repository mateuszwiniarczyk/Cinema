import React from 'react';
import Section from 'components/Section';
import PopularTvShowList from 'components/PopularTvShowList';

const PopularTvShows = (): JSX.Element => (
  <Section title="Popular Tv Shows">
    <PopularTvShowList />
  </Section>
);

export default PopularTvShows;
