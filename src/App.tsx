import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import Home from 'pages/Home';
import SignIn from 'pages/SignIn';
import SignUp from 'pages/SignUp';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ROUTES } from 'utils/constants/routes';

const App = (): JSX.Element => (
  <Router>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Switch>
        <Route path={ROUTES.HOME} exact>
          <Home />
        </Route>
        <Route path={ROUTES.SIGN_IN} exact>
          <SignIn />
        </Route>
        <Route path={ROUTES.SIGN_UP} exact>
          <SignUp />
        </Route>
      </Switch>
    </ThemeProvider>
  </Router>
);

export default App;
