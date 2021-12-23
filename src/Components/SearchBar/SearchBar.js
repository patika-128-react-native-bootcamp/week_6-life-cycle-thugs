import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './SearchBar.styles';

const SearchBar = ({title, onChange}) => {
  return (
    <View>
      <View style={styles.container}>
        <TextInput
          placeholder={title}
          onChangeText={onChange}
          placeholderTextColor="gray"
        />
      </View>
    </View>
  );
};
export default SearchBar;
