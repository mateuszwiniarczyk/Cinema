import Slider from 'components/Slider';
import { SwiperSlide } from 'swiper/react';
import MediaBox from 'components/MediaBox';
import usePopularMedia from 'hooks/usePopularMedia';
import Loader from 'components/Loader';
import Alert from 'components/Alert';
import { MediaTypes, FilteredPopularMovie } from 'types/media';

const PopularMovieList = (): JSX.Element => {
  const { isError, isLoading, popularMedia } = usePopularMedia(MediaTypes.Movie) as {
    isError: string;
    isLoading: boolean;
    popularMedia: FilteredPopularMovie[] | [];
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
        <Alert type="info" text="Popular movies weren't found." />
      )}
    </>
  );
};

export default PopularMovieList;
