/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {StatusBar, FlatList, View} from 'react-native';
import ListItem from '../components/List/ListItem';
import Separator from '../components/List/Separator';
import {COUNTRIES} from '../constants';

const CurrencyList = () => {
  const [cur, setCurrency] = useState('CAD');

  const handlePress = item => setCurrency(item);

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

export default React.memo(CurrencyList);
