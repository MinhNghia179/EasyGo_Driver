import React from 'react';
import {Provider} from 'react-redux';
import AppNavigator from './app/navigation/app-navigation';
import rootState from './app/redux/root-store';

const App = () => {
  return (
    <Provider store={rootState}>
      <AppNavigator></AppNavigator>
    </Provider>
  );
};

export default App;
