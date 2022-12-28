import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { HomeStackRoute } from '../../constants/constant';
import HomeDetailScreen from '../../screen/home/HomeDetailScreen';
import NewRequestListingScreen from '../../screen/home/NewRequestListingScreen';
import ShiftsItemDetail from '../../screen/home/ShiftsItemDetail';
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
      <Stack.Screen
        name={HomeStackRoute.NEW_REQUESTS}
        component={NewRequestListingScreen}></Stack.Screen>
      <Stack.Screen
        name={HomeStackRoute.SHIFTS_ITEM_DETAIL}
        component={ShiftsItemDetail}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default HomeStack;
