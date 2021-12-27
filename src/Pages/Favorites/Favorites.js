import React, {useContext} from 'react';
import {View, Dimensions} from 'react-native';
import Carousel from 'react-native-snap-carousel';

import {FavoritesContext} from '../../Context/FavoritesContext/FavoritesProvider';
import styles from './Favorites.styles';
import FavoriteCard from '../../Components/FavoriteCard';
import {ThemeContext} from '../../Context/ThemeContext/ThemeProvider';
import dark from '../../themes/dark';

const {width} = Dimensions.get('window');

export default function Favorites() {
  const {state, dispatch} = useContext(FavoritesContext);
  const {favoritesList} = state;
  const {theme} = useContext(ThemeContext);

  const handleRemoveFavorites = favorite =>
    dispatch({type: 'REMOVE_FROM_FAVORITES', payload: {favorite}});

  const renderFavorites = ({item}) => {
    return (
      <FavoriteCard
        favoriteData={item}
        onSelect={() => handleRemoveFavorites(item)}
      />
    );
  };

  return (
    <View style={theme == 'dark' ? dark.container : styles.container}>
      <Carousel
        data={favoritesList}
        renderItem={renderFavorites}
        sliderWidth={350}
        itemWidth={width * 0.7}
      />
    </View>
  );
}
