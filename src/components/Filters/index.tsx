import CategoryFilter from 'components/CategoryFilter';
import SortingFilter from 'components/SortingFilter';

import { Wrapper } from './index.styles';

const Filters = (): JSX.Element => {
  return (
    <Wrapper>
      <CategoryFilter />
      <SortingFilter />
    </Wrapper>
  );
};

export default Filters;
