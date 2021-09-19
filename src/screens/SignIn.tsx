import * as React from "react";
import { View, Text } from "react-native";

import { buttonSection, card, container, mb2, parent, titlePage, wrapperCard } from "../components/Styles";
import Button from "../components/Button";
import MainSection from "../components/MainSection";

export interface SigninProps {
  navigation?: any;
  email: string;
  password: string;
}

const SignIn: React.FC<SigninProps> = ({ navigation }) => {
  return (
    <View style={parent}>
      <MainSection titlePosition="20%" />
      <View style={buttonSection}>
        <View style={wrapperCard}>
          <View style={container}>
            <Text style={[titlePage, mb2]}>Sign In</Text>
            <View style={[card, mb2]}>
              <Button text="Sign In" />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SignIn;
