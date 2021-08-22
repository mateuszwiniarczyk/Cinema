import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  max-width: 50rem;
  padding: 3.2rem 2.8rem;
  background-color: rgba(3, 3, 3, 0.85);
  border-radius: 0.8rem;
  width: 100%;

  ${({ theme }) => theme.mq.xs} {
    padding: 4.6rem 3.8rem;
  }

  ${({ theme }) => theme.mq.sm} {
    padding: 6rem 4.8rem;
  }

  p {
    padding-top: 2rem;
    margin-top: 3rem;
    border-top: 0.1rem solid ${({ theme }) => theme.colors.mercuryGrey};
    text-align: center;
    color: ${({ theme }) => theme.colors.mercuryGrey};
    font-size: 1.6rem;
    font-weight: 400;

    a {
      display: inline-block;
      margin-left: 0.5rem;
      color: ${({ theme }) => theme.colors.red};
      text-decoration: none;
    }
  }
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  font-weight: 500;
  font-size: 2rem;
`;
