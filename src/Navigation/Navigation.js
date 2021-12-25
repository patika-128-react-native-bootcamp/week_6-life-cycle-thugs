import React from 'react';
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Comics from '../Pages/Comics';
import Favorites from '../Pages/Favorites';
import Settings from '../Pages/Settings';
import routes from './routes';
import colors from '../styles/colors';
import {useColorScheme} from 'react-native';
import Comic from 'react-native-vector-icons/FontAwesome5';
import Spider from 'react-native-vector-icons//FontAwesome5';
import Favorite from 'react-native-vector-icons//Ionicons';
import Setting from 'react-native-vector-icons//Ionicons';
import DetailStack from './DetailStack';
import {useTranslation} from 'react-i18next';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  const {t} = useTranslation();

  const scheme = useColorScheme();
  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Tab.Navigator
        screenOptions={{
          tabBarInactiveTintColor: colors.granite_Gray,
          tabBarActiveTintColor: colors.tomato,
          headerTintColor: colors.tomato,
        }}>
        <Tab.Screen
          name={routes.COMICS_PAGE}
          component={Comics}
          options={{
            tabBarIcon: ({color}) => (
              <Comic name="book-open" color={color} size={20} />
            ),
          }}
        />
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarIcon: ({color}) => (
              <Spider name="spider" color={color} size={20} />
            ),
          }}
          name={routes.CHARACTER_STACK}
          component={DetailStack}
        />
        <Tab.Screen
          name={routes.FAVORITES_PAGE}
          component={Favorites}
          options={{
            tabBarIcon: ({color}) => (
              <Favorite name="md-heart-circle" color={color} size={28} />
            ),
          }}
        />
        <Tab.Screen
          name={t(routes.SETTINGS_PAGE)}
          component={Settings}
          options={{
            tabBarIcon: ({color}) => (
              <Setting name="ios-settings-sharp" color={color} size={28} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
