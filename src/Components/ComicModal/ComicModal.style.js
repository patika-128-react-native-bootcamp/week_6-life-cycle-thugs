import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

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
    padding: 20,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 250,
  },
  detail_container: {
    width: 70,
    alignItems: 'center',
  },
  character_creator_container: {
    height: 50,
    width: 50,
    borderRadius: 25,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#afafaf',
    backgroundColor: '#1f1f1f',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 15,
    color: 'black',
  },
  bottom_container: {
    flexDirection: 'row',
    paddingBottom: 10,
  },
});

export default styles;
