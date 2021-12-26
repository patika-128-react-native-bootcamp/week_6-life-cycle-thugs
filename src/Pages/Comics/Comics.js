import React, {useContext, useState} from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import ComicsCard from '../../Components/ComicsCard/ComicsCard';
import ComicModal from '../../Components/ComicModal/ComicModal';
import useFetch from '../../hooks/useFetch';
import Loading from '../../Components/Loading/Loading';
import {FavoritesContext} from '../../Context/FavoritesContext/FavoritesProvider';

const Comics = () => {
  const {loading, data} = useFetch('comics');
  const {dispatch} = useContext(FavoritesContext);
  const [selectedComic, setSelectedComic] = useState(null);

  if (loading) {
    return <Loading />;
  }

  const handleAddFavorites = favorite =>
    dispatch({
      type: 'ADD_TO_FAVORITES',
      payload: {
        favorite,
      },
    });

  const renderComics = ({item}) => (
    <ComicsCard
      comics={item}
      onSelect={() => setSelectedComic(item)}
      onPress={() => handleAddFavorites(item)}
    />
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
