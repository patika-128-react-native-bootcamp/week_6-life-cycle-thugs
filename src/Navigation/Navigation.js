import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Comics from '../Pages/Comics';
import Character from '../Pages/Character';
import Favorites from '../Pages/Favorites';
import routes from './routes';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name={routes.COMICS_PAGE} component={Comics} />
        <Tab.Screen name={routes.CHARACTER_PAGE} component={Character} />
        <Tab.Screen name={routes.FAVORITES_PAGE} component={Favorites} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
