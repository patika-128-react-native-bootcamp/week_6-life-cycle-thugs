import React, {useContext, useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import {FavoritesContext} from '../../Context/FavoritesContext/FavoritesProvider';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './Favorites.styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Favorites() {
  const {state, dispatch} = useContext(FavoritesContext);
  const [favoriteList, setFavoriteList] = useState();

  const handleRemoveFavorites = favorite =>
    dispatch({type: 'REMOVE_FROM_FAVORITES', payload: {favorite}});

  useEffect(() => {
    AsyncStorage.getItem('@fav').then(item => {
      item && setFavoriteList(JSON.parse(item));
      console.log(item);
    });
  }, [state]);

  const renderBooks = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.book_container}
        onPress={() => handleRemoveFavorites(item)}>
        <Icon name="bookmark" color="#b71c1c" size={25} />
        <Text style={styles.item_name}>{item}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList data={favoriteList} renderItem={renderBooks} />
    </View>
  );
}
