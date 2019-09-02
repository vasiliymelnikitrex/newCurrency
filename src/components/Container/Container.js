/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';

import styles from './styles';

const Container = ({children}) => (
  <View style={styles.container}>{children}</View>
);

Container.propTypes = {
  children: PropTypes.array,
};

export default Container;
