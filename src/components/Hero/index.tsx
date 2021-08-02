import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Content, Image, Wrapper, Title, Description } from './index.styles';
import Container from 'components/Container';
import Button from 'components/Button';
import DetailsList from 'components/DetailsList';

const Hero = (): JSX.Element => {
  const [trendingMedia, setTrendingMedia] = useState<any>(null);
  const [error, setError] = useState('');
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_TMDB_KEY}`
      )
      .then(({ data: { results } }) => {
        setTrendingMedia(results[0]);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  return (
    <Wrapper>
      {trendingMedia ? (
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
            <Button>More info</Button>
          </Content>
        </Container>
      ) : (
        'Loading'
      )}
      {error && <span>{error}</span>}
    </Wrapper>
  );
};

export default Hero;
