import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {StatusBar, Platform} from 'react-native';

import Home from '../screens/Home';
import CurrencyList from '../screens/CurrencyList';
import Options from '../screens/Options';
import Themes from '../screens/Themes';

const Navigation = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: () => null,
      },
    },
    CurrencyList: {
      screen: CurrencyList,
      navigationOptions: ({navigation}) => ({
        headerTitle: navigation.state.params.title,
      }),
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
    mode: 'modal',
    cardStyle: {
      ...(Platform.OS === 'ios' && {paddingTop: StatusBar.currentHeight}),
    },
  },
);

export default createAppContainer(Navigation);
