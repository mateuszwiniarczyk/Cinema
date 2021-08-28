import { Redirect, Route } from 'react-router-dom';
import { ROUTES } from 'utils/constants/routes';
import SignIn from 'views/SignIn';
import SignUp from 'views/SignUp';

const UnauthenticatedApp = (): React.ReactElement => (
  <>
    <Route path={ROUTES.SIGN_IN} exact>
      <SignIn />
    </Route>
    <Route path={ROUTES.SIGN_UP} exact>
      <SignUp />
    </Route>
    <Route path={ROUTES.HOME}>
      <Redirect to={ROUTES.SIGN_IN} />
    </Route>
  </>
);

export default UnauthenticatedApp;
