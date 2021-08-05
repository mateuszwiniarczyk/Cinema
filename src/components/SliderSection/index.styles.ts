import styled from 'styled-components';

export const Wrapper = styled.section`
  margin-bottom: 5rem;
`;

export const Title = styled.h2`
  font-size: 2.4rem;
  color: ${({ theme }) => theme.colors.lightGrey};
  font-weight: 500;
`;

export const Header = styled.div`
  margin-bottom: 2rem;

  ${({ theme }) => theme.mq.xs} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
  }
`;

export const ArrowsWrapper = styled.div`
  display: none;

  ${({ theme }) => theme.mq.xs} {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
  }
`;

export const ArrowWrapper = styled.div`
  width: 4.5rem;
  height: 4.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(20, 20, 20, 0.6);
  opacity: 0.8;
  cursor: pointer;
  transition: opacity 0.2s ease-in;

  svg {
    width: 1.8rem;
    height: 1.8rem;
    fill: ${({ theme }) => theme.colors.white};
  }

  &:hover {
    opacity: 1;
  }
`;
