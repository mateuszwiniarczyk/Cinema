import React from 'react';
import { Wrapper } from './index.styles';

type Props = {
  readonly children: JSX.Element;
};

const AuthTemplate = ({ children }: Props): JSX.Element => (
  <Wrapper>
    <img
      src="https://res.cloudinary.com/dmq8l8d5j/image/upload/v1625924750/auth_bg_k0xd5u.jpg"
      alt=""
    />
    {children}
  </Wrapper>
);

export default AuthTemplate;
