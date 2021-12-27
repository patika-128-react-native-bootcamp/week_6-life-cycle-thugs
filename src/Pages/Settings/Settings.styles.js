import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import font from '../../styles/font';
import spacing from '../../styles/spacing';

const styles = StyleSheet.create({
  container: {flex: 1, margin: 10},
  favorites_container: {
    margin: spacing.large,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  name: {
    fontSize: font.header,
    fontWeight: 'bold',
    color: colors.tomato,
    margin: spacing.small,
    textAlign: 'justify',
  },
  icon: {
    height: 100,
    width: 100,
  },
});
export default styles;
