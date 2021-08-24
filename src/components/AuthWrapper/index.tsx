import { Link } from 'react-router-dom';

import { Description, Title, Wrapper } from './index.styles';

type Props = {
  readonly children: React.ReactChild;
  readonly title: string;
  readonly link: string;
  readonly label: string;
  readonly target: string;
};

const AuthWrapper = ({ title, link, label, target, children }: Props): JSX.Element => (
  <Wrapper>
    <Title>{title}</Title>
    {children}
    <Description>
      {label}
      <Link to={link}>{target}</Link>
    </Description>
  </Wrapper>
);

export default AuthWrapper;
