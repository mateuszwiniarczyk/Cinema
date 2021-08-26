import Container from 'components/Container';
import Filters from 'components/Filters';
import MediaList from 'components/MediaList';
import { SearchProvider } from 'providers/SearchProvider';

import { Wrapper } from './index.styles';

const SearchMedia = (): JSX.Element => {
  return (
    <SearchProvider>
      <Wrapper>
        <Container>
          <Filters />
          <MediaList />
        </Container>
      </Wrapper>
    </SearchProvider>
  );
};

export default SearchMedia;
