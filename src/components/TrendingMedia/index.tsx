import React from 'react';
import Section from 'components/Section';
import TrendingMediaList from 'components/TrendingMediaList';
import Loader from 'components/Loader';
import useTrendingMedia from 'hooks/useTrendingMedia';
import MEDIA_TYPES from 'data/mediaTypes';

const TrendingMedia = (): JSX.Element => {
  const { isLoading, trendingMedia: trendingList } = useTrendingMedia({
    type: MEDIA_TYPES.ALL,
    timeRange: 'day'
  });

  return (
    <Section title="Cinema Originals">
      {!isLoading ? <TrendingMediaList trendingList={trendingList} /> : <Loader />}
    </Section>
  );
};

export default TrendingMedia;
