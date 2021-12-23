import React, {createContext, useReducer, useEffect, useState} from 'react';
import reducer from './reducer';
import store from './store';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const FavoritesContext = createContext();

export default function BooksProvide({children}) {
  const [state, dispatch] = useReducer(reducer, store);

  return (
    <FavoritesContext.Provider value={{state, dispatch}}>
      {children}
    </FavoritesContext.Provider>
  );
}
