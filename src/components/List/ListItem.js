import React from 'react';
import PropTypes from 'prop-types';
import {Text, View, TouchableHighlight} from 'react-native';

import Icon from './Icon';
import styles from './styles';

const ListItem = ({text, onPress, selected, customIcon}) => {
  const handlePress = () => onPress(text);

  return (
    <TouchableHighlight onPress={handlePress} underlayColor="#c3d4dd">
      <View style={styles.row}>
        <Text style={styles.text}>{text}</Text>
        {selected && <Icon />}
        {customIcon}
      </View>
    </TouchableHighlight>
  );
};

ListItem.propTypes = {
  text: PropTypes.string,
  selected: PropTypes.bool,
  onPress: PropTypes.func,
  customIcon: PropTypes.element,
};

export default ListItem;
