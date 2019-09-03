import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import Home from '../screens/Home';
import CurrencyList from '../screens/CurrencyList';
import Options from '../screens/Options';
import Themes from '../screens/Themes';

const Navigation = createStackNavigator({
  Home: {
    screen: Home,
  },
  CurrencyList: {
    screen: CurrencyList,
  },
  Options: {
    screen: Options,
  },
  Themes: {
    screen: Themes,
  },
});

export default createAppContainer(Navigation);
