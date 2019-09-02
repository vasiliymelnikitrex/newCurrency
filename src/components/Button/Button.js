import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import icon from '../../images/icon.png';
import styles from './styles';

const ClearButton = ({text, onPress}) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <View style={styles.wrapper}>
      <Image source={icon} style={styles.img} resizeMode="contain" />
      <Text style={styles.text}>{text}</Text>
    </View>
  </TouchableOpacity>
);

ClearButton.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
};

ClearButton.defaultProps = {
  text: 'Reverse Currencies',
};

export default ClearButton;
