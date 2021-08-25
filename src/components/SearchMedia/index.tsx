import Container from 'components/Container';
import MediaList from 'components/MediaList';
import { SearchProvider } from 'providers/SearchProvider';

import { Wrapper } from './index.styles';

const SearchMedia = (): JSX.Element => {
  return (
    <SearchProvider>
      <Wrapper>
        <Container>
          <MediaList />
        </Container>
      </Wrapper>
    </SearchProvider>
  );
};

export default SearchMedia;
