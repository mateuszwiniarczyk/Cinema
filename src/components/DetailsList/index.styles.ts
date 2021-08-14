import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.mercuryGrey};

  li {
    display: flex;
    align-items: center;
    gap: 1rem;
    text-transform: capitalize;
    font-weight: 500;

    &:nth-of-type(2) {
      border-left: 0.2rem solid ${({ theme }) => theme.colors.mercuryGrey};
      border-right: 0.2rem solid ${({ theme }) => theme.colors.mercuryGrey};
      margin: 0 1.5rem;
      padding: 0 1.5rem;
      color: ${({ theme }) => theme.colors.gold};

      ${({ theme }) => theme.mq.sm} {
        margin: 0 2rem;
        padding: 0 2rem;
      }

      svg {
        fill: ${({ theme }) => theme.colors.gold};
      }
    }
  }

  svg {
    width: 1.8rem;
    height: 1.8rem;
    fill: ${({ theme }) => theme.colors.mercuryGrey};

    ${({ theme }) => theme.mq.sm} {
      width: 2rem;
      height: 2rem;
    }
  }

  ${({ theme }) => theme.mq.sm} {
    font-size: 1.8rem;
  }
`;
