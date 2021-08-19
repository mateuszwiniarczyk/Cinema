import React from 'react';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.min.css';
import { Wrapper, ArrowButton } from './index.styles';
import { ReactComponent as RightArrow } from 'assets/icons/arrow-right.svg';
import { ReactComponent as LeftArrow } from 'assets/icons/arrow-left.svg';

type Props = {
  readonly children: React.ReactNode;
  readonly arrowBtnId: string;
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

const Slider = ({ children, arrowBtnId }: Props): JSX.Element => {
  const swiperDefaultConfig = {
    spaceBetween: 25,
    breakpoints,
    navigation: {
      prevEl: `#prev-${arrowBtnId}`,
      nextEl: `#next-${arrowBtnId}`
    }
  };
  return (
    <Wrapper>
      <ArrowButton type="button" id={`prev-${arrowBtnId}`}>
        <LeftArrow />
      </ArrowButton>
      <ArrowButton type="button" right={true} id={`next-${arrowBtnId}`}>
        <RightArrow />
      </ArrowButton>
      <Swiper {...swiperDefaultConfig}>{children}</Swiper>
    </Wrapper>
  );
};

export default Slider;
