import styled from 'styled-components';

const Container = styled.div`
  padding: 0 2rem;

  ${({ theme }) => theme.mq.sm} {
    margin: 0 auto;
    width: 54rem;
  }

  ${({ theme }) => theme.mq.md} {
    width: 72rem;
  }

  ${({ theme }) => theme.mq.lg} {
    width: 96rem;
  }

  ${({ theme }) => theme.mq.xl} {
    width: 114rem;
  }

  ${({ theme }) => theme.mq.xxl} {
    width: 132rem;
  }
`;

export default Container;
