import { Redirect, Route } from 'react-router-dom';
import { ROUTES } from 'utils/constants/routes';
import Home from 'views/Home';
import Search from 'views/Search';

import Media from './Media';

const AuthenticatedApp = (): React.ReactElement => (
  <>
    <Route path={ROUTES.HOME} exact>
      <Home />
    </Route>
    <Route path={ROUTES.SEARCH} exact>
      <Search />
    </Route>
    <Route path={ROUTES.MEDIA} exact>
      <Media />
    </Route>
    <Route path={ROUTES.HOME}>
      <Redirect to={ROUTES.HOME} />
    </Route>
  </>
);

export default AuthenticatedApp;
