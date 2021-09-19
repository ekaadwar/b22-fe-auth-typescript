import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface LinkProps {
  value: string;
  mb?: number;
  onPress?: any;
}

const Link: React.FC<LinkProps> = ({ mb, onPress, value }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.linkWrapper, { marginBottom: mb }]}
    >
      <Text style={styles.textLink}>{value}</Text>
    </TouchableOpacity>
  );
};

export default Link;

const styles = StyleSheet.create({
  linkWrapper: {
    height: 40,
    justifyContent: "center",
  },
  textLink: {
    color: "#11592B",
    fontWeight: "bold",
  },
});
