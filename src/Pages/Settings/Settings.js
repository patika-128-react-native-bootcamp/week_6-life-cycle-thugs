import React from 'react';
import {Text, View} from 'react-native';
import {useTranslation} from 'react-i18next';
import SwitchSelector from 'react-native-switch-selector';

import styles from '../../Pages/Settings/Settings.styles';

const options = [
  {label: 'English', value: 'en'},
  {label: 'Turkish', value: 'tr'},
  {label: 'Spanish', value: 'sp'},
];
const Settings = () => {
  const {t, i18n} = useTranslation();
  return (
    <View>
      <Text style={styles.name}>{t('LanguageSettings')}</Text>
      <SwitchSelector
        options={options}
        hasPadding
        initial={0}
        onPress={language => {
          i18n.changeLanguage(language);
        }}
        buttonColor="#ff6347"
      />
    </View>
  );
};
export default Settings;
