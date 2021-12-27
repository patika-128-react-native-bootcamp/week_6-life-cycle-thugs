import {useRoute} from '@react-navigation/native';
import React from 'react';
import {Text, View, ScrollView, Image, Linking} from 'react-native';
import {useTranslation} from 'react-i18next';

import styles from './CharacterDetail.styles';
import useFetch from '../../hooks/useFetch';
import Button from '../../Components/Button/Button';
import DetailCard from '../../Components/DetailCard';

const CharacterDetail = () => {
  const route = useRoute();
  const {id} = route.params;
  const {data} = useFetch(`characters/${id}`);
  const {t, i18n} = useTranslation();

  async function openLink(url) {
    await Linking.openURL(url);
  }

  return (
    <ScrollView>
      <View style={styles.animated_header_component}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://static.wikia.nocookie.net/marveldatabase/images/e/e1/The_Marvel_Universe.png/revision/latest/scale-to-width-down/630?cb=20110513164401',
          }}
        />
      </View>
      {data &&
        data.map(characters => (
          <View style={styles.movieCard_container} key={characters.id}>
            <Text style={styles.name}>{characters.name}</Text>
            <Text style={styles.description}>{characters.description}</Text>
            <View style={styles.card_container}>
              <Text style={styles.card_text}>{t('Comics')}</Text>
              <ScrollView horizontal>
                {characters?.comics?.available > 0 &&
                  characters.comics.items.map((comic, index) => (
                    <DetailCard comics={comic} key={index} />
                  ))}
              </ScrollView>
            </View>

            <View style={styles.card_container}>
              <Text style={styles.card_text}>{t('Series')}</Text>
              <ScrollView horizontal>
                {characters?.series?.available > 0 &&
                  characters.series.items.map((comic, index) => (
                    <DetailCard comics={comic} key={index} />
                  ))}
              </ScrollView>
            </View>
            <View style={styles.card_container}>
              <Text style={styles.card_text}>{t('DetailUrls')}</Text>
              <ScrollView horizontal pagingEnabled>
                {characters?.urls &&
                  characters.urls.map((url, index) => (
                    <Button
                      key={index}
                      title={'Character ' + url.type}
                      onPress={() => openLink(url.url)}
                    />
                  ))}
              </ScrollView>
            </View>
          </View>
        ))}
    </ScrollView>
  );
};
export default CharacterDetail;
