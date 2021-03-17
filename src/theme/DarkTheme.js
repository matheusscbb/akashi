import { createMuiTheme } from '@material-ui/core/styles';

export const DarkTheme = createMuiTheme({
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
  // CUSTOM FONT SIZE
  // typography: {
  //   fontSize: 12,
  // },
});

// HOW TO ADJUST FONTS
// theme.typography.h3 = {
//   fontSize: '1.2rem',
//   '@media (min-width:600px)': {
//     fontSize: '1.5rem',
//   },
//   [theme.breakpoints.up('md')]: {
//     fontSize: '2.4rem',
//   },
// };

// console.log(theme);
