import React, {createContext, useReducer, useEffect, useState} from 'react';
import {Appearance} from 'react-native';
import reducer from './reducer';
import store from './store';

export const ThemeContext = createContext();

export default function ThemeProvider({children}) {
  const [theme, setTheme] = useState(Appearance.getColorScheme());

  useEffect(() => {
    Appearance.addChangeListener(scheme => {
      setTheme(scheme.colorScheme);
    });
  }, [theme]);

  return (
    <ThemeContext.Provider value={{theme}}>{children}</ThemeContext.Provider>
  );
}
