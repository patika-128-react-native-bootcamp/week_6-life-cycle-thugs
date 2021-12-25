import React from 'react';
import styles from './Button.styles';
import AwesomeButton from 'react-native-really-awesome-button/src/themes/rick';
import colors from '../../styles/colors';

const Button = ({title, onPress}) => {
  return (
    <AwesomeButton
      type="anchor"
      style={styles.container}
      textColor={colors.white}
      backgroundDarker={colors.dark_Charcoal}
      backgroundColor={colors.dark_coral}
      borderColor={colors.granite_Gray}
      onPress={onPress}>
      {title}
    </AwesomeButton>
  );
};
export default Button;
