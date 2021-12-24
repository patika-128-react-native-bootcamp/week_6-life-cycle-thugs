import React from 'react';
import Navigation from './Navigation';
import FavoritesProvider from '../src/Context/FavoritesContext/FavoritesProvider';
import i18n from './languages/i18n';

export default function App() {
  return (
    <FavoritesProvider>
      <Navigation />
    </FavoritesProvider>
  );
}
