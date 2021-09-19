import * as React from "react";
import { Image, View, StyleSheet, Text, TouchableOpacity } from "react-native";

import { buttonSection, card, container, mb2, parent, titlePage, wrapperCard } from "../components/Styles";
import Button from "../components/Button";
import MainSection from "../components/MainSection";

const mainBg = require("../image/mainBackground.png");

export interface HomeProps {
  navigation: any;
}

export default class Welcome extends React.Component<HomeProps, any> {
  constructor(props: HomeProps) {
    super(props);
  }

  render() {
    return (
      <View style={parent}>
        <MainSection titlePosition="35%" />
        <View style={buttonSection}>
          <View style={styles.titlepageWrapper}>
            <Text style={titlePage}>Welcome</Text>
          </View>
          <View style={container}>
            <View style={styles.wrapperButton}>
              <Button text={"Sign In"} isPrimary mb={10} onPress={() => this.props.navigation.navigate("SignIn")} />
              <Button text={"Sign Up"} onPress={() => this.props.navigation.navigate("SignUp")} />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titlepageWrapper: {
    position: "absolute",
    width: "100%",
    top: -72,
  },

  wrapperButton: {
    height: "100%",
    justifyContent: "center",
  },
});
