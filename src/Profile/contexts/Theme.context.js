import React, { createContext, useContext } from "react";
import useToggleState from "../hooks/useToggleState";

export const ThemeContext = createContext();

export function ThemeProvider(props) {
  const [isDarkMode, toggleTheme] = useToggleState(false);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export const useDarkTheme = () => useContext(ThemeContext);
