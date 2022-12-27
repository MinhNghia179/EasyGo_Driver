import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import { Route } from '../constants/constant';
import { Colors } from '../styles/colors';
import IconSizes from '../styles/icon-size';
import { HomeStack } from './stacks';

const Tab = createMaterialBottomTabNavigator();

const NavTabStack = () => {
  return (
    <Tab.Navigator
      labeled={true}
      shifting={false}
      activeColor={Colors.Green800}
      inactiveColor={Colors.Grey400}
      barStyle={{
        backgroundColor: Colors.White,
        elevation: 2,
        borderTopColor: Colors.Grey400,
        borderTopWidth: 0.5,
      }}
      initialRouteName={Route.HOME_STACK}>
      <Tab.Screen
        name={Route.HOME_STACK}
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: Colors.Text.Primary,
          tabBarIcon: props => <Icon name="home" size={IconSizes.small} />,
        }}></Tab.Screen>

      <Tab.Screen
        name={Route.ACCOUNT_STACK}
        component={() => <></>}
        options={{
          tabBarLabel: 'Account',
          tabBarColor: Colors.Text.Primary,
          tabBarIcon: props => <Icon name="book" size={IconSizes.small} />,
        }}></Tab.Screen>
    </Tab.Navigator>
  );
};

export default NavTabStack;
