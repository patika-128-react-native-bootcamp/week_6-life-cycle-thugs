import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
const styles = StyleSheet.create({
  container: {flex: 1, margin: 10},
  favorites_container: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  item_name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.tomato,
    margin: 5,
    textAlign: 'justify',
  },
  icon: {
    height: 100,
    width: 100,
  },
});
export default styles;
