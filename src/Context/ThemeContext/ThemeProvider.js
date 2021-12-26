import React, {createContext, useReducer, useEffect, useState} from 'react';
import reducer from './reducer';
import store from './store';

export const ThemeContext = createContext();

export default function ThemeProvider({children}) {
  const [state, dispatch] = useReducer(reducer, store);
  const colorScheme = useColorScheme();

  const [themeState, setThemeState] = useState(defaultMode);
  const setMode = mode => {
    setThemeState(mode);
  };
  useEffect(() => {
    const subscription = Appearance.addChangeListener(({colorScheme}) => {
      setThemeState(colorScheme);
    });
    return () => subscription.remove();
  }, []);

  useEffect(() => {
    themeState.darkMode = colorScheme;
  }, [colorScheme]);
  return (
    <ThemeContext.Provider value={{mode: themeState, setMode}}>
      <ThemeProvider
        theme={themeState === 'dark' ? darkTheme.theme : lightTheme.theme}>
        <>
          <StatusBar
            barStyle={themeState === 'dark' ? 'dark-content' : 'light-content'}
          />
          {children}
        </>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
