import styled from 'styled-components';

export const Wrapper = styled.header`
  position: relative;
  min-height: 100vh;
  padding-top: 9rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 5rem;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

export const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Content = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2.5rem;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  font-size: 3.5rem;
  line-height: 1;

  ${({ theme }) => theme.mq.sm} {
    font-size: 4rem;
  }
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.6rem;
  max-width: 60rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.5;

  ${({ theme }) => theme.mq.sm} {
    font-size: 1.8rem;
  }
`;
