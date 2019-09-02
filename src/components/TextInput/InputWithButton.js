import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  TextInput,
  TouchableHighlight,
  Keyboard,
} from 'react-native';

import styles from './styles';

const InputWithButton = ({
  buttonText,
  onPress,
  editable,
  keyboardType,
  defaultValue,
}) => (
  <View style={styles.container}>
    <TouchableHighlight
      underlayColor="#aff"
      style={styles.buttonContainer}
      onPress={onPress}>
      <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableHighlight>
    <View style={styles.border} />
    <TextInput
      style={{...styles.input, ...(editable || styles.disabled)}}
      value={defaultValue}
      keyboardType={keyboardType}
    />
  </View>
);

InputWithButton.propTypes = {
  buttonText: PropTypes.string,
  defaultValue: PropTypes.string,
  keyboardType: PropTypes.string,
  onPress: PropTypes.func,
  editable: PropTypes.bool,
};

InputWithButton.defaultProps = {
  editable: true,
  defaultValue: '',
};

export default InputWithButton;
