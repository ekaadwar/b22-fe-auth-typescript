import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface ButtonProps {
  text: string;
  onPress?(): void;
  isPrimary?: boolean;
  mb?: number;
}

const Button: React.FC<ButtonProps> = ({ text, onPress, isPrimary, mb = 0 }) => {
  return (
    <>
      {isPrimary ? (
        <TouchableOpacity onPress={onPress} activeOpacity={0.8} style={[styles.btn, styles.btnPrimary, { marginBottom: mb }]}>
          <Text style={styles.btnTxtPrimary}>{text}</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={onPress} style={[styles.btn, styles.btnSecondary, { marginBottom: mb }]}>
          <Text style={styles.btnTxtSecond}>{text}</Text>
        </TouchableOpacity>
      )}
    </>
  );
};

export default Button;

const styles = StyleSheet.create({
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
  btnTxtPrimary: {
    color: "white",
  },
  btnTxtSecond: {
    color: "#11592B",
  },
});
