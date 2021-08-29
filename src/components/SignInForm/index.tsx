import Alert from 'components/Alert';
import Button from 'components/Button';
import Input from 'components/Input';
import useAuth from 'hooks/useAuth';
import { useForm } from 'react-hook-form';

import { Form } from './index.styles';
interface SignInData {
  email: string;
  password: string;
}

const SignInForm = (): JSX.Element => {
  const { isError, signin } = useAuth();
  const { register, handleSubmit } = useForm();

  const onSubmit = ({ email, password }: SignInData) => signin(email, password);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input type="email" placeholder="E-mail" {...register('email', { required: true })} />
      <Input type="password" placeholder="Password" {...register('password', { required: true })} />
      <Button type="submit">Sign In</Button>
      {isError && <Alert type="error" text={isError} />}
    </Form>
  );
};

export default SignInForm;
