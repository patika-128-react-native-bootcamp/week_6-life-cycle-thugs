export default (state, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITES': {
      const selectedBook = action.payload.comic;

      const bookFavoriteIndex = state.favoritesList.findIndex(
        f => f.id === selectedBook.id,
      );
      const isInFavorites = bookFavoriteIndex !== -1;

      if (isInFavorites) {
        return state;
      }

      const updatedFavorites = [...state.favoritesList, selectedBook];

      return {...state, favoritesList: updatedFavorites};
    }

    case 'REMOVE_FROM_FAVORITES': {
      const selectedBook = action.payload.comic;

      const bookFavoritesIndex = state.favoritesList.findIndex(
        f => f.id === selectedBook.id,
      );

      const updatedFavoritesList = [...state.favoritesList];
      updatedFavoritesList.splice(bookFavoritesIndex, 1);

      return {...state, favoritesList: updatedFavoritesList};
    }

    default:
      return state;
  }
};
