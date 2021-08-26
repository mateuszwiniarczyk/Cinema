import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding-bottom: 5rem;
  padding-top: 2.5rem;

  ${({ theme }) => theme.mq.md} {
    flex-direction: row;
    justify-content: space-between;
  }
`;
