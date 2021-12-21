import React from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import styles from './ComicsCard.styles';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import color from '../../styles/color';

export default function ComicsCard({comics, onSelect}) {
  const {title, thumbnail} = comics;

  return (
    <TouchableOpacity onPress={onSelect}>
      <ImageBackground
        source={{uri: thumbnail.path + '/detail.jpg'}}
        style={styles.image}>
        <View style={styles.image_color_container} />
        <TouchableOpacity style={styles.button}>
          <Icon name="ios-heart-outline" color="#b71c1c" size={25} />
        </TouchableOpacity>
        <LinearGradient style={styles.linear} colors={color.linear_colors}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}
