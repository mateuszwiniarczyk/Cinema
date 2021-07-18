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
    border-top: 1px solid ${({ theme }) => theme.colors.lightGrey};
    text-align: center;
    color: ${({ theme }) => theme.colors.lightGrey};
    font-size: 1.6rem;
    font-weight: 400;

    a {
      display: inline-block;
      color: ${({ theme }) => theme.colors.red};
      text-decoration: none;
      margin-left: 0.5rem;
    }
  }
`;
