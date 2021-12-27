import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../styles/colors';
import font from '../../styles/font';
import radius from '../../styles/radius';
import spacing from '../../styles/spacing';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  image: {
    height: 175,
    width: width / 3 - spacing.large * 2,
    resizeMode: 'cover',
    margin: spacing.large,
    justifyContent: 'flex-end',
    borderRadius: radius.soft,
    overflow: 'hidden',
    borderWidth: 0.2,
    borderColor: colors.tomato,
  },
  title: {
    fontSize: font.subtitle,
    fontWeight: '500',
    color: colors.white,
  },
  button: {
    right: spacing.large,
    top: spacing.large,
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: radius.button_card,
    position: 'absolute',
  },
  image_color_container: {
    backgroundColor: '#00000022',
    position: 'absolute',
    left: spacing.zero,
    right: spacing.zero,
    bottom: spacing.zero,
    top: spacing.zero,
  },
  linear: {
    padding: spacing.large,
  },
});
export default styles;
