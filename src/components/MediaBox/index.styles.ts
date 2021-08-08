import { Link } from 'react-router-dom';
import styled from 'styled-components';

type ImageProps = {
  mediaType: 'all' | 'movie' | 'tv';
};

export const Wrapper = styled(Link)`
  display: block;
  text-decoration: none;
`;

export const Image = styled.img<ImageProps>`
  width: 100%;
  height: 100%;
  aspect-ratio: ${({ mediaType }) => (mediaType === 'all' ? 9 / 16 : 16 / 9)};
  border-radius: 0.5rem;
`;

export const Name = styled.span`
  display: block;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.white};
  margin: 0.5rem 0;
`;

export const Genre = styled.span`
  display: block;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.lightGrey};
`;
