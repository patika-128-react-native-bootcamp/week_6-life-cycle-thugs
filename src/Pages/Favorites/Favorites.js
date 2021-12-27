import React, {useContext} from 'react';
import {View, Dimensions} from 'react-native';
import Carousel from 'react-native-snap-carousel';

import {FavoritesContext} from '../../Context/FavoritesContext/FavoritesProvider';
import styles from './Favorites.styles';
import FavoriteCard from '../../Components/FavoriteCard';

const {width} = Dimensions.get('window');

export default function Favorites() {
  const {state, dispatch} = useContext(FavoritesContext);
  const {favoritesList} = state;

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
    <View style={styles.container}>
      <Carousel
        data={favoritesList}
        renderItem={renderFavorites}
        sliderWidth={width}
        itemWidth={width * 0.7}
      />
    </View>
  );
}
