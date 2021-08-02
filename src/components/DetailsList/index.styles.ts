import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.lightGrey};

  li {
    display: flex;
    align-items: center;
    gap: 1rem;
    text-transform: capitalize;

    &:nth-of-type(2) {
      border-left: 2px solid ${({ theme }) => theme.colors.lightGrey};
      border-right: 2px solid ${({ theme }) => theme.colors.lightGrey};
      margin: 0 1.5rem;
      padding: 0 1.5rem;

      ${({ theme }) => theme.mq.sm} {
        margin: 0 2rem;
        padding: 0 2rem;
      }
    }
  }

  svg {
    width: 1.8rem;
    height: 1.8rem;
    fill: ${({ theme }) => theme.colors.lightGrey};

    ${({ theme }) => theme.mq.sm} {
      width: 2rem;
      height: 2rem;
    }
  }

  ${({ theme }) => theme.mq.sm} {
    font-size: 1.8rem;
  }
`;
