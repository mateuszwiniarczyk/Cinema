import React from 'react';
import { List } from './index.styles';
import { ReactComponent as YearIcon } from 'assets/icons/year.svg';
import { ReactComponent as RatingIcon } from 'assets/icons/rating.svg';
import { ReactComponent as MediaTypeIcon } from 'assets/icons/media_type.svg';

type props = {
  year: string;
  type: string;
  rating: number;
};

const DetailsList = ({ year, type, rating }: props): JSX.Element => (
  <List>
    <li>
      <RatingIcon /> {rating}
    </li>
    <li>
      <MediaTypeIcon /> {type}
    </li>
    <li>
      <YearIcon /> {year.slice(0, 4)}
    </li>
  </List>
);

export default DetailsList;
