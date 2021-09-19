import { NavigationContainer } from "@react-navigation/native";
import { setStatusBarBackgroundColor } from "expo-status-bar";
import React from "react";

import { StyleSheet, Text, View } from "react-native";
import Button from "../components/Button";
import CircleWrapper from "../components/CircleWrapper";
import { circle, container, parent } from "../components/Styles";

export interface HomeProps {
  navigation: any;
}

export default class Home extends React.Component<HomeProps, any> {
  constructor(props: HomeProps) {
    super(props);
  }
  render() {
    return (
      <View style={parent}>
        <View style={container}>
          <View style={styles.content}>
            <View style={circle(200, 5)}>
              <CircleWrapper />
            </View>
            <View style={styles.emailWrapper}>
              <Text style={styles.email}>user@mail.com</Text>
            </View>
            <Button
              text="Sign Out"
              isPrimary
              onPress={() => this.props.navigation.navigate("SignIn")}
            />
          </View>
        </View>
      </View>
    );
  }
}

const diametre = 200;

const styles = StyleSheet.create({
  content: {
    height: "100%",
    width: "100%",
    paddingVertical: 100,
    alignItems: "center",
  },

  circle: {
    height: diametre,
    width: diametre,
    borderRadius: diametre / 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "grey",
    borderWidth: 5,
    borderColor: "#11592B",
    overflow: "hidden",
  },

  email: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#11592B",
  },

  emailWrapper: {
    flex: 1,
    marginVertical: 50,
  },
});
