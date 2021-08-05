import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled(Link)`
  display: block;
  text-decoration: none;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  aspect-ratio: 16 / 9;
`;

export const Title = styled.span`
  display: block;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.white};
  margin-top: 0.5rem;
`;
