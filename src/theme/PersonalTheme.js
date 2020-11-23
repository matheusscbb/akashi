import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  type: 'dark',
  palette: {
    primary: {
      light: '#363636',
      main: '#282828',
      dark: '#181818',
      contrastText: '#eee'
    },
    secondary: {
      light: '#8A7EFF',
      main: '#6158B3',
      // dark: será calculada com base palette.secondary.main,
      contrastText: '#eee'
    }
  },
});

export default function DarkTheme(props) {
  return (
    <ThemeProvider theme={theme}>
      {props.children}
    </ThemeProvider>
  );
}
