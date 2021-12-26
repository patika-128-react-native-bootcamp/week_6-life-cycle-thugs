import React, {useContext} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import {FavoritesContext} from '../../Context/FavoritesContext/FavoritesProvider';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './Favorites.styles';
import FavoriteCard from '../../Components/FavoriteCard';

export default function Favorites() {
  const {state, dispatch} = useContext(FavoritesContext);
  const {favoritesList} = state;

  const handleRemoveFavorites = favorite =>
    dispatch({type: 'REMOVE_FROM_FAVORITES', payload: {favorite}});

  const renderFavorites = ({item}) => {
    return (
      <FavoriteCard
        comics={item}
        onSelect={() => handleRemoveFavorites(item)}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={favoritesList}
        renderItem={renderFavorites}
        numColumns={2}
      />
    </View>
  );
}
