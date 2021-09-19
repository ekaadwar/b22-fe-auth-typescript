import "react-native-gesture-handler";

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Welcome from "./src/screens/Welcome";
import SignIn from "./src/screens/SignIn";
import SignUp from "./src/screens/SignUp";
import ForgotPass from "./src/screens/ForgotPassword";
import Home from "./src/screens/Home";

const Stack = createStackNavigator();

const Main = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <React.Fragment>
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{ headerShown: false }}
          />
        </React.Fragment>
        <React.Fragment>
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{ headerShown: false }}
          />
        </React.Fragment>
        <React.Fragment>
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{ headerShown: false }}
          />
        </React.Fragment>
        <React.Fragment>
          <Stack.Screen
            name="ForgotPass"
            component={ForgotPass}
            options={{ headerShown: false }}
          />
        </React.Fragment>
        <React.Fragment>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
        </React.Fragment>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
