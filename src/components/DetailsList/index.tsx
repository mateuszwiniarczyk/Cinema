import { ReactComponent as MediaTypeIcon } from 'assets/icons/media_type.svg';
import { ReactComponent as RatingIcon } from 'assets/icons/rating.svg';
import { ReactComponent as YearIcon } from 'assets/icons/year.svg';

import { List } from './index.styles';

interface Props {
  readonly year: string | undefined;
  readonly type: string | undefined;
  readonly rating: number | undefined;
}

const noData = 'No data';

const DetailsList = ({ year, type, rating }: Props): JSX.Element => (
  <List>
    <li>
      <MediaTypeIcon /> {type ? type : noData}
    </li>
    <li>
      <RatingIcon /> {rating ? rating : noData}
    </li>
    <li>
      <YearIcon /> {year ? year.slice(0, 4) : noData}
    </li>
  </List>
);

export default DetailsList;
