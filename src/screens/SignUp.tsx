import * as React from "react";
import { Image, View, StyleSheet, Text, TouchableOpacity } from "react-native";

const mainBg = require("../image/mainBackground.png");

export interface HomeProps {
  navigation: any;
}

export default class SignUp extends React.Component<HomeProps, any> {
  constructor(props: HomeProps) {
    super(props);
  }

  render() {
    return (
      <View style={styles.parent}>
        <View style={styles.backgroundWrapper}>
          <Image style={styles.mainBackground} source={mainBg}></Image>
          <View style={styles.titleWrapper}>
            <View style={styles.container}>
              <Text style={styles.titleMain}>Pak Eka</Text>
              <Text style={styles.titleSub}>Jati Jepara Furniture</Text>
            </View>
          </View>
        </View>
        <View style={styles.buttonSection}>
          <View style={styles.titlepageWrapper}>
            <Text style={styles.titlePage}>SignUp</Text>
          </View>
          <View style={styles.container}>
            <View style={styles.wrapperButton}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate("SignIn")} style={[styles.btn, styles.btnPrimary, styles.mb2]}>
                <Text style={styles.txtBtnPrimary}>Sign In</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.props.navigation.navigate("SignUp")} style={[styles.btn, styles.btnSecondary]}>
                <Text>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },

  backgroundWrapper: {
    backgroundColor: "grey",
    height: "75%",
    width: "100%",
    position: "relative",
    overflow: "hidden",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },

  mainBackground: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },

  titleWrapper: {
    position: "absolute",
    top: "35%",
    width: "100%",
  },

  titleMain: {
    fontSize: 60,
    color: "white",
  },

  titleSub: {
    fontSize: 32,
    color: "white",
  },

  buttonSection: {
    position: "relative",
    width: "100%",
    flex: 1,
  },

  titlepageWrapper: {
    position: "absolute",
    width: "100%",
    top: -72,
  },

  titlePage: {
    fontSize: 32,
    color: "white",
    textAlign: "center",
  },

  wrapperButton: {
    height: "100%",
    justifyContent: "center",
  },

  btn: {
    width: "100%",
    height: 40,
    borderRadius: 20,
    backgroundColor: "#11592B",
    justifyContent: "center",
    alignItems: "center",
  },

  btnPrimary: {
    backgroundColor: "#11592B",
  },

  btnSecondary: {
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "#11592B",
  },

  mb2: {
    marginBottom: 10,
  },

  txtBtnPrimary: {
    color: "white",
  },

  container: {
    paddingHorizontal: 25,
    width: "100%",
  },
});
