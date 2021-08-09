import React from 'react';
import Slider from 'components/Slider';
import { SwiperSlide } from 'swiper/react';
import MediaBox from 'components/MediaBox';

type movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  media_type: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

type tvShow = {
  backdrop_path: string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  media_type: string;
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
  trendingList: (tvShow | movie)[] | null;
};

const TrendingMediaList = ({ trendingList }: Props): JSX.Element => (
  <>
    {trendingList?.length ? (
      <Slider arrowBtnId="all">
        {trendingList.map((media) => {
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
                mediaType="all"
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

export default TrendingMediaList;
