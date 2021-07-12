import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  max-width: 50rem;
  padding: 3.2rem 2.8rem;
  background-color: rgba(3, 3, 3, 0.75);
  border-radius: 0.8rem;
  width: 100%;

  ${({ theme }) => theme.mq.xs} {
    padding: 4.6rem 3.8rem;
  }

  ${({ theme }) => theme.mq.sm} {
    padding: 6rem 4.8rem;
  }
`;
