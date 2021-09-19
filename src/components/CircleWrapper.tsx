import React from "react";

import { Image, StyleSheet, View } from "react-native";
import { circle } from "./styles";

interface CircelProps {
  profilePhoto?: any;
}

const defaultImage: any = require("../image/profileDefault.jpg");

const CircleWrapper: React.FC<CircelProps> = ({
  profilePhoto = defaultImage,
}) => {
  return (
    <View style={styles.circle}>
      <Image style={styles.image} source={profilePhoto} />
    </View>
  );
};

export default CircleWrapper;

const diametre = 160;
const imageWidth = 412;
const imageHeight = 301;
const imageRatio = 0.5;

const styles = StyleSheet.create({
  circle: {
    height: diametre,
    width: diametre,
    borderRadius: diametre / 2,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    width: imageWidth * imageRatio,
    height: imageHeight * imageRatio,
  },
});
