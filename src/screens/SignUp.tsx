import React, { useState } from "react";
import { View, Text } from "react-native";

import {
  buttonSection,
  card,
  container,
  mb2,
  parent,
  titlePage,
  wrapperCard,
} from "../components/Styles";
import Button from "../components/Button";
import Input from "../components/Input";
import MainSection from "../components/MainSection";
import Link from "../components/Link";

export interface SignupProps {
  navigation?: any;
  email: string;
  password: string;
  passwordRepeat: string;
}

const SignIn: React.FC<SignupProps> = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  return (
    <View style={parent}>
      <MainSection titlePosition="20%" />
      <View style={buttonSection}>
        <View style={wrapperCard}>
          <View style={container}>
            <Text style={[titlePage, mb2]}>Sign Up</Text>
            <View style={[card, mb2]}>
              <Input
                value={email}
                onChangeText={setEmail}
                placeholder="Please input your email"
                mb={10}
              />
              <Input
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                placeholder="Please input your password"
                mb={10}
              />
              <Input
                value={passwordRepeat}
                onChangeText={setPasswordRepeat}
                secureTextEntry
                placeholder="Please repeat your password"
                mb={20}
              />
              <Button text="Sign Up" isPrimary />
              <Link
                onPress={() => navigation.navigate("SignIn")}
                value="Already have an account?"
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SignIn;
