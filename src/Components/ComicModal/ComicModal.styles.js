import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import font from '../../styles/font';
import radius from '../../styles/radius';
import spacing from '../../styles/spacing';
const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  modal: {
    padding: spacing.zero,
    margin: spacing.zero,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  body_container: {
    padding: spacing.small,
    backgroundColor: 'rgba(50, 50, 50,0.92)',
    borderTopLeftRadius: radius.smooth,
    borderTopRightRadius: radius.smooth,
    height: height / 1.4,
  },
  detail_container: {
    width: 80,
    alignItems: 'center',
    margin: spacing.tiny,
  },
  character_creator_container: {
    height: 70,
    width: 70,
    borderRadius: radius.icon_card,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.gold,
    backgroundColor: '#1f1f1f',
    justifyContent: 'center',
    alignItems: 'center',
    margin: spacing.small,
  },
  title: {
    fontSize: font.subtitle,
    color: colors.white,
    textAlign: 'center',
  },
  bottom_container: {
    flexDirection: 'row',
    paddingTop: spacing.small,
    margin: spacing.small,
  },
  comic_name: {
    fontSize: font.main_title,
    color: colors.white,
    textAlign: 'center',
  },
  indentation: {
    fontSize: font.indentation,
    color: colors.granite_Gray,
    textAlign: 'center',
    bottom: spacing.huge,
    fontWeight: 'bold',
  },
  card_container: {
    top: spacing.large,
    left: spacing.large,
  },
  role: {
    fontSize: font.description_title,
    color: colors.granite_Gray,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  description: {
    fontSize: font.description_title,
    textAlign: 'justify',
  },
});

export default styles;
