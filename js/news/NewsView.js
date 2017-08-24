/**
 * Created by xiaoconglau on 25/07/2017.
 */
import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Alert,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { PureComponent } from 'react';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
const commonStyles = require('../style/commonStyles');
class NewsView extends React.Component {

  render() {
    return (
      <View style={[commonStyles.wrapper]}>
        <Text>Tab:{JSON.stringify(this.props)}</Text>
      </View>
    );
  }

  componentDidMount() {
    //this.props.navigation.setParams( { onTapSave: this.onTapSave.bind( this ) } );
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

export default NewsView;