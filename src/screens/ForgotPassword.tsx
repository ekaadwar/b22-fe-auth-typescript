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

const ForgotPassword: React.FC<SignupProps> = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  return (
    <View style={parent}>
      <MainSection titlePosition="20%" />
      <View style={buttonSection}>
        <View style={wrapperCard}>
          <View style={container}>
            <Text style={[titlePage, mb2]}>Forgot Password</Text>
            <View style={[card, mb2]}>
              <Input
                value={email}
                onChangeText={setEmail}
                placeholder="Please input your email"
                mb={20}
              />
              <Button text="Send reset code" isPrimary />
              <Link
                onPress={() => navigation.navigate("SignUp")}
                value="Create a new account??"
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ForgotPassword;
