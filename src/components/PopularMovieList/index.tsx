import Slider from 'components/Slider';
import { SwiperSlide } from 'swiper/react';
import MediaBox from 'components/MediaBox';
import usePopularMedia from 'hooks/usePopularMedia';
import Loader from 'components/Loader';
import Alert from 'components/Alert';
import { PopularMovie, MediaTypes } from 'types';

type Override<T1, T2> = Omit<T1, keyof T2> & T2;

type FilteredMovie = Override<
  PopularMovie,
  {
    backdrop_path: string;
  }
>;

const PopularMovieList = (): JSX.Element => {
  const { isError, isLoading, popularMedia } = usePopularMedia(MediaTypes.Movie) as {
    isError: string;
    isLoading: boolean;
    popularMedia: FilteredMovie[] | [];
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
                mediaType={MediaTypes.Movie}
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
