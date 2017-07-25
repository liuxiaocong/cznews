/**
 * Created by xiaoconglau on 25/07/2017.
 */
import { TabNavigator, StackNavigator } from 'react-navigation';
import HomeCompoment from '../home/HomeComponent';

const AppNavigator = StackNavigator({
  Home: { screen: HomeCompoment },
});

export default AppNavigator