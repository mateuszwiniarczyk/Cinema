import React from 'react';
import Slider from 'components/Slider';
import { SwiperSlide } from 'swiper/react';
import MediaBox from 'components/MediaBox';
import Loader from 'components/Loader';
import useTrendingMedia from 'hooks/useTrendingMedia';
import MEDIA_TYPES from 'data/mediaTypes';
import Alert from 'components/Alert';

const TrendingMediaList = (): JSX.Element => {
  const { isError, isLoading, trendingMedia } = useTrendingMedia({
    type: MEDIA_TYPES.ALL,
    timeRange: 'day'
  });

  if (isLoading) return <Loader />;

  if (isError) return <Alert type="error" text={isError} />;

  return (
    <>
      {trendingMedia.length ? (
        <Slider arrowBtnId="all">
          {trendingMedia.map((media) => {
            const { id, poster_path, media_type } = media;
            let title;
            if ('name' in media) {
              title = media.name;
            } else {
              title = media.title;
            }

            return (
              <SwiperSlide key={id}>
                <MediaBox
                  id={id}
                  image={poster_path}
                  mediaType={MEDIA_TYPES.ALL}
                  link={media_type}
                  name={title}
                />
              </SwiperSlide>
            );
          })}
        </Slider>
      ) : (
        <h2>No data</h2>
      )}
    </>
  );
};

export default TrendingMediaList;
