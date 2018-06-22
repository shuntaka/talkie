import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Home from './Home';
import CameraRoll from './CameraRoll';

export default createMaterialBottomTabNavigator(
  {
    Home: { screen: Home },
    CameraRoll: { screen: CameraRoll }
  },
  {
    initialRouteName: 'Home',
    activeTintColor: '#f0edf6',
    inactiveTintColor: '#3e2465',
    barStyle: { backgroundColor: '#694fad' }
  }
);
