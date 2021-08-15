import React from 'react';
import { Wrapper } from './index.styles';
import { ReactComponent as LoaderIcon } from 'assets/icons/loader.svg';

const Loader = (): JSX.Element => (
  <Wrapper>
    <LoaderIcon />
  </Wrapper>
);

export default Loader;
