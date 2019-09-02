import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';

import styles from './styles';

const TextInput = () => {
  return (
    <TouchableHighlight onPress={null} underlayColor="#fff">
      <View style={styles.button}>
        <Text>Button</Text>
      </View>
    </TouchableHighlight>
  );
};

export default TextInput;
