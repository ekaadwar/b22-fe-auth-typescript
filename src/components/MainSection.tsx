import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const mainBg = require("../image/mainBackground.png");

interface sectionProps {
  titlePosition?: string | number;
}

const MainSection: React.FC<sectionProps> = ({ titlePosition }) => {
  return (
    <View style={styles.backgroundWrapper}>
      <Image style={styles.mainBackground} source={mainBg}></Image>
      <View style={(styles.titleWrapper, { top: titlePosition })}>
        <View style={styles.container}>
          <Text style={styles.titleMain}>Pak Eka</Text>
          <Text style={styles.titleSub}>Jati Jepara Furniture</Text>
        </View>
      </View>
    </View>
  );
};

export default MainSection;

const styles = StyleSheet.create({
  backgroundWrapper: {
    backgroundColor: "grey",
    height: "75%",
    width: "100%",
    position: "relative",
    overflow: "hidden",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  titleWrapper: {
    position: "absolute",
    width: "100%",
  },
  mainBackground: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  container: {
    paddingHorizontal: 25,
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
});
