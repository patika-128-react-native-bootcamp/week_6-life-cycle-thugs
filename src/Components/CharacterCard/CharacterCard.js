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

const new_image =
  'https://i.pinimg.com/originals/61/0b/79/610b79b76389437f18c544982af48974.jpg';
const not_available =
  'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/portrait_fantastic.jpg';

const CharacterCard = ({characters, onSelect}) => {
  const {thumbnail} = characters;
  const size = '/portrait_fantastic.jpg';
  const character_url = `${thumbnail.path}${size}`;
  const image = character_url === not_available ? new_image : character_url;

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
        <Image style={styles.image} source={{uri: image}} />
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
