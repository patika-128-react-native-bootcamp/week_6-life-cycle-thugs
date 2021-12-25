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

export default function Favorites() {
  const {state, dispatch} = useContext(FavoritesContext);
  const {favoritesList} = state;

  const handleRemoveFavorites = favorite =>
    dispatch({type: 'REMOVE_FROM_FAVORITES', payload: {favorite}});

  const renderBooks = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.favorites_container}
        onPress={() => handleRemoveFavorites(item)}>
        <Image source={require('../../assets/icon.png')} style={styles.icon} />
        <Text style={styles.item_name}>{item}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList data={favoritesList} renderItem={renderBooks} />
    </View>
  );
}
