import Alert from 'components/Alert';
import Button from 'components/Button';
import Container from 'components/Container';
import DetailsList from 'components/DetailsList';
import Loader from 'components/Loader';
import useMedia from 'hooks/useMedia';

import { Content, Description, Image, Title, Wrapper } from './index.styles';

const MediaContent = (): React.ReactElement => {
  const { media, isLoading, isError, type } = useMedia();

  const title = media && 'title' in media ? media.title : media?.name;
  const release_date =
    media && 'release_date' in media ? media.release_date : media?.first_air_date;

  const { overview, poster_path, vote_average } = media || {};

  if (isLoading) return <Loader />;

  if (isError) return <Alert type="error" text={isError} />;

  return (
    <Container>
      {media && (
        <Wrapper>
          <Content>
            <Title>{title}</Title>
            <DetailsList year={release_date} type={type} rating={vote_average} />
            <Description>{overview ? overview : 'No data'}</Description>
            <Button>Add to wishlist</Button>
          </Content>
          <Image src={`https://image.tmdb.org/t/p/w300/${poster_path}`} />
        </Wrapper>
      )}
    </Container>
  );
};

export default MediaContent;
