import React from 'react';
import {View, Text, ScrollView, Linking} from 'react-native';
import Modal from 'react-native-modal';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import styles from './ComicModal.styles';
import Feather from 'react-native-vector-icons/Feather';
import Button from '../Button/Button';
import {useTranslation} from 'react-i18next';

export default function ComicModal({selectedComic, onModalClose}) {
  const isModalVisible = !!selectedComic;
  const {t, i18n} = useTranslation();
  const handleModalClose = () => onModalClose(null);
  async function openLink(url) {
    await Linking.openURL(url);
  }

  return (
    <Modal
      style={styles.modal}
      swipeDirection="down"
      onSwipeComplete={handleModalClose}
      onBackdropPress={handleModalClose}
      isVisible={isModalVisible}>
      <View style={styles.container}>
        <View style={styles.body_container}>
          <Text style={styles.indentation}>___</Text>
          <Text style={styles.comic_name}>{selectedComic?.title}</Text>
          <View style={styles.bottom_container}>
            {selectedComic?.textObjects &&
              selectedComic?.textObjects.map(description => {
                const {text} = description;
                return (
                  <Text
                    key={selectedComic.id}
                    style={styles.description}
                    numberOfLines={4}>
                    {text}
                  </Text>
                );
              })}
          </View>

          <View style={styles.bottom_container}>
            <ScrollView horizontal={true}>
              {selectedComic?.characters?.available > 0 &&
                selectedComic?.characters?.items?.map((character, index) => {
                  const {name} = character;
                  <Text style={styles.title}>{t('Characters')}</Text>;
                  return (
                    <View key={index} style={styles.detail_container}>
                      <View style={styles.character_creator_container}>
                        <FontAwesome name="spider" size={20} color="gold" />
                      </View>
                      <Text style={styles.title} numberOfLines={2}>
                        {name}
                      </Text>
                    </View>
                  );
                })}
            </ScrollView>
          </View>
          <View style={styles.bottom_container}>
            <ScrollView horizontal={true}>
              {selectedComic?.creators?.available > 0 &&
                selectedComic?.creators?.items?.map((character, index) => {
                  const {name, role} = character;
                  return (
                    <View key={index} style={styles.detail_container}>
                      <View style={styles.character_creator_container}>
                        <Feather name="pen-tool" size={20} color="gold" />
                      </View>
                      <Text style={styles.title} numberOfLines={2}>
                        {name}
                      </Text>
                      <Text style={styles.role} numberOfLines={1}>
                        {role.toUpperCase()}
                      </Text>
                    </View>
                  );
                })}
            </ScrollView>
          </View>
          <View style={styles.card_container}>
            <ScrollView horizontal pagingEnabled>
              {selectedComic?.urls &&
                selectedComic.urls.map((url, index) => (
                  <Button
                    key={index}
                    title={'Comics ' + url.type}
                    onPress={() => openLink(url.url)}
                  />
                ))}
            </ScrollView>
          </View>
        </View>
      </View>
    </Modal>
  );
}
