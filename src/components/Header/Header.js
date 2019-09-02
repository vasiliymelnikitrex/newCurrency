import React from 'react';
import PropTypes from 'prop-types';
import {View, Image, TouchableOpacity} from 'react-native';
import gear from '../../images/gear.png';

import styles from './styles';

const Header = ({onPress}) => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.wrapper} onPress={onPress}>
      <Image source={gear} style={styles.img} resizeMode="contain" />
    </TouchableOpacity>
  </View>
);

Header.propTypes = {
  onPress: PropTypes.func,
};

export default Header;
