import React from 'react';
import Input from 'components/Input';
import { Button } from 'components/Button';
import { Form } from './index.styles';

const SignUpForm = (): JSX.Element => (
  <Form>
    <Input type="text" placeholder="Your name" />
    <Input type="email" placeholder="E-mail" />
    <Input type="password" placeholder="Password" />
    <Input type="password" placeholder="Repeat your password" />
    <Button type="submit">Sign Up</Button>
  </Form>
);

export default SignUpForm;
