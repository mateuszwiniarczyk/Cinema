import Alert from 'components/Alert';
import Loader from 'components/Loader';
import MediaBox from 'components/MediaBox';
import Slider from 'components/Slider';
import usePopularMedia from 'hooks/usePopularMedia';
import { SwiperSlide } from 'swiper/react';
import { FilteredPopularTvShow } from 'types/media';
import { MEDIA_TYPES } from 'utils/constants/mediaTypes';

const PopularTvShowList = (): JSX.Element => {
  const { isError, isLoading, popularMedia } = usePopularMedia(MEDIA_TYPES.TV) as {
    isLoading: boolean;
    popularMedia: FilteredPopularTvShow[] | [];
    isError: string;
  };

  if (isLoading) return <Loader />;

  if (isError) return <Alert type="error" text={isError} />;

  return (
    <>
      {popularMedia.length ? (
        <Slider arrowBtnId="tv">
          {popularMedia.map(({ id, name, backdrop_path, genre_ids }) => (
            <SwiperSlide key={id}>
              <MediaBox
                id={id}
                name={name}
                image={backdrop_path}
                genreId={genre_ids[0]}
                mediaType={MEDIA_TYPES.TV}
              />
            </SwiperSlide>
          ))}
        </Slider>
      ) : (
        <Alert type="info" text="Popular tv shows weren't found." />
      )}
    </>
  );
};

export default PopularTvShowList;
