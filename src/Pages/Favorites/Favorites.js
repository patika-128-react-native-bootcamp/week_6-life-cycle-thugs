import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import {FavoritesContext} from '../../Context/FavoritesProvider';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Favorites() {
  const {state, dispatch} = useContext(FavoritesContext);

  const handleRemoveFavorites = comic =>
    dispatch({type: 'REMOVE_FROM_FAVORITES', payload: {comic}});

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
      <Text>Favorites</Text>
      <FlatList data={state.favoritesList} renderItem={renderBooks} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
  book_container: {
    backgroundColor: 'rgba(50, 50, 50,0.19)',
    padding: 20,
    borderRadius: 10,
    margin: 10,
    flexDirection: 'row',
  },
  item_name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});
