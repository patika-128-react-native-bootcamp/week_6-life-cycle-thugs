import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../styles/colors';

const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
  },
  image: {
    height: height / 1.7,
    resizeMode: 'cover',
    margin: 10,
    justifyContent: 'flex-end',
    borderRadius: 10,
    overflow: 'hidden',
    borderLeftWidth: 7,
    borderColor: colors.chinese_Black,
    borderBottomWidth: 7,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.tomato,
    textAlign: 'center',
  },
  button: {
    right: 10,
    top: 10,
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 30,
    position: 'absolute',
  },
  image_color_container: {
    backgroundColor: '#00000022',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
  linear: {
    padding: 5,
  },
});
export default styles;
