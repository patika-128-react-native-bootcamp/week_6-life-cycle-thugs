import React from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from '../../Components/FavoriteCard/FavoriteCard.styles';
import colors from '../../styles/colors';

const new_image =
  'https://cdn.shopify.com/s/files/1/1140/8354/articles/best_marvel_comics_2000x.jpg?v=1635257623';
const not_available =
  'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/detail.jpg';
const size = '/detail.jpg';

const FavoriteCard = ({favoriteData, onSelect}) => {
  const {thumbnail, title, name} = favoriteData;
  const comic_url = `${thumbnail.path}${size}`;

  const image = comic_url === not_available ? new_image : comic_url;
  const favorite_name = title == null ? name : title;

  return (
    <View style={styles.container}>
      <ImageBackground source={{uri: image}} style={styles.image}>
        <View style={styles.image_color_container} />
        <TouchableOpacity style={styles.button} onPress={onSelect}>
          <Icon name="trash" color={colors.dark_coral} size={20} />
        </TouchableOpacity>
      </ImageBackground>
      <View>
        <Text style={styles.title} numberOfLines={3}>
          {favorite_name}
        </Text>
      </View>
    </View>
  );
};

export default FavoriteCard;
