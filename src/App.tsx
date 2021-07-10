import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import ROUTES from 'utils/constants/routes';
import SignIn from 'pages/SignIn';

const App = () => (
  <Router>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Switch>
        <Route path={ROUTES.HOME} exact>
          Home
        </Route>
        <Route path={ROUTES.SIGN_IN} exact>
          <SignIn />
        </Route>
        <Route path={ROUTES.SIGN_UP} exact>
          Sign Up
        </Route>
      </Switch>
    </ThemeProvider>
  </Router>
);

export default App;
