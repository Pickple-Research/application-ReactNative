import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AppBottomTabNavigator } from "../Navigator";

export default function App() {
  return (
    <NavigationContainer>
      <AppBottomTabNavigator />
    </NavigationContainer>
  );
}
