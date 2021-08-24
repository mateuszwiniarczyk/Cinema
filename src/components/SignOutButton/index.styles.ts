import styled from 'styled-components';

export const Button = styled.button`
  width: 5rem;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  outline: none;
  background-color: transparent;
  border: none;
  cursor: pointer;

  svg {
    width: 2rem;
    height: 2rem;
    fill: ${({ theme }) => theme.colors.white};
  }

  ${({ theme }) => theme.mq.lg} {
    margin-left: 1rem;
  }
`;
