import * as React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

export default class Welcome extends React.Component {
  render() {
    return (
      <View style={styles.parent}>
        <Text>Hello</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: "yellow",
  },
});
