import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProfileMainScreen, ProfileMainScreenProps } from "@Screen/Profile";

export const ProfileStack = createNativeStackNavigator<ProfileStackProps>();

export function ProfileStackNavigator() {
  return (
    <ProfileStack.Navigator screenOptions={{ headerTitle: "" }}>
      <ProfileStack.Screen
        name={"ProfileMainScreen"}
        component={ProfileMainScreen}
      />
    </ProfileStack.Navigator>
  );
}

export type ProfileStackProps = {
  ProfileMainScreen: ProfileMainScreenProps;
};
