import React from 'react';
import { Content, Image, Wrapper, Title, Description } from './index.styles';
import Container from 'components/Container';
import Button from 'components/Button';
import DetailsList from 'components/DetailsList';
import { Link } from 'react-router-dom';
import useTrendingMedia from 'hooks/useTrendingMedia';
import Loader from 'components/Loader';

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

const Hero = (): JSX.Element => {
  const { isLoading, isError, trendingMedia } = useTrendingMedia({
    type: 'movie',
    timeRange: 'week'
  });

  const mainMedia = trendingMedia?.length ? (trendingMedia[0] as movie) : null;

  return (
    <Wrapper>
      {mainMedia && !isLoading ? (
        <Container>
          <Image src={`https://image.tmdb.org/t/p/w1280/${backdrop_path}`} alt="" />
          <Content>
            <Title>{mainMedia.title}</Title>
            <DetailsList
              year={mainMedia.release_date}
              type={mainMedia.media_type}
              rating={mainMedia.vote_average}
            />
            <Description>{mainMedia.overview}</Description>
            <Button as={Link} to={`/${mainMedia.media_type}/${mainMedia.id}`}>
              More info
            </Button>
          </Content>
        </Container>
      ) : (
        <Loader />
      )}
      {isError ? <span>{isError}</span> : null}
    </Wrapper>
  );
};

export default Hero;
