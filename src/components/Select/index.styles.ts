import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
`;
export const Button = styled.button`
  padding: 2rem;
  border: none;
`;

export const List = styled.ul`
  background-color: ${({ theme }) => theme.colors.grey};
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  color: ${({ theme }) => theme.colors.white};
`;
