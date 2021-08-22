import { navLinks } from 'data/navLinks';
import { useState } from 'react';

import { NavBtn, NavBtnBox, NavBtnInner, NavList, NavListLink } from './index.styles';

const NavigationList = (): JSX.Element => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <>
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
    </>
  );
};

export default NavigationList;
