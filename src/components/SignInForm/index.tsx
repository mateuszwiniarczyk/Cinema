import Input from 'components/Input';
import { Button } from 'components/Button';
import { Form } from './index.styles';

const SignInForm = () => (
  <Form>
    <Input type="email" placeholder="E-mail" />
    <Input type="password" placeholder="Password" />
    <Button type="submit">Sign In</Button>
  </Form>
);

export default SignInForm;
