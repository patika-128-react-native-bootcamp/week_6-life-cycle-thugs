import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './Button.styles';

const Button = ({title, onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.btncontainer}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Button;
