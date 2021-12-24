import React, {useState} from 'react';
import {FlatList, SafeAreaView, Text} from 'react-native';
import ComicsCard from '../../Components/ComicsCard/ComicsCard';
import ComicModal from '../../Components/ComicModal/ComicModal';
import useFetch from '../../hooks/useFetch';
import Loading from '../../Components/Loading/Loading';

const Comics = () => {
  const {loading, data} = useFetch('comics');
  const [selectedComic, setSelectedComic] = useState(null);

  if (loading) {
    return <Loading />;
  }

  const renderComics = ({item}) => (
    <ComicsCard comics={item} onSelect={() => setSelectedComic(item)} />
  );

  return (
    <SafeAreaView>
      <ComicModal
        onModalClose={setSelectedComic}
        selectedComic={selectedComic}
      />
      <FlatList data={data} renderItem={renderComics} numColumns={2} />
    </SafeAreaView>
  );
};
export default Comics;
