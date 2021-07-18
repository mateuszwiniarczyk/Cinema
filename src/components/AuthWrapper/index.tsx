import React from 'react';
import { Wrapper } from './index.styles';

type props = {
  readonly children: React.ReactChild;
};

const AuthWrapper = ({ children }: props): JSX.Element => <Wrapper>{children}</Wrapper>;

export default AuthWrapper;
