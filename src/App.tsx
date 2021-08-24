import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import useAuth from 'hooks/useAuth';
import Home from 'pages/Home';
import SignIn from 'pages/SignIn';
import SignUp from 'pages/SignUp';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ROUTES } from 'utils/constants/routes';

const App = (): React.ReactElement => {
  const { user } = useAuth();

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
      </ThemeProvider>
    </Router>
  );
};

const AuthenticatedApp = () => (
  <Switch>
    <Route path={ROUTES.HOME} exact>
      <Home />
    </Route>
    <Route path={ROUTES.HOME}>
      <Redirect to="/" />
    </Route>
  </Switch>
);

const UnauthenticatedApp = () => (
  <Switch>
    <Route exact path="/">
      <Redirect to={ROUTES.SIGN_IN} />
    </Route>
    <Route path={ROUTES.SIGN_IN} exact>
      <SignIn />
    </Route>
    <Route path={ROUTES.SIGN_UP} exact>
      <SignUp />
    </Route>
  </Switch>
);

export default App;
