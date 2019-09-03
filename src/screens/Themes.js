import React from 'react';
import {StatusBar, ScrollView, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import ListItem from '../components/List/ListItem';
import Divider from '../components/List/Divider';

const COLORS = [
  {id: 1, color: '#536A7B', text: 'Gray'},
  {id: 2, color: '#d57a66', text: 'Orange'},
  {id: 3, color: '#00bd9d', text: 'Blue'},
  {id: 4, color: '#9e768f', text: 'Purple'},
];

const Themes = () => {
  const handleThemePress = () => null;

  return (
    <ScrollView>
      <StatusBar translucent={false} barStyle="default" />
      {COLORS.map(({id, color, text}) => (
        <View key={id}>
          <ListItem
            text={text}
            onPress={handleThemePress}
            customIcon={<Icon name="circle" color={color} size={30} />}
          />
          <Divider />
        </View>
      ))}
    </ScrollView>
  );
};

export default Themes;
