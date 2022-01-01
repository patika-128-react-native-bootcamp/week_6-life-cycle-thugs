import React, {useContext} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './CharacterCard.styles';
import colors from '../../styles/colors';
import Icon from 'react-native-vector-icons/Ionicons';

const new_image =
  'https://i.pinimg.com/originals/61/0b/79/610b79b76389437f18c544982af48974.jpg';
const not_available =
  'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/portrait_fantastic.jpg';

const CharacterCard = ({characters, onSelect, onPress}) => {
  const {thumbnail} = characters;
  const size = '/portrait_fantastic.jpg';
  const character_url = `${thumbnail.path}${size}`;
  const image = character_url === not_available ? new_image : character_url;

  return (
    <TouchableOpacity onPress={onSelect}>
      <ImageBackground source={{uri: image}} style={styles.image}>
        <View style={styles.image_color_container} />
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Icon name="ios-heart-outline" color="#b71c1c" size={25} />
        </TouchableOpacity>
        <LinearGradient style={styles.linear} colors={colors.linear_colors}>
          <Text style={styles.title} numberOfLines={5}>
            {characters.name}
          </Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
};
export default CharacterCard;
