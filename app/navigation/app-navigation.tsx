import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Route } from '../constants/constant';
import { noHeaderNavigationConfig } from './navigation-options';
import navigationService from './navigation-service';
import NavTabStack from './NavTabStack';
import { LoginStack } from './stacks';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer ref={navigationService.navigationRef}>
      <Stack.Navigator
        screenOptions={noHeaderNavigationConfig}
        initialRouteName={Route.LOGIN_STACK}>
        <Stack.Screen
          name={Route.LOGIN_STACK}
          component={LoginStack}></Stack.Screen>
        <Stack.Screen name={Route.APP} component={NavTabStack}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
