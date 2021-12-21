import React, {useState, useEffect} from 'react';
import {Text, View, SafeAreaView, FlatList} from 'react-native';
import useFetch from '../../hooks/useFetch';
import styles from './Character.styles';
import SearchBar from '../../Components/SearchBar';
import CharacterCard from '../../Components/CharacterCard';

const Character = () => {
  const {loading, error, data} = useFetch('characters');
  const [charactersData, setCharactersData] = useState([]);

  useEffect(() => {
    if (data !== null) {
      setCharactersData(data);
      console.log('data', data);
    }
  }, [data]);

  const renderCharacterList = ({item}) => <CharacterCard characters={item} />;

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
