import AsyncStorage from '@react-native-async-storage/async-storage';

export default (state, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITES': {
      const selectedItem = action.payload.favorite;

      const currentFavoriteList = state.favoritesList.findIndex(
        item => item.id === selectedItem.id,
      );
      const isInFavorites = currentFavoriteList !== -1;

      if (isInFavorites) {
        return state;
      }

      const updatedFavorites = [...state.favoritesList, selectedItem];
      AsyncStorage.setItem('@fav', JSON.stringify(updatedFavorites));

      return {...state, favoritesList: updatedFavorites};
    }

    case 'REMOVE_FROM_FAVORITES': {
      const selectedItem = action.payload.favorite;

      const currentFavoriteList = state.favoritesList.findIndex(
        item => item.id === selectedItem.id,
      );

      const updatedFavoritesList = [...state.favoritesList];
      updatedFavoritesList.splice(currentFavoriteList, 1);

      AsyncStorage.setItem('@fav', JSON.stringify(updatedFavoritesList));
      return {...state, favoritesList: updatedFavoritesList};
    }
    case 'SET_DATA':
      const fav = action.payload;
      return {...state, favoritesList: fav};

    default:
      return state;
  }
};
