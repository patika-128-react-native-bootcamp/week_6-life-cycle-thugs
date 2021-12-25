import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../styles/colors';
const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  modal: {
    padding: 0,
    margin: 0,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  body_container: {
    padding: 5,
    backgroundColor: 'rgba(50, 50, 50,0.92)',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: height / 1.4,
  },
  detail_container: {
    width: 80,
    alignItems: 'center',
    margin: 3,
  },
  character_creator_container: {
    height: 70,
    width: 70,
    borderRadius: 25,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.gold,
    backgroundColor: '#1f1f1f',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  title: {
    fontSize: 13,
    color: colors.white,
    textAlign: 'center',
  },
  bottom_container: {
    flexDirection: 'row',
    paddingTop: 5,
    margin: 5,
  },
  comic_name: {
    fontSize: 22,
    color: colors.white,
    textAlign: 'center',
  },
  indentation: {
    fontSize: 30,
    color: colors.granite_Gray,
    textAlign: 'center',
    bottom: 25,
    fontWeight: 'bold',
  },
  card_container: {
    top: 10,
    left: 10,
  },
  role: {
    fontSize: 11,
    color: colors.granite_Gray,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  description: {
    fontSize: 11,
    textAlign: 'justify',
  },
});

export default styles;
