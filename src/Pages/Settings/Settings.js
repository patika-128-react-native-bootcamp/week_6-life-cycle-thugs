import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import {useTranslation} from 'react-i18next';
import SwitchSelector from 'react-native-switch-selector';

import styles from '../../Pages/Settings/Settings.styles';
import {ThemeContext} from '../../Context/ThemeContext/ThemeProvider';
import dark from '../../themes/dark';

const options = [
  {label: 'English', value: 'en'},
  {label: 'Turkish', value: 'tr'},
  {label: 'Spanish', value: 'sp'},
];
const Settings = () => {
  const {t, i18n} = useTranslation();
  const {theme} = useContext(ThemeContext);
  return (
    <View style={theme == 'dark' ? dark.container : styles.container}>
      <Text style={styles.name}>{t('LanguageSettings')}</Text>
      <SwitchSelector
        options={options}
        hasPadding
        initial={0}
        onPress={language => {
          i18n.changeLanguage(language);
        }}
      />
    </View>
  );
};
export default Settings;
