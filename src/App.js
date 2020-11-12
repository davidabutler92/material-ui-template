
/** Material Components */
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

/** Components */
import Header from './Header/Header';

/** Helpers */
import { theme } from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
    </ThemeProvider>

  );
}

export default App;
