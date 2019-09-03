import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {StatusBar, FlatList, View} from 'react-native';
import ListItem from '../components/List/ListItem';
import Separator from '../components/List/Separator';
import {COUNTRIES} from '../constants';

const CurrencyList = ({navigation}) => {
  const [cur, setCurrency] = useState('CAD');

  const handlePress = item => {
    setCurrency(item);
    navigation.goBack(); // null
  };

  return (
    <View>
      <StatusBar />
      <FlatList
        data={COUNTRIES}
        extraData={cur}
        renderItem={({item}, i) => (
          <ListItem text={item} selected={item === cur} onPress={handlePress} />
        )}
        keyExtractor={item => item}
        ItemSeparatorComponent={Separator}
      />
    </View>
  );
};

CurrencyList.propTypes = {
  navigation: PropTypes.object,
};

export default React.memo(CurrencyList);
