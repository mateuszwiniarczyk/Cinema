import React from 'react';
import Section from 'components/Section';
import TrendingMediaList from 'components/TrendingMediaList';
import Loader from 'components/Loader';
import useTrendingMedia from 'hooks/useTrendingMedia';

const TrendingMedia = (): JSX.Element => {
  const { isLoading, trendingMedia: trendingList } = useTrendingMedia({
    type: 'all',
    timeRange: 'day'
  });

  return (
    <Section title="Cinema Originals">
      {!isLoading ? <TrendingMediaList trendingList={trendingList} /> : <Loader />}
    </Section>
  );
};

export default TrendingMedia;
