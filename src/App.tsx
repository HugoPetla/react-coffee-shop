import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';
import { Router } from './Router';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <GlobalStyle />
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;