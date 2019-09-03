/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';

import Navigator from './src/config/routes';
import {AlertProvider} from './src/HOCs/Alert';

const App = () => (
  <AlertProvider>
    <Navigator />
  </AlertProvider>
);

export default App;
