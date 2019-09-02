import React from 'react';
import {View, Image} from 'react-native';

import check from '../../images/check.png';
import styles from './styles';

const Icon = () => (
  <View style={styles.icon}>
    <Image style={styles.iconImg} source={check} resizeMode="contain" />
  </View>
);

export default Icon;
