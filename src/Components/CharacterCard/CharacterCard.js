import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './CharacterCard.styles';
const CharacterCard = ({characters}) => {
  const size = '/portrait_fantastic.jpg';

  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.image}
          source={{uri: `${characters.thumbnail.path}${size}`}}
        />
        <View style={styles.inner_container}>
          <Text numberOfLines={2}>{characters.name}</Text>
        </View>
      </View>
    </View>
  );
};
export default CharacterCard;
