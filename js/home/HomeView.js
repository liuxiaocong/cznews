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
const FirstRoute = () => <View style={[ commonStyles.wrapper, { backgroundColor: '#ff4081' } ]} />;
const SecondRoute = () => <View style={[ commonStyles.wrapper, { backgroundColor: '#673ab7' } ]} />;
import NewsComponent from '../news/NewsComponent';
class HomeView extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  _handleIndexChange = index => this.setState({ index });

  _renderHeader = props => <TabBar {...props} />;


  _renderScene = ({ route }) => {
    switch (route.key) {
      case '1':
        return  <NewsComponent type="1"/>;
      case '2':
        return  <NewsComponent type="2"/>;
      default:
        return null;
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      routes: [
        { key: '1', title: 'First' },
        { key: '2', title: 'Second' },
        { key: '3', title: 'Third' },
      ],
    };
  }

  render() {
    return (
      <TabViewAnimated
        style={commonStyles.wrapper}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onIndexChange={this._handleIndexChange}
      />
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

export default HomeView;