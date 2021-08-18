import React from 'react';
import Slider from 'components/Slider';
import { SwiperSlide } from 'swiper/react';
import MediaBox from 'components/MediaBox';
import MEDIA_TYPES from 'data/mediaTypes';

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

type Props = {
  movieList: movie[] | [];
};

const PopularMovieList = ({ movieList }: Props): JSX.Element => (
  <>
    {movieList.length ? (
      <Slider arrowBtnId="movie">
        {movieList.map(({ id, title, backdrop_path, genre_ids }) => (
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

export default PopularMovieList;
