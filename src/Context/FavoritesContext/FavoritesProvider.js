import React, {createContext, useReducer, useEffect} from 'react';
import reducer from './reducer';
import store from './store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';

export const FavoritesContext = createContext();

export default function BooksProvide({children}) {
  const [state, dispatch] = useReducer(reducer, store);

  const getStorageData = async () => {
    try {
      const storage_res = await AsyncStorage.getItem('@fav');
      return storage_res != null
        ? dispatch({type: 'SET_DATA', payload: JSON.parse(storage_res)})
        : null;
    } catch (e) {
      Alert.alert(e.massage);
    }
  };

  useEffect(() => {
    getStorageData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <FavoritesContext.Provider value={{state, dispatch}}>
      {children}
    </FavoritesContext.Provider>
  );
}
