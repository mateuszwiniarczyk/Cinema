import AuthTemplate from 'components/templates/AuthTemplate';
import SignInForm from 'components/SignInForm';
import AuthWrapper from 'components/AuthWrapper';
import Title from 'components/Title';
import { Link } from 'react-router-dom';
import { ROUTES } from 'utils/constants/routes';

const SignIn = (): JSX.Element => (
  <AuthTemplate>
    <AuthWrapper>
      <>
        <Title size="sm">Sign In</Title>
        <SignInForm />
        <p>
          Haven&#39;t you registered yet?
          <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
        </p>
      </>
    </AuthWrapper>
  </AuthTemplate>
);

export default SignIn;
