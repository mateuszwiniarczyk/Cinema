import GenresFilter from 'components/GenresFilter';
import SortingFilter from 'components/SortingFilter';

import { Wrapper } from './index.styles';

const Filters = (): JSX.Element => {
  return (
    <Wrapper>
      <GenresFilter />
      <SortingFilter />
    </Wrapper>
  );
};

export default Filters;
