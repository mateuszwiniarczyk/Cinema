import styled from 'styled-components';

export const Wrapper = styled.main`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
