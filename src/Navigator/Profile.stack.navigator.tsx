import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProfileMainScreen, ProfileMainScreenProps } from "@Screen/Profile";

export type ProfileStackProps = {
  ProfileMainScreen: ProfileMainScreenProps;
};

export const ProfileStack = createNativeStackNavigator<ProfileStackProps>();

export function ProfileStackNavigator() {
  return (
    <ProfileStack.Navigator screenOptions={{ headerShown: false }}>
      <ProfileStack.Screen
        name={"ProfileMainScreen"}
        component={ProfileMainScreen}
      />
    </ProfileStack.Navigator>
  );
}
