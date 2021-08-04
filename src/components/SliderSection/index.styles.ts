import styled from 'styled-components';

export const Wrapper = styled.section`
  padding: 5rem 0;
`;

export const Title = styled.h2`
  font-size: 2.8rem;
  color: ${({ theme }) => theme.colors.lightGrey};
  font-weight: 500;
  margin-bottom: 2rem;
`;
