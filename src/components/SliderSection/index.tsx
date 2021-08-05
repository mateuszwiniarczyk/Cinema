import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.min.css';
import Container from 'components/Container';
import { Wrapper, Title, ArrowWrapper, ArrowsWrapper, Header } from './index.styles';
import MediaBox from 'components/MediaBox';
import { ReactComponent as RightArrow } from 'assets/icons/right-chevron.svg';
import { ReactComponent as LeftArrow } from 'assets/icons/left-chevron.svg';

type props = {
  title: string;
  mediaType: 'tv' | 'movie';
  category: string;
};

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

type tvShow = {
  backdrop_path: string | null;
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

const breakpoints = {
  300: {
    slidesPerView: 1
  },
  400: {
    slidesPerView: 2
  },
  768: {
    slidesPerView: 3
  },
  992: {
    slidesPerView: 4
  },
  1600: {
    slidesPerView: 5
  }
};

SwiperCore.use([Navigation]);

const SliderSection = ({ title, mediaType, category }: props): JSX.Element => {
  const [mediaList, setMediaList] = useState<movie[] | tvShow[] | null>(null);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/${mediaType}/${category}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
      )
      .then(({ data: { results } }) => {
        setMediaList(results);
      });
  }, [mediaType, category]);

  console.log(mediaList);
  return (
    <Wrapper>
      <Container>
        <Header>
          <Title>{title}</Title>
          <ArrowsWrapper>
            <ArrowWrapper as="div" id={`prev-${mediaType}`}>
              <LeftArrow />
            </ArrowWrapper>
            <ArrowWrapper as="div" id={`next-${mediaType}`}>
              <RightArrow />
            </ArrowWrapper>
          </ArrowsWrapper>
        </Header>
        <Swiper
          spaceBetween={25}
          breakpoints={breakpoints}
          navigation={{
            prevEl: `#prev-${mediaType}`,
            nextEl: `#next-${mediaType}`
          }}>
          {mediaList &&
            mediaList.length &&
            mediaList.map(
              (media: movie | tvShow) =>
                media.backdrop_path && (
                  <SwiperSlide key={media.id}>
                    <MediaBox media={media} mediaType={mediaType} />
                  </SwiperSlide>
                )
            )}
        </Swiper>
      </Container>
    </Wrapper>
  );
};

export default SliderSection;
