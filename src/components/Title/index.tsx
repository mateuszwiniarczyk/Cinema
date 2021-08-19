import styled from 'styled-components';

type Props = {
  readonly size?: string;
};

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  font-weight: 500;
  font-size: ${({ size }: Props) => {
    switch (size) {
      case 'sm':
        return '2rem';
      case 'md':
        return '2.8rem';
      case 'lg':
        return '3.6rem';
      case 'xl':
        return '4.4rem';
      default:
        return '1.6rem';
    }
  }};
`;

export default Title;
