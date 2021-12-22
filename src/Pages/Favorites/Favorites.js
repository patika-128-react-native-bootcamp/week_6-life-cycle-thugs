import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import {FavoritesContext} from '../../Context/FavoritesContext/FavoritesProvider';

export default function Favorites() {
  const {state, dispatch} = useContext(FavoritesContext);

  const handleRemoveFavorites = comic =>
    dispatch({type: 'REMOVE_FROM_FAVORITES', payload: {comic}});

  const renderBooks = ({item}) => {
    console.log(item);
    return (
      <TouchableOpacity
        style={styles.book_container}
        onPress={() => handleRemoveFavorites(item)}>
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
    backgroundColor: '#bdbdbd',
    padding: 5,
    borderRadius: 3,
    margin: 10,
  },
  item_name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});
