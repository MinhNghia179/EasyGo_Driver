import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { AccountStackRoute } from '../../constants/constant';
import HomeDetailScreen from '../../screen/home/HomeDetailScreen';
import { noHeaderNavigationConfig } from '../navigation-options';

const Stack = createStackNavigator();

const AccountStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={AccountStackRoute.DASHBOARD}
      screenOptions={noHeaderNavigationConfig}>
      <Stack.Screen
        name={AccountStackRoute.DASHBOARD}
        component={HomeDetailScreen}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default AccountStack;
