import Alert from 'components/Alert';
import Loader from 'components/Loader';
import MediaBox from 'components/MediaBox';
import Slider from 'components/Slider';
import useTrendingMedia from 'hooks/useTrendingMedia';
import { SwiperSlide } from 'swiper/react';
import { MEDIA_TYPES } from 'utils/constants/mediaTypes';

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
        <Alert type="info" text="Popular trending media weren't found." />
      )}
    </>
  );
};

export default TrendingMediaList;
