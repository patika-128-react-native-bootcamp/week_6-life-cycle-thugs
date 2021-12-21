import React, {useState, useEffect} from 'react';
import {Text, View, SafeAreaView, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import useFetch from '../../hooks/useFetch';
import styles from './Character.styles';
import SearchBar from '../../Components/SearchBar';
import CharacterCard from '../../Components/CharacterCard';
import routes from '../../Navigation/routes';

const Character = () => {
  const navigation = useNavigation();
  const {loading, error, data} = useFetch('characters');
  const [charactersData, setCharactersData] = useState([]);

  useEffect(() => {
    if (data !== null) {
      setCharactersData(data);
    }
  }, [data]);

  const handleCharacterDetail = id => {
    navigation.navigate(routes.CHARACTER_DETAIL_PAGE, {id});
  };

  const renderCharacterList = ({item}) => (
    <CharacterCard
      characters={item}
      onSelect={() => handleCharacterDetail(item.id)}
    />
  );

  const handleChangeText = text => {
    if (text !== null || text !== '') {
      const filteredCharacter = data.filter(characters => {
        const searchText = text.toLowerCase();
        const currentTitle = characters.name.toLowerCase();
        return currentTitle.indexOf(searchText) > -1;
      });
      setCharactersData(filteredCharacter);
      return;
    }
    setCharactersData(data);
  };

  return (
    <SafeAreaView>
      <SearchBar title="Search.." onChange={handleChangeText} />
      <FlatList
        data={charactersData}
        renderItem={renderCharacterList}
        numColumns={2}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};
export default Character;
