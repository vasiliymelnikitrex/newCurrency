/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Provider} from 'react-redux';

import store from './src/redux/store';
import Navigator from './src/config/routes';
import {AlertProvider} from './src/HOCs/Alert';

const App = () => (
  <Provider store={store}>
    <AlertProvider>
      <Navigator />
    </AlertProvider>
  </Provider>
);

export default App;
