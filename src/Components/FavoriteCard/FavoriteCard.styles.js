import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../styles/colors';
import font from '../../styles/font';
import radius from '../../styles/radius';
import spacing from '../../styles/spacing';

const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
  },
  image: {
    height: height / 1.7,
    resizeMode: 'cover',
    margin: spacing.large,
    justifyContent: 'flex-end',
    borderRadius: spacing.large,
    overflow: 'hidden',
    borderLeftWidth: 7,
    borderColor: '#66261a',
    borderBottomWidth: 7,
  },
  title: {
    fontSize: font.main_title,
    fontWeight: 'bold',
    color: colors.tomato,
    textAlign: 'center',
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
});
export default styles;
