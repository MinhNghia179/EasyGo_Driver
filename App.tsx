import React from 'react';
import { Provider } from 'react-redux';
import { AlertNotificationRoot } from 'react-native-alert-notification';
import AppNavigator from './app/navigation/app-navigation';
import rootState from './app/redux/root-store';

const App = () => {
  return (
    <Provider store={rootState}>
      <AlertNotificationRoot>
        <AppNavigator></AppNavigator>
      </AlertNotificationRoot>
    </Provider>
  );
};

export default App;
