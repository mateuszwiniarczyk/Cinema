import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import AuthProvider from './AuthProvider';
interface Props {
  children: React.ReactElement;
}

const AppProviders = ({ children }: Props): React.ReactElement => {
  return (
    <Router>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Switch>{children}</Switch>
        </ThemeProvider>
      </AuthProvider>
    </Router>
  );
};

export default AppProviders;
