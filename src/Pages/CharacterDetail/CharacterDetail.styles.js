import {StyleSheet} from 'react-native';

import colors from '../../styles/colors';
import font from '../../styles/font';
import spacing from '../../styles/spacing';

const styles = StyleSheet.create({
  animated_header_component: {
    position: 'absolute',
    left: spacing.zero,
    right: spacing.zero,
  },
  image: {
    height: 300,
  },
  characterCard_container: {
    paddingTop: 150,
    left: spacing.large,
  },
  name: {
    fontSize: font.name,
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
    paddingTop: spacing.huge,
  },
  card_text: {
    fontSize: font.header,
    textDecorationLine: 'underline',
    color: colors.dark_coral,
  },
  description: {
    paddingTop: spacing.description_spacing,
    textAlign: 'left',
    paddingRight: spacing.tiny,
    color: colors.dark_coral,
  },
});
export default styles;
