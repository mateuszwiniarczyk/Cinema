import Alert from 'components/Alert';
import Button from 'components/Button';
import Input from 'components/Input';
import useAuth from 'hooks/useAuth';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { Form } from './index.styles';

type SignUpData = { email: string; password: string; confirmPassword: string };

const SignUpForm = (): JSX.Element => {
  const { isError, signup, signout } = useAuth();
  const [passwordMatchingError, setPasswordMatchingError] = useState('');
  const { register, handleSubmit } = useForm();

  const onSubmit = ({ email, password, confirmPassword }: SignUpData) => {
    signout();
    if (passwordMatchingError) setPasswordMatchingError('');

    if (password !== confirmPassword) {
      setPasswordMatchingError('Passwords do not match.');
      return;
    }

    signup(email, password);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input type="email" placeholder="E-mail" {...register('email', { required: true })} />
      <Input type="password" placeholder="Password" {...register('password', { required: true })} />
      <Input
        type="password"
        placeholder="Repeat your password"
        {...register('confirmPassword', { required: true })}
      />
      <Button type="submit">Sign Up</Button>
      {isError || passwordMatchingError ? (
        <Alert type="error" text={isError || passwordMatchingError} />
      ) : null}
    </Form>
  );
};

export default SignUpForm;
