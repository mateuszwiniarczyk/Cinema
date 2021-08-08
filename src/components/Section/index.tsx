import React from 'react';
import Container from 'components/Container';
import { Wrapper, Title } from './index.styles';

type Props = {
  children: React.ReactChild;
  title: string;
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
