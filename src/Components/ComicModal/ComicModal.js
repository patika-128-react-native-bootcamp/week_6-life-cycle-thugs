import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import Modal from 'react-native-modal';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './ComicModal.styles';
import Feather from 'react-native-vector-icons/Feather';

export default function ComicModal({selectedComic, onModalClose}) {
  const isModalVisible = !!selectedComic;
  const handleModalClose = () => onModalClose(null);

  return (
    <Modal
      style={styles.modal}
      swipeDirection="down"
      onSwipeComplete={handleModalClose}
      onBackdropPress={handleModalClose}
      isVisible={isModalVisible}>
      <View style={styles.container}>
        <View style={styles.body_container}>
          <View style={styles.bottom_container}>
            <Text style={styles.title}>Characters:</Text>
            <ScrollView horizontal={true}>
              {selectedComic?.characters?.available > 0 &&
                selectedComic?.characters?.items?.map((character, i) => {
                  const {name} = character;
                  return (
                    <View key={i} style={styles.detail_container}>
                      <View style={styles.character_creator_container}>
                        <AntDesign name="dingding-o" size={20} color="gold" />
                      </View>
                      <Text numberOfLines={2}>{name}</Text>
                    </View>
                  );
                })}
            </ScrollView>
          </View>
          <View style={styles.bottom_container}>
            <Text style={styles.title}>Creators: </Text>
            <ScrollView horizontal={true}>
              {selectedComic?.creators?.available > 0 &&
                selectedComic?.creators?.items?.map((character, i) => {
                  const {name, role} = character;
                  return (
                    <View key={i} style={styles.detail_container}>
                      <View style={styles.character_creator_container}>
                        <Feather name="pen-tool" size={20} color="gold" />
                      </View>
                      <Text numberOfLines={1}>{name}</Text>
                      <Text numberOfLines={1}>{role}</Text>
                    </View>
                  );
                })}
            </ScrollView>
          </View>
        </View>
      </View>
    </Modal>
  );
}
