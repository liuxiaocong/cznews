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
const commonStyles = require('../style/commonStyles');
class TabView extends React.Component {
  static navigationOptions = {
    title: 'Tab1',
  };

  render() {
    return (
      <View style={[commonStyles.wrapper]}>
        <Text>Tab</Text>
      </View>
    );
  }

  componentDidMount() {
    //this.props.navigation.setParams( { onTapSave: this.onTapSave.bind( this ) } );
  }

  //End Mounting

  //Updating
  componentWillReceiveProps( nextProps ) {

  }

  shouldComponentUpdate( nextProps, nextState ) {
    return true;
  }

  componentWillUpdate( nextProps, nextState ) {

  }

  componentDidUpdate( prevProps, prevState ) {

  }

  //End Updating

  //Un Mounting
  componentWillUnmount() {

  }

  //End Un Mounting
}

export default TabView;