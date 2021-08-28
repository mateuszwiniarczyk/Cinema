import { Redirect, Route } from 'react-router-dom';
import { ROUTES } from 'utils/constants/routes';
import SignIn from 'views/SignIn';
import SignUp from 'views/SignUp';

const UnauthenticatedApp = (): React.ReactElement => (
  <>
    <Route exact path="/">
      <Redirect to={ROUTES.SIGN_IN} />
    </Route>
    <Route path={ROUTES.SIGN_IN} exact>
      <SignIn />
    </Route>
    <Route path={ROUTES.SIGN_UP} exact>
      <SignUp />
    </Route>
  </>
);

export default UnauthenticatedApp;
