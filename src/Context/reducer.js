export default (state, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITES': {
      const selectedComic = action.payload.comic;

      const currentFavoriteComic = state.favoritesList.findIndex(
        item => item === selectedComic,
      );
      const isInFavorites = currentFavoriteComic !== -1;

      if (isInFavorites) {
        return state;
      }

      const updatedFavorites = [...state.favoritesList, selectedComic];
      return {...state, favoritesList: updatedFavorites};
    }

    case 'REMOVE_FROM_FAVORITES': {
      const selectedComic = action.payload.comic;

      const currentFavoriteComic = state.favoritesList.findIndex(
        item => item === selectedComic,
      );

      const updatedFavoritesList = [...state.favoritesList];
      updatedFavoritesList.splice(currentFavoriteComic, 1);
      return {...state, favoritesList: updatedFavoritesList};
    }

    default:
      return state;
  }
};
