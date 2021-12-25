import React, {useState} from 'react';
import {FlatList, SafeAreaView, Dimensions} from 'react-native';
import ComicsCard from '../../Components/ComicsCard/ComicsCard';
import ComicModal from '../../Components/ComicModal/ComicModal';
import useFetch from '../../hooks/useFetch';
import Loading from '../../Components/Loading/Loading';
// import Carousel from 'react-native-snap-carousel';
// const {width} = Dimensions.get('window');

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
      {/* <Carousel
        data={data}
        renderItem={renderComics}
        sliderWidth={350}
        itemWidth={width * 0.7}
        layout={'stack'}
        layoutCardOffset={`25`}
      /> */}
      <FlatList data={data} renderItem={renderComics} numColumns={2} />
    </SafeAreaView>
  );
};
export default Comics;
