import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

interface NavProps {
  readonly isNavOpen: boolean;
}

export const Nav = styled.nav`
  padding: 2rem 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;

  ${({ theme }) => theme.mq.lg} {
    padding: 2.5rem 0;
  }
`;

export const NavList = styled.ul<NavProps>`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  background-color: ${({ theme }) => theme.colors.primary};
  z-index: 1;
  transform: ${({ isNavOpen }) => (isNavOpen ? 'translate(0)' : 'translate(-100%)')};
  transition: transform 0.2s ease-in;

  ${({ theme }) => theme.mq.lg} {
    position: static;
    flex-direction: row;
    justify-content: flex-start;
    background-color: transparent;
    transform: translate(0);
  }
`;

export const NavWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const activeClassName = 'active-link';
export const NavListLink = styled(NavLink).attrs({ activeClassName })`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
  font-size: 2rem;

  &.${activeClassName} {
    color: ${({ theme }) => theme.colors.gray};
  }

  ${({ theme }) => theme.mq.lg} {
    font-size: 1.6rem;
  }
`;

export const NavBtn = styled.button`
  position: relative;
  display: inline-block;
  padding: 1rem;
  background-color: transparent;
  border: 0;
  margin: 0;
  z-index: 2;
  cursor: pointer;

  ${({ theme }) => theme.mq.lg} {
    display: none;
  }
`;

export const NavBtnBox = styled.span`
  position: relative;
  display: inline-block;
  width: 3.5rem;
  height: 2.4rem;
`;

export const NavBtnInner = styled.span<NavProps>`
  top: 50%;
  background-color: ${({ isNavOpen, theme }) => (isNavOpen ? 'transparent' : theme.colors.white)};
  transform: translateY(-50%);
  transition: background-color 0.1s 0.2s ease-in-out;

  &,
  &::before,
  &::after {
    position: absolute;
    left: 0;
    width: 100%;
    height: 0.3rem;
  }

  &::before,
  &::after {
    content: '';
    transition: transform 0.2s 0.2s ease-in-out;
    background-color: ${({ theme }) => theme.colors.white};
  }

  &::before {
    top: -1rem;
    transform: ${({ isNavOpen }) =>
      isNavOpen ? 'translateY(1rem) rotate(45deg)' : 'translateY(0) rotate(0)'};
  }

  &::after {
    top: 1rem;
    transform: ${({ isNavOpen }) =>
      isNavOpen ? 'translateY(-1rem) rotate(-45deg)' : 'translateY(0) rotate(0)'};
  }
`;
