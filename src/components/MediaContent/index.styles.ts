import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 100vh;
  padding-top: 9rem;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  align-content: center;
`;

export const Content = styled.div`
  grid-column: span 8;
  /* display: flex; */
`;
