import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import styles from './DetailCard.styles';

import LinearGradient from 'react-native-linear-gradient';
import colors from '../../styles/colors';

const new_image =
  'https://kbimages1-a.akamaihd.net/3d9a3fe6-bc31-4537-8147-bdfbeafe35fb/353/569/90/False/marvel-comics-1000-collection.jpg';

export default function DetailCard({comics}) {
  const {name} = comics;

  return (
    <View>
      <ImageBackground source={{uri: new_image}} style={styles.image}>
        <View style={styles.image_color_container} />
        <LinearGradient style={styles.linear} colors={colors.linear_colors}>
          <Text style={styles.title} numberOfLines={2}>
            {name}
          </Text>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}
