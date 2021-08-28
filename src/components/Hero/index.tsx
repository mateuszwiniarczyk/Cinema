import Alert from 'components/Alert';
import Button from 'components/Button';
import Container from 'components/Container';
import DetailsList from 'components/DetailsList';
import Loader from 'components/Loader';
import useTrendingMedia from 'hooks/useTrendingMedia';
import { Link } from 'react-router-dom';
import { TrendingMovie } from 'types/media';
import { MEDIA_TYPES } from 'utils/constants/mediaTypes';

import { Content, Description, Image, Title, Wrapper } from './index.styles';

const Hero = (): JSX.Element => {
  const { isLoading, isError, trendingMedia } = useTrendingMedia({
    type: MEDIA_TYPES.MOVIE,
    timeRange: 'week'
  });

  const mainMedia = trendingMedia?.length ? (trendingMedia[0] as TrendingMovie) : null;

  return (
    <Wrapper>
      <Container>
        {mainMedia && !isLoading ? (
          <>
            <Image src={`https://image.tmdb.org/t/p/w1280/${mainMedia.backdrop_path}`} alt="" />
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
          </>
        ) : isError ? (
          <Alert type="error" text={isError} />
        ) : (
          <Loader />
        )}
      </Container>
    </Wrapper>
  );
};

export default Hero;
