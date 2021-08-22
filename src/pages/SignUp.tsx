import AuthWrapper from 'components/AuthWrapper';
import SignUpForm from 'components/SignUpForm';
import AuthTemplate from 'components/templates/AuthTemplate';
import { ROUTES } from 'utils/constants/routes';

const SignUp = (): JSX.Element => (
  <AuthTemplate>
    <AuthWrapper
      title="Sign Up"
      label="Do you already have an account?"
      link={ROUTES.SIGN_IN}
      target="Sign In">
      <SignUpForm />
    </AuthWrapper>
  </AuthTemplate>
);

export default SignUp;
