import Container from 'components/Container';
import MediaBox from 'components/MediaBox';
import useWatchlist from 'hooks/useWatchlist';
import { WatchlistMedia } from 'types/media';

import { MediaList, Title, Wrapper } from './index.styles';

const WatchlistContent = (): JSX.Element => {
  const { watchlist } = useWatchlist();

  const mediaList = Object.values(watchlist);
  return (
    <Container>
      <Wrapper>
        {mediaList.length ? (
          <MediaList>
            {mediaList.map((item: WatchlistMedia) => (
              <MediaBox
                key={item.id}
                id={item.id}
                mediaType={item.type}
                name={item.title}
                image={item.image}
                genreId={item.genre}
              />
            ))}
          </MediaList>
        ) : (
          <Title>There is nothing here. Add something to the watchlist.</Title>
        )}
      </Wrapper>
    </Container>
  );
};

export default WatchlistContent;
