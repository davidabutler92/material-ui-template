import React, { useState } from 'react';

/** Material Components */
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

/** Components */
import Header from './Header/Header';
import MenuDrawer from './MenuDrawer/MenuDrawer';

/** Helpers */
import { theme } from './theme';

function App() {
  const [drawerOpen, setDrawerOpen ] = useState(false)
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header setDrawerOpen={setDrawerOpen} />
      <MenuDrawer drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen}/>
    </ThemeProvider>

  );
}

export default App;
