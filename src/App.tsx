import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import Entry from "./screens/Entry";
import Search from "./components/Search";

interface Nav {
  currentScreen: string;
}

export default class App extends Component {
  // placeholder navigation using state until react navigation is implemented
  state = {
    currentScreen: "entry"
  };

  switchScreen = (currentScreen: Nav) => {
    this.setState({ currentScreen });
  };

  renderScreen = () => {
    if (this.state.currentScreen === "entry") {
      return <Entry switchScreen={this.switchScreen} />;
    } else if (this.state.currentScreen === "search") {
      return <Search />;
    }
  };

  render() {
    return <View style={styles.appRoot}>{this.renderScreen()}</View>;
  }
}

const styles = StyleSheet.create({
  appRoot: {
    flex: 1
  }
});
