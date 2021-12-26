import React from 'react';
import Navigation from './Navigation';
import FavoritesProvider from '../src/Context/FavoritesContext/FavoritesProvider';
export default function App() {
  return (
    <FavoritesProvider>
      <Navigation />
    </FavoritesProvider>
  );
}
