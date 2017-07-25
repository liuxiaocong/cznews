/**
 * Created by xiaoconglau on 25/07/2017.
 */
import React from "react";
import { StyleSheet, View, Text, Alert, Button } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1
  }
});

class App extends React.Component {

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>CZ news</Text>
      </View>
    )
  }
}

export default App;
