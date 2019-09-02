/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StatusBar, KeyboardAvoidingView} from 'react-native';

import Container from '../components/Container/Container';
import Header from '../components/Header/Header';
import Logo from '../components/Logo/Logo';
import InputWithButton from '../components/TextInput/InputWithButton';
import ClearButton from '../components/Button/Button';
import LastConverted from '../components/Text/LastConverted';
import {CURRENCIES} from '../constants';

const Home = () => {
  const handlePressBaseCurrency = () => alert('base currency');
  const handlePressQuoteCurrency = () => alert('quote currency');
  const handlePressSettings = () => alert('settings');
  const handlePressReverse = () => alert('reverse');
  const handleChangeText = () => alert('change text');

  return (
    <Container>
      <StatusBar translucent={false} barStyle="default" />
      <Header onPress={handlePressSettings} />
      <KeyboardAvoidingView behavior="height">
        <Logo />
        <InputWithButton
          buttonText={CURRENCIES.TEMP_BASE_CURRENCY}
          onPress={handlePressBaseCurrency}
          onChangeText={handleChangeText}
          defaultValue={CURRENCIES.TEMP_BASE_PRICE}
          keyboardType="numeric"
        />
        <InputWithButton
          buttonText={CURRENCIES.TEMP_QUOTE_CURRENCY}
          onPress={handlePressQuoteCurrency}
          editable={false}
          value={CURRENCIES.TEMP_QUOTE_PRICE}
        />
        <LastConverted
          base={CURRENCIES.TEMP_BASE_CURRENCY}
          quote={CURRENCIES.TEMP_QUOTE_CURRENCY}
          date={CURRENCIES.TEMP_CONVERSION_DATE}
          conversionRate={CURRENCIES.TEMP_CONVERSION_RATE}
        />
        <ClearButton onPress={handlePressReverse} />
      </KeyboardAvoidingView>
    </Container>
  );
};

export default Home;
