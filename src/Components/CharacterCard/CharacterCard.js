import React, {useContext} from 'react';
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import styles from './CharacterCard.styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {FavoritesContext} from '../../Context/FavoritesContext/FavoritesProvider';

const CharacterCard = ({characters, onSelect}) => {
  const size = '/portrait_fantastic.jpg';
  const {dispatch} = useContext(FavoritesContext);

  const handleAddFavorites = favorite =>
    dispatch({
      type: 'ADD_TO_FAVORITES',
      payload: {
        favorite,
      },
    });

  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{uri: `${characters.thumbnail.path}${size}`}}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleAddFavorites(characters.name)}>
          <Icon name="ios-heart-outline" color="#b71c1c" size={25} />
        </TouchableOpacity>
        <View style={styles.inner_container}>
          <Text numberOfLines={2} style={styles.text}>
            {characters.name}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
export default CharacterCard;
