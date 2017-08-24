/**
 * Created by xiaoconglau on 25/07/2017.
 */
import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
var reactMixin = require('react-mixin');
var TimerMixin = require('react-timer-mixin');
const commonStyles = require('../style/commonStyles');
const style = {
  splash_text: {
    alignSelf: 'center',
    textAlign: 'center'
  }
};
class SplashView extends React.Component {
  static
  navigationOptions = {
    header: null,
    title: 'Splash',
  };

  render() {
    return (
      <View style={[commonStyles.wrapper,
      {
        flexDirection:'row',
        flex:1
      }]}>
        <View style={{
          flexDirection:'column',
          flex: 1,
           alignSelf: 'center',
        }}>
          <Text style={style.splash_text}>SplashView</Text>
          <Text>{JSON.stringify(this.props.configStore) + "tab"}</Text>
        </View>
      </View>
    );
  }

  componentDidMount() {
    //this.props.navigation.setParams( { onTapSave: this.onTapSave.bind( this ) } );
    this.setTimeout(
      () => {
        this.props.navigation.navigate("Main");
      },
      1500
    );
  }

  //End Mounting

  //Updating
  componentWillReceiveProps(nextProps) {

  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  componentWillUpdate(nextProps, nextState) {

  }

  componentDidUpdate(prevProps, prevState) {

  }

  //End Updating

  //Un Mounting
  componentWillUnmount() {

  }

  //End Un Mounting
}
reactMixin(SplashView.prototype, TimerMixin);
export default SplashView;