/**
 * Created by xiaoconglau on 29/03/2017.
 */
import { connect } from 'react-redux'
import HomeView from './HomeView'
import { StyleSheet, View, Text, Alert } from "react-native";

const mapStateToProps = (state, ownProps) => {
  return {
    newsStore: state.newsStore
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  onTapAdd: () => {
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
