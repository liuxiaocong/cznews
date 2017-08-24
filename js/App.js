/**
 * Created by xiaoconglau on 25/07/2017.
 */
import React from "react";
import { StyleSheet, View, Text, Alert, Button } from "react-native";
import reducer from './reduces'
import { addNavigationHelpers } from 'react-navigation';
import AppNavigator from './reduces/AppNavigator'
import { Provider, connect } from 'react-redux'
import { createStore } from 'redux'

const store = createStore(reducer);

const AppWithNavigationState = connect(state => ({
  nav: state.navStore,
}))(({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })}/>
));

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    )
  }
}

export default App;
