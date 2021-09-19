import * as React from "react";
import { Image, View, StyleSheet, Text, TouchableOpacity } from "react-native";

import Button from "../components/Button";

const mainBg = require("../image/mainBackground.png");

export interface SigninProps {
  navigation?: any;
  email: string;
  password: string;
}

const SignIn: React.FC<SigninProps> = ({ navigation }) => {
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
        <View style={styles.wrapperCard}>
          <View style={styles.container}>
            <Text style={[styles.titlePage, styles.mb2]}>Sign In</Text>
            <View style={[styles.card, styles.mb2]}>
              <Button text="Sign In" />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SignIn;

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
    top: "20%",
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

  wrapperCard: {
    width: "100%",
    // backgroundColor: "coral",
    height: 500,
    position: "absolute",
    bottom: 0,
    justifyContent: "flex-end",
  },

  btn: {
    width: "100%",
    height: 40,
    borderRadius: 20,
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

  card: {
    backgroundColor: "white",
    paddingHorizontal: 25,
    paddingVertical: 40,
    borderRadius: 25,
    alignItems: "center",
    elevation: 1,
  },

  mb2: {
    marginBottom: 20,
  },

  txtBtnPrimary: {
    color: "white",
  },

  container: {
    paddingHorizontal: 25,
    width: "100%",
  },
});
