import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <h1>Test</h1>
  </ThemeProvider>
);

export default App;
