import { List } from './index.styles';
import { ReactComponent as YearIcon } from 'assets/icons/year.svg';
import { ReactComponent as RatingIcon } from 'assets/icons/rating.svg';
import { ReactComponent as MediaTypeIcon } from 'assets/icons/media_type.svg';

type Props = {
  readonly year: string;
  readonly type: string;
  readonly rating: number;
};

const DetailsList = ({ year, type, rating }: Props): JSX.Element => (
  <List>
    <li>
      <MediaTypeIcon /> {type}
    </li>
    <li>
      <RatingIcon /> {rating}
    </li>
    <li>
      <YearIcon /> {year.slice(0, 4)}
    </li>
  </List>
);

export default DetailsList;
