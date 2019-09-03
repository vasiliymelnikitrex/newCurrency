import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {StatusBar, Platform} from 'react-native';

import Home from '../screens/Home';
import CurrencyList from '../screens/CurrencyList';
import Options from '../screens/Options';
import Themes from '../screens/Themes';

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: () => null,
      },
    },
    Options: {
      screen: Options,
      navigationOptions: ({navigation}) => ({
        headerTitle: navigation.state.params.title,
      }),
    },
    Themes: {
      screen: Themes,
      navigationOptions: ({navigation}) => ({
        headerTitle: navigation.state.params.title,
      }),
    },
  },
  {
    headerMode: 'screen',
  },
);

const CurrencyListStack = createStackNavigator({
  CurrencyList: {
    screen: CurrencyList,
    navigationOptions: ({navigation}) => ({
      headerTitle: navigation.state.params.title,
    }),
  },
});

const Navigation = createStackNavigator(
  {
    Home: {
      screen: HomeStack,
    },
    CurrencyList: {
      screen: CurrencyListStack,
    },
  },
  {
    mode: 'modal',
    cardStyle: {
      ...(Platform.OS === 'ios' && {paddingTop: StatusBar.currentHeight}),
    },
    headerMode: 'none',
  },
);

export default createAppContainer(Navigation);
