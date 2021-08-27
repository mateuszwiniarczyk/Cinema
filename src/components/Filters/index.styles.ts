import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 5rem;
  padding-top: 2.5rem;

  ${({ theme }) => theme.mq.md} {
    flex-direction: row;
    justify-content: space-between;
  }
`;
