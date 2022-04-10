import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeMainScreen, HomeMainScreenProps } from "@Screen/Home";

export const HomeStack = createNativeStackNavigator<HomeStackProps>();

export function HomeStackNavigator() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name={"HomeMainScreen"} component={HomeMainScreen} />
    </HomeStack.Navigator>
  );
}

export type HomeStackProps = {
  HomeMainScreen: HomeMainScreenProps;
};
