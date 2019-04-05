import React, { Component } from "react";
import { View, Image, StyleSheet } from "react-native";

class Entry extends Component {
  state = {};
  render() {
    return (
      <View style={styles.root}>
        <Image source={require("../assets/img/landing.jpg")} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  }
});

export default Entry;
