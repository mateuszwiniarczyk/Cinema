import Container from 'components/Container';
import React, { useState, useEffect } from 'react';
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
import SearchBox from 'components/SearchBox';

const Navigation = (): JSX.Element => {
  const [isNavScrolled, setIsNavScrolled] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        if (!isNavScrolled) {
          setIsNavScrolled(true);
        }
      } else {
        setIsNavScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isNavScrolled]);

  return (
    <Nav isNavScrolled={isNavScrolled}>
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
          <SearchBox />
        </NavWrapper>
      </Container>
    </Nav>
  );
};

export default Navigation;
