import logo from './logo.svg';
//import './App.css';
import { Button, createMuiTheme, ThemeProvider } from '@material-ui/core';

const theme = createMuiTheme({
  props:{
    MuiButton:{
      color: 'primary',
      variant: 'contained',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Button>Hello world</Button>
    </ThemeProvider>
  );
}

export default App;
