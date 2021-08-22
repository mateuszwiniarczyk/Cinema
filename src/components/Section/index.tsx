import Container from 'components/Container';

import { Title,Wrapper } from './index.styles';

type Props = {
  readonly children: React.ReactChild;
  readonly title: string;
};

const Section = ({ children, title }: Props): JSX.Element => {
  return (
    <Wrapper>
      <Container>
        <Title>{title}</Title>
        {children}
      </Container>
    </Wrapper>
  );
};

export default Section;
