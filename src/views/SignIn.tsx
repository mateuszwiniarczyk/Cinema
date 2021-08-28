import AuthWrapper from 'components/AuthWrapper';
import SignInForm from 'components/SignInForm';
import AuthTemplate from 'components/templates/AuthTemplate';
import { ROUTES } from 'utils/constants/routes';

const SignIn = (): JSX.Element => (
  <AuthTemplate>
    <AuthWrapper
      title="Sign In"
      label="Haven&#39;t you registered yet?"
      link={ROUTES.SIGN_UP}
      target="Sign Up">
      <SignInForm />
    </AuthWrapper>
  </AuthTemplate>
);

export default SignIn;
