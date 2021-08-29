import styled from 'styled-components';

interface NavProps {
  readonly isNavScrolled: boolean;
}

export const Nav = styled.nav<NavProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 2rem 0;
  z-index: 5;
  background-color: ${({ isNavScrolled, theme }) =>
    isNavScrolled ? theme.colors.primary : 'transparent'};
  box-shadow: ${({ isNavScrolled }) =>
    isNavScrolled
      ? '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
      : 'none'};
  touch-action: none;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
