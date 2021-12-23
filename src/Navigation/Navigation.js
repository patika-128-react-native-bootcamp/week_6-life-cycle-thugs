import React from 'react';
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import Character from '../Pages/Character';
import CharacterDetail from '../Pages/CharacterDetail/CharacterDetail';
import Comics from '../Pages/Comics';
import Favorites from '../Pages/Favorites';
import Settings from '../Pages/Settings';
import routes from './routes';
import colors from '../styles/colors';
import {useColorScheme} from 'react-native';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const DetailStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerTintColor: colors.tomato}}>
      <Stack.Screen name={routes.CHARACTER_PAGE} component={Character} />
      <Stack.Screen
        name={routes.CHARACTER_DETAIL_PAGE}
        component={CharacterDetail}
      />
    </Stack.Navigator>
  );
};

const Navigation = () => {
  const scheme = useColorScheme();
  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Tab.Navigator
        screenOptions={{
          tabBarInactiveTintColor: colors.granite_Gray,
          tabBarActiveTintColor: colors.tomato,
          headerTintColor: colors.tomato,
        }}>
        <Tab.Screen name={routes.COMICS_PAGE} component={Comics} />
        <Tab.Screen
          options={{headerShown: false}}
          name={routes.CHARACTER_PAGE}
          component={DetailStack}
        />
        <Tab.Screen name={routes.FAVORITES_PAGE} component={Favorites} />
        <Tab.Screen name={routes.SETTINGS_PAGE} component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
