import React from 'react';
import AuthTemplate from 'components/templates/AuthTemplate';
import SignUpForm from 'components/SignUpForm';
import AuthWrapper from 'components/AuthWrapper';
import Title from 'components/Title';
import { Link } from 'react-router-dom';
import ROUTES from 'utils/constants/routes';

const SignUp = (): JSX.Element => (
  <AuthTemplate>
    <AuthWrapper>
      <>
        <Title size="sm">Sign Up</Title>
        <SignUpForm />
        <p>
          Do you already have an account?
          <Link to={ROUTES.SIGN_IN}>Sign In</Link>
        </p>
      </>
    </AuthWrapper>
  </AuthTemplate>
);

export default SignUp;
