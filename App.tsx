import "react-native-gesture-handler";

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Welcome from "./src/screens/Welcome";

const Stack = createStackNavigator();

const Main = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <React.Fragment>
          <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
        </React.Fragment>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
