import React from "react";

import { StyleSheet, TextInput, View } from "react-native";

interface InputProps {
  placeholder?: string;
  secureTextEntry?: boolean;
  onChangeText?: any;
  value?: string;
  mb?: number;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  secureTextEntry,
  onChangeText,
  value,
  mb,
}) => {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      placeholder={placeholder}
      style={[styles.TextInput, { marginBottom: mb }]}
    />
  );
};

export default Input;

const styles = StyleSheet.create({
  TextInput: {
    borderBottomWidth: 2,
    borderColor: "#11592B",
    height: 40,
    width: "100%",
  },
});
