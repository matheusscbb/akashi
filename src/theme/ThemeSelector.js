import React, { createContext, useEffect, useState } from "react";

import { ThemeProvider } from "@material-ui/styles";

import { DarkTheme } from "../theme/DarkTheme";
import { DefaultTheme } from "../theme/DefaultTheme";

export const ThemeContext = createContext();

const ThemeSelector = ({children}) => {
    const [theme, setTheme] = useState(DefaultTheme);

    const changeTheme = (key) => {
      switch (key) {
        case 'dark':
          setTheme(DarkTheme);
          break;
        default:
          setTheme(DefaultTheme);
          break;
      }
    }
  
    return (
      <ThemeContext.Provider value={{ changeTheme, theme }}>
        <ThemeProvider theme={{...theme}}>
          {children}
        </ThemeProvider>
      </ThemeContext.Provider>
    );
};

export default ThemeSelector;
