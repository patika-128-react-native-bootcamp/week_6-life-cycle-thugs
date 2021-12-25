import React, {useState, useEffect} from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import {useRoute} from '@react-navigation/native';
import Html from 'react-native-render-html';

import styles from './CharacterDetail.styles';
import useFetch from '../../hooks/useFetch';

const CharacterDetail = () => {
  const route = useRoute();
  const {id} = route.params;

  const {data: characterDetail, loading, error} = useFetch(`characters/${id}`);

  if (!characterDetail) {
    return null;
  }

  const source = {
    html: `<p>Details: ${characterDetail.map(data =>
      data.textObjects.map(t => t.text),
    )}</p>`,
  };

  return (
    <SafeAreaView>
      {characterDetail.map((data, k) => (
        <View key={k}>
          <Text></Text>
        </View>
      ))}
    </SafeAreaView>
  );
};
export default CharacterDetail;
