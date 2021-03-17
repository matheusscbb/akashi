import { createMuiTheme } from '@material-ui/core/styles';

export const DefaultTheme = createMuiTheme({
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
      main: '#ff00a5',
      // dark: será calculada com base palette.secondary.main,
      contrastText: '#eee'
    }
  },
  // CUSTOM FONT SIZE
  // typography: {
  //   fontSize: 12,
  // },
});

