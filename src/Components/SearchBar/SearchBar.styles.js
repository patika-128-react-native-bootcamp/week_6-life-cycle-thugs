import {StyleSheet} from 'react-native';

import colors from '../../styles/colors';
import radius from '../../styles/radius';
import spacing from '../../styles/spacing';

export default StyleSheet.create({
  container: {
    borderRadius: radius.soft,
    margin: spacing.medium,
    borderWidth: 0.8,
    borderColor: colors.tomato,
  },
});
