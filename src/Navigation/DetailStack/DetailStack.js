import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Character from '../../Pages/Character';
import CharacterDetail from '../../Pages/CharacterDetail';
import routes from '../routes';
import colors from '../../styles/colors';
import {useTranslation} from 'react-i18next';

const Stack = createStackNavigator();

const DetailStack = () => {
  const {t} = useTranslation();
  return (
    <Stack.Navigator screenOptions={{headerTintColor: colors.tomato}}>
      <Stack.Screen
        name={routes.CHARACTER_PAGE}
        component={Character}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={routes.CHARACTER_DETAIL_PAGE}
        component={CharacterDetail}
        options={{title: t('CharacterDetail')}}
      />
    </Stack.Navigator>
  );
};
export default DetailStack;
