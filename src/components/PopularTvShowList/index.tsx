import React from 'react';
import Slider from 'components/Slider';
import { SwiperSlide } from 'swiper/react';
import MediaBox from 'components/MediaBox';

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

type Props = {
  tvShowList: tvShow[] | null;
};

const PopularTvShowList = ({ tvShowList }: Props): JSX.Element => (
  <>
    {tvShowList?.length ? (
      <Slider arrowBtnId="tv">
        {tvShowList.map(({ id, name, backdrop_path, genre_ids }) => (
          <SwiperSlide key={id}>
            <MediaBox
              id={id}
              name={name}
              image={backdrop_path}
              genreId={genre_ids[0]}
              mediaType="tv"
            />
          </SwiperSlide>
        ))}
      </Slider>
    ) : (
      <h2>No data</h2>
    )}
  </>
);

export default PopularTvShowList;
