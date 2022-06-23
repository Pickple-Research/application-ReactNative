import React from "react";
import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import {
  MypageScrappedResearchScreen,
  MypageScrappedResearchScreenProps,
} from "./Mypage.scrapped.research.screen";
import {
  MypageScrappedVoteScreen,
  MypageScrappedVoteScreenProps,
} from "./Mypage.scrapped.vote.screen";
import { H1 } from "src/StyledComponents/Text";
import { themeColors } from "src/Theme";

export type MypageScrappedScreenProps = {};

type MypageScrappedTopTabProps = {
  MypageScrappedResearchScreen: MypageScrappedResearchScreenProps;
  MypageScrappedVoteScreen: MypageScrappedVoteScreenProps;
};

const MypageScrappedTopTab =
  createMaterialTopTabNavigator<MypageScrappedTopTabProps>();

/**
 * 유저가 스크랩한 글(리서치, 투표글)을 보여주는 페이지입니다.
 * @author 현웅
 */
export function MypageScrappedScreen() {
  return (
    <MypageScrappedTopTab.Navigator backBehavior="none">
      <MypageScrappedTopTab.Screen
        name="MypageScrappedResearchScreen"
        component={MypageScrappedResearchScreen}
        options={({ route }) => ({
          tabBarLabel: ({ focused }) => (
            <TabBarLabel label="리서치" type="BLUE" focused={focused} />
          ),
          tabBarIndicatorStyle: styles.blueIndicator,
        })}
      />
      <MypageScrappedTopTab.Screen
        name="MypageScrappedVoteScreen"
        component={MypageScrappedVoteScreen}
        options={({ route }) => ({
          tabBarLabel: ({ focused }) => (
            <TabBarLabel label="투표글" type="PURPLE" focused={focused} />
          ),
          tabBarIndicatorStyle: styles.purpleIndicator,
        })}
      />
    </MypageScrappedTopTab.Navigator>
  );
}

function TabBarLabel({
  label,
  type,
  focused,
}: {
  label: string;
  type: "BLUE" | "PURPLE";
  focused: boolean;
}) {
  if (!focused) {
    return <TabBarLabel__Unfocused>{label}</TabBarLabel__Unfocused>;
  }
  if (type === "BLUE") {
    return <TabBarLable__Blue>{label}</TabBarLable__Blue>;
  }
  // type === "PURPLE"
  return <TabBarLabel__Purple>{label}</TabBarLabel__Purple>;
}

const TabBarLabel__Unfocused = styled(H1)`
  font-weight: bold;
  color: ${({ theme }) => theme.color.grey.mild};
`;

const TabBarLable__Blue = styled(TabBarLabel__Unfocused)`
  color: ${({ theme }) => theme.color.blue.text};
`;

const TabBarLabel__Purple = styled(TabBarLabel__Unfocused)`
  color: ${({ theme }) => theme.color.purple.text};
`;

const styles = StyleSheet.create({
  blueIndicator: { height: 3, backgroundColor: themeColors().blue.text },
  purpleIndicator: {
    height: 3,
    backgroundColor: themeColors().purple.text,
  },
});
