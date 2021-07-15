import styled from 'styled-components';

type Props = {
  size?: string;
};

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  font-weight: 500;
  font-size: ${({ size }: Props) => {
    switch (size) {
      case 'sm':
        return '2rem';
      case 'md':
        return '2.4rem';
      case 'lg':
        return '2.8rem';
      case 'xl':
        return '3.2rem';
      default:
        return '1.6rem';
    }
  }};
`;
