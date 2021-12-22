import React from 'react';
import Navigation from './Navigation';
import FavoritesProvider from './Context/FavoritesProvider';

export default function App() {
  return (
    <FavoritesProvider>
      <Navigation />
    </FavoritesProvider>
  );
}
