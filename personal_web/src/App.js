import logo from './logo.svg';
//import './App.css';
import { AppBar, Button, createMuiTheme, ThemeProvider } from '@material-ui/core';
import Dashboard from './dashboard/Dashboard'

const theme = createMuiTheme({
  // props:{
  //   MuiButton:{
  //     color: 'primary',
  //   },
  // },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Dashboard></Dashboard>
    </ThemeProvider>
  );
}

export default App;
