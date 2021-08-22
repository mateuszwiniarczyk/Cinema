import Button from 'components/Button';
import Input from 'components/Input';

import { Form } from './index.styles';

const SignInForm = (): JSX.Element => (
  <Form>
    <Input type="email" placeholder="E-mail" />
    <Input type="password" placeholder="Password" />
    <Button type="submit">Sign In</Button>
  </Form>
);

export default SignInForm;
