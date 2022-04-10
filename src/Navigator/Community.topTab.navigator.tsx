import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import {
  CommunityInterestMainScreen,
  CommunityInterestMainScreenProps,
  CommunityVoteMainScreen,
  CommunityVoteMainScreenProps,
} from "@Screen/Community";

const CommunityTopTab = createMaterialTopTabNavigator();

export function CommunityTopTabNavigator() {
  return (
    <CommunityTopTab.Navigator>
      <CommunityTopTab.Screen
        name="CommunityInterestMainScreen"
        component={CommunityInterestMainScreen}
        options={{
          title: "관심사",
        }}
      />
      <CommunityTopTab.Screen
        name="CommunityVoteMainScreen"
        component={CommunityVoteMainScreen}
        options={{
          title: "자유",
        }}
      />
    </CommunityTopTab.Navigator>
  );
}

export type CommunityTopTabProps = {
  CommunityInterestMainScreen: CommunityInterestMainScreenProps;
  CommunityVoteMainScreen: CommunityVoteMainScreenProps;
};
