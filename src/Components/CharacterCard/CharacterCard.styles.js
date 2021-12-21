import {StyleSheet} from 'react-native';
import radius from '../../styles/radius';
import spacing from '../../styles/spacing';
import colors from '../../styles/colors';
export default StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: radius.smooth,
    margin: spacing.medium,
    backgroundColor: colors.secondary,
  },
  inner_container: {
    margin: spacing.medium,
  },
  image: {
    alignSelf: 'center',
    width: 150,
    height: 250,
    resizeMode: 'contain',
  },
});
