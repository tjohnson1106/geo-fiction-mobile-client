import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class Search extends Component {
  state = {};
  render() {
    return (
      <View style={styles.root}>
        <Text>Search Component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {}
});

export default Search;
