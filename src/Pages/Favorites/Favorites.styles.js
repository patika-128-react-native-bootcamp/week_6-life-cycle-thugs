import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
const styles = StyleSheet.create({
  container: {flex: 1},
  book_container: {
    padding: 15,
    borderTopEndRadius: 30,
    margin: 10,
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: colors.tomato,
    borderBottomLeftRadius: 30,
  },
  item_name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.tomato,
  },
});
export default styles;
