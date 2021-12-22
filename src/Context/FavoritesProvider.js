import React, {createContext, useReducer} from 'react';
import reducer from './reducer';
import store from './store';

export const FavoritesContext = createContext();

export default function BooksProvider({children}) {
  const [state, dispatch] = useReducer(reducer, store);

  return (
    <FavoritesContext.Provider value={{state, dispatch}}>
      {children}
    </FavoritesContext.Provider>
  );
}
