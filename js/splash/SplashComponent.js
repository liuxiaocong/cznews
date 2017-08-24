/**
 * Created by xiaoconglau on 29/03/2017.
 */
import { connect } from 'react-redux'
import SplashView from './SplashView'
import { StyleSheet, View, Text, Alert } from "react-native";
var DOMParser = require('react-native-html-parser').DOMParser;
const mapStateToProps = (state, ownProps) => {
  return {
    newsStore: state.newsStore,
    configStore: state.configStore
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  onTapAdd: () => {

  }
});

const SplashComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(SplashView)

export default SplashComponent
