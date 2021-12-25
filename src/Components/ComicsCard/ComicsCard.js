import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
} from 'react-native';
import styles from './ComicsCard.styles';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../styles/colors';
import {FavoritesContext} from '../../Context/FavoritesContext/FavoritesProvider';

const new_image =
  'https://static.thcdn.com/images/large/original//productimg/1600/1600/12840960-2064831945592667.jpg';
const not_available =
  'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/detail.jpg';
const size = '/detail.jpg';

export default function ComicsCard({comics, onSelect}) {
  const {title, thumbnail} = comics;
  const {dispatch} = useContext(FavoritesContext);
  const comic_url = `${thumbnail.path}${size}`;
  const image = comic_url === not_available ? new_image : comic_url;

  const handleAddFavorites = favorite =>
    dispatch({
      type: 'ADD_TO_FAVORITES',
      payload: {
        favorite,
      },
    });

  return (
    <TouchableOpacity onPress={onSelect}>
      <ImageBackground source={{uri: image}} style={styles.image}>
        <View style={styles.image_color_container} />
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleAddFavorites(title)}>
          <Icon name="ios-heart-outline" color="#b71c1c" size={25} />
        </TouchableOpacity>
        <LinearGradient style={styles.linear} colors={colors.linear_colors}>
          <Text style={styles.title} numberOfLines={5}>
            {title}
          </Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}
