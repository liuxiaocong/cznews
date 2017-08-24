/**
 * Created by xiaoconglau on 29/03/2017.
 */
import { connect } from 'react-redux'
import NewsView from './NewsView'
import { StyleSheet, View, Text, Alert } from "react-native";
import React, { PureComponent } from 'react';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
var DOMParser = require('react-native-html-parser').DOMParser;
const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    newsStore: state.newsStore
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  onTapAdd: () => {

  }
});

const NewsComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsView)

export default NewsComponent
