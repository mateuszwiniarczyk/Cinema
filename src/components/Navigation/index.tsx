import Container from 'components/Container';
import React, { useState } from 'react';
import {
  Nav,
  NavWrapper,
  NavBtn,
  NavBtnBox,
  NavBtnInner,
  NavList,
  NavListLink
} from './index.styles';
import navLinks from 'data/navLinks';

const Navigation = (): JSX.Element => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <Nav>
      <Container>
        <NavWrapper>
          <NavBtn onClick={() => setIsNavOpen(!isNavOpen)}>
            <NavBtnBox>
              <NavBtnInner isNavOpen={isNavOpen} />
            </NavBtnBox>
          </NavBtn>
          <NavList isNavOpen={isNavOpen}>
            {navLinks.map(({ path, label }) => (
              <li key={label}>
                <NavListLink to={path}>{label}</NavListLink>
              </li>
            ))}
          </NavList>
        </NavWrapper>
      </Container>
    </Nav>
  );
};

export default Navigation;
