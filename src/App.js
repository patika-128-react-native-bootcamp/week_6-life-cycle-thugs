import React, {useState} from 'react';
import {Appearance} from 'react-native';
import Navigation from './Navigation';
import FavoritesProvider from '../src/Context/FavoritesContext/FavoritesProvider';
import ThemeProvider from './Context/ThemeContext/ThemeProvider';
export default function App() {
  return (
    <ThemeProvider>
      <FavoritesProvider>
        <Navigation />
      </FavoritesProvider>
    </ThemeProvider>
  );
}
