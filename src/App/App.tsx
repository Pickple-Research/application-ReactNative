import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AppStackNavigator } from "@Navigator/App.stack.navigator";

export default function App() {
  return (
    <NavigationContainer>
      <AppStackNavigator />
    </NavigationContainer>
  );
}
