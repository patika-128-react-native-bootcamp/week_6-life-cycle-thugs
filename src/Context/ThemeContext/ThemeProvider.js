import React, {createContext, useReducer, useEffect, useState} from 'react';
import reducer from './reducer';
import store from './store';

export const ThemeContext = createContext();

export default function ThemeProvider({children}) {
  const [state, dispatch] = useReducer(reducer, store);
  const colorScheme = useColorScheme();

  useEffect(() => {
    themeState.darkMode = colorScheme;
  }, [colorScheme]);
  return (
    <ThemeContext.Provider value={{state, dispatch}}>
      {children}
    </ThemeContext.Provider>
  );
}
