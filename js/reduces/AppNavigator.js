/**
 * Created by xiaoconglau on 25/07/2017.
 */
import { TabNavigator, StackNavigator } from 'react-navigation';
import HomeComponent from '../home/HomeComponent';
import TabCompoment from '../tab/TabComponent';
import SplashCompoment from '../splash/SplashComponent'
const MainCompoment = TabNavigator({
  Home: {
    screen: HomeComponent,
  },
  Tab: {
    screen: TabCompoment,
  },
}, {
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
});

const AppNavigator = StackNavigator({
    Main: { screen: MainCompoment },
    Splash: { screen: SplashCompoment }
  },
  {
    initialRouteName: 'Splash'
  }
);

export default AppNavigator