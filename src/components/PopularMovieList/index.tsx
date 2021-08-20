import Slider from 'components/Slider';
import { SwiperSlide } from 'swiper/react';
import MediaBox from 'components/MediaBox';
import usePopularMedia from 'hooks/usePopularMedia';
import MEDIA_TYPES from 'data/mediaTypes';
import Loader from 'components/Loader';
import Alert from 'components/Alert';

type movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
};

const PopularMovieList = (): JSX.Element => {
  const { isError, isLoading, popularMedia } = usePopularMedia(MEDIA_TYPES.MOVIE) as {
    isError: string;
    isLoading: boolean;
    popularMedia: movie[] | [];
  };

  if (isLoading) return <Loader />;

  if (isError) return <Alert type="error" text={isError} />;

  return (
    <>
      {popularMedia.length ? (
        <Slider arrowBtnId="movie">
          {popularMedia.map(({ id, title, backdrop_path, genre_ids }) => (
            <SwiperSlide key={id}>
              <MediaBox
                id={id}
                name={title}
                image={backdrop_path}
                genreId={genre_ids[0]}
                mediaType={MEDIA_TYPES.MOVIE}
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

export default PopularMovieList;
