import { CommonActions } from '@react-navigation/native';
import React from 'react';
import { HomeStackRoute, LoginStackRoute, Route } from '../constants/constant';

const navigationRef: any = React.createRef();

// TODO: keep this method for any different navigation - CommonActions, StackActions, TabActions, DrawerActions
function dispatchActions(routeName: string, params: any) {
  return navigationRef.current?.dispatch(
    CommonActions.navigate({
      name: routeName,
      params,
    }),
  );
}

function navigate(routeName: string, params: any) {
  const navigation = _getNavigation(routeName, params);
  navigationRef.current?.navigate(navigation.route, navigation.params);
}

function getParam(route: any, paramName: string, defaultValue: any): any {
  return route.params && route.params[paramName]
    ? route.params[paramName]
    : defaultValue;
}

function _getNavigation(route: string, params: any) {
  let navParams = null;
  let navRoute = route;

  switch (route) {
    case HomeStackRoute.DASHBOARD:
      {
        navRoute = Route.APP;
        navParams = {
          screen: Route.HOME_STACK,
          params: {
            screen: route,
            params: params,
          },
        };
      }
      break;
    case LoginStackRoute.LOGIN: {
      navRoute = Route.APP;
      navParams = {
        screen: Route.LOGIN_STACK,
        params: {
          screen: route,
          params: params,
        },
      };
    }
    case LoginStackRoute.FORGOT_PASSWORD: {
      navRoute = Route.APP;
      navParams = {
        screen: Route.LOGIN_STACK,
        params: {
          screen: route,
          params: params,
        },
      };
    }
  }

  return { route: navRoute, params: navParams };
}

export default {
  navigationRef,
  navigate,
  getParam,
  dispatchActions,
};
