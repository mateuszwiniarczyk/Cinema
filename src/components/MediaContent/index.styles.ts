import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 100vh;
  padding-top: 9rem;
  display: grid;
  grid-template-columns: 1fr;

  ${({ theme }) => theme.mq.lg} {
    grid-template-columns: repeat(12, 1fr);
    align-content: center;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 2rem;
  margin: 4rem 0;
  color: ${({ theme }) => theme.colors.white};

  ${({ theme }) => theme.mq.lg} {
    grid-column: span 6;
    margin: 0;
  }
`;

export const Title = styled.h2`
  font-size: 4rem;

  ${({ theme }) => theme.mq.lg} {
    font-size: 5rem;
  }
`;

export const Description = styled.p`
  font-size: 1.8rem;
  line-height: 1.5;
  font-weight: 300;
`;

export const Image = styled.img`
  display: block;
  aspect-ratio: 2/3;
  border-radius: 0.5rem;
  margin: 4rem auto 0;
  order: -1;

  ${({ theme }) => theme.mq.lg} {
    grid-column: 9/13;
    order: 0;
    margin: 0;
  }

  ${({ theme }) => theme.mq['2xl']} {
    grid-column: 9/12;
  }
`;
