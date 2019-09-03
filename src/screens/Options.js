import React from 'react';
import PropTypes from 'prop-types';
import {StatusBar, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import ListItem from '../components/List/ListItem';
import Divider from '../components/List/Divider';

const Options = ({navigation}) => {
  const handleThemePress = () =>
    navigation.navigate('Themes', {title: 'Themes'});
  const handleSitePress = () => null;

  return (
    <ScrollView>
      <StatusBar translucent={false} barStyle="default" />
      <ListItem
        text="Themes"
        onPress={handleThemePress}
        customIcon={<Icon name="arrow-right" color="#c3d4dd" size={22.5} />}
      />
      <Divider />
      <ListItem
        text="Fixer.io"
        onPress={handleSitePress}
        customIcon={<Icon name="link" color="#c3d4dd" size={25} />}
      />
      <Divider />
    </ScrollView>
  );
};

Options.propTypes = {
  navigation: PropTypes.object,
};

export default Options;
