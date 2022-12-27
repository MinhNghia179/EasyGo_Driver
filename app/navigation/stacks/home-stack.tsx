import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { HomeStackRoute } from '../../constants/constant';
import HomeDetailScreen from '../../screen/home/HomeDetailScreen';
import { noHeaderNavigationConfig } from '../navigation-options';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={HomeStackRoute.DASHBOARD}
      screenOptions={noHeaderNavigationConfig}>
      <Stack.Screen
        name={HomeStackRoute.DASHBOARD}
        component={HomeDetailScreen}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default HomeStack;
