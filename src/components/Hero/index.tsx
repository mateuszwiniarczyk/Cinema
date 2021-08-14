import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Content, Image, Wrapper, Title, Description } from './index.styles';
import Container from 'components/Container';
import Button from 'components/Button';
import DetailsList from 'components/DetailsList';
import { Link } from 'react-router-dom';

type trendingMedia = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: string[];
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
};

const Hero = (): JSX.Element => {
  const [trendingMedia, setTrendingMedia] = useState<null | trendingMedia>(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_TMDB_KEY}`
      )
      .then(({ data: { results } }) => {
        setIsLoading(false);
        setTrendingMedia(results[0]);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
      });
  }, []);

  return (
    <Wrapper>
      {trendingMedia && !isLoading ? (
        <Container>
          <Image src={`https://image.tmdb.org/t/p/w1280/${trendingMedia.backdrop_path}`} alt="" />
          <Content>
            <Title>{trendingMedia.title}</Title>
            <DetailsList
              year={trendingMedia.release_date}
              type={trendingMedia.media_type}
              rating={trendingMedia.vote_average}
            />
            <Description>{trendingMedia.overview}</Description>
            <Button as={Link} to={`/${trendingMedia.media_type}/${trendingMedia.id}`}>
              More info
            </Button>
          </Content>
        </Container>
      ) : (
        <h2>loading</h2>
      )}
      {error ? <span>{error}</span> : null}
    </Wrapper>
  );
};

export default Hero;
