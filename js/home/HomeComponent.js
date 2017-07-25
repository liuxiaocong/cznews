/**
 * Created by xiaoconglau on 29/03/2017.
 */
import { connect } from 'react-redux'
import HomeView from './HomeView'
import { StyleSheet, View, Text, Alert } from "react-native";
var DOMParser = require('react-native-html-parser').DOMParser;
const mapStateToProps = (state, ownProps) => {
  return {
    newsStore: state.newsStore
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  onTapAdd: () => {
    fetch('https://facebook.github.io/react-native/docs/network.html')
      .then(function(response) {
        return response.text()
      }).then(function(body) {
      let doc = new DOMParser().parseFromString(body);
      let pArray = doc.querySelect('div');
      console.log(body);
    })
      .catch((error) => {
        console.error(error);
      });

    dispatch({
      type: 'add'
    })
  }
});

const HomeComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeView)

export default HomeComponent
