import React from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import styles from './ComicsCard.styles';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../styles/colors';

const new_image =
  'https://static.thcdn.com/images/large/original//productimg/1600/1600/12840960-2064831945592667.jpg';
const not_available =
  'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/detail.jpg';
const size = '/detail.jpg';

export default function ComicsCard({comics, onSelect, onPress}) {
  const {title, thumbnail} = comics;
  const comic_url = `${thumbnail.path}${size}`;
  const image = comic_url === not_available ? new_image : comic_url;

  return (
    <TouchableOpacity onPress={onSelect}>
      <ImageBackground source={{uri: image}} style={styles.image}>
        <View style={styles.image_color_container} />
        <TouchableOpacity style={styles.button} onPress={onPress}>
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
