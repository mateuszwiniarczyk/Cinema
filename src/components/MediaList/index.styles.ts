import styled from 'styled-components';

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 5rem;
  justify-content: center;
  align-items: flex-start;
`;
