import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-top: 11vh;
`;

export const MediaList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 5rem;
  margin-bottom: 5rem;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.white};
  font-weight: 500;
  font-size: 3rem;
`;
