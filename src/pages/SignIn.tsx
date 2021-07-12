import React from 'react';
import AuthTemplate from 'components/templates/AuthTemplate';
import SignInForm from 'components/SignInForm';
import AuthWrapper from 'components/AuthWrapper';

const SignIn = () => (
  <AuthTemplate>
    <AuthWrapper>
      <SignInForm />
    </AuthWrapper>
  </AuthTemplate>
);

export default SignIn;
