import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import styles from '../../Components/FavoriteCard/FavoriteCard.styles';
import colors from '../../styles/colors';

const new_image =
  'https://static.thcdn.com/images/large/original//productimg/1600/1600/12840960-2064831945592667.jpg';
const not_available =
  'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/detail.jpg';
const size = '/detail.jpg';

const FavoriteCard = ({comics, characters, onSelect}) => {
  return (
    <TouchableOpacity onPress={onSelect}>
      <ImageBackground source={{uri: new_image}} style={styles.image}>
        <View style={styles.image_color_container} />
        <LinearGradient style={styles.linear} colors={colors.linear_colors}>
          <Text style={styles.title} numberOfLines={5}>
            {comics.title}
          </Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default FavoriteCard;
