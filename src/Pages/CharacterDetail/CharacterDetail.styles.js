import {StyleSheet} from 'react-native';

import colors from '../../styles/colors';

const styles = StyleSheet.create({
  animated_header_component: {
    position: 'absolute',
    left: 0,
    right: 0,
  },
  image: {
    height: 300,
  },

  movieCard_container: {
    paddingTop: 150,
    left: 10,
  },

  name: {
    fontSize: 35,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: colors.white,
    backgroundColor: 'rgba(50,0,0,0.2)',
    height: 50,
  },

  linear: {
    ...StyleSheet.absoluteFill,
  },

  card_container: {
    paddingTop: 30,
  },
  card_text: {
    fontSize: 18,
    textDecorationLine: 'underline',
    color: colors.dark_coral,
  },
  description: {
    paddingTop: 80,
    textAlign: 'left',
    paddingRight: 5,
    color: colors.dark_coral,
  },
});
export default styles;
