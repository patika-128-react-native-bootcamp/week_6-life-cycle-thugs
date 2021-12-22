import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import styles from './CharacterCard.styles';
import Icon from 'react-native-vector-icons/Ionicons';
const CharacterCard = ({characters, onSelect}) => {
  const size = '/portrait_fantastic.jpg';

  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{uri: `${characters.thumbnail.path}${size}`}}
        />
        <TouchableOpacity style={styles.button}>
          <Icon name="ios-heart-outline" color="#b71c1c" size={25} />
        </TouchableOpacity>
        <View style={styles.inner_container}>
          <Text numberOfLines={2}>{characters.name}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
export default CharacterCard;
