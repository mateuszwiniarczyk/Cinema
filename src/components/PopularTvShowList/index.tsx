import Slider from 'components/Slider';
import { SwiperSlide } from 'swiper/react';
import MediaBox from 'components/MediaBox';
import Loader from 'components/Loader';
import usePopularMedia from 'hooks/usePopularMedia';
import MEDIA_TYPES from 'data/mediaTypes';
import Alert from 'components/Alert';

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

const PopularTvShowList = (): JSX.Element => {
  const { isError, isLoading, popularMedia } = usePopularMedia(MEDIA_TYPES.TV) as {
    isLoading: boolean;
    popularMedia: tvShow[] | [];
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
        <h2>No data</h2>
      )}
    </>
  );
};

export default PopularTvShowList;
