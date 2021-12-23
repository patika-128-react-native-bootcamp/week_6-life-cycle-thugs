import React, {useContext} from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import styles from './ComicsCard.styles';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../styles/colors';
import {FavoritesContext} from '../../Context/FavoritesContext/FavoritesProvider';

const size = '/detail.jpg';

export default function ComicsCard({comics, onSelect}) {
  const {title, thumbnail} = comics;
  const {dispatch} = useContext(FavoritesContext);

  const handleAddFavorites = favorite =>
    dispatch({
      type: 'ADD_TO_FAVORITES',
      payload: {
        favorite,
      },
    });

  return (
    <TouchableOpacity onPress={onSelect}>
      <ImageBackground
        source={{uri: `${thumbnail.path}${size}`}}
        style={styles.image}>
        <View style={styles.image_color_container} />
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleAddFavorites(title)}>
          <Icon name="ios-heart-outline" color="#b71c1c" size={25} />
        </TouchableOpacity>
        <LinearGradient style={styles.linear} colors={colors.linear_colors}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}
