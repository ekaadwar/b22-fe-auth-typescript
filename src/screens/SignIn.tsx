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

export interface SigninProps {
  navigation?: any;
  email: string;
  password: string;
}

const SignIn: React.FC<SigninProps> = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={parent}>
      <MainSection titlePosition="20%" />
      <View style={buttonSection}>
        <View style={wrapperCard}>
          <View style={container}>
            <Text style={[titlePage, mb2]}>Sign In</Text>
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
              <Link
                onPress={() => navigation.navigate("ForgotPass")}
                value="Did you forget your password?"
                mb={10}
              />
              <Button
                text="Sign In"
                isPrimary
                mb={10}
                onPress={() => navigation.navigate("Home")}
              />
              <Link
                onPress={() => navigation.navigate("SignUp")}
                value="Create a new account?"
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SignIn;
